// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent profile picture URL.
   * 
   * @example
   * http://xxx.com/xxx.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * SIP phone extension number. If the agent has registered a SIP phone, this parameter is the extension number of the SIP phone device.
   * 
   * @example
   * 8033****
   */
  deviceExt?: string;
  /**
   * @remarks
   * Device ID, which is the identity of a browser-based Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * The status of the SIP phone device. If no SIP phone is registered, the status is UNREGISTERED (Unregistered). If a SIP phone was previously registered but is currently offline, the status is OFFLINE (Offline). If a SIP phone is registered and currently online, the status is ONLINE (Online).
   * 
   * @example
   * OFFLINE
   */
  deviceState?: string;
  /**
   * @remarks
   * Agent\\"s employee ID.
   * 
   * @example
   * 1001
   */
  displayId?: string;
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
   * Mailbox.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Agent extension number.
   * 
   * @example
   * 8003****
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
   * Agent logon name.
   * 
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @remarks
   * Agent\\"s personal phone number.
   * 
   * @example
   * 1391234****
   */
  mobile?: string;
  /**
   * @remarks
   * Agent nickname
   * 
   * @example
   * 阿云
   */
  nickname?: string;
  /**
   * @remarks
   * Role ID, in the format: role\\@instance ID.
   * 
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Admin
   */
  roleName?: string;
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
   * Work mode.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      nickname: 'Nickname',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      nickname: 'string',
      roleId: 'string',
      roleName: 'string',
      userId: 'string',
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

export class GetUserResponseBody extends $dara.Model {
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
  data?: GetUserResponseBodyData;
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
   * Extension parameters.
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
      data: GetUserResponseBodyData,
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

