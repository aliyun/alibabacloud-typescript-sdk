// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceMemberResponseBodyDataContent extends $dara.Model {
  /**
   * @example
   * 1765961516
   */
  joinTime?: string;
  /**
   * @example
   * 20282*****7591
   */
  memberId?: string;
  /**
   * @example
   * member
   */
  roleName?: string;
  /**
   * @example
   * 15
   */
  runningTaskNumber?: number;
  /**
   * @example
   * 30
   */
  totalTaskNumber?: number;
  /**
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
  content?: ListDataAgentWorkspaceMemberResponseBodyDataContent[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * no use
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * no use
   */
  totalElements?: number;
  /**
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
  data?: ListDataAgentWorkspaceMemberResponseBodyData;
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
   * E0D2-*****-A63B6
   */
  requestId?: string;
  /**
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

