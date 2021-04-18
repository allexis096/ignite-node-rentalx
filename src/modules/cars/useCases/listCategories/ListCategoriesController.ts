import { Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(_: unknown, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const index = await listCategoriesUseCase.execute();

    return response.json(index);
  }
}

export { ListCategoriesController };
