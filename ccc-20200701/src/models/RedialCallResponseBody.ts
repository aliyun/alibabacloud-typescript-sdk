// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedialCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
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
   * COACHING
   */
  channelFlags?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
   */
  channelId?: string;
  /**
   * @remarks
   * The status of the voice channel.
   * 
   * @example
   * CREATED
   */
  channelState?: string;
  /**
   * @remarks
   * The callee of the voice channel.
   * 
   * @example
   * 8001****
   */
  destination?: string;
  /**
   * @remarks
   * Call job ID.
   * 
   * @example
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @remarks
   * The calling party of the call channel.
   * 
   * @example
   * 1318888****
   */
  originator?: string;
  /**
   * @remarks
   * The party that initiated the hang-up of the call channel, indicating who first terminated the call.
   * 
   * @example
   * 139xxxx0501
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The release reason of the voice channel, indicating why the current voice channel was released. The value is derived from the response codes defined in the SIP protocol. Customers can refer to the SIP protocol to analyze the release reason.
   * 
   * @example
   * 486:USER_BUSY
   */
  releaseReason?: string;
  /**
   * @remarks
   * UNIX timestamp of the last status change.
   * 
   * @example
   * 1609138903315
   */
  timestamp?: number;
  /**
   * @remarks
   * User extension number.
   * 
   * @example
   * 8000****
   */
  userExtension?: string;
  /**
   * @remarks
   * Agent User ID information.
   * 
   * @example
   * samzhang@abc
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
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
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
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

export class RedialCallResponseBodyDataCallContext extends $dara.Model {
  /**
   * @remarks
   * The call type, indicating the type of the call when it was initially initiated.
   * 
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @remarks
   * The list of call channels.
   */
  channelContexts?: RedialCallResponseBodyDataCallContextChannelContexts[];
  /**
   * @remarks
   * Cloud Contact Center instance ID.
   * 
   * @example
   * abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The call job ID.
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
      channelContexts: { 'type': 'array', 'itemType': RedialCallResponseBodyDataCallContextChannelContexts },
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

export class RedialCallResponseBodyDataUserContext extends $dara.Model {
  /**
   * @remarks
   * Break status code, which is divided into system-defined and customer-defined types.
   * 
   * System-defined break codes:
   * 
   * - Warm-up: A temporary break state after an agent is published but before becoming idle.
   * 
   * - RingingTimeout: A break caused by ringing timeout for the agent.
   * 
   * - RejectCall: A break caused by the agent rejecting a call.
   * 
   * There are no restrictions on customer-defined status codes. Customers can define them according to their business needs.
   * 
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @remarks
   * Device ID, which is the identity of a browser-based Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
   * 
   * @example
   * CCC-x.x.x.x-chrome102-bsdf911812c60f61e
   */
  deviceId?: string;
  /**
   * @remarks
   * User extension number.
   * 
   * @example
   * 8000****
   */
  extension?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * abc
   */
  instanceId?: string;
  /**
   * @remarks
   * Call job ID.
   * 
   * @example
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @remarks
   * Indicates whether the agent is in outbound-only mode.
   * 
   * @example
   * False
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * List of skill group IDs that the agent has signed into.
   */
  signedSkillGroupIdList?: string[];
  /**
   * @remarks
   * Agent User ID information.
   * 
   * @example
   * samzhang@abc
   */
  userId?: string;
  /**
   * @remarks
   * Agent status. Enumeration values:
   * 
   * - READY: idle
   * 
   * - WORKING: post-processing
   * 
   * - DIALING: dial-up
   * 
   * - BREAK: break
   * 
   * - OFFLINE: offline
   * 
   * - TALKING: talking
   * 
   * - RINGING: ringing
   * 
   * @example
   * READY
   */
  userState?: string;
  /**
   * @remarks
   * Work mode. Enumeration values:
   * 
   * - ON_SITE: On-site mode
   * 
   * - OFF_SITE: Off-site mode
   * 
   * - OFFICE_PHONE: Office phone mode
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

export class RedialCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call context environment.
   */
  callContext?: RedialCallResponseBodyDataCallContext;
  /**
   * @remarks
   * Context ID, strictly ordered and incrementing.
   * 
   * @example
   * 123456789
   */
  contextId?: number;
  /**
   * @remarks
   * Agent context environment.
   */
  userContext?: RedialCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: RedialCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: RedialCallResponseBodyDataUserContext,
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

export class RedialCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of "OK" indicates that the request succeeded. For other error codes, see the error code list.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: RedialCallResponseBodyData;
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
   * Response message
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
   * BF268B34-09C2-43FD-BAC4-5D31EA63****
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
      data: RedialCallResponseBodyData,
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

