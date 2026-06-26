// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConversationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the conversation started. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582103260434
   */
  beginTime?: number;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 138106*****
   */
  callingNumber?: string;
  /**
   * @remarks
   * The ID of the conversation.
   * 
   * @example
   * 2d5aa451-661f-4f08-b0c4-28eec78decc4
   */
  conversationId?: string;
  /**
   * @remarks
   * The number of effective answers.
   * 
   * @example
   * 8
   */
  effectiveAnswerCount?: number;
  /**
   * @remarks
   * The time when the conversation ended. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582103299434
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * ABABCBAC
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Indicates whether an agent transfer occurred.
   * 
   * @example
   * true
   */
  transferredToAgent?: boolean;
  /**
   * @remarks
   * The number of user utterances.
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

