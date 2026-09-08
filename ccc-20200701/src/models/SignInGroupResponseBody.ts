// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignInGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Break status code, which can be either system-defined or customer-defined. System-defined break codes include: Warm-up (temporary break state after agent is published and before becoming idle), RingingTimeout (break caused by agent ringing timeout), and RejectCall (break caused by agent call rejection). There are no restrictions on customer-defined status codes; customers can define them as needed for their business.
   * 
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @remarks
   * Chat device ID.
   * 
   * @example
   * 4c51c9116c36537cb850dc1081d745df
   */
  chatDeviceId?: string;
  /**
   * @remarks
   * Device ID, which is the identity of a browser Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
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
   * 无
   */
  jobId?: string;
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
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * Agent status.
   * 
   * @example
   * READY
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
      chatDeviceId: 'ChatDeviceId',
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
      chatDeviceId: 'string',
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

export class SignInGroupResponseBody extends $dara.Model {
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
  data?: SignInGroupResponseBodyData;
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
      data: SignInGroupResponseBodyData,
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

