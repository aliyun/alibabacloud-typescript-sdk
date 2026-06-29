// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppListRemarkForDebugList extends $dara.Model {
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
   * The value of the configuration item.
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
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the permission account, which is the applicant ID.
   * 
   * @example
   * 30012101
   */
  applyUserId?: string;
  /**
   * @remarks
   * The permission account, which is the applicant.
   * 
   * @example
   * 测试
   */
  applyUserName?: string;
  /**
   * @remarks
   * The expiration date in the format of yyyy-MM-dd.
   * 
   * @example
   * 2025-06-30
   */
  expireDate?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1121
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the current user is a project administrator.
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
   * The permission account. Valid values: 0: individual account.
   * 
   * @example
   * 0
   */
  privilegeAccount?: number;
  /**
   * @remarks
   * The permission type. Valid values: 0: usage permission. 1: development permission.
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
   * Indicates whether the user actually has owner permissions on this application. The user may lack permissions because of expiration or other reasons.
   */
  realHasOwnerPrivilege?: boolean;
  /**
   * @remarks
   * Indicates whether the user actually has permissions.
   */
  realHasPrivilege?: boolean;
  /**
   * @remarks
   * The descriptions used for troubleshooting.
   */
  remarkForDebugList?: ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppListRemarkForDebugList[];
  /**
   * @remarks
   * Indicates whether the permissions can be returned or revoked.
   */
  revocable?: boolean;
  /**
   * @remarks
   * The detailed status of the revoke button. Valid values: -1: super administrators cannot revoke. -2: owners cannot revoke. -3: project administrators without actual permissions are grayed out. -4: regular users without permissions cannot revoke. 1: project administrators with actual permissions can revoke. 2: regular users with permissions can revoke.
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
   * The total number of records.
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
   * The paging query result.
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

