// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationsResponseBodyConversations extends $dara.Model {
  /**
   * @example
   * 1582183381000
   */
  beginTime?: number;
  /**
   * @example
   * 02811111111
   */
  callingNumber?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  conversationId?: string;
  /**
   * @example
   * 8
   */
  effectiveAnswerCount?: number;
  /**
   * @example
   * 1582183481000
   */
  endTime?: number;
  /**
   * @example
   * AAA
   */
  skillGroupId?: string;
  /**
   * @example
   * true
   */
  transferredToAgent?: boolean;
  /**
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
  conversations?: QueryConversationsResponseBodyConversations[];
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
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
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

