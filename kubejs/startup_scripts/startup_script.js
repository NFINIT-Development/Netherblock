// priority: 5
// By: knoxhack for NFINIT Labs

//Items Registry
onEvent('item.registry', event => {

})


//Blocks Modify
onEvent('block.modification', event => {
    event.modify('minecraft:netherrack', block => {
        block.material = 'wood'
        block.requiresTool = false

    })
})

//Items Modify
onEvent('item.modification', event => {
})


// Item Tags
onEvent('tags.items', event => {
  event.add('forge:rods', 'stoneutilities:stone_stick')
  event.add('forge:rods/wooden', 'stoneutilities:stone_stick')
  
})