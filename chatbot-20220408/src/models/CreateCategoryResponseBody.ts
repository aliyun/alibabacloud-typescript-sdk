// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCategoryResponseBodyCategory extends $dara.Model {
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
   * Category name
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * -1
   */
  parentCategoryId?: number;
  /**
   * @remarks
   * The category status. Valid values:
   * 
   * - -1: deleted but not published.
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

export class CreateCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category information.
   */
  category?: CreateCategoryResponseBodyCategory;
  /**
   * @remarks
   * The request ID.
   * 
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

