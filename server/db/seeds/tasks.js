/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, name: 'wash dishes', details: 'kitchen', completed: true },
    { id: 2, name: 'vacuum', details: 'carpet', completed: true },
    { id: 3, name: 'study', details: 'full stack apps', completed: false },
  ])
}
