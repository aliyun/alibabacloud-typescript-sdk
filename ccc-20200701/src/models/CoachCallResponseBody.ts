// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CoachCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @remarks
   * The call type of the channel.
   * 
   * @example
   * COACH
   */
  callType?: string;
  /**
   * @remarks
   * Channel flags.
   * 
   * @example
   * COACHING
   */
  channelFlags?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
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
   * The called party of the call channel.
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
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * The originator of the channel.
   * 
   * @example
   * 0830019****
   */
  originator?: string;
  /**
   * @remarks
   * The party that initiated the hang-up of the call channel, indicating who first terminated the call.
   * 
   * @example
   * 1390501****
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The reason for releasing the channel, indicating why the current channel was disconnected. The value corresponds to response codes defined in the SIP protocol. Customers should refer to the SIP protocol to analyze the disconnection reason.
   * 
   * @example
   * 404 - No destination
   */
  releaseReason?: string;
  /**
   * @remarks
   * The skill group ID associated with the channel. In inbound scenarios, the associated skill group ID is determined by the agent transfer module configured in the IVR. In outbound scenarios, the associated skill group ID is the first skill group ID that the agent signed into.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating the most recent status change of the channel, in milliseconds.
   * 
   * @example
   * 1609138903315
   */
  timestamp?: number;
  /**
   * @remarks
   * The extension number of the agent associated with the channel.
   * 
   * @example
   * 8032****
   */
  userExtension?: string;
  /**
   * @remarks
   * The agent ID associated with the channel. This field is empty for a Customer channel.
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

export class CoachCallResponseBodyDataCallContext extends $dara.Model {
  /**
   * @remarks
   * Call type.
   * 
   * @example
   * COACH
   */
  callType?: string;
  /**
   * @remarks
   * List of call channels.
   */
  channelContexts?: CoachCallResponseBodyDataCallContextChannelContexts[];
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
      channelContexts: { 'type': 'array', 'itemType': CoachCallResponseBodyDataCallContextChannelContexts },
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

export class CoachCallResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code, which can be either System-defined or Custom-defined. System-defined break codes include: Warm-up (temporary break state after an agent is published and before becoming idle), RingingTimeout (break caused by agent ringing timeout), and RejectCall (break caused by agent call rejection). There are no restrictions on Custom-defined status codes; customers can define them according to their business needs.
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
   * The status of the SIP phone device. If the SIP phone is not registered, the status is UNREGISTERED (unregistered). If the SIP phone was previously registered but is currently offline, the status is OFFLINE (offline). If the SIP phone is registered and online, the status is ONLINE (online).
   * 
   * @example
   * UNREGISTERED
   */
  deviceState?: string;
  /**
   * @remarks
   * The agent\\"s extension number.
   * 
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @remarks
   * The UNIX timestamp in milliseconds of the last heartbeat received from the agent.
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
   * The UNIX timestamp in milliseconds when the agent was most recently reserved. Being reserved means an incoming call will be assigned to the agent shortly.
   * 
   * @example
   * 1609136956370
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

export class CoachCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call context environment.
   */
  callContext?: CoachCallResponseBodyDataCallContext;
  /**
   * @remarks
   * Agent context environment.
   */
  userContext?: CoachCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: CoachCallResponseBodyDataCallContext,
      userContext: CoachCallResponseBodyDataUserContext,
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

export class CoachCallResponseBody extends $dara.Model {
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
  data?: CoachCallResponseBodyData;
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
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
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
      data: CoachCallResponseBodyData,
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

