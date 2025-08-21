// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryResponseBodyCategory extends $dara.Model {
  bizCode?: string;
  /**
   * @example
   * 30000049006
   */
  categoryId?: number;
  name?: string;
  /**
   * @example
   * -1
   */
  parentCategoryId?: number;
  /**
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
  category?: DescribeCategoryResponseBodyCategory;
  /**
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

