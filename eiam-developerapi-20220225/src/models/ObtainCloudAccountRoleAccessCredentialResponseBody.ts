// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAlibabaCloudStsToken extends $dara.Model {
  /**
   * @example
   * STS.NUgYrLnoC37mZZCNnAbez****
   */
  accessKeyId?: string;
  /**
   * @example
   * CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2****
   */
  accessKeySecret?: string;
  /**
   * @example
   * 2021-10-20T04:27:09Z
   */
  expiration?: string;
  /**
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

export class ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredential extends $dara.Model {
  /**
   * @example
   * 1767196800
   */
  accessCredentialExpiresAt?: number;
  alibabaCloudStsToken?: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAlibabaCloudStsToken;
  static names(): { [key: string]: string } {
    return {
      accessCredentialExpiresAt: 'accessCredentialExpiresAt',
      alibabaCloudStsToken: 'alibabaCloudStsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCredentialExpiresAt: 'number',
      alibabaCloudStsToken: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredentialAlibabaCloudStsToken,
    };
  }

  validate() {
    if(this.alibabaCloudStsToken && typeof (this.alibabaCloudStsToken as any).validate === 'function') {
      (this.alibabaCloudStsToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainCloudAccountRoleAccessCredentialResponseBody extends $dara.Model {
  /**
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  cloudAccountRoleAccessCredential?: ObtainCloudAccountRoleAccessCredentialResponseBodyCloudAccountRoleAccessCredential;
  /**
   * @example
   * acs:ram::xxx:role/role-test
   */
  cloudAccountRoleExternalId?: string;
  /**
   * @example
   * carole_01kmek49aqxxxx
   */
  cloudAccountRoleId?: string;
  /**
   * @example
   * role-test
   */
  cloudAccountRoleName?: string;
  /**
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

