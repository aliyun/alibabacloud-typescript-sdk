// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginTokenResponseBodyPasswordStrategy extends $dara.Model {
  /**
   * @remarks
   * > This is a parameter only for internal use.
   */
  tenantAlternativeChars?: string[];
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * null
   */
  tenantPasswordLength?: string;
  static names(): { [key: string]: string } {
    return {
      tenantAlternativeChars: 'TenantAlternativeChars',
      tenantPasswordLength: 'TenantPasswordLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantAlternativeChars: { 'type': 'array', 'itemType': 'string' },
      tenantPasswordLength: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tenantAlternativeChars)) {
      $dara.Model.validateArray(this.tenantAlternativeChars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyRiskVerifyInfo extends $dara.Model {
  /**
   * @remarks
   * The email used for authentication.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The duration of the lock.
   * 
   * @example
   * 1713749778
   */
  lastLockDuration?: number;
  /**
   * @remarks
   * Whether the account is locked or not.
   * 
   * @example
   * true
   */
  locked?: string;
  /**
   * @remarks
   * The mobile number used for authentication.
   * 
   * @example
   * 1388888****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lastLockDuration: 'LastLockDuration',
      locked: 'Locked',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lastLockDuration: 'number',
      locked: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The email address of the user. The system returns the email address in the return value of the LoginToken parameter after the user logs on to the client.
   * 
   * *   For a convenience user, the return value is the email address specified when the administrator creates the convenience user.
   * *   For an AD user, the return value is in the following format: `Username@Name of the AD domain`.
   * 
   * @example
   * alice
   */
  email?: string;
  /**
   * @remarks
   * The account of the convenience user or the AD user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * edu
   */
  industry?: string;
  /**
   * @remarks
   * The token used to keep the user logged on. After the user logs on to the client and select the Keep Logon option, `KeepAliveToken` is returned when you call the operation. If the user does not select the Keep Logon option, null is returned.
   * 
   * @example
   * 006YwvYMsesWWsDBZnVB+Wq9AvJDVIqOY3YCktvtb7+KxMb3ClnNlV8+l/knhZYrXUmeP06IzkjF+IgcZ3vZKOyMprDyFHjCy1r27FRE/U7+geWCl8iQ+yF8GaCRHfJEkC2+ROs93HkT4tfHxyY1J8W7O7ZQGUC/cdCvm+cCP6FIy73IUuPuVR6PcKYXIpEZPW
   */
  keepAliveToken?: string;
  /**
   * @remarks
   * The attribute of the convenience user. For an AD user, null is returned.
   * 
   * @example
   * test:sample
   */
  label?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The next stage that is expected to enter. For example, an administrator enables MFA in the EDS console. When an end user enters the password, that is, the end user completes the `ADPassword` stage, this parameter returns `MFAVerify`. This indicates that MFA is required.
   * 
   * >  For more information about the authentication stages, see the `CurrentStage` parameter.
   * 
   * @example
   * MFAVerify
   */
  nextStage?: string;
  nickName?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   */
  passwordStrategy?: GetLoginTokenResponseBodyPasswordStrategy;
  /**
   * @remarks
   * Enter the mobile number of the convenience user. For an AD user, null is returned.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   */
  props?: { [key: string]: string };
  /**
   * @remarks
   * The QR code that is generated when the virtual MFA device is bound. The value is encoded in Base64. This parameter can be empty. This parameter is required only when the CurrentStage parameter is set to `MFABind`.
   * 
   * > For more information about each authentication stage, see the parameter description of the request parameter `CurrentStage`.
   * 
   * @example
   * 5OCLLKKOJU5HPBX66H3QCTWY******
   */
  qrCodePng?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * null
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Risk identification information regarding the signin process.
   */
  riskVerifyInfo?: GetLoginTokenResponseBodyRiskVerifyInfo;
  /**
   * @remarks
   * The key that is generated when you bind the virtual MFA device. This parameter is required when the CurrentStage parameter is set to `MFABind`.
   * 
   * > For more information about each authentication stage, see the parameter description of the request parameter `CurrentStage`.
   * 
   * @example
   * 5OCLLKKOJU5HPBX66H3QCTWYI7MH****
   */
  secret?: string;
  /**
   * @remarks
   * The ID of the session. The ID is returned the first time you call the `GetLoginToken` operation in the session. If MFA is required, you must specify this parameter in subsequent stages.
   * 
   * > For more information about each authentication stage, see the parameter description of the request parameter `CurrentStage`.
   * 
   * @example
   * d6ec166d-ab93-4286-bf7f-a18bb929****
   */
  sessionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. The ID is used for hardware client authentication.
   * 
   * @example
   * 166353906220****
   */
  tenantId?: number;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * mode
   */
  windowDisplayMode?: string;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      industry: 'Industry',
      keepAliveToken: 'KeepAliveToken',
      label: 'Label',
      loginToken: 'LoginToken',
      nextStage: 'NextStage',
      nickName: 'NickName',
      passwordStrategy: 'PasswordStrategy',
      phone: 'Phone',
      props: 'Props',
      qrCodePng: 'QrCodePng',
      reason: 'Reason',
      requestId: 'RequestId',
      riskVerifyInfo: 'RiskVerifyInfo',
      secret: 'Secret',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      windowDisplayMode: 'WindowDisplayMode',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      industry: 'string',
      keepAliveToken: 'string',
      label: 'string',
      loginToken: 'string',
      nextStage: 'string',
      nickName: 'string',
      passwordStrategy: GetLoginTokenResponseBodyPasswordStrategy,
      phone: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      qrCodePng: 'string',
      reason: 'string',
      requestId: 'string',
      riskVerifyInfo: GetLoginTokenResponseBodyRiskVerifyInfo,
      secret: 'string',
      sessionId: 'string',
      tenantId: 'number',
      windowDisplayMode: 'string',
      wyId: 'string',
    };
  }

  validate() {
    if(this.passwordStrategy && typeof (this.passwordStrategy as any).validate === 'function') {
      (this.passwordStrategy as any).validate();
    }
    if(this.props) {
      $dara.Model.validateMap(this.props);
    }
    if(this.riskVerifyInfo && typeof (this.riskVerifyInfo as any).validate === 'function') {
      (this.riskVerifyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

