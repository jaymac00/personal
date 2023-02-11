import sys
import random

maps = {
	'beginner': [
		'monkey meadow', 'tree stump', 'town center', 'one two tree', 'scrapyard', 'the cabin',
		'resort', 'skates', 'lotus island', 'candy falls', 'winter park', 'carved',
		'park path', 'alpine run', 'frozen over', 'in the loop', 'cubism', 'four circles',
		'hedge', 'end of the road', 'logs'
	],
	'intermediate': [
		'covered garden', 'quarry', 'quiet street', 'bloonarius prime', 'balance', 'encrypted',
		'bazaar', 'Adora\'s temple', 'spring spring', 'kartsndarts', 'moon landing', 'haunted',
		'downstream', 'firing range', 'cracked', 'streambed', 'chutes', 'rake',
		'spice islands'
	],
	'advanced': [
		'midnight mansion', 'sunken columns', 'x factor', 'mesa', 'geared', 'spillway',
		'cargo', 'Pat\'s pond', 'peninsula', 'high finance', 'another brick', 'off the coast',
		'cornfield', 'underground'
	],
	'expert': [
		'sanctuary', 'ravine', 'flooded valley', 'infernal', 'bloody puddles', 'workshop',
		'quad', 'dark castle', 'muddy puddles', '#ouch'
	]
}

modes = {
	'easy': ['standard easy', 'primary only', 'deflation'],
	'medium': ['standard medium', 'military only', 'apopalypse', 'reverse'],
	'hard': ['standard hard', 'magic monkeys only', 'double hp MOABs', 'half cash', 'alternate bloons rounds', 'impoppable', 'CHIMPS']
}

map = 'all'
mode = 'all'

map_args = {
	'-b': 'beginner', '-i': 'intermediate', '-a': 'advanced', '-x': 'expert'
}

mode_args = {
	'-e': 'easy', '-m': 'medium', '-h': 'hard'
}

if len(sys.argv) > 1:
	for arg in sys.argv:
		if arg == 'ranbloons.py':
			pass
		elif arg in map_args.keys():
			map = map_args[arg]
		elif arg in mode_args.keys():
			mode = mode_args[arg]
		elif arg == '--help':
			print('accepted map difficulty args: {}'.format(map_args))
			print('accepted mode difficulty args: {}'.format(mode_args))
			sys.exit()
		else:
			print('arg {} not recognized; use --help for a list of args'.format(arg))
			break

if map == 'all':
	map = list(maps.keys())[random.randrange(len(list(maps.keys())))]
if mode == 'all':
	mode = list(modes.keys())[random.randrange(len(list(modes.keys())))]

chosen_map = maps[map]
chosen_map = chosen_map[random.randrange(len(chosen_map))]
chosen_mode = modes[mode]
chosen_mode = chosen_mode[random.randrange(len(chosen_mode))]

print('Time to play {} on {}!'.format(chosen_mode, chosen_map))
