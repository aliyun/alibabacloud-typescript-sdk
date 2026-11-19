// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatRequestCommunicationUserInfo extends $dara.Model {
  /**
   * @remarks
   * The terminal device identifier provided by the customer.
   * 
   * @example
   * device-example-001
   */
  deviceId?: string;
  /**
   * @remarks
   * The business user identifier within the customer application, provided based on the user binding or delegation configuration of the business gateway credentials.
   * 
   * @example
   * example-user-001
   */
  userId?: string;
  /**
   * @remarks
   * The IP address of the business user provided by the customer.
   * 
   * @example
   * 192.0.2.10
   */
  userIp?: string;
  /**
   * @remarks
   * The username of the business user provided by the customer.
   * 
   * @example
   * 示例用户
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      userId: 'userId',
      userIp: 'userIp',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      userId: 'string',
      userIp: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequestCommunication extends $dara.Model {
  /**
   * @remarks
   * The application ID provided based on the gateway credential identity configuration.
   * 
   * @example
   * example-app
   */
  appId?: string;
  /**
   * @remarks
   * The optional business scene marker.
   * 
   * @example
   * travel
   */
  appScene?: string;
  /**
   * @remarks
   * The owner of the session history, which must be consistent with the first call of the session.
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT
   */
  historyOwner?: string;
  /**
   * @remarks
   * The business request ID of the customer.
   * 
   * This parameter is required.
   * 
   * @example
   * req-example-001
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID of the customer, which is reused for continued chats.
   * 
   * This parameter is required.
   * 
   * @example
   * session-example-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business user and device information provided by the customer. Identity fields are passed based on the configuration of the business gateway credentials.
   */
  userInfo?: ChatRequestCommunicationUserInfo;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appScene: 'appScene',
      historyOwner: 'historyOwner',
      requestId: 'requestId',
      sessionId: 'sessionId',
      userInfo: 'userInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appScene: 'string',
      historyOwner: 'string',
      requestId: 'string',
      sessionId: 'string',
      userInfo: ChatRequestCommunicationUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequestDataMessages extends $dara.Model {
  /**
   * @remarks
   * The text or an array of supported multimodal content blocks.
   * 
   * This parameter is required.
   * 
   * @example
   * 请介绍杭州西湖。
   */
  content?: any;
  /**
   * @remarks
   * The sender of the message. user indicates the business user, and assistant indicates the assistant.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'any',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequestData extends $dara.Model {
  /**
   * @remarks
   * The list of messages arranged in conversational order. When history is managed by the client, it can include the session history provided by the client.
   * 
   * This parameter is required.
   */
  messages?: ChatRequestDataMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ChatRequestDataMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequestParams extends $dara.Model {
  /**
   * @remarks
   * The deep thinking switch.
   * 
   * @example
   * true
   */
  deepthink?: string;
  /**
   * @remarks
   * The agent selector for the current turn.
   * 
   * @example
   * study_qa
   */
  directAgent?: string;
  /**
   * @remarks
   * The mixed text and image output switch.
   * 
   * @example
   * true
   */
  enableTextImageMixed?: boolean;
  /**
   * @remarks
   * The maximum number of output tokens for the model.
   * 
   * @example
   * 512
   */
  maxTokens?: number;
  /**
   * @remarks
   * The HTTP audio output switch.
   */
  outputAudio?: boolean;
  /**
   * @remarks
   * Specifies whether to use Server-Sent Events (SSE) for conversation responses.
   */
  responseStreaming?: boolean;
  /**
   * @remarks
   * The model sampling temperature.
   * 
   * @example
   * 0.7
   */
  temperature?: number;
  /**
   * @remarks
   * The nucleus sampling probability for the model.
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      deepthink: 'deepthink',
      directAgent: 'directAgent',
      enableTextImageMixed: 'enableTextImageMixed',
      maxTokens: 'maxTokens',
      outputAudio: 'outputAudio',
      responseStreaming: 'responseStreaming',
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepthink: 'string',
      directAgent: 'string',
      enableTextImageMixed: 'boolean',
      maxTokens: 'number',
      outputAudio: 'boolean',
      responseStreaming: 'boolean',
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * The correlation ID, session, and application identity information for the current request.
   * 
   * This parameter is required.
   */
  communication?: ChatRequestCommunication;
  /**
   * @remarks
   * The business data that carries the messages for the current request.
   * 
   * This parameter is required.
   */
  data?: ChatRequestData;
  /**
   * @remarks
   * An optional extensible JSON object. responseStreaming is an optional boolean value. A value of false returns a complete JSON response, and a value of true returns a Server-Sent Events (SSE) response.
   */
  params?: ChatRequestParams;
  static names(): { [key: string]: string } {
    return {
      communication: 'communication',
      data: 'data',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communication: ChatRequestCommunication,
      data: ChatRequestData,
      params: ChatRequestParams,
    };
  }

  validate() {
    if(this.communication && typeof (this.communication as any).validate === 'function') {
      (this.communication as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

