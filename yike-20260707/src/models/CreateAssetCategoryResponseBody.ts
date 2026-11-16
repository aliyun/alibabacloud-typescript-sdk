// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The ID of the created category.
   * 
   * @example
   * 45
   */
  categoryId?: number;
  /**
   * @remarks
   * The media asset category information.
   * 
   * @example
   * see below
   */
  categoryName?: string;
  /**
   * @remarks
   * The level of the category. The level is 0 for level-1 categories, 1 for level-2 categories, and 2 for level-3 categories.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent category. If the ParentId parameter is left empty or set to a value less than 1, the default return value is -1, which indicates that the created category is the root folder.
   * 
   * @example
   * -1
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

export class CreateAssetCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media asset category information.
   */
  category?: CreateAssetCategoryResponseBodyCategory;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: CreateAssetCategoryResponseBodyCategory,
      requestId: 'string',
    };
  }

  validate() {
    if(this.category && typeof (this.category as any).validate === 'function') {
      (this.category as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

