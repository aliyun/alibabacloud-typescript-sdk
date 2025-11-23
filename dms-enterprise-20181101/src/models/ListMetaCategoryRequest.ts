// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * 30000322682
   */
  parentCategoryId?: number;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentCategoryId: 'ParentCategoryId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentCategoryId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

