// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndConferenceResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @example
   * ch:user:131888****->8001****:1609225718294:job-65700074013925376
   */
  channelId?: string;
  /**
   * @example
   * CREATED
   */
  channelState?: string;
  /**
   * @example
   * 8001****
   */
  destination?: string;
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

export class EndConferenceResponseBodyDataCallContext extends $dara.Model {
  channelContexts?: EndConferenceResponseBodyDataCallContextChannelContexts[];
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
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelContexts: { 'type': 'array', 'itemType': EndConferenceResponseBodyDataCallContextChannelContexts },
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

export class EndConferenceResponseBodyDataUserContext extends $dara.Model {
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
   * UNREGISTERED
   */
  deviceState?: string;
  /**
   * @example
   * 8032****
   */
  extension?: string;
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
   * false
   */
  outboundScenario?: boolean;
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
      deviceState: 'DeviceState',
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
      deviceState: 'string',
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

export class EndConferenceResponseBodyData extends $dara.Model {
  callContext?: EndConferenceResponseBodyDataCallContext;
  /**
   * @example
   * 103655
   */
  contextId?: number;
  userContext?: EndConferenceResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: EndConferenceResponseBodyDataCallContext,
      contextId: 'number',
      userContext: EndConferenceResponseBodyDataUserContext,
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

export class EndConferenceResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: EndConferenceResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * 0630E5DF-CEB0-445B-8626-D5C7481181C3
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
      data: EndConferenceResponseBodyData,
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

