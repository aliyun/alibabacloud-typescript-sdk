// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetCategoriesResponseBodyCategories extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 45
   */
  categoryId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * scenery
   */
  categoryName?: string;
  /**
   * @remarks
   * The category level. A level-1 category has a value of 0, a level-2 category has a value of 1, and a level-3 category has a value of 2.
   * 
   * @example
   * 1
   */
  level?: string;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * 10
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      level: 'Level',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryName: 'string',
      level: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of categories on the current page.
   */
  categories?: ListAssetCategoriesResponseBodyCategories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of categories.
   * 
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': ListAssetCategoriesResponseBodyCategories },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

