// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantMembersRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The member roles:
   * - SUPER_ADMIN: Dataphin super administrator
   * - SYSTEM_ADMIN: system administrator
   * - COMMON_USER: Dataphin user
   * - DATA_ADMIN: Dataphin data administrator
   * - EXPORT_ADMIN: export administrator
   * - SECURITY_ADMIN: security administrator
   * - DATASOURCE_MANAGER: data source administrator
   * - QUALITY_MANAGER: asset quality manager
   * - DATA_STANDARD_MANAGER: data standard administrator
   * - LABELS_BUSINESS_PLANNER: tag business planner
   * - BUSINESS_MEMBER: general business user
   * - DATAPRO_OPERATE_SUPER_ADMIN: operations super administrator
   * - DATAPRO_OPERATE_ADMIN: operations administrator
   * - DATAPRO_OPERATE_MEMBER: operations member
   * - DATAPRO_BUSINESS_ANALYST: business analyst
   * - LABELS_BUSINESS_MEMBER: tag business member
   * - DATAPRO_BUSINESS_MEMBER: DATAPRO general business user
   */
  roleList?: string[];
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * 测试
   */
  searchText?: string;
  /**
   * @remarks
   * The IDs of the user groups to which the member belongs.
   */
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
   * The request object.
   * 
   * This parameter is required.
   */
  listQuery?: ListTenantMembersRequestListQuery;
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

