// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceResponseBodyDataContent extends $dara.Model {
  /**
   * @example
   * 1765960516
   */
  createTime?: number;
  /**
   * @example
   * 20282*****7591
   */
  creator?: string;
  /**
   * @example
   * space for test
   */
  description?: string;
  /**
   * @example
   * 1765961516
   */
  modifyTime?: number;
  /**
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @example
   * 11
   */
  totalMember?: number;
  /**
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  /**
   * @example
   * active
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      modifyTime: 'ModifyTime',
      roleName: 'RoleName',
      totalMember: 'TotalMember',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceStatus: 'WorkspaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      description: 'string',
      modifyTime: 'number',
      roleName: 'string',
      totalMember: 'number',
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
  content?: ListDataAgentWorkspaceResponseBodyDataContent[];
  /**
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 122
   */
  totalElements?: number;
  /**
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
  data?: ListDataAgentWorkspaceResponseBodyData;
  /**
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
  /**
   * @example
   * nu use
   */
  maxResults?: number;
  /**
   * @example
   * no use
   */
  nextToken?: string;
  /**
   * @example
   * E0D2-*****-A63B6
   */
  requestId?: string;
  /**
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

