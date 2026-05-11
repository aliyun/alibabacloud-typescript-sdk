// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConversationResponseBody extends $dara.Model {
  /**
   * @example
   * 1582103260434
   */
  beginTime?: number;
  /**
   * @example
   * 138106*****
   */
  callingNumber?: string;
  /**
   * @example
   * 2d5aa451-661f-4f08-b0c4-28eec78decc4
   */
  conversationId?: string;
  /**
   * @example
   * 8
   */
  effectiveAnswerCount?: number;
  /**
   * @example
   * 1582103299434
   */
  endTime?: number;
  /**
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @example
   * ABABCBAC
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

