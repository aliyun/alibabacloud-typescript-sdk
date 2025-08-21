// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * ["qyzzVfyFfa"]
   */
  perspective?: string[];
  /**
   * @example
   * 8
   */
  recommendNum?: number;
  /**
   * @example
   * 7c3cec23cc8940bc9db4a318c8f4f0aa
   */
  sessionId?: string;
  /**
   * @example
   * 公积金提取
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      perspective: 'Perspective',
      recommendNum: 'RecommendNum',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      recommendNum: 'number',
      sessionId: 'string',
      utterance: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.perspective)) {
      $dara.Model.validateArray(this.perspective);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

