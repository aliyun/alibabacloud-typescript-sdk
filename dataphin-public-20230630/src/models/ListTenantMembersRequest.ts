// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantMembersRequestListQuery extends $dara.Model {
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
  roleList?: string[];
  searchText?: string;
  userGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      roleList: 'RoleList',
      searchText: 'SearchText',
      userGroupIdList: 'UserGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      roleList: { 'type': 'array', 'itemType': 'string' },
      searchText: 'string',
      userGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    if(Array.isArray(this.userGroupIdList)) {
      $dara.Model.validateArray(this.userGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListTenantMembersRequestListQuery;
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
      listQuery: ListTenantMembersRequestListQuery,
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

