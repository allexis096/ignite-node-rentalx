import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({
    name,
    description,
  });

  return response.status(201).send();
});

categoriesRoutes.get('/', (_, response) => {
  const index = categoriesRepository.index();

  return response.json(index);
});

export { categoriesRoutes };
