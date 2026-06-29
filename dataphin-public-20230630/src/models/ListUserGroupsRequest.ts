// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user group is enabled.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The user IDs of the user group administrators.
   */
  adminIdList?: string[];
  /**
   * @remarks
   * Specifies whether to filter user groups that the current user belongs to.
   * 
   * @example
   * false
   */
  filterMine?: boolean;
  /**
   * @remarks
   * The keyword for the user group name.
   * 
   * @example
   * xx测试
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
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminIdList: 'AdminIdList',
      filterMine: 'FilterMine',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminIdList: { 'type': 'array', 'itemType': 'string' },
      filterMine: 'boolean',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.adminIdList)) {
      $dara.Model.validateArray(this.adminIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query parameters.
   * 
   * This parameter is required.
   */
  listQuery?: ListUserGroupsRequestListQuery;
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
      listQuery: ListUserGroupsRequestListQuery,
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

