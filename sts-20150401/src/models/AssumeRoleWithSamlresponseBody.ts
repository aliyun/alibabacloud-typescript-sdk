// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleWithSAMLResponseBodyAssumedRoleUser extends $dara.Model {
  /**
   * @remarks
   * The ARN of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * acs:sts::123456789012****:assumed-role/AdminRole/alice
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * 34458433936495****:alice
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

export class AssumeRoleWithSAMLResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.L4aBSCSJVMuKg5U1****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * wyLTSmsyPGP1ohvvw8xYgB29dlGI8KMiH2pK****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The time when the STS token expires. The time is displayed in UTC.
   * 
   * @example
   * 2015-04-09T11:52:19Z
   */
  expiration?: string;
  /**
   * @remarks
   * The STS token.
   * 
   * > Alibaba Cloud STS does not impose limits on the length of STS tokens. We strongly recommend that you do not specify a maximum length for STS tokens.
   * 
   * @example
   * ********
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

export class AssumeRoleWithSAMLResponseBodySAMLAssertionInfo extends $dara.Model {
  /**
   * @remarks
   * The value in the `Issuer` element in the SAML assertion.
   * 
   * @example
   * http://example.com/adfs/services/trust
   */
  issuer?: string;
  /**
   * @remarks
   * The `Recipient` attribute of the SubjectConfirmationData sub-element. SubjectConfirmationData is a sub-element of the `Subject` element in the SAML assertion.
   * 
   * @example
   * https://signin.aliyun.com/saml-role/SSO
   */
  recipient?: string;
  /**
   * @remarks
   * The value in the NameID sub-element of the `Subject` element in the SAML assertion.
   * 
   * @example
   * alice@example.com
   */
  subject?: string;
  /**
   * @remarks
   * The Format attribute of the `NameID` element in the SAML assertion. If the Format attribute is prefixed with `urn:oasis:names:tc:SAML:2.0:nameid-format:`, the prefix is not included in the value of this parameter. For example, if the value of the Format attribute is urn:oasis:names:tc:SAML:2.0:nameid-format:persistent/transient, the value of this parameter is `persistent/transient`.
   * 
   * @example
   * persistent
   */
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      issuer: 'Issuer',
      recipient: 'Recipient',
      subject: 'Subject',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuer: 'string',
      recipient: 'string',
      subject: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary identity that you use to assume the RAM role.
   */
  assumedRoleUser?: AssumeRoleWithSAMLResponseBodyAssumedRoleUser;
  /**
   * @remarks
   * The STS credentials.
   */
  credentials?: AssumeRoleWithSAMLResponseBodyCredentials;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6894B13B-6D71-4EF5-88FA-F32781734A7F
   */
  requestId?: string;
  /**
   * @remarks
   * The information in the SAML assertion.
   */
  SAMLAssertionInfo?: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo;
  sourceIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
      SAMLAssertionInfo: 'SAMLAssertionInfo',
      sourceIdentity: 'SourceIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithSAMLResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithSAMLResponseBodyCredentials,
      requestId: 'string',
      SAMLAssertionInfo: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo,
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
    if(this.SAMLAssertionInfo && typeof (this.SAMLAssertionInfo as any).validate === 'function') {
      (this.SAMLAssertionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

