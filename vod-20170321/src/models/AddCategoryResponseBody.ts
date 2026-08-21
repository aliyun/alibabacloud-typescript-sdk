// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The category ID. This ID can be used as a request parameter for the [UpdateCategory](~~UpdateCategory~~), [DeleteCategory](~~DeleteCategory~~), and [GetCategories](~~GetCategories~~) operations.
   * 
   * @example
   * 10020
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Comedy
   */
  cateName?: string;
  /**
   * @remarks
   * The category level. Valid values:
   * - **0**: level-0 category.
   * - **1**: level-1 category.
   * - **2**: level-2 category.
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
   * 100012
   */
  parentId?: number;
  /**
   * @remarks
   * The category type. Valid values:
   * 
   * - **default**: audio/video/image category.
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
   * 25818875-5F78-4AF6-D7393642CA58****
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

