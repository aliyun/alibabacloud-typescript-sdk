// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAlibabaCloudStsToken extends $dara.Model {
  /**
   * @remarks
   * The access key ID.
   * 
   * @example
   * STS.NUgYrLnoC37mZZCNnAbez****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The access key secret.
   * 
   * @example
   * CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The expiration time of the token (UTC).
   * 
   * @example
   * 2021-10-20T04:27:09Z
   */
  expiration?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * CAIShwJ1q6Ft5B2yfSjIr5bSEsj4g7BihPWGWHz****
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      expiration: 'expiration',
      securityToken: 'securityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAwsStsToken extends $dara.Model {
  /**
   * @remarks
   * The access key ID.
   * 
   * @example
   * ASIAYBGN7XJKRFOM****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The expiration time of the STS Token (UTC).
   * 
   * @example
   * 2021-10-20T04:27:09Z
   */
  expiration?: string;
  /**
   * @remarks
   * The secret access key.
   * 
   * @example
   * CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2****
   */
  secretAccessKey?: string;
  /**
   * @remarks
   * The session token of the temporary credentials.
   * 
   * @example
   * FwoDYXdzEJzfSjIr5bSEsj4g7BihPWGWHz****
   */
  sessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      expiration: 'expiration',
      secretAccessKey: 'secretAccessKey',
      sessionToken: 'sessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expiration: 'string',
      secretAccessKey: 'string',
      sessionToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialTencentCloudStsToken extends $dara.Model {
  expiration?: string;
  tmpSecretId?: string;
  tmpSecretKey?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expiration: 'expiration',
      tmpSecretId: 'tmpSecretId',
      tmpSecretKey: 'tmpSecretKey',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiration: 'string',
      tmpSecretId: 'string',
      tmpSecretKey: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredential extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the temporary access credentials for the cloud account role, in UNIX timestamp format and in seconds.
   * 
   * @example
   * 1767196800
   */
  accessCredentialExpiresAt?: number;
  /**
   * @remarks
   * The temporary identity credentials (STS Token) for assuming an Alibaba Cloud RAM role.
   * > This field is returned only when the cloud account type associated with the cloud account role is Alibaba Cloud (alibaba_cloud).
   */
  alibabaCloudStsToken?: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAlibabaCloudStsToken;
  /**
   * @remarks
   * The STS Token representing an AWS role.
   */
  awsStsToken?: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAwsStsToken;
  tencentCloudStsToken?: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialTencentCloudStsToken;
  static names(): { [key: string]: string } {
    return {
      accessCredentialExpiresAt: 'accessCredentialExpiresAt',
      alibabaCloudStsToken: 'alibabaCloudStsToken',
      awsStsToken: 'awsStsToken',
      tencentCloudStsToken: 'tencentCloudStsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCredentialExpiresAt: 'number',
      alibabaCloudStsToken: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAlibabaCloudStsToken,
      awsStsToken: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAwsStsToken,
      tencentCloudStsToken: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialTencentCloudStsToken,
    };
  }

  validate() {
    if(this.alibabaCloudStsToken && typeof (this.alibabaCloudStsToken as any).validate === 'function') {
      (this.alibabaCloudStsToken as any).validate();
    }
    if(this.awsStsToken && typeof (this.awsStsToken as any).validate === 'function') {
      (this.awsStsToken as any).validate();
    }
    if(this.tencentCloudStsToken && typeof (this.tencentCloudStsToken as any).validate === 'function') {
      (this.tencentCloudStsToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainCloudAccountRoleAccessCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud account ID.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The temporary access credentials for assuming the cloud account role.
   */
  cloudAccountRoleAccessCredential?: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredential;
  /**
   * @remarks
   * The business identifier of the cloud account role.
   * 
   * @example
   * acs:ram::xxx:role/role-test
   */
  cloudAccountRoleExternalId?: string;
  /**
   * @remarks
   * The cloud account role ID.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  cloudAccountRoleId?: string;
  /**
   * @remarks
   * The cloud account role name.
   * 
   * @example
   * role-test
   */
  cloudAccountRoleName?: string;
  /**
   * @remarks
   * The cloud account type. Valid values:
   * - alibaba_cloud: Alibaba Cloud.
   * 
   * @example
   * alibaba_cloud
   */
  cloudAccountVendorType?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'cloudAccountId',
      cloudAccountRoleAccessCredential: 'cloudAccountRoleAccessCredential',
      cloudAccountRoleExternalId: 'cloudAccountRoleExternalId',
      cloudAccountRoleId: 'cloudAccountRoleId',
      cloudAccountRoleName: 'cloudAccountRoleName',
      cloudAccountVendorType: 'cloudAccountVendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      cloudAccountRoleAccessCredential: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredential,
      cloudAccountRoleExternalId: 'string',
      cloudAccountRoleId: 'string',
      cloudAccountRoleName: 'string',
      cloudAccountVendorType: 'string',
    };
  }

  validate() {
    if(this.cloudAccountRoleAccessCredential && typeof (this.cloudAccountRoleAccessCredential as any).validate === 'function') {
      (this.cloudAccountRoleAccessCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

