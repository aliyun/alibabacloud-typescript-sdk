// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleWithOIDCResponseBodyAssumedRoleUser extends $dara.Model {
  /**
   * @remarks
   * The ARN of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * acs:ram::113511544585****:role/testoidc/TestOidcAssumedRoleSession
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * 33157794895460****
   */
  assumedRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumedRoleId: 'AssumedRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumedRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUgYrLnoC37mZZCNnAbez****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The time when the STS token expires. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-20T04:27:09Z
   */
  expiration?: string;
  /**
   * @remarks
   * The STS token.
   * 
   * > Alibaba Cloud STS does not impose limits on the length of STS tokens. We strongly recommend that you do not specify a maximum length for STS tokens.
   * 
   * @example
   * CAIShwJ1q6Ft5B2yfSjIr5bSEsj4g7BihPWGWHz****
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
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

export class AssumeRoleWithOIDCResponseBodyOIDCTokenInfo extends $dara.Model {
  /**
   * @remarks
   * The audience. If multiple audiences are returned, the audiences are separated by commas (,).
   * 
   * The audience is represented by the `aud` field in the OIDC Token.
   * 
   * @example
   * 496271242565057****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC token expires.
   * 
   * @example
   * 2021-10-20T04:27:09Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The time when the OIDC token was issued.
   * 
   * @example
   * 2021-10-20T03:27:09Z
   */
  issuanceTime?: string;
  /**
   * @remarks
   * The URL of the issuer,
   * 
   * which is represented by the `iss` field in the OIDC Token.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuer?: string;
  /**
   * @remarks
   * The subject,
   * 
   * which is represented by the `sub` field in the OIDC Token.
   * 
   * @example
   * KryrkIdjylZb7agUgCEf****
   */
  subject?: string;
  /**
   * @remarks
   * The verification information about the OIDC token. For more information, see [Manage an OIDC IdP](https://help.aliyun.com/document_detail/327123.html).
   * 
   * @example
   * Success
   */
  verificationInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      expirationTime: 'ExpirationTime',
      issuanceTime: 'IssuanceTime',
      issuer: 'Issuer',
      subject: 'Subject',
      verificationInfo: 'VerificationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      expirationTime: 'string',
      issuanceTime: 'string',
      issuer: 'string',
      subject: 'string',
      verificationInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary identity that you use to assume the RAM role.
   */
  assumedRoleUser?: AssumeRoleWithOIDCResponseBodyAssumedRoleUser;
  /**
   * @remarks
   * The access credentials.
   */
  credentials?: AssumeRoleWithOIDCResponseBodyCredentials;
  /**
   * @remarks
   * The information about the OIDC token.
   */
  OIDCTokenInfo?: AssumeRoleWithOIDCResponseBodyOIDCTokenInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D57EAD2-8723-1F26-B69C-F8707D8B565D
   */
  requestId?: string;
  sourceIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      OIDCTokenInfo: 'OIDCTokenInfo',
      requestId: 'RequestId',
      sourceIdentity: 'SourceIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithOIDCResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithOIDCResponseBodyCredentials,
      OIDCTokenInfo: AssumeRoleWithOIDCResponseBodyOIDCTokenInfo,
      requestId: 'string',
      sourceIdentity: 'string',
    };
  }

  validate() {
    if(this.assumedRoleUser && typeof (this.assumedRoleUser as any).validate === 'function') {
      (this.assumedRoleUser as any).validate();
    }
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    if(this.OIDCTokenInfo && typeof (this.OIDCTokenInfo as any).validate === 'function') {
      (this.OIDCTokenInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

