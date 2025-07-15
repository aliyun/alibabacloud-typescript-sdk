// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClaimChatResponseBodyDataChatContexts extends $dara.Model {
  /**
   * @example
   * 226****-cbb6-****-8fea-1e71baf7bfa7
   */
  accessChannelId?: string;
  accessChannelName?: string;
  /**
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @example
   * true
   */
  beingAssigned?: boolean;
  callVariables?: string;
  /**
   * @example
   * INBOUND
   */
  chatType?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
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
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @example
   * CCC-169.254.165.2-browser125.0.0-bs48b41903450e6c8
   */
  deviceId?: string;
  /**
   * @example
   * ONLINE
   */
  deviceState?: string;
  /**
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @example
   * 1609136956378
   */
  heartbeat?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * 18******102
   */
  mobile?: string;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @example
   * false
   */
  reserved?: number;
  signedSkillGroupIdList?: string[];
  /**
   * @example
   * userId@ccc-test
   */
  userId?: string;
  /**
   * @example
   * TALKING
   */
  userState?: string;
  /**
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
  chatContexts?: ClaimChatResponseBodyDataChatContexts[];
  /**
   * @example
   * 123456789
   */
  contextId?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: ClaimChatResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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

