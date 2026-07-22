// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetCategoriesResponseBodyCategories extends $dara.Model {
  /**
   * @example
   * 45
   */
  categoryId?: number;
  /**
   * @example
   * scenery
   */
  categoryName?: string;
  /**
   * @example
   * 1
   */
  level?: string;
  /**
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
  categories?: ListAssetCategoriesResponseBodyCategories[];
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  total?: string;
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
      total: 'string',
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

