// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceMemberResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the workspace. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765961516
   */
  joinTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the user.
   * 
   * @example
   * 20282*****7591
   */
  memberId?: string;
  /**
   * @remarks
   * The name of the user\\"s role in the workspace.
   * 
   * @example
   * member
   */
  roleName?: string;
  /**
   * @remarks
   * The number of tasks that are running for the user in the workspace.
   * 
   * @example
   * 15
   */
  runningTaskNumber?: number;
  /**
   * @remarks
   * The total number of tasks initiated by the user in the workspace.
   * 
   * @example
   * 30
   */
  totalTaskNumber?: number;
  /**
   * @remarks
   * The RAM username of the user.
   * 
   * @example
   * yunqitest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      joinTime: 'JoinTime',
      memberId: 'MemberId',
      roleName: 'RoleName',
      runningTaskNumber: 'RunningTaskNumber',
      totalTaskNumber: 'TotalTaskNumber',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTime: 'string',
      memberId: 'string',
      roleName: 'string',
      runningTaskNumber: 'number',
      totalTaskNumber: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentWorkspaceMemberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data content.
   */
  content?: ListDataAgentWorkspaceMemberResponseBodyDataContent[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * no use
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * no use
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * no use
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListDataAgentWorkspaceMemberResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
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

export class ListDataAgentWorkspaceMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListDataAgentWorkspaceMemberResponseBodyData;
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
   * The error message.
   * 
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataAgentWorkspaceMemberResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

