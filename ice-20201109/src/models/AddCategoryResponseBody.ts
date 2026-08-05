// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The ID of the created category.
   * 
   * @example
   * 45
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Category 1
   */
  cateName?: string;
  /**
   * @remarks
   * The category level. The first-level category has a level of **0**, the second-level category has a level of **1**, and the third-level category has a level of **2**.
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
  /**
   * @remarks
   * The category type. Valid values:
   * - **default** (default): audio, video, and image category.
   * - **material**: short video material category.
   * 
   * @example
   * default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media asset category information.
   */
  category?: AddCategoryResponseBodyCategory;
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
      category: AddCategoryResponseBodyCategory,
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

