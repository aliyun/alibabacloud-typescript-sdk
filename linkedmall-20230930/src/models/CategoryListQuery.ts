// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryListQuery extends $dara.Model {
  /**
   * @remarks
   * Collection of category IDs
   */
  categoryIds?: number[];
  /**
   * @remarks
   * Parent category ID
   * 
   * @example
   * 5200001
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'categoryIds',
      parentCategoryId: 'parentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      parentCategoryId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

