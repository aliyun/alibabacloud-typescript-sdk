// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentMonitorSessionsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud UID of the creator.
   * 
   * @example
   * 20372822********
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The display name of the creator.
   * 
   * @example
   * HaoY***
   */
  creatorUserName?: string;
  /**
   * @remarks
   * The custom agent ID.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * The number of dislikes for the session.
   * 
   * @example
   * 0
   */
  dislikeCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-18T10:02:04+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of likes for the session.
   * 
   * @example
   * 2
   */
  likeCount?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 2gum46f149******ndfxxo
   */
  sessionId?: string;
  /**
   * @remarks
   * The session status. Valid values:
   * - init: The session is in the initial state.
   * - INITIALIZING: The session is being initialized.
   * - RUNNING: The session is running.
   * - IDLE: The session is idle.
   * - RECOVERABLE: The session is completed and can accept further questions.
   * - UNAVAILABLE: The session is completed and cannot accept further questions.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  /**
   * @remarks
   * The session name.
   * 
   * @example
   * Please analyze this data
   */
  title?: string;
  /**
   * @remarks
   * The total number of turns in the session.
   * 
   * @example
   * 10
   */
  turnCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      creatorUserName: 'CreatorUserName',
      customAgentId: 'CustomAgentId',
      dislikeCount: 'DislikeCount',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      likeCount: 'LikeCount',
      sessionId: 'SessionId',
      state: 'State',
      title: 'Title',
      turnCount: 'TurnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      creatorUserName: 'string',
      customAgentId: 'string',
      dislikeCount: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      likeCount: 'number',
      sessionId: 'string',
      state: 'string',
      title: 'string',
      turnCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentMonitorSessionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The session details list for the current page, sorted by creation time in descending order.
   */
  content?: ListCustomAgentMonitorSessionsResponseBodyDataContent[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of sessions within the filter scope.
   * 
   * @example
   * 5
   */
  totalElements?: number;
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
      content: 'Content',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListCustomAgentMonitorSessionsResponseBodyDataContent },
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

export class ListCustomAgentMonitorSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListCustomAgentMonitorSessionsResponseBodyData;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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
      data: ListCustomAgentMonitorSessionsResponseBodyData,
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

