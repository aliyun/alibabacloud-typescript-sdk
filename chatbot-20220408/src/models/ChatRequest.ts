// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique chatbot identifier (chatbot ID). Log on to the Chatbot console and navigate to Chatbot Details > Session Interface to view the chatbot instance information and obtain the instance ID.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent name in the dialog flow. If this name is specified, the chatbot directly enters this intent for Q&A.
   * 
   * @example
   * CheckWeatherIntent
   */
  intentName?: string;
  /**
   * @remarks
   * The ID of a knowledge title in the knowledge base. If this ID is specified, the chatbot directly returns the answer for the specified knowledge title.
   * 
   * @example
   * 30002406051
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The array of perspective codes, which is used to call answers from different perspectives under the same knowledge title. Example: Perspective=["FZJBY3raWr"]. When using the SDK, use the parameters defined in the SDK.
   */
  perspective?: string[];
  /**
   * @remarks
   * Specifies whether to use the test or production environment. Default value: false (production environment). Valid values:
   * - true: Test environment. This is for testing only. Using it in production may cause instability and QPS throttling.
   * - false: Production environment.
   * 
   * @example
   * true
   */
  sandBox?: boolean;
  /**
   * @remarks
   * The visitor ID, which identifies the user in the current session.
   * 
   * @example
   * custumer_123456
   */
  senderId?: string;
  /**
   * @remarks
   * The nickname of the visitor in the current session.
   * 
   * @example
   * User123456
   */
  senderNick?: string;
  /**
   * @remarks
   * The session ID, which identifies a visitor\\"s session and maintains context information. For a new visitor, you do not need to pass this field when calling the Chat operation for the first time. The chatbot starts a session and returns the SessionId in the response of the Chat operation. For subsequent conversation turns of the visitor, pass the SessionId of the current session when calling the Chat operation so that the chatbot can continue the conversation based on the SessionId. Maximum length: 64 characters.
   * 
   * @example
   * 9c6ebdc6e66f46ecadab3434314f6959
   */
  sessionId?: string;
  /**
   * @remarks
   * The input from the chatbot visitor.
   * 
   * @example
   * How is the weather today?
   */
  utterance?: string;
  /**
   * @remarks
   * A JSON-formatted set of user-defined parameters that can be passed to various dialog engines.
   * 
   * @example
   * {"phone":123456789}
   */
  vendorParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentName: 'IntentName',
      knowledgeId: 'KnowledgeId',
      perspective: 'Perspective',
      sandBox: 'SandBox',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentName: 'string',
      knowledgeId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      sandBox: 'boolean',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: 'string',
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

