// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The feedback type, which corresponds to the FeedbackType field in the session history API.
   * 
   * Valid values:
   * - good: Like.
   * - bad: Dislike.
   * 
   * @example
   * good
   */
  feedback?: string;
  /**
   * @remarks
   * The content of the like or dislike feedback. You can directly enter the feedback content or pass in a JSON string as shown in the example. The content field corresponds to FeedbackUserInfo in the session history, and feedbackLabels corresponds to FeedbackLabels in the session history.
   * 
   * @example
   * {
   *     "content": "I think this answer is incorrect. It should be based on facts.",
   *     "feedbackLabels": [
   *         "Contains factual errors"
   *     ]
   * }
   */
  feedbackContent?: string;
  /**
   * @remarks
   * The unique identifier of the chatbot.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID that uniquely identifies a single message in a session window.
   * 
   * @example
   * 5ca40988-4f99-47ad-ac96-9060d0f81db9
   */
  messageId?: string;
  /**
   * @remarks
   * The session ID that uniquely identifies an IM session.
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

