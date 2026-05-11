// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationsResponseBodyConversations extends $dara.Model {
  calledNumber?: string;
  /**
   * @example
   * 135815884***
   */
  callingNumber?: string;
  /**
   * @example
   * 82b2eaae-ce5c-45f8-8231-f15b6b27e55c
   */
  conversationId?: string;
  dsReport?: string;
  dsReportTitles?: string[];
  /**
   * @example
   * 1
   */
  endReason?: number;
  /**
   * @example
   * 1582266750353
   */
  endTime?: number;
  /**
   * @example
   * true
   */
  hasLastPlaybackCompleted?: boolean;
  hasToAgent?: boolean;
  /**
   * @example
   * 2
   */
  rounds?: number;
  /**
   * @example
   * true
   */
  sandBox?: boolean;
  skillGroup?: string;
  /**
   * @example
   * 1641625694286
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      dsReport: 'DsReport',
      dsReportTitles: 'DsReportTitles',
      endReason: 'EndReason',
      endTime: 'EndTime',
      hasLastPlaybackCompleted: 'HasLastPlaybackCompleted',
      hasToAgent: 'HasToAgent',
      rounds: 'Rounds',
      sandBox: 'SandBox',
      skillGroup: 'SkillGroup',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      dsReport: 'string',
      dsReportTitles: { 'type': 'array', 'itemType': 'string' },
      endReason: 'number',
      endTime: 'number',
      hasLastPlaybackCompleted: 'boolean',
      hasToAgent: 'boolean',
      rounds: 'number',
      sandBox: 'boolean',
      skillGroup: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dsReportTitles)) {
      $dara.Model.validateArray(this.dsReportTitles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsResponseBody extends $dara.Model {
  conversations?: ListConversationsResponseBodyConversations[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * a2c26e67-5984-4935-984e-bcee52971993
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      conversations: 'Conversations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversations: { 'type': 'array', 'itemType': ListConversationsResponseBodyConversations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conversations)) {
      $dara.Model.validateArray(this.conversations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

