import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
  async index(): Promise<Category[]> {
    const { categories } = this;

    return categories;
  }
  async store({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    const updatedCategory = {
      ...category,
      name,
      description,
    };

    this.categories.push(updatedCategory);
  }
}

export { CategoriesRepositoryInMemory };
