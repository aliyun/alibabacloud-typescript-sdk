// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClaimCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
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
   * The channel ID.
   * 
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
   */
  channelId?: string;
  /**
   * @remarks
   * The state of the channel.
   * 
   * @example
   * ANSWERED
   */
  channelState?: string;
  /**
   * @remarks
   * The channel variables.
   * 
   * @example
   * a=b;c=d;
   */
  channelVariables?: string;
  /**
   * @remarks
   * The destination of the channel.
   * 
   * @example
   * 1390501****
   */
  destination?: string;
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
   * 0830019****
   */
  originator?: string;
  /**
   * @remarks
   * The party who initiated the channel release.
   * 
   * @example
   * 1390501****
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The reason why the channel was released. This is a SIP response code. For more information, see the SIP protocol specification.
   * 
   * @example
   * 无
   */
  releaseReason?: string;
  /**
   * @remarks
   * The Unix timestamp that indicates the last time the channel state changed. Unit: milliseconds.
   * 
   * @example
   * 1609225718295
   */
  timestamp?: number;
  /**
   * @remarks
   * The agent extension number.
   * 
   * @example
   * 8059****
   */
  userExtension?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * invoker@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      channelVariables: 'ChannelVariables',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelId: 'string',
      channelState: 'string',
      channelVariables: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
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

export class ClaimCallResponseBodyDataCallContext extends $dara.Model {
  /**
   * @remarks
   * The channel contexts.
   */
  channelContexts?: ClaimCallResponseBodyDataCallContextChannelContexts[];
  /**
   * @remarks
   * The instance ID.
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
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelContexts: { 'type': 'array', 'itemType': ClaimCallResponseBodyDataCallContextChannelContexts },
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

export class ClaimCallResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * The break code.
   * 
   * @example
   * Customized
   */
  breakCode?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * device-xxxx
   */
  deviceId?: string;
  /**
   * @remarks
   * The extension number.
   * 
   * @example
   * 0830019****
   */
  extension?: string;
  /**
   * @remarks
   * The instance ID.
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
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @remarks
   * Indicates whether this is an outbound scenario.
   * 
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * The list of signed-in skill group IDs.
   */
  signedSkillGroupIdList?: string[];
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * user@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * The agent state.
   * 
   * @example
   * Dialing
   */
  userState?: string;
  /**
   * @remarks
   * The work mode.
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
      instanceId: 'InstanceId',
      jobId: 'JobId',
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
      instanceId: 'string',
      jobId: 'string',
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

export class ClaimCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The call context.
   */
  callContext?: ClaimCallResponseBodyDataCallContext;
  /**
   * @remarks
   * The context ID.
   * 
   * @example
   * 123456
   */
  contextId?: number;
  /**
   * @remarks
   * The agent context.
   */
  userContext?: ClaimCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: ClaimCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: ClaimCallResponseBodyDataUserContext,
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

export class ClaimCallResponseBody extends $dara.Model {
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
   * The data.
   */
  data?: ClaimCallResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 93CDC17E-3E8A-48F2-99E5-FA2E238DE8B4
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
      data: ClaimCallResponseBodyData,
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

