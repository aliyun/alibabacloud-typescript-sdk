// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDataServiceApiDetailsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The application key.
   * >Notice: Deprecated. Use AppKeyStr instead.</notice>.
   * 
   * @example
   * 200000000
   * 
   * @deprecated
   */
  appKey?: number;
  /**
   * @remarks
   * The application key.
   * 
   * @example
   * APP_200000000
   */
  appKeyStr?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appKeyStr: 'AppKeyStr',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appKeyStr: 'string',
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
   * The query request.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  listQuery?: ListAuthorizedDataServiceApiDetailsRequestListQuery;
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

