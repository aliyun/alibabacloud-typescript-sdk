// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 50
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
   * The category level. Valid values:
   * - **0**: level-1 category.
   * - **1**: level-2 category.
   * - **2**: level-3 category.
   * 
   * @example
   * 1
   */
  level?: number;
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
   * @remarks
   * The category ID.
   * 
   * @example
   * 55
   */
  categoryId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * sea
   */
  categoryName?: string;
  /**
   * @remarks
   * The category level.
   * 
   * @example
   * 2
   */
  level?: number;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * 50
   */
  parentId?: number;
  /**
   * @remarks
   * The total number of subcategories.
   * 
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
  /**
   * @remarks
   * The category details.
   */
  category?: GetAssetCategoryResponseBodyCategory;
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
   * The list of subcategories.
   */
  subCategories?: GetAssetCategoryResponseBodySubCategories[];
  /**
   * @remarks
   * The number of subcategories.
   * 
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

