// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAppsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The application group ID.
   * 
   * @example
   * 12345
   */
  appGroupId?: number;
  /**
   * @remarks
   * The keyword used to search for application names.
   * 
   * @example
   * Marketing dashboard
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      keyword: 'string',
      pageNo: 'number',
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

export class ListDataServiceAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The query parameters for listing all applications under the tenant.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataServiceAppsRequestListQuery;
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListDataServiceAppsRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

