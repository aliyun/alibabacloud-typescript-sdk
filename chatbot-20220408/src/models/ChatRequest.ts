// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If omitted, the request is routed to the default business space. You can get this key from the **Business Management** page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique ID of the chatbot instance. To get this ID, log in to the Alibaba Cloud Chatbot console and go to **Chatbot Details** > **Session API**.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of an intent within a dialog flow. If specified, the chatbot directly activates this intent to process the user\\"s request.
   * 
   * @example
   * 查天气意图
   */
  intentName?: string;
  /**
   * @remarks
   * The ID of an entry in the knowledge base. If you specify this ID, the chatbot directly returns the corresponding answer.
   * 
   * @example
   * 30002406051
   */
  knowledgeId?: string;
  /**
   * @remarks
   * An array of perspective codes. Use these codes to retrieve answers from different perspectives for the same knowledge entry. Example: `Perspective=["FZJBY3raWr"]`. When using an SDK, refer to its parameter definitions.
   */
  perspective?: string[];
  /**
   * @remarks
   * Specifies the environment to use. The default value is `false`, which indicates the production environment.
   * 
   * - `true`: The test environment. This environment is for testing only. Do not use it in production due to potential instability and QPS limitations.
   * 
   * - `false`: The production environment.
   * 
   * @example
   * true
   */
  sandBox?: boolean;
  /**
   * @remarks
   * The unique ID of the user in the current session.
   * 
   * @example
   * custumer_123456
   */
  senderId?: string;
  /**
   * @remarks
   * The nickname of the user in the current session.
   * 
   * @example
   * 用户123456
   */
  senderNick?: string;
  /**
   * @remarks
   * The session ID, used to identify a user session and maintain context. For a new user, omit this parameter in the first call to the `Chat` API. The chatbot automatically starts a session and returns the `SessionId` in the response. To continue the conversation, include this `SessionId` in all subsequent requests. The maximum length is 64 characters.
   * 
   * @example
   * 9c6ebdc6e66f46ecadab3434314f6959
   */
  sessionId?: string;
  /**
   * @remarks
   * The user\\"s input text.
   * 
   * @example
   * 今天天气怎么样？
   */
  utterance?: string;
  /**
   * @remarks
   * A JSON-formatted string containing custom parameters to pass to various dialog engines.
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

