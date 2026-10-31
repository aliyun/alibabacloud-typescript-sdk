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
   * The number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The member roles. Valid values:
   * - SUPER_ADMIN: Dataphin super administrator.
   * - SYSTEM_ADMIN: System administrator.
   * - COMMON_USER: Dataphin user.
   * - DATA_ADMIN: Dataphin data administrator.
   * - EXPORT_ADMIN: Export administrator.
   * - SECURITY_ADMIN: Security administrator.
   * - DATASOURCE_MANAGER: Data source administrator.
   * - QUALITY_MANAGER: Asset quality owner.
   * - DATA_STANDARD_MANAGER: Data standard administrator.
   * - LABELS_BUSINESS_PLANNER: Label business planner.
   * - BUSINESS_MEMBER: Regular business user.
   * - DATAPRO_OPERATE_SUPER_ADMIN: Operations super administrator.
   * - DATAPRO_OPERATE_ADMIN: Operations administrator.
   * - DATAPRO_OPERATE_MEMBER: Operations staff.
   * - DATAPRO_BUSINESS_ANALYST: Business analyst.
   * - LABELS_BUSINESS_MEMBER: Label business staff.
   * - DATAPRO_BUSINESS_MEMBER: Datapro regular business user.
   */
  roleList?: string[];
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * Test
   */
  searchText?: string;
  /**
   * @remarks
   * The IDs of the user groups to which the members belong.
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
      listQuery: ListTenantMembersRequestListQuery,
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

