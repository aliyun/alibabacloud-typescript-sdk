// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAppsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Application group ID.
   * 
   * @example
   * 12345
   */
  appGroupId?: number;
  /**
   * @remarks
   * Application name search keyword.
   * 
   * @example
   * 营销看板
   */
  keyword?: string;
  /**
   * @remarks
   * Page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of records per page. Default value: 20.
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
   * Query the list of all applications under the tenant.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataServiceAppsRequestListQuery;
  /**
   * @remarks
   * Tenant ID.
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
      listQuery: ListDataServiceAppsRequestListQuery,
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

