// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * good
   */
  feedback?: string;
  /**
   * @example
   * 这个回答很棒
   */
  feedbackContent?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * 5ca40988-4f99-47ad-ac96-9060d0f81db9
   */
  messageId?: string;
  /**
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

