from random import choice

def reset_balls(balls):
	for i in range(1,16):
		balls.append(i)

on_table = []
reset_balls(on_table)
pocketed = []
previous = 0
score = 1

high_score = 0
high_score_pocketed = []
high_score_changed = 0

while high_score_changed < 1000000:
	try:
		current = choice(on_table)
		on_table.remove(current)
		if current > previous:
			score = score * (current - previous)
		else:
			score = score // current
		pocketed.append(current)
		previous = current
		if score == 0:
			score = 1
	except:
		print('{} => score: {}'.format(pocketed, score))
		high_score_changed += 1
		if score > high_score:
			high_score = score
			high_score_pocketed = pocketed
			print('\t^^^ NEW HIGH SCORE: {} ^^^'.format(high_score))
			high_score_changed = 0
		reset_balls(on_table)
		pocketed = []
		previous = 0
		score = 1
print('\tFINAL HIGH SCORE: {}'.format(high_score))
print('\tPOCKETING: {}'.format(high_score_pocketed))
