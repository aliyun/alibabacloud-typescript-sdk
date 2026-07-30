// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using the following methods:
   * 
   * - When you create a category by calling the CreateAssetCategory operation, the category ID is the value of CategoryId in the response.
   * 
   * - When you query the category list by calling the ListAssetCategories operation, the category ID is the value of CategoryId in the corresponding entry in the response.
   * 
   * @example
   * scenery
   */
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

