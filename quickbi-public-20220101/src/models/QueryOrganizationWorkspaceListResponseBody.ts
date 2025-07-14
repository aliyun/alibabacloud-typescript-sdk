// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationWorkspaceListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Whether the work can be made public. Value range:
   * 
   * - true: Public
   * - false: Not public
   * 
   * @example
   * true
   */
  allowPublishOperation?: boolean;
  /**
   * @remarks
   * Indicates whether the work can be authorized for sharing. Possible values:
   * 
   * - true: Authorized
   * - false: Not authorized
   * 
   * @example
   * true
   */
  allowShareOperation?: boolean;
  /**
   * @remarks
   * Creation time of the workspace.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  createTime?: string;
  /**
   * @remarks
   * Quick BI user ID of the creator.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  createUser?: string;
  /**
   * @remarks
   * Aliyun account name of the creator.
   * 
   * @example
   * pop****@aliyun.com
   */
  createUserAccountName?: string;
  /**
   * @remarks
   * Last modified time of the workspace.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  modifiedTime?: string;
  /**
   * @remarks
   * ID of the Quick BI user who modified the workspace.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  modifyUser?: string;
  /**
   * @remarks
   * Aliyun account name of the modifier.
   * 
   * @example
   * pop****@aliyun.com
   */
  modifyUserAccountName?: string;
  /**
   * @remarks
   * ID of the organization to which the workspace belongs.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  organizationId?: string;
  /**
   * @remarks
   * Quick BI user ID of the workspace owner.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  owner?: string;
  /**
   * @remarks
   * Aliyun account name of the workspace owner.
   * 
   * @example
   * pop****@aliyun.com
   */
  ownerAccountName?: string;
  /**
   * @remarks
   * Workspace description.
   * 
   * @example
   * test
   */
  workspaceDescription?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Name of the workspace.
   * 
   * @example
   * test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPublishOperation: 'AllowPublishOperation',
      allowShareOperation: 'AllowShareOperation',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserAccountName: 'CreateUserAccountName',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      modifyUserAccountName: 'ModifyUserAccountName',
      organizationId: 'OrganizationId',
      owner: 'Owner',
      ownerAccountName: 'OwnerAccountName',
      workspaceDescription: 'WorkspaceDescription',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPublishOperation: 'boolean',
      allowShareOperation: 'boolean',
      createTime: 'string',
      createUser: 'string',
      createUserAccountName: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      modifyUserAccountName: 'string',
      organizationId: 'string',
      owner: 'string',
      ownerAccountName: 'string',
      workspaceDescription: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of workspaces.
   */
  data?: QueryOrganizationWorkspaceListResponseBodyResultData[];
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
      data: { 'type': 'array', 'itemType': QueryOrganizationWorkspaceListResponseBodyResultData },
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

export class QueryOrganizationWorkspaceListResponseBody extends $dara.Model {
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
   * Returns the paginated result of the workspace list, with detailed information about the workspaces stored in the Data parameter.
   */
  result?: QueryOrganizationWorkspaceListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
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
      result: QueryOrganizationWorkspaceListResponseBodyResult,
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

