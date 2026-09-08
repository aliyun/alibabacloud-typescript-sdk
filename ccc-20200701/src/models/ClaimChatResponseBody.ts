// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClaimChatResponseBodyDataChatContexts extends $dara.Model {
  /**
   * @remarks
   * Network service channel ID.
   * 
   * @example
   * 226****-cbb6-****-8fea-1e71baf7bfa7
   */
  accessChannelId?: string;
  /**
   * @remarks
   * Network service channel name.
   * 
   * @example
   * 测试渠道
   */
  accessChannelName?: string;
  /**
   * @remarks
   * Network service channel type.
   * 
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @remarks
   * Whether the session has been assigned to an agent.
   * 
   * @example
   * true
   */
  beingAssigned?: boolean;
  /**
   * @remarks
   * Call variables.
   * 
   * @example
   * 无
   */
  callVariables?: string;
  /**
   * @remarks
   * Session type.
   * 
   * @example
   * INBOUND
   */
  chatType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelName: 'AccessChannelName',
      accessChannelType: 'AccessChannelType',
      beingAssigned: 'BeingAssigned',
      callVariables: 'CallVariables',
      chatType: 'ChatType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelName: 'string',
      accessChannelType: 'string',
      beingAssigned: 'boolean',
      callVariables: 'string',
      chatType: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClaimChatResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code.
   * 
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * CCC-169.254.165.2-browser125.0.0-bs48b41903450e6c8
   */
  deviceId?: string;
  /**
   * @remarks
   * Device state.
   * 
   * @example
   * ONLINE
   */
  deviceState?: string;
  /**
   * @remarks
   * Agent extension number.
   * 
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @remarks
   * Time of the agent\\"s last heartbeat, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1609136956378
   */
  heartbeat?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @remarks
   * Agent\\"s personal phone number. Not applicable for chat scenarios.
   * 
   * @example
   * 18******102
   */
  mobile?: string;
  /**
   * @remarks
   * Outbound call scenario only. Not applicable for chat services.
   * 
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * Time when the agent was last reserved, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * false
   */
  reserved?: number;
  /**
   * @remarks
   * List of skill group IDs the agent is signed into.
   */
  signedSkillGroupIdList?: string[];
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * userId@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * Agent state.
   * 
   * Enumerated values:
   * 
   * - READY: Idle.
   * 
   * - WORKING: Post-call processing.
   * 
   * - BREAK: Break.
   * 
   * - OFFLINE: Offline.
   * 
   * - TALKING: Chatting.
   * 
   * - RINGING: Incoming chat.
   * 
   * @example
   * TALKING
   */
  userState?: string;
  /**
   * @remarks
   * Work mode. Not applicable for chat scenarios.
   * 
   * Enumerated values:
   * 
   * - ON_SITE: On-site mode.
   * 
   * - OFF_SITE: Off-site mode.
   * 
   * - OFFICE_PHONE: Office phone mode.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.signedSkillGroupIdList)) {
      $dara.Model.validateArray(this.signedSkillGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClaimChatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Session context.
   */
  chatContexts?: ClaimChatResponseBodyDataChatContexts[];
  /**
   * @remarks
   * System auto-increment ID. Customers do not need to be concerned.
   * 
   * @example
   * 123456789
   */
  contextId?: number;
  /**
   * @remarks
   * Agent context.
   */
  userContext?: ClaimChatResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      chatContexts: 'ChatContexts',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatContexts: { 'type': 'array', 'itemType': ClaimChatResponseBodyDataChatContexts },
      contextId: 'number',
      userContext: ClaimChatResponseBodyDataUserContext,
    };
  }

  validate() {
    if(Array.isArray(this.chatContexts)) {
      $dara.Model.validateArray(this.chatContexts);
    }
    if(this.userContext && typeof (this.userContext as any).validate === 'function') {
      (this.userContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClaimChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ClaimChatResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * List of response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BC976D32-AC4C-4E0F-8AA9-F4BC6C4E2B3E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ClaimChatResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

