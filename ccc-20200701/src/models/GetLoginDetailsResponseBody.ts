// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent data push server URL. After a successful connection, the server pushes agent status data to the agent Workbench.
   * 
   * @example
   * sh-wss-ccc.aliyuncs.com
   */
  agentServerUrl?: string;
  /**
   * @remarks
   * Agent profile picture URL.
   * 
   * @example
   * http://abc.com/sam.jpb
   */
  avatarUrl?: string;
  /**
   * @remarks
   * Chat session application ID.
   * 
   * @example
   * 7pjxxx
   */
  chatAppId?: string;
  /**
   * @remarks
   * Chat session application key.
   * 
   * @example
   * 955e4bd7xxxxxxxxxxxxxd7898ba9fa0d0
   */
  chatAppKey?: string;
  /**
   * @remarks
   * Chat Device ID.
   * 
   * @example
   * 4c51c9116c36537cb850dc1081d745df
   */
  chatDeviceId?: string;
  /**
   * @remarks
   * Chat session logon token.
   * 
   * @example
   * {"accessToken":"oauth_cloud_key:4xxx0=","accessTokenExpiredTime":864xxxx,"refreshToken":"oauth_cloud_key:Paxxxx=="}
   */
  chatLoginToken?: string;
  /**
   * @remarks
   * Chat session server URL.
   * 
   * @example
   * wss://wss.im.dingtalk.cn
   */
  chatServerUrl?: string;
  /**
   * @remarks
   * Chat session Device ID.
   * 
   * @example
   * A-8000100x
   */
  chatUserId?: string;
  /**
   * @remarks
   * SIP device extension number. This field is required when using a SIP phone.
   * 
   * @example
   * 8033****
   */
  deviceExt?: string;
  /**
   * @remarks
   * If the agent has registered an SIP phone, this parameter is the Device ID of the SIP phone device; otherwise, it is empty.
   * 
   * @example
   * Yealink SIP-T23G 44.84.XX.XX
   */
  deviceId?: string;
  /**
   * @remarks
   * SIP device status.
   * 
   * @example
   * OFFLINE
   */
  deviceState?: string;
  /**
   * @remarks
   * Agent display name.
   * 
   * @example
   * 坐席小王
   */
  displayName?: string;
  /**
   * @remarks
   * Agent extension number.
   * 
   * @example
   * 8001****
   */
  extension?: string;
  /**
   * @remarks
   * Agent nickname
   * 
   * @example
   * 老王
   */
  nickname?: string;
  /**
   * @remarks
   * Signature information generated using an asymmetric key encryption algorithm. This information is required for authentication when registering with the SIP server.
   * 
   * @example
   * zi31STIMtIfa/UN2l+6lww****
   */
  signature?: string;
  /**
   * @remarks
   * Signature information generated using an asymmetric key encryption algorithm. This information is required for authentication when registering with the SIP server.
   * 
   * @example
   * zi31STIMtIfa/UN2l+6lww****
   */
  signature2?: string;
  /**
   * @remarks
   * SIP registration server URL. The agent must register with the server as an SIP user to perform transactional processing (TP) operations.
   * 
   * @example
   * sh-sip-ccc.aliyuncs.com:443
   */
  sipServerUrl?: string;
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
   * Signature data used to generate signature information. Because this signature mechanism does not support Chinese characters, UserKey2 is currently used for signing instead.
   * 
   * @example
   * 坐席@aliyun:802001:1656406628862
   */
  userKey?: string;
  /**
   * @remarks
   * Signature data used to generate signature information. UserKey2 was added because UserKey does not support Chinese characters in signatures.
   * 
   * @example
   * 802001:1656406628862"
   */
  userKey2?: string;
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Logon information data.
   */
  data?: GetLoginDetailsResponseBodyData;
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
   * Response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID.
   * 
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

