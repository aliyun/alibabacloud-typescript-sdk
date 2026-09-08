// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeVisibilityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The break code.
   * 
   * @example
   * 会议
   */
  breakCode?: string;
  /**
   * @remarks
   * The device ID. This can be the ID of a browser-based WebRTC softphone or a physical phone. Only one device can be registered at a time.
   * 
   * @example
   * Yealink SIP-T23G 44.84.203.6
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
   * The instance ID.
   * 
   * @example
   * szpczf
   */
  instanceId?: string;
  /**
   * @remarks
   * The call ID. If populated, this field indicates that the agent is in a call.
   * 
   * @example
   * job-330557290544431104
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
   * The IDs of the skill groups to which the agent is signed in.
   */
  signedSkillGroupIdList?: string[];
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * sam@szpczf
   */
  userId?: string;
  /**
   * @remarks
   * The agent state.
   * 
   * @example
   * Ready
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

export class ChangeVisibilityResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: ChangeVisibilityResponseBodyData;
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
   * Internal service issue. Detail:.
   */
  message?: string;
  /**
   * @remarks
   * The response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24BE19E8-BF7D-4992-A35E-15EBA874F2E5
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
      data: ChangeVisibilityResponseBodyData,
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

