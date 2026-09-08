// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterceptCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @remarks
   * The call type of the channel.
   * 
   * @example
   * INTERCEPT
   */
  callType?: string;
  /**
   * @remarks
   * 话务通道标志。
   * 
   * @example
   * 无
   */
  channelFlags?: string;
  /**
   * @remarks
   * 话务通道 ID。
   * 
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
   */
  channelId?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_CallType_enumValueTitles_COACH]Coaching
   * 
   * @example
   * ANSWERED
   */
  channelState?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_CallType_enumValueTitles_BARGE]Barge-in
   * 
   * @example
   * 1390501****
   */
  destination?: string;
  /**
   * @remarks
   * An auto-incremented ID assigned by the system. Customers do not need to concern themselves with this value.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * 通话 ID。
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * 话务通道的主叫方。
   * 
   * @example
   * 0830019****
   */
  originator?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_CallType_type]string
   * 
   * @example
   * 1390501****
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * 话务通道的挂断原因，表示当前话务通道为什么会被挂断，取值来自 SIP 协议中定义的响应码，请客户参考 SIP 协议分析挂断原因。
   * 
   * @example
   * 404 - No destination
   */
  releaseReason?: string;
  /**
   * @remarks
   * 话务通道关联的技能组 ID，呼入场景下，关联的技能组 ID 由 IVR 中转人工模块配置的技能组决定，呼出场景下，关联的技能组 ID 为座席签入的第一个技能组的 ID。
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * 话务通道最近一次状态变化的时间戳，格式是 Unix 时间戳，单位毫秒。
   * 
   * @example
   * 1609138903315
   */
  timestamp?: number;
  /**
   * @remarks
   * 话务通道关联的坐席的分机号。
   * 
   * @example
   * 8032****
   */
  userExtension?: string;
  /**
   * @remarks
   * 话务通道关联的坐席 ID，如果是客户的话务通道，该字段为空。
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataCallContext extends $dara.Model {
  /**
   * @remarks
   * The call type of the channel.
   * 
   * @example
   * INTERCEPT
   */
  callType?: string;
  /**
   * @remarks
   * The list of channels.
   */
  channelContexts?: InterceptCallResponseBodyDataCallContextChannelContexts[];
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
   * The call ID.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': InterceptCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelContexts)) {
      $dara.Model.validateArray(this.channelContexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code, which can be either System-defined or Custom-defined. System-defined break codes include: Warm-up (temporary break state after an agent is published and before becoming idle), RingingTimeout (break caused by agent ringing timeout), and RejectCall (break caused by agent call rejection). There are no restrictions on Custom-defined status codes, and customers can define them according to their business needs.
   * 
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @remarks
   * Device ID, which is the identity ID of a browser-based Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
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
   * The time when the last heartbeat was received from the agent, formatted as a UNIX timestamp in milliseconds.
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
   * Call ID.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * The agent\\"s personal phone number.
   * 
   * @example
   * 1324730****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the agent is in outbound-only mode.
   * 
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * The time when the agent was most recently reserved. Being reserved means an incoming call will be assigned to the agent shortly. The format is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1609136956378
   */
  reserved?: number;
  /**
   * @remarks
   * List of skill group IDs that the agent has signed into.
   */
  signedSkillGroupIdList?: string[];
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * Agent status.
   * 
   * @example
   * TALKING
   */
  userState?: string;
  /**
   * @remarks
   * Work mode.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
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

export class InterceptCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call context environment.
   */
  callContext?: InterceptCallResponseBodyDataCallContext;
  /**
   * @remarks
   * Agent context environment.
   */
  userContext?: InterceptCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: InterceptCallResponseBodyDataCallContext,
      userContext: InterceptCallResponseBodyDataUserContext,
    };
  }

  validate() {
    if(this.callContext && typeof (this.callContext as any).validate === 'function') {
      (this.callContext as any).validate();
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

export class InterceptCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * 响应码。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: InterceptCallResponseBodyData;
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
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: InterceptCallResponseBodyData,
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

