import { Category, CategoryProperties } from './category'

import {validate} from 'uuid'
describe('Category Unit Tests', () => {
    it('Constructor of category', () => {
      const props = {
        name:'Movie', 
        description: 'description',
        is_active: true,
        created_at: new Date()
      }

      let category = new Category(props)


      expect(category.props).toEqual({
        name: 'Movie',
        description: 'description',
        is_active: true,
        created_at: expect.any(Date)
      })

      category = new Category({name: 'Movie 2', description: 'description 2', is_active: false})

      expect(category.props).toEqual({
        name: 'Movie 2',
        description: 'description 2',
        is_active: false,
        created_at: expect.any(Date)
      })

      category = new Category({name: 'Movie 3', description: 'description 3'})
      
      expect(category.props).toEqual({
        name: 'Movie 3',
        description: 'description 3',
        is_active: true,
        created_at: expect.any(Date)
      })

      category = new Category({name: 'Movie 3', is_active: false})
      
      expect(category.props).toEqual({
        name: 'Movie 3',
        description: null,
        is_active: false,
        created_at: expect.any(Date)
      })

      category = new Category({name: 'Movie 4', created_at: new Date()})
      
      expect(category.props).toEqual({
        name: 'Movie 4',
        description: null,
        is_active: true,
        created_at: expect.any(Date)
      })
    })

    it('id field', () => {
      type CategoryData = { props: CategoryProperties, id?: string }
      const data: CategoryData[] = [
        { props: {name: 'Movie'} },
        { props: {name: 'Movie'}, id: null},
        { props: {name: 'Movie'}, id: undefined},
        { props: {name: 'Movie'}, id: 'ea0c656f-4c61-4d1e-ac75-de07bee52731'},
      ]

      data.forEach( i => {
        const  category = new Category(i.props, i.id)
        expect(category.id).toBeDefined()
        expect(category.id).toBeTruthy()
        expect(validate(category.id)).toBeTruthy()
      })

    })

    it('Getters of name field', () => {
      const category = new Category({name: 'Movie'})

      expect(category.name).toBe('Movie')
    })

    it('Getters of description field', () => {
      let category = new Category({name: 'Movie', description: 'description'})

      expect(category.description).toBe('description')

      category = new Category({name: 'Movie'})

      category['description'] = 'description 2'

      expect(category.description).toBe('description 2')

      category = new Category({name: 'Movie'})

      category["description"] = undefined

      expect(category.description).toBeNull()
    })

    it('Getters of is_active field', () => {
      let category = new Category({name: 'Movie', is_active: true})

      expect(category.is_active).toBeTruthy()

      category = new Category({name: 'Movie'})

      category['is_active'] = false

      expect(category.is_active).toBeFalsy()
    })

    it('Getters of created_at field', () => {
      let category = new Category({name: 'Movie', created_at: new Date()})

      expect(category.created_at).toBeInstanceOf(Date)

      category = new Category({name: 'Movie'})

      expect(category.created_at).toBeInstanceOf(Date)
    })
})