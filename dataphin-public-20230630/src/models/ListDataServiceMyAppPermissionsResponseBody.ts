// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionListRemarkForDebugList extends $dara.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
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
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @example
   * 1121
   */
  creator?: string;
  /**
   * @example
   * NormalUser
   */
  currentUserRole?: string;
  /**
   * @example
   * 1121
   */
  owner?: string;
  /**
   * @example
   * test
   */
  ownerUserName?: string;
  /**
   * @example
   * 1121
   */
  privilegeBelongTo?: string;
  /**
   * @example
   * 0
   */
  privilegeFrom?: number;
  /**
   * @example
   * 112101
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  remarkForDebugList?: ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionListRemarkForDebugList[];
  /**
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
  permissionList?: ListDataServiceMyAppPermissionsResponseBodyPageResultPermissionList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListDataServiceMyAppPermissionsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

