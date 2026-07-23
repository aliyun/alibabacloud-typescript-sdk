// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShoppingAssistantRequestContents extends $dara.Model {
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Recommend some light-colored long-sleeve shirts suitable for spring, budget under 300
   */
  text?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShoppingAssistantRequestInputMessageContent extends $dara.Model {
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Recommend some light-colored long-sleeve shirts suitable for spring, budget under 300
   */
  text?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShoppingAssistantRequestInputMessage extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  content?: ShoppingAssistantRequestInputMessageContent[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ShoppingAssistantRequestInputMessageContent },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShoppingAssistantRequest extends $dara.Model {
  /**
   * @remarks
   * The additional configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The contents.
   */
  contents?: ShoppingAssistantRequestContents;
  /**
   * @remarks
   * The conversation ID. This parameter is not yet effective.
   * 
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  conversationId?: string;
  /**
   * @remarks
   * **The environment.**
   * 
   * @example
   * Prod: productionPre: pre-release.
   */
  environment?: string;
  /**
   * @remarks
   * The input message.
   */
  inputMessage?: ShoppingAssistantRequestInputMessage;
  /**
   * @remarks
   * **The instance ID.**
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh/en
   */
  language?: string;
  /**
   * @remarks
   * **The scene ID.**
   * 
   * @example
   * ai_shopping
   */
  sceneId?: string;
  /**
   * @remarks
   * **The service ID.**
   * 
   * @example
   * ServiceId.
   */
  serviceId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  sessionId?: string;
  /**
   * @remarks
   * user id。
   * 
   * @example
   * 0001
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      contents: 'Contents',
      conversationId: 'ConversationId',
      environment: 'Environment',
      inputMessage: 'InputMessage',
      instanceId: 'InstanceId',
      language: 'Language',
      sceneId: 'SceneId',
      serviceId: 'ServiceId',
      sessionId: 'SessionId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      contents: ShoppingAssistantRequestContents,
      conversationId: 'string',
      environment: 'string',
      inputMessage: ShoppingAssistantRequestInputMessage,
      instanceId: 'string',
      language: 'string',
      sceneId: 'string',
      serviceId: 'string',
      sessionId: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.contents && typeof (this.contents as any).validate === 'function') {
      (this.contents as any).validate();
    }
    if(this.inputMessage && typeof (this.inputMessage as any).validate === 'function') {
      (this.inputMessage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

