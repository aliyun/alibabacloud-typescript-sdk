// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableListByCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can call the [GetMetaCategory](https://help.aliyun.com/document_detail/2780099.html) operation to obtain the ID of the category. Categories allow you to efficiently organize and manage tables by category. You can search for the desired table by category.
   * 
   * This parameter is required.
   * 
   * @example
   * 23
   */
  categoryId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

