// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationsResponseBodyConversations extends $dara.Model {
  abTestName?: string;
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
   * The session ID.
   * 
   * @example
   * 82b2eaae-ce5c-45f8-8231-f15b6b27e55c
   */
  conversationId?: string;
  dsReport?: string;
  dsReportTitles?: string[];
  /**
   * @remarks
   * The reason for ending the session. Valid values:
   * 1. Normal completion.
   * 2. Hangup by the bot after unrecognized input.
   * 3. Hangup due to silence timeout.
   * 4. Hangup by the user after unrecognized input.
   * 5. Hangup by the user without a reason.
   * 6. Transfer to a human agent due to matched intent.
   * 7. Transfer to a human agent after unrecognized input.
   * 8. No interaction from the user.
   * 9. Interruption due to a system exception.
   * 10. Transfer to IVR due to matched intent.
   * 11. Transfer to IVR after unrecognized input.
   * 
   * @example
   * 1
   */
  endReason?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1582266750353
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether the last prompt was fully played before the session ended.
   * 
   * @example
   * true
   */
  hasLastPlaybackCompleted?: boolean;
  /**
   * @remarks
   * Specifies whether the session was transferred to a human agent.
   * 
   * @example
   * false
   */
  hasToAgent?: boolean;
  /**
   * @remarks
   * The number of conversation rounds.
   * 
   * @example
   * 2
   */
  rounds?: number;
  /**
   * @remarks
   * Specifies whether the sandbox mode is enabled.
   * 
   * @example
   * true
   */
  sandBox?: boolean;
  /**
   * @remarks
   * The skill group.
   * 
   * @example
   * skg-123
   */
  skillGroup?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1641625694286
   */
  startTime?: number;
  /**
   * @remarks
   * The text-to-speech (TTS) voice used for the call.
   * 
   * @example
   * cosyvoice-v3-flash:longanyang
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      abTestName: 'AbTestName',
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
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abTestName: 'string',
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
      voice: 'string',
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
   * The list of sessions.
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
   * The total number of entries.
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

