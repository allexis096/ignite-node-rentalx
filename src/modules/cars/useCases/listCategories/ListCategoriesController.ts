import { Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(response: Response): Response {
    const index = this.listCategoriesUseCase.execute();

    return response.json(index);
  }
}

export { ListCategoriesController };
