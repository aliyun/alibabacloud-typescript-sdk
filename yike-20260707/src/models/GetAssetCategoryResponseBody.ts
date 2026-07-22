// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @example
   * 50
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
  level?: number;
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
      level: 'number',
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

export class GetAssetCategoryResponseBodySubCategories extends $dara.Model {
  /**
   * @example
   * 55
   */
  categoryId?: number;
  /**
   * @example
   * sea
   */
  categoryName?: string;
  /**
   * @example
   * 2
   */
  level?: number;
  /**
   * @example
   * 50
   */
  parentId?: number;
  /**
   * @example
   * 0
   */
  subTotal?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      level: 'Level',
      parentId: 'ParentId',
      subTotal: 'SubTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryName: 'string',
      level: 'number',
      parentId: 'number',
      subTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetCategoryResponseBody extends $dara.Model {
  category?: GetAssetCategoryResponseBodyCategory;
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  subCategories?: GetAssetCategoryResponseBodySubCategories[];
  /**
   * @example
   * 5
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
      category: GetAssetCategoryResponseBodyCategory,
      requestId: 'string',
      subCategories: { 'type': 'array', 'itemType': GetAssetCategoryResponseBodySubCategories },
      subTotal: 'number',
    };
  }

  validate() {
    if(this.category && typeof (this.category as any).validate === 'function') {
      (this.category as any).validate();
    }
    if(Array.isArray(this.subCategories)) {
      $dara.Model.validateArray(this.subCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

