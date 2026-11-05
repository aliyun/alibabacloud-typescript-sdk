// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginTokenResponseBodyPasswordStrategy extends $dara.Model {
  /**
   * @remarks
   * > Internal private field. Not available for external use.
   */
  tenantAlternativeChars?: string[];
  /**
   * @remarks
   * > Internal private field. Not available for external use.
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
   * The email address used for verification when identity verification is triggered.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The account lockout duration.
   * 
   * @example
   * 1713749778
   */
  lastLockDuration?: number;
  /**
   * @remarks
   * Indicates whether the account is locked.
   * 
   * @example
   * true
   */
  locked?: string;
  /**
   * @remarks
   * The mobile phone number used for verification when identity verification is triggered.
   * 
   * @example
   * 1381111****
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
   * The email address of the user. This parameter is returned along with LoginToken after logon.    
   * 
   * - For a convenience user, the email address specified when the convenience user was created is returned.
   * - For an AD user, the email address is returned in the following format: Username@AD domain name.
   * 
   * @example
   * alice
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience account or AD user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * > Internal private field. Not available for external use.
   * 
   * @example
   * edu
   */
  industry?: string;
  /**
   * @remarks
   * The token used to keep the user logged on. After a successful logon and if the user enables the keep-logged-on option, the API returns KeepAliveToken. If the keep-logged-on option is not enabled, an empty value is returned.
   * 
   * @example
   * 006YwvYMsesWWsDBZnVB+Wq9AvJDVIqOY3YCktvtb7+KxMb3ClnNlV8+l/knhZYrXUmeP06IzkjF+IgcZ3vZKOyMprDyFHjCy1r27FRE/U7+geWCl8iQ+yF8GaCRHfJEkC2+ROs93HkT4tfHxyY1J8W7O7ZQGUC/cdCvm+cCP6FIy73IUuPuVR6PcKYXIpEZPW
   */
  keepAliveToken?: string;
  /**
   * @remarks
   * The properties of the convenience user. If the user is an AD user, an empty value is returned.
   * 
   * @example
   * test:wuying
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
   * The expected next stage. For example, if the administrator enables MFA authentication in the Elastic Desktop Service console, this parameter returns `MFAVerify` after the username and password authentication succeeds (that is, after the `ADPassword` stage). This indicates that MFA authentication is required.
   * 
   * > For more information about each authentication stage, see the metric description of the `CurrentStage` request parameter.
   * 
   * @example
   * MFAVerify
   */
  nextStage?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * user-001
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * > Internal private field. Not available for external use.
   */
  passwordStrategy?: GetLoginTokenResponseBodyPasswordStrategy;
  /**
   * @remarks
   * The mobile phone number of the convenience user. If the user is an AD user, an empty value is returned.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * > Internal private field. Not available for external use.
   */
  props?: { [key: string]: string };
  /**
   * @remarks
   * The QR code of the secret key used to attach a virtual MFA device. Uses Base64 encoding. This parameter can be empty and is used in the `MFABind` stage.
   * 
   * > For more information about each authentication stage, see the metric description of the `CurrentStage` request parameter.
   * 
   * @example
   * 5OCLLKKOJU5HPBX66H3QCTWY******
   */
  qrCodePng?: string;
  /**
   * @remarks
   * > Internal private field. Not available for external use.
   * 
   * @example
   * null
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The logon risk identification information.
   */
  riskVerifyInfo?: GetLoginTokenResponseBodyRiskVerifyInfo;
  /**
   * @remarks
   * The secret key used to attach a virtual MFA device. Used in the `MFABind` stage.
   * 
   * > For more information about each authentication stage, see the metric description of the `CurrentStage` request parameter.
   * 
   * @example
   * 5OCLLKKOJU5HPBX66H3QCTWYI7MH****
   */
  secret?: string;
  /**
   * @remarks
   * The session ID. This parameter is returned only when `GetLoginToken` is invoked for the first time in the same session. If multiple authentication steps are required, you must pass this parameter in subsequent stages.
   * 
   * > For more information about each authentication stage, see the metric description of the `CurrentStage` request parameter.
   * 
   * @example
   * d6ec166d-ab93-4286-bf7f-a18bb929****
   */
  sessionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID. This parameter is used for hardware terminal identification.
   * 
   * @example
   * 166353906220****
   */
  tenantId?: number;
  /**
   * @remarks
   * > Internal private field. Not available for external use.
   * 
   * @example
   * mode
   */
  windowDisplayMode?: string;
  /**
   * @example
   * 0123456789abcdef
   */
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
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
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
      officeSiteId: 'string',
      officeSiteName: 'string',
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

