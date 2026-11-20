// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalModelInferenceRequestCommunicationUserInfo extends $dara.Model {
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
   * The business user identifier in the customer application. This value is provided based on the user binding or delegation configuration of the business gateway credentials.
   * 
   * @example
   * user-001
   */
  userId?: string;
  /**
   * @remarks
   * The business user IP address provided by the customer.
   * 
   * @example
   * 192.0.2.10
   */
  userIp?: string;
  /**
   * @remarks
   * The business user name provided by the customer.
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

export class MedicalModelInferenceRequestCommunication extends $dara.Model {
  /**
   * @remarks
   * The business application ID. This parameter is required when no fixed application is configured.
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
   * The host of the session history. This value must be the same as the value specified in the first call of the session.
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
   * The customer session ID, which is reused for continued conversations.
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
  userInfo?: MedicalModelInferenceRequestCommunicationUserInfo;
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
      userInfo: MedicalModelInferenceRequestCommunicationUserInfo,
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

export class MedicalModelInferenceRequestDataMessages extends $dara.Model {
  /**
   * @remarks
   * The string or array of multimodal content blocks.
   * 
   * This parameter is required.
   * 
   * @example
   * What does hemoglobin mean in the physical examination report?
   */
  content?: any;
  /**
   * @remarks
   * The sender of the message. A value of user indicates the business user, and a value of assistant indicates the assistant.
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

export class MedicalModelInferenceRequestData extends $dara.Model {
  /**
   * @remarks
   * The list of messages arranged in conversation order. When hosted by the client, this list can include the session history provided by the client.
   * 
   * This parameter is required.
   */
  messages?: MedicalModelInferenceRequestDataMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': MedicalModelInferenceRequestDataMessages },
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

export class MedicalModelInferenceRequestParams extends $dara.Model {
  /**
   * @remarks
   * Required. The model selector for this medical API is med_qwen4-vl-125.
   * 
   * This parameter is required.
   * 
   * @example
   * med_qwen4-vl-125
   */
  modelName?: string;
  /**
   * @remarks
   * The response mode. A value of false indicates that a complete JSON object is returned. A value of true indicates that Server-Sent Events (SSE) is returned.
   * 
   * @example
   * false
   */
  responseStreaming?: boolean;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      responseStreaming: 'responseStreaming',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
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

export class MedicalModelInferenceRequest extends $dara.Model {
  /**
   * @remarks
   * The association ID, session, and application identity information for the current request.
   * 
   * This parameter is required.
   */
  communication?: MedicalModelInferenceRequestCommunication;
  /**
   * @remarks
   * The business data that carries the messages for the current request.
   * 
   * This parameter is required.
   */
  data?: MedicalModelInferenceRequestData;
  /**
   * @remarks
   * The extensible JSON object. The modelName parameter is required and its value must be an activated model selector. The directAgent parameter cannot be passed.
   * 
   * This parameter is required.
   */
  params?: MedicalModelInferenceRequestParams;
  static names(): { [key: string]: string } {
    return {
      communication: 'communication',
      data: 'data',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communication: MedicalModelInferenceRequestCommunication,
      data: MedicalModelInferenceRequestData,
      params: MedicalModelInferenceRequestParams,
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

