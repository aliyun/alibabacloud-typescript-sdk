// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchToConferenceResponseBodyDataCallContextChannelContexts extends $dara.Model {
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
   * The channel ID.
   * 
   * @example
   * ch:user:131888****->8001****:1609225718294:job-6538214103685****
   */
  channelId?: string;
  /**
   * @remarks
   * The status of the channel.
   * 
   * @example
   * NONE
   */
  channelState?: string;
  /**
   * @remarks
   * The called party of the channel.
   * 
   * @example
   * 8001****
   */
  destination?: string;
  /**
   * @remarks
   * An auto-increment ID assigned by the system. Customers do not need to concern themselves with this.
   * 
   * @example
   * 1
   */
  index?: number;
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
   * The originator of the channel.
   * 
   * @example
   * 1318888****
   */
  originator?: string;
  /**
   * @remarks
   * The party that initiated the release of the channel, indicating which party first hung up the call.
   * 
   * @example
   * 1390501****
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The reason for releasing the channel, indicating why the current channel was disconnected. The value corresponds to a response code defined in the SIP protocol. Customers should refer to the SIP protocol for Analysis of the release reason.
   * 
   * @example
   * 404 - No destination
   */
  releaseReason?: string;
  /**
   * @remarks
   * The skill group associated with this call. In inbound scenarios, the skill group is specified by the queue to which the call is routed in the IVR. In outbound scenarios, the skill group is the first one that the agent signs into.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating when the channel last changed status, in milliseconds.
   * 
   * @example
   * 1609255716900
   */
  timestamp?: number;
  /**
   * @remarks
   * Extension number of the agent associated with the channel.
   * 
   * @example
   * 8032****
   */
  userExtension?: string;
  /**
   * @remarks
   * Agent ID.
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

export class SwitchToConferenceResponseBodyDataCallContext extends $dara.Model {
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
  channelContexts?: SwitchToConferenceResponseBodyDataCallContextChannelContexts[];
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
      channelContexts: { 'type': 'array', 'itemType': SwitchToConferenceResponseBodyDataCallContextChannelContexts },
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

export class SwitchToConferenceResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code, which can be either System-defined or Custom-defined. System-defined break codes include: Warm-up (temporary break state after an agent is published and before becoming idle), RingingTimeout (break due to agent ringing timeout), and RejectCall (break due to agent call rejection). There are no restrictions on Custom-defined status codes; customers can define them according to their business needs.
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
   * Device status.
   * 
   * @example
   * false
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
   * The time when the last heartbeat from the agent was received, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * agent@ccc-test
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
   * List of skill group IDs that the agent has signed into.
   */
  signedSkillGroupIdList?: string[];
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * 1609136956378
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

export class SwitchToConferenceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call context environment.
   */
  callContext?: SwitchToConferenceResponseBodyDataCallContext;
  /**
   * @remarks
   * Agent context environment.
   */
  userContext?: SwitchToConferenceResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: SwitchToConferenceResponseBodyDataCallContext,
      userContext: SwitchToConferenceResponseBodyDataUserContext,
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

export class SwitchToConferenceResponseBody extends $dara.Model {
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
  data?: SwitchToConferenceResponseBodyData;
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
   * D9C96A73-09C9-5E2A-8CDB-85EC0BC246DA
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
      data: SwitchToConferenceResponseBodyData,
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

