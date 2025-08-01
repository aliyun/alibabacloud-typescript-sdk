// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The verification code that is generated by the virtual MFA device. This parameter is required if you set `CurrentStage` to `MFAVerify`.
   * 
   * @example
   * 47****
   */
  authenticationCode?: string;
  availableFeatures?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the Alibaba Cloud Workspace client. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system (OS) of the device that runs an Alibaba Cloud Workspace client.
   * 
   * @example
   * Windows_NT 10.0.1**** x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The type of Alibaba Cloud Workspace clients.
   * 
   * Valid values:
   * 
   * *   HTML5: web client.
   * 
   * *   WINDOWS: Windows client.
   * 
   * *   MACOS: macOS client.
   * 
   * *   IOS: iOS client.
   * 
   * *   ANDROID: Android client.
   * 
   * @example
   * Windows
   */
  clientType?: string;
  /**
   * @remarks
   * The version of the client. When you use an Alibaba Cloud Workspace client, you can view the client version in the **About** dialog box on the client logon page.
   * 
   * @example
   * 2.1.0-R-20210731.1****
   */
  clientVersion?: string;
  /**
   * @remarks
   * The logon authentication stage. Valid values:
   * 
   * *   `ADPassword`: the stage to verify the identity of the Active Directory (AD) user. You must specify the value when the system verifies the identity of a convenience account or an AD account.
   * *   `MFABind: the stage to bind a virtual multi-factor authentication (MFA) device.`
   * *   `MFAVerify: the stage to verify the verification code that is generated by the virtual MFA device.`
   * *   `TokenVerify`: the stage to perform two-factor authentication on an Alibaba Cloud Workspace client (hereinafter referred to as the client).
   * *   `ChangePassword`: the stage to change the password of the user.
   * *   `KeepAliveVerify`: the stage to obtain LoginToken if KeepAliveToken is valid.
   * 
   * @example
   * ADPassword
   */
  currentStage?: string;
  /**
   * @remarks
   * The office network ID. This parameter has the same meaning as `OfficeSiteId`. We recommend that you replace `DirectoryId` with `OfficeSiteId`. You can specify a value for `DirectoryId` or `OfficeSiteId`.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the convenience user or the AD user. This parameter is required if you set `CurrentStage` to `ADPassword`.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * Specifies whether to keep the user logged on to the client. 
   * Valid values:
   * * null: Default value. Do not keep the user logged on to the client.
   * * true: Keep the user logged on to the client.
   * * false:  Do not keep the user logged on to the client.
   * 
   * @example
   * false
   */
  keepAlive?: boolean;
  /**
   * @remarks
   * The token to keep logging on to an Alibaba Cloud Workspace client. When an end user logs on to the Alibaba Cloud Workspace client and select Auto Sign-in, `KeepAliveToken` is returned after you call this operation. Within the valid period of the returned token``, you can call the `GetLoginToken` operation and set `CurrentStage` to `KeepAliveVerify`. Then, you can obtain LoginToken. If you set `CurrentStage` to `KeepAliveVerify`, `KeepAliveToken` is required.
   * 
   * @example
   * hide
   */
  keepAliveToken?: string;
  /**
   * @remarks
   * The new password. This parameter is required if you set `CurrentStage` to `ChangePassword`.
   * 
   * @example
   * NewPassword
   */
  newPassword?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The current password. This parameter is required if you set `CurrentStage` to `ChangePassword`.
   * 
   * @example
   * OldPassword
   */
  oldPassword?: string;
  /**
   * @remarks
   * The password of the convenience user or the AD user. This parameter is required if you set `CurrentStage` to `ADPassword`.
   * 
   * @example
   * Password1234
   */
  password?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by EDS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * *   If the virtual multi-factor authentication (MFA) device is not bound or two-factor authentication is not enabled for the client, you do not need to specify a value for `SessionId`.
   * *   If the virtual MFA device is not bound or two-factor authentication is enabled for the client, you must specify a value for `SessionId` to verify the user identity after you specify a value for `ADPassword`. The value of the `SessionId` parameter is returned only if the CurrentStage parameter is set to `ADPassword` when you call the `GetLoginToken` operation.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * If two-factor authentication is enabled for Alibaba Cloud Workspace terminals in the EDS console and the system detects that the current logon user is exposed to risks, the system sends a verification code to the email address of the user. This parameter is required if you set `CurrentStage` to `TokenVerify`.
   * 
   * @example
   * 63****
   */
  tokenCode?: string;
  /**
   * @remarks
   * The unique identifier of the client. When you use an Alibaba Cloud Workspace client, you can view the client version in the **About** dialog box on the client logon page.
   * 
   * @example
   * C78CA9E99315687575DD2844C1F3****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode: 'AuthenticationCode',
      availableFeatures: 'AvailableFeatures',
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      currentStage: 'CurrentStage',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      keepAlive: 'KeepAlive',
      keepAliveToken: 'KeepAliveToken',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      tokenCode: 'TokenCode',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode: 'string',
      availableFeatures: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clientId: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      currentStage: 'string',
      directoryId: 'string',
      endUserId: 'string',
      keepAlive: 'boolean',
      keepAliveToken: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      password: 'string',
      regionId: 'string',
      sessionId: 'string',
      tokenCode: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.availableFeatures) {
      $dara.Model.validateMap(this.availableFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

