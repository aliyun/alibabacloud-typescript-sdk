// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceMyApiPermissionsResponseBodyPageResultPermissionList extends $dara.Model {
  /**
   * @example
   * 1322
   */
  apiId?: number;
  /**
   * @example
   * teset
   */
  apiName?: string;
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
   * 102122
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * 0
   */
  role?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      createUserName: 'CreateUserName',
      creator: 'Creator',
      owner: 'Owner',
      ownerUserName: 'OwnerUserName',
      privilegeBelongTo: 'PrivilegeBelongTo',
      privilegeFrom: 'PrivilegeFrom',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      createUserName: 'string',
      creator: 'string',
      owner: 'string',
      ownerUserName: 'string',
      privilegeBelongTo: 'string',
      privilegeFrom: 'number',
      projectId: 'number',
      projectName: 'string',
      role: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceMyApiPermissionsResponseBodyPageResult extends $dara.Model {
  permissionList?: ListDataServiceMyApiPermissionsResponseBodyPageResultPermissionList[];
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
      permissionList: { 'type': 'array', 'itemType': ListDataServiceMyApiPermissionsResponseBodyPageResultPermissionList },
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

export class ListDataServiceMyApiPermissionsResponseBody extends $dara.Model {
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
  pageResult?: ListDataServiceMyApiPermissionsResponseBodyPageResult;
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
      pageResult: ListDataServiceMyApiPermissionsResponseBodyPageResult,
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

