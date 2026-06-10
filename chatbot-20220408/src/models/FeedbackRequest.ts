// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If this parameter is not set, the system uses the default business space. You can obtain the key from the business management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The feedback rating for the response. This parameter corresponds to `FeedbackType` in the session history API.
   * 
   * Enumerated values: \\"good\\" (a positive rating) and \\"bad\\" (a negative rating).
   * 
   * @example
   * good
   */
  feedback?: string;
  /**
   * @remarks
   * The detailed feedback content. You can provide this as a raw string or as a JSON string. If you use a JSON string, the \\"content\\" field corresponds to \\"FeedbackUserInfo\\" and the \\"feedbackLabels\\" field corresponds to \\"FeedbackLabels\\" in the session history.
   * 
   * @example
   * {
   *     "content": "我觉得这个答案不对，需要依据事实回答。",
   *     "feedbackLabels": [
   *         "存在事实性错误"
   *     ]
   * }
   */
  feedbackContent?: string;
  /**
   * @remarks
   * The unique identifier of the chatbot instance.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The unique identifier of a single message within the session.
   * 
   * @example
   * 5ca40988-4f99-47ad-ac96-9060d0f81db9
   */
  messageId?: string;
  /**
   * @remarks
   * The unique identifier for the session. The instant messaging (IM) system uses this ID to track the conversation.
   * 
   * @example
   * 7c3cec23cc8940bc9db4a318c8f4f0aa
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      feedback: 'Feedback',
      feedbackContent: 'FeedbackContent',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      feedback: 'string',
      feedbackContent: 'string',
      instanceId: 'string',
      messageId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

