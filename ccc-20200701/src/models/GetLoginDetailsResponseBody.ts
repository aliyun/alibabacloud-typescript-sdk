// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * sh-wss-ccc.aliyuncs.com
   */
  agentServerUrl?: string;
  avatarUrl?: string;
  chatAppId?: string;
  chatAppKey?: string;
  chatDeviceId?: string;
  chatLoginToken?: string;
  chatServerUrl?: string;
  chatUserId?: string;
  /**
   * @example
   * 8033****
   */
  deviceExt?: string;
  /**
   * @example
   * Yealink SIP-T23G 44.84.XX.XX
   */
  deviceId?: string;
  /**
   * @example
   * OFFLINE
   */
  deviceState?: string;
  displayName?: string;
  /**
   * @example
   * 8001****
   */
  extension?: string;
  nickname?: string;
  /**
   * @example
   * zi31STIMtIfa/UN2l+6lww****
   */
  signature?: string;
  /**
   * @example
   * zi31STIMtIfa/UN2l+6lww****
   */
  signature2?: string;
  /**
   * @example
   * sh-sip-ccc.aliyuncs.com:443
   */
  sipServerUrl?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  userKey?: string;
  /**
   * @example
   * 802001:1656406628862"
   */
  userKey2?: string;
  /**
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentServerUrl: 'AgentServerUrl',
      avatarUrl: 'AvatarUrl',
      chatAppId: 'ChatAppId',
      chatAppKey: 'ChatAppKey',
      chatDeviceId: 'ChatDeviceId',
      chatLoginToken: 'ChatLoginToken',
      chatServerUrl: 'ChatServerUrl',
      chatUserId: 'ChatUserId',
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayName: 'DisplayName',
      extension: 'Extension',
      nickname: 'Nickname',
      signature: 'Signature',
      signature2: 'Signature2',
      sipServerUrl: 'SipServerUrl',
      userId: 'UserId',
      userKey: 'UserKey',
      userKey2: 'UserKey2',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentServerUrl: 'string',
      avatarUrl: 'string',
      chatAppId: 'string',
      chatAppKey: 'string',
      chatDeviceId: 'string',
      chatLoginToken: 'string',
      chatServerUrl: 'string',
      chatUserId: 'string',
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayName: 'string',
      extension: 'string',
      nickname: 'string',
      signature: 'string',
      signature2: 'string',
      sipServerUrl: 'string',
      userId: 'string',
      userKey: 'string',
      userKey2: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetLoginDetailsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * F1A4774A-F28B-5C40-AEF6-D88D2DD6C7E4
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
      data: GetLoginDetailsResponseBodyData,
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

