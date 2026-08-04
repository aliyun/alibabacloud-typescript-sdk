// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The creation time of the workspace, in milliseconds (UNIX timestamp).
   * 
   * @example
   * 1765960516000
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the workspace creator.
   * 
   * @example
   * 20282*****7591
   */
  creator?: string;
  creatorName?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * space for test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether session sharing is enabled for the workspace.
   * 
   * @example
   * true
   */
  isSessionShareEnabled?: boolean;
  /**
   * @remarks
   * The most recent modification time of the workspace, in milliseconds (UNIX timestamp).
   * 
   * @example
   * 1765961516000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The role name of the user in the workspace.
   * 
   * @example
   * admin
   */
  roleName?: string;
  runningSessionCount?: number;
  /**
   * @remarks
   * The number of members in the workspace.
   * 
   * @example
   * 11
   */
  totalMember?: number;
  totalSessionCount?: number;
  /**
   * @remarks
   * The workspace type.
   * 
   * @example
   * personal
   */
  type?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  /**
   * @remarks
   * The status of the workspace.
   * 
   * @example
   * active
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      isSessionShareEnabled: 'IsSessionShareEnabled',
      modifyTime: 'ModifyTime',
      roleName: 'RoleName',
      runningSessionCount: 'RunningSessionCount',
      totalMember: 'TotalMember',
      totalSessionCount: 'TotalSessionCount',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceStatus: 'WorkspaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      isSessionShareEnabled: 'boolean',
      modifyTime: 'number',
      roleName: 'string',
      runningSessionCount: 'number',
      totalMember: 'number',
      totalSessionCount: 'number',
      type: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   */
  content?: ListDataAgentWorkspaceResponseBodyDataContent[];
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of workspaces per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of workspaces.
   * 
   * @example
   * 122
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 12
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListDataAgentWorkspaceResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentWorkspaceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * nu use
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * no use
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0D2-*****-A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataAgentWorkspaceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

