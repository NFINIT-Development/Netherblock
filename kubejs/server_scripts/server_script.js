// priority: 5
// By: knoxhack for NFINIT Labs

// Recipes
onEvent('recipes', event => {

event.shapeless('2x minecraft:cobblestone', ['minecraft:basalt', 'minecraft:basalt'])
event.shapeless('2x minecraft:cobblestone', ['minecraft:netherrack', 'minecraft:netherrack'])
event.shapeless('2x minecraft:cobblestone', ['minecraft:blackstone', 'minecraft:blackstone'])
event.shapeless('exnihilosequentia:porcelain_clay', ['minecraft:clay_ball', 'exnihilosequentia:dust'])

event.shapeless('2x biomesoplenty:hellbark_sapling', ['biomesoplenty:hellbark_log', 'biomesoplenty:hellbark_log'])
event.shapeless('2x minecraft:oak_sapling', ['minecraft:oak_log', 'minecraft:oak_log'])



event.stonecutting('minecraft:oak_log', 'biomesoplenty:hellbark_log')

event.remove({output: 'quark:cobblestone_bricks'})
event.remove({output: 'exnihilosequentia:stone_crook'})
event.remove({output: 'exnihilosequentia:porcelain_clay'})



// Shaped

event.shaped('exnihilosequentia:stone_crook', [
    'SS ',
    ' S ',
    ' S '
], {
    S: 'minecraft:cobblestone'
})



event.remove({output: 'betterfurnacesreforged:raw_ore_processing_upgrade'})
event.shaped('betterfurnacesreforged:raw_ore_processing_upgrade', [
    'NON',
    'MSJ',
    'NKN'
], {
    S: 'minecraft:raw_iron_block',
    N: 'betterfurnacesreforged:netherhot_conductor_block',
    O: 'minecraft:blaze_powder',
    M: '#forge:dusts/certus_quartz',
    J: 'ae2:sky_dust',
    K: '#forge:dusts/fluix'
})

//Shears

//Wooden
event.remove({output: 'assortedtools:wood_shears'})
event.shaped('assortedtools:wood_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#minecraft:planks'
})

//Stone Shears
event.remove({output: 'assortedtools:stone_shears'})
event.shaped('assortedtools:stone_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:cobblestone'
})

//Stone Shears
event.remove({output: 'assortedtools:aluminum_shears'})
event.shaped('assortedtools:aluminum_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:ingots/aluminum'
})

//Stone Shears
event.remove({output: 'assortedtools:tin_shears'})
event.shaped('assortedtools:tin_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:ingots/tin'
})

//Stone Shears
event.remove({output: 'assortedtools:copper_shears'})
event.shaped('assortedtools:copper_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:ingots/copper'
})


  function fluidItem(fluid, input, result) {
    event.custom({
      type: `exnihilosequentia:fluid_item`,
      fluid: Fluid.of(fluid).toJson(),
      input: Ingredient.of(input).toJson(),
      result: Item.of(result).toResultJson()
    })
  }

  // Fluid Item Transformation
  fluidItem(`minecraft:lava`,`minecraft:netherrack`,`minecraft:crimson_stem`)
  fluidItem(`minecraft:lava`,'minecraft:soul_sand','biomesoplenty:hellbark_log')
  fluidItem(`minecraft:lava`,'minecraft:dirt','minecraft:oak_log')



})
