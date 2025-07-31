// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRowPermissionRequestPageRowPermissionQuery extends $dara.Model {
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

