// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * bizcode123
   */
  bizCode?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * CategoryName
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID. Default value: -1, which indicates the root directory.
   * 
   * @example
   * -1
   */
  parentCategoryId?: number;
  /**
   * @remarks
   * The category status. Valid values:
   * 
   * - -1: deleted and unpublished.
   * - 0: Normal.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category information.
   */
  category?: DescribeCategoryResponseBodyCategory;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2B0304FD-3804-5C06-9A83-77F5523664AF
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
      category: DescribeCategoryResponseBodyCategory,
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

