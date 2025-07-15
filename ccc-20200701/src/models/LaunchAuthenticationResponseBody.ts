// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchAuthenticationResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @example
   * MONITORING
   */
  channelFlags?: string;
  /**
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
   */
  channelId?: string;
  /**
   * @example
   * ANSWERED
   */
  channelState?: string;
  /**
   * @example
   * 1390501****
   */
  destination?: string;
  /**
   * @example
   * 10
   */
  index?: number;
  /**
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @example
   * 0830019****
   */
  originator?: string;
  /**
   * @example
   * 1390501****
   */
  releaseInitiator?: string;
  /**
   * @example
   * 404 - No destination
   */
  releaseReason?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 1609138903315
   */
  timestamp?: number;
  /**
   * @example
   * 8032****
   */
  userExtension?: string;
  /**
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

export class LaunchAuthenticationResponseBodyDataCallContext extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  channelContexts?: LaunchAuthenticationResponseBodyDataCallContextChannelContexts[];
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
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
      channelContexts: { 'type': 'array', 'itemType': LaunchAuthenticationResponseBodyDataCallContextChannelContexts },
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

export class LaunchAuthenticationResponseBodyDataUserContext extends $dara.Model {
  /**
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
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
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @example
   * 1324730****
   */
  mobile?: string;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @example
   * 1609136956378
   */
  reserved?: number;
  signedSkillGroupIdList?: string[];
  /**
   * @example
   * agent@ccc-test
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

export class LaunchAuthenticationResponseBodyData extends $dara.Model {
  callContext?: LaunchAuthenticationResponseBodyDataCallContext;
  userContext?: LaunchAuthenticationResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: LaunchAuthenticationResponseBodyDataCallContext,
      userContext: LaunchAuthenticationResponseBodyDataUserContext,
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

export class LaunchAuthenticationResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: LaunchAuthenticationResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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
      data: LaunchAuthenticationResponseBodyData,
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

