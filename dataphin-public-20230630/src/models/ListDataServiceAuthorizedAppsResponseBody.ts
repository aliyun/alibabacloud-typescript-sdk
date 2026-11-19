// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppListRemarkForDebugList extends $dara.Model {
  /**
   * @remarks
   * The configuration key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The configuration value.
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

export class ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppList extends $dara.Model {
  /**
   * @remarks
   * The primary key ID of the application.
   * 
   * @example
   * 1022
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the privilege account, which is the ID of the applicant.
   * 
   * @example
   * 30012101
   */
  applyUserId?: string;
  /**
   * @remarks
   * The name of the privilege account, which is the name of the applicant.
   * 
   * @example
   * Test
   */
  applyUserName?: string;
  /**
   * @remarks
   * The expiration date. Format: yyyy-MM-dd.
   * 
   * @example
   * 2025-06-30
   */
  expireDate?: string;
  /**
   * @remarks
   * The ID of the application request.
   * 
   * @example
   * 1121
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the current user is a project manager.
   */
  isProjectManager?: boolean;
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
   * The privilege account type. Valid values:
   * - 0: Individual account.
   * 
   * @example
   * 0
   */
  privilegeAccount?: number;
  /**
   * @remarks
   * The permission type. Valid values:
   * - 0: Usage permission.
   * - 1: Development permission.
   * 
   * @example
   * 1
   */
  privilegeType?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 102122
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
   * Indicates whether the user actually has the owner permission for the application. The user may not have the permission due to expiration or other reasons.
   */
  realHasOwnerPrivilege?: boolean;
  /**
   * @remarks
   * Indicates whether the user actually has the permission.
   */
  realHasPrivilege?: boolean;
  /**
   * @remarks
   * The description used for troubleshooting.
   */
  remarkForDebugList?: ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppListRemarkForDebugList[];
  /**
   * @remarks
   * Indicates whether the permission can be returned or revoked.
   */
  revocable?: boolean;
  /**
   * @remarks
   * The detailed status of the revocation button. Valid values:
   * - -1: The super administrator cannot return the permission.
   * - -2: The owner cannot return the permission.
   * - -3: The project manager does not have actual permissions, and the button is grayed out.
   * - -4: The regular user does not have permissions and cannot return the permission.
   * - 1: The project manager has actual permissions and can return the permission.
   * - 2: The regular user has permissions and can return the permission.
   * 
   * @example
   * -1
   */
  revocableDetail?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      applyUserId: 'ApplyUserId',
      applyUserName: 'ApplyUserName',
      expireDate: 'ExpireDate',
      id: 'Id',
      isProjectManager: 'IsProjectManager',
      owner: 'Owner',
      ownerUserName: 'OwnerUserName',
      privilegeAccount: 'PrivilegeAccount',
      privilegeType: 'PrivilegeType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      realHasOwnerPrivilege: 'RealHasOwnerPrivilege',
      realHasPrivilege: 'RealHasPrivilege',
      remarkForDebugList: 'RemarkForDebugList',
      revocable: 'Revocable',
      revocableDetail: 'RevocableDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      applyUserId: 'string',
      applyUserName: 'string',
      expireDate: 'string',
      id: 'number',
      isProjectManager: 'boolean',
      owner: 'string',
      ownerUserName: 'string',
      privilegeAccount: 'number',
      privilegeType: 'number',
      projectId: 'number',
      projectName: 'string',
      realHasOwnerPrivilege: 'boolean',
      realHasPrivilege: 'boolean',
      remarkForDebugList: { 'type': 'array', 'itemType': ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppListRemarkForDebugList },
      revocable: 'boolean',
      revocableDetail: 'number',
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

export class ListDataServiceAuthorizedAppsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paginated list of authorized applications.
   */
  authorizedAppList?: ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedAppList: 'AuthorizedAppList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedAppList: { 'type': 'array', 'itemType': ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedAppList)) {
      $dara.Model.validateArray(this.authorizedAppList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedAppsResponseBody extends $dara.Model {
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
   * The paging query results.
   */
  pageResult?: ListDataServiceAuthorizedAppsResponseBodyPageResult;
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
   * Indicates whether the request is successful.
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
      pageResult: ListDataServiceAuthorizedAppsResponseBodyPageResult,
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

