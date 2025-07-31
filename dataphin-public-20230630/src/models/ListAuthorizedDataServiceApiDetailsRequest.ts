// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDataServiceApiDetailsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * AppKey
   * 
   * This parameter is required.
   * 
   * @example
   * 200000000
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      page: 'number',
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

export class ListAuthorizedDataServiceApiDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListAuthorizedDataServiceApiDetailsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListAuthorizedDataServiceApiDetailsRequestListQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

