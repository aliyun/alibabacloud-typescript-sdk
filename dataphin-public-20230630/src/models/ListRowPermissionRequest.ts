// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRowPermissionRequestPageRowPermissionQuery extends $dara.Model {
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * 业务
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
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

export class ListRowPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The request command.
   * 
   * This parameter is required.
   */
  pageRowPermissionQuery?: ListRowPermissionRequestPageRowPermissionQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      pageRowPermissionQuery: 'PageRowPermissionQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      pageRowPermissionQuery: ListRowPermissionRequestPageRowPermissionQuery,
    };
  }

  validate() {
    if(this.pageRowPermissionQuery && typeof (this.pageRowPermissionQuery as any).validate === 'function') {
      (this.pageRowPermissionQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

