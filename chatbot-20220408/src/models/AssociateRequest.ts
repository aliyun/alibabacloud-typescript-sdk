// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. Obtain the key value from the business management page of the primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique identifier of the robot.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The perspective code, which is used to call answers from different perspectives under the same knowledge title. When assembling request parameters, pass the parameter in the format Perspective={perspective code}. For example: &Perspective=["FZJBY3raWr"]. When using the SDK, use the parameters defined in the SDK. Currently, only one perspective answer can be called.
   * 
   * @example
   * ["qyzzVfyFfa"]
   */
  perspective?: string[];
  /**
   * @remarks
   * The number of recommended questions, ranging from 1 to 10. This parameter takes effect only when recommendations are returned. The number of returned recommended questions is less than or equal to RecommendNum.
   * 
   * @example
   * 8
   */
  recommendNum?: number;
  /**
   * @remarks
   * The session ID, which is used to identify a visitor\\"s session and maintain context information. For a new visitor, you do not need to pass this field when calling the Chat operation for the first time. The robot starts a session and returns the SessionId of the session in the response of the Chat operation. For subsequent conversation turns of the visitor, pass the SessionId of the current session when calling the Chat operation so that the robot can continue the conversation based on the SessionId.
   * 
   * @example
   * 7c3cec23cc8940bc9db4a318c8f4f0aa
   */
  sessionId?: string;
  /**
   * @remarks
   * The user utterance.
   * 
   * @example
   * Housing fund withdrawal
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

