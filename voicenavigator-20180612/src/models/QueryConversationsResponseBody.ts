// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationsResponseBodyConversations extends $dara.Model {
  /**
   * @remarks
   * The start time. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1582183381000
   */
  beginTime?: number;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 02811111111
   */
  callingNumber?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  conversationId?: string;
  /**
   * @remarks
   * The effective answer count.
   * 
   * @example
   * 8
   */
  effectiveAnswerCount?: number;
  /**
   * @remarks
   * The end time. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1582183481000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * AAA
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Whether the conversation was transferred to an agent.
   * 
   * @example
   * true
   */
  transferredToAgent?: boolean;
  /**
   * @remarks
   * The user utterance count.
   * 
   * @example
   * 10
   */
  userUtteranceCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      effectiveAnswerCount: 'EffectiveAnswerCount',
      endTime: 'EndTime',
      skillGroupId: 'SkillGroupId',
      transferredToAgent: 'TransferredToAgent',
      userUtteranceCount: 'UserUtteranceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      callingNumber: 'string',
      conversationId: 'string',
      effectiveAnswerCount: 'number',
      endTime: 'number',
      skillGroupId: 'string',
      transferredToAgent: 'boolean',
      userUtteranceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The conversation list.
   */
  conversations?: QueryConversationsResponseBodyConversations[];
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
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of conversation records.
   * 
   * @example
   * 100
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
      conversations: { 'type': 'array', 'itemType': QueryConversationsResponseBodyConversations },
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

