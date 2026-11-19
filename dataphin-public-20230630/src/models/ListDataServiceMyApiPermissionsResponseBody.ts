// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceMyApiPermissionsResponseBodyPageResultPermissionList extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 1322
   */
  apiId?: number;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * teset
   */
  apiName?: string;
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
   * The owner of the permission.
   * 
   * @example
   * 1121
   */
  privilegeBelongTo?: string;
  /**
   * @remarks
   * The authorization source. Valid values:
   * - 0: Owner.
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
   * The role. Valid values:
   * - 0: Owner.
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
   * The paged permission list.
   */
  permissionList?: ListDataServiceMyApiPermissionsResponseBodyPageResultPermissionList[];
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
   * The paged query result.
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

