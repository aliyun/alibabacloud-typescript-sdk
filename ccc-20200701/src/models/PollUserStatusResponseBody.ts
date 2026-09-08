// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PollUserStatusResponseBodyDataCallContextChannelContexts extends $dara.Model {
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
   * Call channel flags.
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
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
   */
  channelId?: string;
  /**
   * @remarks
   * The status of the call channel.
   * 
   * @example
   * CREATED
   */
  channelState?: string;
  /**
   * @remarks
   * Channel-associated data.
   * 
   * @example
   * 123
   */
  channelVariables?: string;
  /**
   * @remarks
   * Callee of the call channel.
   * 
   * @example
   * 1390501****
   */
  destination?: string;
  /**
   * @remarks
   * Auto-incremented system ID. Customers do not need to concern themselves with this value.
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
   * The calling party of the call channel.
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
   * The hang-up reason for the call channel, indicating why the current call channel was disconnected. The value comes from the response codes defined in the SIP protocol. Customers should refer to the SIP protocol to analyze the hang-up reason.
   * 
   * @example
   * 404 - No destination
   */
  releaseReason?: string;
  /**
   * @remarks
   * The skill group ID associated with the channel. In inbound scenarios, the associated skill group ID is determined by the skill group configured in the IVR transfer-to-agent module. In outbound scenarios, the associated skill group ID is the first skill group the agent signed into.
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
   * The extension number of the agent associated with the voice channel.
   * 
   * @example
   * 8032****
   */
  userExtension?: string;
  /**
   * @remarks
   * The agent ID associated with the voice channel. This field is empty if the channel belongs to a customer.
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
      channelVariables: 'ChannelVariables',
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
      channelVariables: 'string',
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

export class PollUserStatusResponseBodyDataCallContext extends $dara.Model {
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
   * Ingest endpoint data. Custom data passed through SIP signaling.
   * 
   * @example
   * a=b;c=d
   */
  callVariables?: string;
  /**
   * @remarks
   * List of call channels.
   */
  channelContexts?: PollUserStatusResponseBodyDataCallContextChannelContexts[];
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
      callVariables: 'CallVariables',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      callVariables: 'string',
      channelContexts: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataCallContextChannelContexts },
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

export class PollUserStatusResponseBodyDataChatContextsMembers extends $dara.Model {
  /**
   * @remarks
   * System auto increment ID. Customers do not need to concern themselves with this value.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The party that initiated the hang-up.
   * 
   * @example
   * User
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The hang-up reason for the call channel, indicating why the current call channel was terminated. The value is derived from the response codes defined in the SIP protocol. Customers should refer to the SIP protocol for analysis of the hang-up reason.
   * 
   * @example
   * 无
   */
  releaseReason?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * a527a80a-75cf-448f-aba0-fca37c61946d
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The status of the agent in this session.
   * 
   * Enumeration values:
   * 
   * - RINGING
   * 
   * - TALKING
   * 
   * - RELEASED (End)
   * 
   * - MISSED (Missed)
   * 
   * @example
   * RINGING
   */
  status?: string;
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
   * User type.
   * 
   * Enumeration values:
   * 
   * - CUSTOMER: Customer
   * 
   * - AGENT: Agent
   * 
   * @example
   * Manager
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      status: 'Status',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      status: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataChatContexts extends $dara.Model {
  /**
   * @remarks
   * Ingest endpoint data.
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
   * Call job ID.
   * 
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @remarks
   * Information about the agents and customers participating in this chat session.
   */
  members?: PollUserStatusResponseBodyDataChatContextsMembers[];
  static names(): { [key: string]: string } {
    return {
      callVariables: 'CallVariables',
      chatType: 'ChatType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callVariables: 'string',
      chatType: 'string',
      instanceId: 'string',
      jobId: 'string',
      members: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataChatContextsMembers },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataUserContextParallelJobList extends $dara.Model {
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * The agent\\"s status in this session.
   * 
   * ### Enumeration values:
   * 
   * - RINGING
   * 
   * - TALKING
   * 
   * - RELEASED (End)
   * 
   * - MISSED (Missed)
   * 
   * @example
   * RINGING
   */
  status?: string;
  /**
   * @remarks
   * The time when the status changed.
   * 
   * @example
   * 1609136956378
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code, which can be either System-defined or Customer-defined. System-defined break codes include: Warm-up (temporary break state after an agent is published and before becoming idle), RingingTimeout (break caused by agent ringing timeout), and RejectCall (break caused by agent call rejection). There are no restrictions on Customer-defined status codes, and customers can define them according to their business needs.
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
   * Agent extension number.
   * 
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @remarks
   * The time when the last heartbeat was received from the agent, in Unix timestamp format, in milliseconds.
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
   * Chat sessions currently being handled or already handled by the agent
   */
  parallelJobList?: PollUserStatusResponseBodyDataUserContextParallelJobList[];
  /**
   * @remarks
   * The UNIX timestamp (in milliseconds) indicating when the agent was most recently reserved. Being reserved means an incoming call will soon be assigned to the agent.
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
   * BREAK
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
      parallelJobList: 'ParallelJobList',
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
      parallelJobList: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataUserContextParallelJobList },
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parallelJobList)) {
      $dara.Model.validateArray(this.parallelJobList);
    }
    if(Array.isArray(this.signedSkillGroupIdList)) {
      $dara.Model.validateArray(this.signedSkillGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call context environment.
   */
  callContext?: PollUserStatusResponseBodyDataCallContext;
  /**
   * @remarks
   * Session context environment.
   */
  chatContexts?: PollUserStatusResponseBodyDataChatContexts[];
  /**
   * @remarks
   * System auto increment ID. Customers do not need to concern themselves with this.
   * 
   * @example
   * 103655
   */
  contextId?: number;
  /**
   * @remarks
   * Agent context environment.
   */
  userContext?: PollUserStatusResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      chatContexts: 'ChatContexts',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: PollUserStatusResponseBodyDataCallContext,
      chatContexts: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataChatContexts },
      contextId: 'number',
      userContext: PollUserStatusResponseBodyDataUserContext,
    };
  }

  validate() {
    if(this.callContext && typeof (this.callContext as any).validate === 'function') {
      (this.callContext as any).validate();
    }
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

export class PollUserStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: PollUserStatusResponseBodyData;
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
      data: PollUserStatusResponseBodyData,
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

