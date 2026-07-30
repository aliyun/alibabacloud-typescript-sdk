// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAssetCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the value by using one of the following methods:
   * 
   * - When you create a category by calling the CreateAssetCategory operation, the category ID is the value of CategoryId in the response.
   * - When you query categories by calling the ListAssetCategories operation, the category ID is the value of CategoryId in the corresponding entry in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 45
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

