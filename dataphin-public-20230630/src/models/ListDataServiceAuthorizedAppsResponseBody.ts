// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppListRemarkForDebugList extends $dara.Model {
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

export class ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppList extends $dara.Model {
  /**
   * @example
   * 1022
   */
  appId?: number;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * 30012101
   */
  applyUserId?: string;
  applyUserName?: string;
  /**
   * @example
   * 2025-06-30
   */
  expireDate?: string;
  /**
   * @example
   * 1121
   */
  id?: number;
  isProjectManager?: boolean;
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
   * 0
   */
  privilegeAccount?: number;
  /**
   * @example
   * 1
   */
  privilegeType?: number;
  /**
   * @example
   * 102122
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  realHasOwnerPrivilege?: boolean;
  realHasPrivilege?: boolean;
  remarkForDebugList?: ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppListRemarkForDebugList[];
  revocable?: boolean;
  /**
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
  authorizedAppList?: ListDataServiceAuthorizedAppsResponseBodyPageResultAuthorizedAppList[];
  /**
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
  pageResult?: ListDataServiceAuthorizedAppsResponseBodyPageResult;
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

