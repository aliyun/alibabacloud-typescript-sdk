// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationWorkspaceListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Whether works in the workspace can be published. Valid values:
   * 
   * - true: Publishing is allowed.
   * 
   * - false: Publishing is not allowed.
   * 
   * @example
   * true
   */
  allowPublishOperation?: boolean;
  /**
   * @remarks
   * Whether works in the workspace can be shared. Valid values:
   * 
   * - true: Sharing is allowed.
   * 
   * - false: Sharing is not allowed.
   * 
   * @example
   * true
   */
  allowShareOperation?: boolean;
  /**
   * @remarks
   * The time when the workspace was created.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  createTime?: string;
  /**
   * @remarks
   * The creator\\"s Quick BI user ID.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  createUser?: string;
  /**
   * @remarks
   * The creator\\"s Alibaba Cloud account name.
   * 
   * @example
   * pop****@aliyun.com
   */
  createUserAccountName?: string;
  /**
   * @remarks
   * The time when the workspace was last modified.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The modifier\\"s Quick BI user ID.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The modifier\\"s Alibaba Cloud account name.
   * 
   * @example
   * pop****@aliyun.com
   */
  modifyUserAccountName?: string;
  /**
   * @remarks
   * The ID of the workspace\\"s organization.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  organizationId?: string;
  /**
   * @remarks
   * The workspace owner\\"s Quick BI user ID.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  owner?: string;
  /**
   * @remarks
   * The workspace owner\\"s Alibaba Cloud account name.
   * 
   * @example
   * pop****@aliyun.com
   */
  ownerAccountName?: string;
  /**
   * @remarks
   * The workspace owner\\"s Quick BI account name.
   * 
   * @example
   * test
   */
  realOwnerAccountName?: string;
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * 该空间是测试空间
   */
  workspaceDescription?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * 测试空间
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
      realOwnerAccountName: 'RealOwnerAccountName',
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
      realOwnerAccountName: 'string',
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
   * An array of workspace objects.
   */
  data?: QueryOrganizationWorkspaceListResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of workspaces.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
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
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The paginated query results. The Data parameter contains the details of each workspace.
   */
  result?: QueryOrganizationWorkspaceListResponseBodyResult;
  /**
   * @remarks
   * Whether the request succeeded. Valid values:
   * 
   * - true: The request succeeded.
   * 
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

