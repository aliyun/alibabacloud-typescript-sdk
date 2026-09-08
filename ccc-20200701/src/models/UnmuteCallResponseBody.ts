// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnmuteCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
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
   * ch:user:1390501****->8032****:1609138902226:job-6538214103685****
   */
  channelId?: string;
  /**
   * @remarks
   * [parameters_JobId_schema_description]The call ID.
   * 
   * @example
   * CREATED
   */
  channelState?: string;
  /**
   * @remarks
   * Called party of the call channel.
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
   * [parameters_JobId_in]query
   * 
   * @example
   * 1390501****
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The reason for releasing the channel. This indicates why the current channel was disconnected. The value corresponds to a response code defined in the SIP protocol. Customers should refer to the SIP protocol to analyze the disconnection reason.
   * 
   * @example
   * 404 - No destination
   */
  releaseReason?: string;
  /**
   * @remarks
   * The skill group associated with this call. In inbound scenarios, the skill group is specified by the queue routed through IVR. In outbound scenarios, the skill group is the first one the agent signs into.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The UNIX timestamp of the most recent status change of the channel, in milliseconds.
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
   * The agent ID associated with the channel. This field is empty if the channel belongs to a customer.
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

export class UnmuteCallResponseBodyDataCallContext extends $dara.Model {
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
  channelContexts?: UnmuteCallResponseBodyDataCallContextChannelContexts[];
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_ChannelFlags_enumValueTitles_MONITORING]Monitoring
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
      channelContexts: { 'type': 'array', 'itemType': UnmuteCallResponseBodyDataCallContextChannelContexts },
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

export class UnmuteCallResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code, which can be either system-defined or customer-defined. System-defined break codes include: Warm-up (temporary break state after an agent goes online but before becoming idle), RingingTimeout (break caused by agent ringing timeout), and RejectCall (break caused by agent rejecting a call). Customer-defined status codes have no restrictions, and customers can define them according to their business needs.
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
   * [responses_200_schema_properties_Data_properties_UserContext_properties_Mobile_description]The agent\\"s personal phone number.
   * 
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @remarks
   * The UNIX timestamp in milliseconds indicating when the last heartbeat was received from the agent.
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
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_SkillGroupId_type]string
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
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_ChannelId_type]string
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
   * [responses_200_schema_properties_Data_properties_CallContext_properties_CallType_description]Call type.
   * 
   * @example
   * TALKING
   */
  userState?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_Index_type]integer
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

export class UnmuteCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_CallContext_properties_ChannelContexts_items_properties_ReleaseReason_type]string
   */
  callContext?: UnmuteCallResponseBodyDataCallContext;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_UserContext_properties_OutboundScenario_description]Indicates whether the agent is in outbound-only mode.
   */
  userContext?: UnmuteCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: UnmuteCallResponseBodyDataCallContext,
      userContext: UnmuteCallResponseBodyDataUserContext,
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

export class UnmuteCallResponseBody extends $dara.Model {
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
   * [responses_200_schema_properties_Data_properties_UserContext_properties_Heartbeat_description]The UNIX timestamp in milliseconds indicating when the last heartbeat was received from the agent.
   */
  data?: UnmuteCallResponseBodyData;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_UserContext_properties_UserId_type]string
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_UserContext_properties_InstanceId_type]string
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_UserContext_properties_BreakCode_enumValueTitles_RejectCall]Break caused by agent rejecting a call
   */
  params?: string[];
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_UserContext_properties_DeviceId_type]string
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
      data: UnmuteCallResponseBodyData,
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

