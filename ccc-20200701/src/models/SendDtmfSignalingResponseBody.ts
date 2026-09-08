// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendDtmfSignalingResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @remarks
   * The call type of the channel.
   * 
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @remarks
   * Channel flags.
   * 
   * @example
   * MONITORING
   */
  channelFlags?: string;
  /**
   * @remarks
   * The voice channel ID.
   * 
   * @example
   * ch:user:131888****->8001****:1609234221870:job-6573574060089****
   */
  channelId?: string;
  /**
   * @remarks
   * The status of the call channel.
   * 
   * @example
   * ANSWERED
   */
  channelState?: string;
  /**
   * @remarks
   * Callee of the call channel.
   * 
   * @example
   * 8001****
   */
  destination?: string;
  /**
   * @remarks
   * An auto-increment ID assigned by the system. Customers do not need to concern themselves with this value.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @remarks
   * The originator of the channel.
   * 
   * @example
   * 0101234****
   */
  originator?: string;
  /**
   * @remarks
   * The party that initiated the release of the call channel, indicating who first hung up the call.
   * 
   * @example
   * 无
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The release reason for the voice channel, indicating why the current voice channel was disconnected. The value corresponds to response codes defined in the SIP protocol. Customers should refer to the SIP protocol to analyze the disconnection reason.
   * 
   * @example
   * 无
   */
  releaseReason?: string;
  /**
   * @remarks
   * The skill group ID associated with the voice channel. In inbound scenarios, the associated skill group ID is determined by the skill group configured in the IVR transfer-to-agent module. In outbound scenarios, the associated skill group ID is the first skill group that the agent signed into.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The UNIX timestamp of the most recent status change of the voice channel, in milliseconds.
   * 
   * @example
   * 1609234222367
   */
  timestamp?: number;
  /**
   * @remarks
   * The extension number of the agent associated with the channel.
   * 
   * @example
   * 8001****
   */
  userExtension?: string;
  /**
   * @remarks
   * The agent ID associated with the channel. This field is empty if the channel belongs to a Customer.
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

export class SendDtmfSignalingResponseBodyDataCallContext extends $dara.Model {
  /**
   * @remarks
   * Call type.
   * 
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @remarks
   * List of call channels.
   */
  channelContexts?: SendDtmfSignalingResponseBodyDataCallContextChannelContexts[];
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
   * job-6573574060089****
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
      channelContexts: { 'type': 'array', 'itemType': SendDtmfSignalingResponseBodyDataCallContextChannelContexts },
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

export class SendDtmfSignalingResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code, which can be either System-defined or Custom-defined. System-defined break codes include: Warm-up (temporary break state after an agent is published and before becoming idle), RingingTimeout (break caused by agent ringing timeout), and RejectCall (break caused by agent rejecting a call). There are no restrictions on Custom-defined status codes; customers can define them according to their business needs.
   * 
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @remarks
   * Device ID, the identity ID of a browser-based Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * The agent\\"s extension number.
   * 
   * @example
   * 8001****
   */
  extension?: string;
  /**
   * @remarks
   * The time when the last heartbeat was received from the agent, in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1609234222375
   */
  heartbeat?: number;
  /**
   * @remarks
   * instance ID.
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
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @remarks
   * The agent\\"s personal phone number.
   * 
   * @example
   * 1390000****
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
   * The most recent time when the agent was reserved. Being reserved means an incoming call will be assigned to the agent shortly. The value is in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1609234221864
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

export class SendDtmfSignalingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call context environment.
   */
  callContext?: SendDtmfSignalingResponseBodyDataCallContext;
  /**
   * @remarks
   * Agent context environment.
   */
  userContext?: SendDtmfSignalingResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: SendDtmfSignalingResponseBodyDataCallContext,
      userContext: SendDtmfSignalingResponseBodyDataUserContext,
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

export class SendDtmfSignalingResponseBody extends $dara.Model {
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
  data?: SendDtmfSignalingResponseBodyData;
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
   * 842399EC-7D32-4472-AD08-9504C3F141FF
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
      data: SendDtmfSignalingResponseBodyData,
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

