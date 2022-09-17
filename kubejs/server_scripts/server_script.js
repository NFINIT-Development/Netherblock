// priority: 5
// By: knoxhack for NFINIT Labs

// Recipes
onEvent('recipes', event => {

event.shapeless('2x minecraft:cobblestone', ['minecraft:basalt', 'minecraft:basalt'])
event.shapeless('2x minecraft:cobblestone', ['minecraft:netherrack', 'minecraft:netherrack'])
event.shapeless('2x minecraft:cobblestone', ['minecraft:blackstone', 'minecraft:blackstone'])
event.shapeless('exnihilosequentia:porcelain_clay', ['minecraft:clay_ball', 'exnihilosequentia:dust'])

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
})

