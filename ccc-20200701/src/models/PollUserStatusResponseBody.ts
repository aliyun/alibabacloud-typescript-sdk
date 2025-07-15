// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PollUserStatusResponseBodyDataCallContextChannelContexts extends $dara.Model {
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
   * CREATED
   */
  channelState?: string;
  /**
   * @example
   * 123
   */
  channelVariables?: string;
  /**
   * @example
   * 1390501****
   */
  destination?: string;
  /**
   * @example
   * 1
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
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @example
   * a=b;c=d
   */
  callVariables?: string;
  channelContexts?: PollUserStatusResponseBodyDataCallContextChannelContexts[];
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
  index?: number;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  status?: string;
  userId?: string;
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
  callVariables?: string;
  chatType?: string;
  instanceId?: string;
  jobId?: string;
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
  jobId?: string;
  status?: string;
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
  parallelJobList?: PollUserStatusResponseBodyDataUserContextParallelJobList[];
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
   * BREAK
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
  callContext?: PollUserStatusResponseBodyDataCallContext;
  chatContexts?: PollUserStatusResponseBodyDataChatContexts[];
  /**
   * @example
   * 103655
   */
  contextId?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: PollUserStatusResponseBodyData;
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

