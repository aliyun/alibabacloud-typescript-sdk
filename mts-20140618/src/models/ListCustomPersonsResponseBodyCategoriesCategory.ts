// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomPersonsResponseBodyCategoriesCategoryPersons } from "./ListCustomPersonsResponseBodyCategoriesCategoryPersons";


export class ListCustomPersonsResponseBodyCategoriesCategory extends $dara.Model {
  /**
   * @remarks
   * The description of the figure library.
   * 
   * @example
   * CategoryDescription-****
   */
  categoryDescription?: string;
  /**
   * @remarks
   * The ID of the figure library.
   * 
   * @example
   * CategoryId-****
   */
  categoryId?: string;
  /**
   * @remarks
   * The name of the figure library.
   * 
   * @example
   * CategoryName-****
   */
  categoryName?: string;
  /**
   * @remarks
   * The array of the figures.
   */
  persons?: ListCustomPersonsResponseBodyCategoriesCategoryPersons;
  static names(): { [key: string]: string } {
    return {
      categoryDescription: 'CategoryDescription',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      persons: 'Persons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryDescription: 'string',
      categoryId: 'string',
      categoryName: 'string',
      persons: ListCustomPersonsResponseBodyCategoriesCategoryPersons,
    };
  }

  validate() {
    if(this.persons && typeof (this.persons as any).validate === 'function') {
      (this.persons as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

