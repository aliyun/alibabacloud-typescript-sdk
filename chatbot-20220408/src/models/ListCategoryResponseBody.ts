// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryResponseBodyCategories extends $dara.Model {
  bizCode?: string;
  /**
   * @example
   * 231001028593
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

export class ListCategoryResponseBody extends $dara.Model {
  categories?: ListCategoryResponseBodyCategories[];
  /**
   * @example
   * 9C5F8186-2D22-433E-9545-606D344F30B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': ListCategoryResponseBodyCategories },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

