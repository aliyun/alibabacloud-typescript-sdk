// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionListRemarkForDebugList extends $dara.Model {
  /**
   * @remarks
   * The configuration item.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The configuration item value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionList extends $dara.Model {
  /**
   * @remarks
   * AppId
   * 
   * @example
   * 1021
   */
  appId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1121
   */
  creator?: string;
  /**
   * @remarks
   * The role of the current logon user relative to this record. Valid values:
   * - SuperAdmin: the current user is a super administrator.
   * - ProjMan: the current user is a project administrator for this record.
   * - NormalUser: the current user is a regular user for this record, meaning the user is neither a super administrator nor a project administrator.
   * 
   * @example
   * NormalUser
   */
  currentUserRole?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 1121
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * test
   */
  ownerUserName?: string;
  /**
   * @remarks
   * The user to whom the permission belongs.
   * 
   * @example
   * 1121
   */
  privilegeBelongTo?: string;
  /**
   * @remarks
   * The source of the authorization. Valid values:
   * - 0: owner.
   * 
   * @example
   * 0
   */
  privilegeFrom?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 112101
   */
  projectId?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The description, used for troubleshooting.
   */
  remarkForDebugList?: ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionListRemarkForDebugList[];
  /**
   * @remarks
   * The role. Valid values:
   * - 0: owner.
   * 
   * @example
   * 0
   */
  role?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createUserName: 'CreateUserName',
      creator: 'Creator',
      currentUserRole: 'CurrentUserRole',
      owner: 'Owner',
      ownerUserName: 'OwnerUserName',
      privilegeBelongTo: 'PrivilegeBelongTo',
      privilegeFrom: 'PrivilegeFrom',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      remarkForDebugList: 'RemarkForDebugList',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createUserName: 'string',
      creator: 'string',
      currentUserRole: 'string',
      owner: 'string',
      ownerUserName: 'string',
      privilegeBelongTo: 'string',
      privilegeFrom: 'number',
      projectId: 'number',
      projectName: 'string',
      remarkForDebugList: { 'type': 'array', 'itemType': ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionListRemarkForDebugList },
      role: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.remarkForDebugList)) {
      $dara.Model.validateArray(this.remarkForDebugList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceMyAppPermissionsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paginated permission list.
   */
  permissionList?: ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      permissionList: 'PermissionList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionList: { 'type': 'array', 'itemType': ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissionList)) {
      $dara.Model.validateArray(this.permissionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceMyAppPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paging query result.
   */
  pageResult?: ListDataServiceMyAppPermissionsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListDataServiceMyAppPermissionsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

