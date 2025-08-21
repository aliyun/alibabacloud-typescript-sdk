// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCategoryResponseBodyCategory extends $dara.Model {
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

export class CreateCategoryResponseBody extends $dara.Model {
  category?: CreateCategoryResponseBodyCategory;
  /**
   * @example
   * A629A28F-F25E-5572-A679-FA46FB0151D6
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
      category: CreateCategoryResponseBodyCategory,
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

