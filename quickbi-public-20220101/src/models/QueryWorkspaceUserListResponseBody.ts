// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkspaceUserListResponseBodyResultDataRole extends $dara.Model {
  /**
   * @remarks
   * Code corresponding to the preset role.
   * 
   * @example
   * role_workspace_admin
   */
  roleCode?: string;
  /**
   * @remarks
   * Preset role ID. Possible values:
   * 
   * - 25: Workspace Administrator
   * - 26: Workspace Developer
   * - 27: Workspace Analyst
   * - 30: Workspace Viewer
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Name of the preset role.
   * 
   * @example
   * test
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCode: 'string',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud account ID.
   * 
   * @example
   * 16020915****8429
   */
  accountId?: string;
  /**
   * @remarks
   * Alibaba Cloud account name.
   * 
   * @example
   * pop****@aliyunid.test
   */
  accountName?: string;
  /**
   * @remarks
   * Nickname.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * Preset role information for the workspace member.
   */
  role?: QueryWorkspaceUserListResponseBodyResultDataRole;
  /**
   * @remarks
   * Quick BI user ID.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      nickName: 'NickName',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      nickName: 'string',
      role: QueryWorkspaceUserListResponseBodyResultDataRole,
      userId: 'string',
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Information about the workspace members.
   */
  data?: QueryWorkspaceUserListResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of rows per page as set in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorkspaceUserListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the paginated result of the member list, with detailed information about the members stored in the Data parameter of the response.
   */
  result?: QueryWorkspaceUserListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorkspaceUserListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

