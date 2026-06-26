// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationsResponseBodyConversations extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 12356
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 135815884***
   */
  callingNumber?: string;
  /**
   * @remarks
   * The unique ID of the conversation.
   * 
   * @example
   * 82b2eaae-ce5c-45f8-8231-f15b6b27e55c
   */
  conversationId?: string;
  dsReport?: string;
  dsReportTitles?: string[];
  /**
   * @remarks
   * The reason that the conversation ended. Valid values:<br>1: The conversation completed normally.<br>2: The bot hung up after a recognition failure.<br>3: The call was disconnected due to a silence timeout.<br>4: The user hung up after a recognition failure.<br>5: The user hung up for an unknown reason.<br>6: The call was transferred to an agent because an intent was matched.<br>7: The call was transferred to an agent due to a recognition failure.<br>8: No interaction from the user.<br>9: The call was interrupted by a system error.<br>10: The call was transferred to an IVR system because an intent was matched.<br>11: The call was transferred to an IVR system due to a recognition failure.<br><br><br><br><br><br><br><br><br><br><br>
   * 
   * @example
   * 1
   */
  endReason?: number;
  /**
   * @remarks
   * The end time of the conversation, represented as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1582266750353
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the final audio playback was completed before the call was disconnected.
   * 
   * @example
   * true
   */
  hasLastPlaybackCompleted?: boolean;
  /**
   * @remarks
   * Indicates whether the conversation was transferred to an agent.
   * 
   * @example
   * false
   */
  hasToAgent?: boolean;
  /**
   * @remarks
   * The number of rounds in the conversation.
   * 
   * @example
   * 2
   */
  rounds?: number;
  /**
   * @remarks
   * Indicates whether the conversation was run in a sandbox environment.
   * 
   * @example
   * true
   */
  sandBox?: boolean;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * skg-123
   */
  skillGroup?: string;
  /**
   * @remarks
   * The start time of the conversation, represented as a Unix timestamp in milliseconds.
   * 
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
  /**
   * @remarks
   * The list of conversation objects.
   */
  conversations?: ListConversationsResponseBodyConversations[];
  /**
   * @remarks
   * The page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a2c26e67-5984-4935-984e-bcee52971993
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of conversations.
   * 
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

