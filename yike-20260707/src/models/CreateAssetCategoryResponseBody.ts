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
   * The category level. The first-level category has a level of 0, the second-level category has a level of 1, and the third-level category has a level of 2.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The parent category ID. If the ParentId parameter is set to empty or a value less than 1, the default return value is -1, which indicates that the created category is a root directory.
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

