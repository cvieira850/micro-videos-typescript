import { Category } from './category'

describe('Category Unit Tests', () => {
    it('Constructor of category', () => {
      const props = {
        name:'Movie', 
        description: 'description',
        is_active: true,
        created_at: new Date()
      }

      const category = new Category(props)

      expect(category.name).toBe('Movie')
      expect(category.description).toBe('description')
      expect(category.is_active).toBe(true)
      expect(category.created_at).toBeInstanceOf(Date)
    })
})