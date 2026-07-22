// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @example
   * 45
   */
  categoryId?: number;
  /**
   * @example
   * see below
   */
  categoryName?: string;
  /**
   * @example
   * 0
   */
  level?: number;
  /**
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
  category?: CreateAssetCategoryResponseBodyCategory;
  /**
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

