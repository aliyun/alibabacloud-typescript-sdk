// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The ID of the category. You can use the value of this parameter when you call the [UpdateCategory](~~UpdateCategory~~), [DeleteCategory](~~DeleteCategory~~), and [GetCategories](~~GetCategories~~) operations.
   * 
   * @example
   * 10020
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * test
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category. Valid values:
   * 
   * *   **0**: level 1 category
   * *   **1**: level 2 category
   * *   **1**: level 3 category
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 100012
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the category. Valid values:
   * 
   * *   **default**: audio, video, and image files
   * *   **material**: short video materials
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
   * The information about the category.
   */
  category?: AddCategoryResponseBodyCategory;
  /**
   * @remarks
   * The ID of the request.
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

