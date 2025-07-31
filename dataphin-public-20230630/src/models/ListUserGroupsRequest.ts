// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsRequestListQuery extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  adminIdList?: string[];
  /**
   * @example
   * false
   */
  filterMine?: boolean;
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
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
   * This parameter is required.
   */
  listQuery?: ListUserGroupsRequestListQuery;
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

