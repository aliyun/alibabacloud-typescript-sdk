// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class MedicalAgentChatRequestCommunicationUserInfo extends $dara.Model {
  /**
   * @remarks
   * The terminal device identifier provided by the customer.
   * 
   * @example
   * demo-device-001
   */
  deviceId?: string;
  /**
   * @remarks
   * The business user identifier in the customer application. This is provided based on the user binding or delegation configuration of the business gateway credentials.
   * 
   * @example
   * user-001
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
   * The name of the business user provided by the customer.
   * 
   * @example
   * Sample user
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

export class MedicalAgentChatRequestCommunication extends $dara.Model {
  /**
   * @remarks
   * The business application ID. This parameter is required if no fixed application is configured.
   * 
   * @example
   * your-app-id
   */
  appId?: string;
  /**
   * @remarks
   * The optional business scenario tag.
   * 
   * @example
   * health_qa
   */
  appScene?: string;
  /**
   * @remarks
   * The session history owner. This value must be the same as the one used in the first call of the session.
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT
   */
  historyOwner?: string;
  /**
   * @remarks
   * The customer business request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * med-req-001
   */
  requestId?: string;
  /**
   * @remarks
   * The customer session ID. Reuse this ID to continue the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * med-session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business user and device information provided by the customer. Identity fields are passed based on the configuration of the business gateway credentials.
   */
  userInfo?: MedicalAgentChatRequestCommunicationUserInfo;
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
      userInfo: MedicalAgentChatRequestCommunicationUserInfo,
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

export class MedicalAgentChatRequestDataMessages extends $dara.Model {
  /**
   * @remarks
   * The string or array of multimodal content blocks.
   * 
   * This parameter is required.
   * 
   * @example
   * What does the hemoglobin level in the physical examination report mean?
   */
  content?: any;
  /**
   * @remarks
   * The sender of the message. A value of user indicates the business user, and assistant indicates the assistant.
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

export class MedicalAgentChatRequestData extends $dara.Model {
  /**
   * @remarks
   * The list of messages arranged in conversation order. When the history owner is CLIENT, this list can include the session history provided by the client.
   * 
   * This parameter is required.
   */
  messages?: MedicalAgentChatRequestDataMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': MedicalAgentChatRequestDataMessages },
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

export class MedicalAgentChatRequestParams extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable deep thinking for the medical agent.
   * 
   * @example
   * false
   */
  deepthink?: string;
  /**
   * @remarks
   * This parameter can be omitted. If explicitly provided, the value must be med_qa.
   * 
   * @example
   * med_qa
   */
  directAgent?: string;
  /**
   * @remarks
   * The response mode. A value of false returns a complete JSON response, and true returns Server-Sent Events (SSE).
   * 
   * @example
   * false
   */
  responseStreaming?: boolean;
  static names(): { [key: string]: string } {
    return {
      deepthink: 'deepthink',
      directAgent: 'directAgent',
      responseStreaming: 'responseStreaming',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepthink: 'string',
      directAgent: 'string',
      responseStreaming: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatRequest extends $dara.Model {
  /**
   * @remarks
   * The correlation ID, session, and application identity information for this request.
   * 
   * This parameter is required.
   */
  communication?: MedicalAgentChatRequestCommunication;
  /**
   * @remarks
   * The business data that carries the message for this request.
   * 
   * This parameter is required.
   */
  data?: MedicalAgentChatRequestData;
  /**
   * @remarks
   * The optional extensible JSON object. The directAgent parameter can be omitted or set to med_qa. Other parameters are passed based on the parameters supported by the medical agent.
   */
  params?: MedicalAgentChatRequestParams;
  static names(): { [key: string]: string } {
    return {
      communication: 'communication',
      data: 'data',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communication: MedicalAgentChatRequestCommunication,
      data: MedicalAgentChatRequestData,
      params: MedicalAgentChatRequestParams,
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

