// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCategoriesResponseBodyCategory } from "./GetCategoriesResponseBodyCategory";
import { GetCategoriesResponseBodySubCategories } from "./GetCategoriesResponseBodySubCategories";


export class GetCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the category.
   */
  category?: GetCategoriesResponseBodyCategory;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The subcategories in the category.
   */
  subCategories?: GetCategoriesResponseBodySubCategories;
  /**
   * @remarks
   * The total number of subcategories.
   * 
   * @example
   * 100
   */
  subTotal?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
      subCategories: 'SubCategories',
      subTotal: 'SubTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: GetCategoriesResponseBodyCategory,
      requestId: 'string',
      subCategories: GetCategoriesResponseBodySubCategories,
      subTotal: 'number',
    };
  }

  validate() {
    if(this.category && typeof (this.category as any).validate === 'function') {
      (this.category as any).validate();
    }
    if(this.subCategories && typeof (this.subCategories as any).validate === 'function') {
      (this.subCategories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

