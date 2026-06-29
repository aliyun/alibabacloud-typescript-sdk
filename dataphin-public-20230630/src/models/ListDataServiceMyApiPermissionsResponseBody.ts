// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceMyApiPermissionsResponseBodyPageResultPermissionList extends $dara.Model {
  /**
   * @remarks
   * API ID.
   * 
   * @example
   * 1322
   */
  apiId?: number;
  /**
   * @remarks
   * API name.
   * 
   * @example
   * teset
   */
  apiName?: string;
  /**
   * @remarks
   * Creator name.
   * 
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * 1121
   */
  creator?: string;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 1121
   */
  owner?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * test
   */
  ownerUserName?: string;
  /**
   * @remarks
   * The user to whom the privilege belongs.
   * 
   * @example
   * 1121
   */
  privilegeBelongTo?: string;
  /**
   * @remarks
   * Authorization source. Valid value: 0, which indicates the owner.
   * 
   * @example
   * 0
   */
  privilegeFrom?: number;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 102122
   */
  projectId?: number;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * Role. Valid value: 0, which indicates the owner.
   * 
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
  /**
   * @remarks
   * Paginated permission list.
   */
  permissionList?: ListDataServiceMyApiPermissionsResponseBodyPageResultPermissionList[];
  /**
   * @remarks
   * Total number of records.
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
   * @remarks
   * Backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Backend response exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Paginated query result.
   */
  pageResult?: ListDataServiceMyApiPermissionsResponseBodyPageResult;
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
   * Whether the request is successful.
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

