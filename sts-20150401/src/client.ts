// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AssumeRoleResponseBodyAssumedRoleUser extends $dara.Model {
  /**
   * @remarks
   * The ARN of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole/alice
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

export class AssumeRoleResponseBodyCredentials extends $dara.Model {
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

export class AssumeRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the STS token. Unit: seconds.
   * 
   * Minimum value: 900. Maximum value: the value of the `MaxSessionDuration` parameter. Default value: 3600.
   * 
   * You can call the CreateRole or UpdateRole operation to configure the `MaxSessionDuration` parameter. For more information, see [CreateRole](https://help.aliyun.com/document_detail/28710.html) or [UpdateRole](https://help.aliyun.com/document_detail/28712.html).
   * 
   * @example
   * 3600
   */
  durationSeconds?: number;
  /**
   * @remarks
   * The external ID of the RAM role.
   * 
   * This parameter is provided by an external party and is used to prevent the confused deputy problem. For more information, see [Use ExternalId to prevent the confused deputy problem](https://help.aliyun.com/document_detail/2361741.html).
   * 
   * The value must be 2 to 1,224 characters in length and can contain letters, digits, and the following special characters: `= , . @ : / - _`. The regular expression for this parameter is `[\\w+=,.@:\\/-]*`.
   * 
   * @example
   * abcd1234
   */
  externalId?: string;
  /**
   * @remarks
   * The policy that specifies the permissions of the returned STS token. You can use this parameter to grant the STS token fewer permissions than the permissions granted to the RAM role.
   * 
   * *   If you specify this parameter, the permissions of the returned STS token are the permissions that are included in the value of this parameter and owned by the RAM role.
   * *   If you do not specify this parameter, the returned STS token has all the permissions of the RAM role.
   * 
   * The value must be 1 to 2,048 characters in length.
   * 
   * For more information about policy elements and sample policies, see [Policy elements](https://help.aliyun.com/document_detail/93738.html) and [Overview of sample policies](https://help.aliyun.com/document_detail/210969.html).
   * 
   * @example
   * {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
   */
  policy?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * The trusted entity of the RAM role is an Alibaba Cloud account. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](https://help.aliyun.com/document_detail/93691.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * Format: `acs:ram::<account_id>:role/<role_name>`.
   * 
   * You can view the ARN in the RAM console or by calling operations. The following items describe the validity periods of storage addresses:
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I find the ARN of the RAM role?](https://help.aliyun.com/document_detail/39744.html)
   * *   For more information about how to view the ARN by calling operations, see [ListRoles](https://help.aliyun.com/document_detail/28713.html) or [GetRole](https://help.aliyun.com/document_detail/28711.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The custom name of the role session.
   * 
   * Set this parameter based on your business requirements. In most cases, you can set this parameter to the identity of the API caller. For example, you can specify a username. You can specify `RoleSessionName` to identify API callers that assume the same RAM role in ActionTrail logs. This allows you to track the users that perform the operations.
   * 
   * The value must be 2 to 64 characters in length and can contain letters, digits, and the following special characters: `. @ - _`.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  roleSessionName?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      externalId: 'ExternalId',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleSessionName: 'RoleSessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      externalId: 'string',
      policy: 'string',
      roleArn: 'string',
      roleSessionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary identity that you use to assume the RAM role.
   */
  assumedRoleUser?: AssumeRoleResponseBodyAssumedRoleUser;
  /**
   * @remarks
   * The STS credentials.
   */
  credentials?: AssumeRoleResponseBodyCredentials;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6894B13B-6D71-4EF5-88FA-F32781734A7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleResponseBodyAssumedRoleUser,
      credentials: AssumeRoleResponseBodyCredentials,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assumedRoleUser && typeof (this.assumedRoleUser as any).validate === 'function') {
      (this.assumedRoleUser as any).validate();
    }
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssumeRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssumeRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the STS token. Unit: seconds.
   * 
   * Default value: 3600. Minimum value: 900. Maximum value: the value of the `MaxSessionDuration` parameter.
   * 
   * For more information about how to specify `MaxSessionDuration`, see [CreateRole](https://help.aliyun.com/document_detail/28710.html) or [UpdateRole](https://help.aliyun.com/document_detail/28712.html).
   * 
   * @example
   * 3600
   */
  durationSeconds?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [View the information about an OIDC IdP](https://help.aliyun.com/document_detail/327123.html).
   * *   For more information about how to view the ARN by calling operations, see [GetOIDCProvider](https://help.aliyun.com/document_detail/327126.html) or [ListOIDCProviders](https://help.aliyun.com/document_detail/327127.html).
   * 
   * @example
   * acs:ram::113511544585****:oidc-provider/TestOidcIdp
   */
  OIDCProviderArn?: string;
  /**
   * @remarks
   * The OIDC token that is issued by the external IdP.
   * 
   * The OIDC token must be 4 to 20,000 characters in length.
   * 
   * > You must enter the original OIDC token. You do not need to enter the Base64-encoded OIDC token.
   * 
   * @example
   * eyJraWQiOiJKQzl3eHpyaHFKMGd0****
   */
  OIDCToken?: string;
  /**
   * @remarks
   * The policy that specifies the permissions of the returned STS token. You can use this parameter to grant the STS token fewer permissions than the permissions granted to the RAM role.
   * 
   * *   If you specify this parameter, the permissions of the returned STS token are the permissions that are included in the value of this parameter and owned by the RAM role.
   * *   If you do not specify this parameter, the returned STS token has all the permissions of the RAM role.
   * 
   * The value must be 1 to 2,048 characters in length.
   * 
   * @example
   * {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
   */
  policy?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I view the ARN of the RAM role?](https://help.aliyun.com/document_detail/39744.html)
   * *   For more information about how to view the ARN by calling operations, see [ListRoles](https://help.aliyun.com/document_detail/28713.html) or [GetRole](https://help.aliyun.com/document_detail/28711.html).
   * 
   * @example
   * acs:ram::113511544585****:role/testoidc
   */
  roleArn?: string;
  /**
   * @remarks
   * The custom name of the role session.
   * 
   * Set this parameter based on your business requirements. In most cases, this parameter is set to the identity of the user who calls the operation, for example, the username. In ActionTrail logs, you can distinguish the users who assume the same RAM role to perform operations based on the value of the RoleSessionName parameter. This way, you can perform user-specific auditing.
   * 
   * The value can contain letters, digits, periods (.), at signs (@), hyphens (-), and underscores (_).
   * 
   * The value must be 2 to 64 characters in length.
   * 
   * @example
   * TestOidcAssumedRoleSession
   */
  roleSessionName?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      OIDCProviderArn: 'OIDCProviderArn',
      OIDCToken: 'OIDCToken',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleSessionName: 'RoleSessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      OIDCProviderArn: 'string',
      OIDCToken: 'string',
      policy: 'string',
      roleArn: 'string',
      roleSessionName: 'string',
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
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      OIDCTokenInfo: 'OIDCTokenInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithOIDCResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithOIDCResponseBodyCredentials,
      OIDCTokenInfo: AssumeRoleWithOIDCResponseBodyOIDCTokenInfo,
      requestId: 'string',
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

export class AssumeRoleWithOIDCResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssumeRoleWithOIDCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssumeRoleWithOIDCResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the STS token. Unit: seconds.
   * 
   * Minimum value: 900. Maximum value: the value of the `MaxSessionDuration` parameter. Default value: 3600.
   * 
   * You can call the CreateRole or UpdateRole operation to configure the `MaxSessionDuration` parameter. For more information, see [CreateRole](https://help.aliyun.com/document_detail/28710.html) or [UpdateRole](https://help.aliyun.com/document_detail/28712.html).
   * 
   * @example
   * 3600
   */
  durationSeconds?: number;
  /**
   * @remarks
   * The policy that specifies the permissions of the returned STS token. You can use this parameter to grant the STS token fewer permissions than the permissions granted to the RAM role.
   * 
   * *   If you specify this parameter, the permissions of the returned STS token are the permissions that are included in the value of this parameter and owned by the RAM role.
   * *   If you do not specify this parameter, the returned STS token has all the permissions of the RAM role.
   * 
   * The value must be 1 to 2,048 characters in length.
   * 
   * @example
   * url_encoded_policy
   */
  policy?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * The trust entity of the RAM role is a SAML IdP. For more information, see [Create a RAM role for a trusted IdP](https://help.aliyun.com/document_detail/116805.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * Format: `acs:ram::<account_id>:role/<role_name>`.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I view the ARN of the RAM role?](https://help.aliyun.com/document_detail/39744.html).
   * *   For more information about how to view the ARN by calling operations, see [ListRoles](https://help.aliyun.com/document_detail/28713.html) or [GetRole](https://help.aliyun.com/document_detail/28711.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The Base64-encoded SAML assertion.
   * 
   * The value must be 4 to 100,000 characters in length.
   * 
   * > A complete SAML response rather than a single SAMLAssertion field must be retrieved from the external IdP.
   * 
   * @example
   * base64_encoded_saml_assertion
   */
  SAMLAssertion?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the SAML IdP that is created in the RAM console.
   * 
   * Format: `acs:ram::<account_id>:saml-provider/<saml_provider_id>`.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I view the ARN of a RAM role?](https://help.aliyun.com/document_detail/116795.html)
   * *   For more information about how to view the ARN by calling operations, see [GetSAMLProvider](https://help.aliyun.com/document_detail/186833.html) or [ListSAMLProviders](https://help.aliyun.com/document_detail/186851.html).
   * 
   * @example
   * acs:ram::123456789012****:saml-provider/company1
   */
  SAMLProviderArn?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      policy: 'Policy',
      roleArn: 'RoleArn',
      SAMLAssertion: 'SAMLAssertion',
      SAMLProviderArn: 'SAMLProviderArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      policy: 'string',
      roleArn: 'string',
      SAMLAssertion: 'string',
      SAMLProviderArn: 'string',
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
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
      SAMLAssertionInfo: 'SAMLAssertionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithSAMLResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithSAMLResponseBodyCredentials,
      requestId: 'string',
      SAMLAssertionInfo: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo,
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

export class AssumeRoleWithSAMLResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssumeRoleWithSAMLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssumeRoleWithSAMLResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerIdentityResponseBody extends $dara.Model {
  /**
   * @example
   * 196813200012****
   */
  accountId?: string;
  /**
   * @example
   * acs:ram::196813200012****:user/admin
   */
  arn?: string;
  /**
   * @example
   * RAMUser
   */
  identityType?: string;
  /**
   * @example
   * 28877424437521****
   */
  principalId?: string;
  /**
   * @example
   * 3C87BF47-3724-5443-ADC1-5AEAD9A03EB1
   */
  requestId?: string;
  /**
   * @example
   * 33537620082992****
   */
  roleId?: string;
  /**
   * @example
   * 216959339000****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      arn: 'Arn',
      identityType: 'IdentityType',
      principalId: 'PrincipalId',
      requestId: 'RequestId',
      roleId: 'RoleId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      arn: 'string',
      identityType: 'string',
      principalId: 'string',
      requestId: 'string',
      roleId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerIdentityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCallerIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCallerIdentityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "sts.aliyuncs.com",
      'cn-beijing-finance-1': "sts.aliyuncs.com",
      'cn-beijing-finance-pop': "sts.aliyuncs.com",
      'cn-beijing-gov-1': "sts.aliyuncs.com",
      'cn-beijing-nu16-b01': "sts.aliyuncs.com",
      'cn-edge-1': "sts.aliyuncs.com",
      'cn-fujian': "sts.aliyuncs.com",
      'cn-haidian-cm12-c01': "sts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "sts.aliyuncs.com",
      'cn-hangzhou-finance': "sts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "sts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "sts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "sts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "sts.aliyuncs.com",
      'cn-hangzhou-test-306': "sts.aliyuncs.com",
      'cn-hongkong-finance-pop': "sts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "sts.aliyuncs.com",
      'cn-north-2-gov-1': "sts-vpc.cn-north-2-gov-1.aliyuncs.com",
      'cn-qingdao-nebula': "sts.aliyuncs.com",
      'cn-shanghai-et15-b01': "sts.aliyuncs.com",
      'cn-shanghai-et2-b01': "sts.aliyuncs.com",
      'cn-shanghai-inner': "sts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "sts.aliyuncs.com",
      'cn-shenzhen-finance-1': "sts-vpc.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-shenzhen-inner': "sts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "sts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "sts.aliyuncs.com",
      'cn-wuhan': "sts.aliyuncs.com",
      'cn-yushanfang': "sts.aliyuncs.com",
      'cn-zhangbei': "sts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "sts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "sts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "sts.aliyuncs.com",
      'eu-west-1-oxs': "sts.aliyuncs.com",
      'rus-west-1-pop': "sts.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Obtains a Security Token Service (STS) token to assume a Resource Access Management (RAM) role.
   * 
   * @remarks
   * ### Prerequisites
   * You cannot use an Alibaba Cloud account to call this operation. The requester of this operation can only be a RAM user or RAM role. Make sure that the AliyunSTSAssumeRoleAccess policy is attached to the requester. After this policy is attached to the requester, the requester has the management permissions on STS.
   * If you do not attach the AliyunSTSAssumeRoleAccess policy to the requester, the following error message is returned:
   * `You are not authorized to do this action. You should be authorized by RAM.`
   * You can refer to the following information to troubleshoot the error:
   * *   Cause of the error: The policy that is required to assume a RAM role is not attached to the requester. To resolve this issue, attach the AliyunSTSAssumeRoleAccess policy or a custom policy to the requester. For more information, see [Can I specify the RAM role that a RAM user can assume?](https://help.aliyun.com/document_detail/39744.html) and [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/116146.html).
   * *   Cause of the error: The requester is not authorized to assume the RAM role. To resolve this issue, add the requester to the Principal element in the trust policy of the RAM role For more information, see [Edit the trust policy of a RAM role](https://help.aliyun.com/document_detail/116819.html).
   * ### Best practices
   * An STS token is valid for a period of time after it is issued, and the number of STS tokens that can be issued within an interval is also limited. Therefore, we recommend that you configure a proper validity period for an STS token and repeatedly use the token within this period. This prevents frequent issuing of STS tokens from adversely affecting your services if a large number of requests are sent. For more information about the limit, see [Is the number of STS API requests limited?](https://help.aliyun.com/document_detail/39744.html) You can configure the `DurationSeconds` parameter to specify a validity period for an STS token.
   * When you upload or download Object Storage Service (OSS) objects on mobile devices, a large number of STS API requests are sent. In this case, repeated use of an STS token may not meet your business requirements. To avoid the limit on STS API requests from affecting access to OSS, you can **add a signature to the URL of an OSS object**. For more information, see [Add signatures to URLs](https://help.aliyun.com/document_detail/31952.html) and [Obtain signature information from the server and upload data to OSS](https://help.aliyun.com/document_detail/31926.html).
   * 
   * @param request - AssumeRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeRoleResponse
   */
  async assumeRoleWithOptions(request: AssumeRoleRequest, runtime: $dara.RuntimeOptions): Promise<AssumeRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!$dara.isNull(request.externalId)) {
      query["ExternalId"] = request.externalId;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.roleSessionName)) {
      query["RoleSessionName"] = request.roleSessionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeRole",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssumeRoleResponse>(await this.callApi(params, req, runtime), new AssumeRoleResponse({}));
    } else {
      return $dara.cast<AssumeRoleResponse>(await this.execute(params, req, runtime), new AssumeRoleResponse({}));
    }

  }

  /**
   * Obtains a Security Token Service (STS) token to assume a Resource Access Management (RAM) role.
   * 
   * @remarks
   * ### Prerequisites
   * You cannot use an Alibaba Cloud account to call this operation. The requester of this operation can only be a RAM user or RAM role. Make sure that the AliyunSTSAssumeRoleAccess policy is attached to the requester. After this policy is attached to the requester, the requester has the management permissions on STS.
   * If you do not attach the AliyunSTSAssumeRoleAccess policy to the requester, the following error message is returned:
   * `You are not authorized to do this action. You should be authorized by RAM.`
   * You can refer to the following information to troubleshoot the error:
   * *   Cause of the error: The policy that is required to assume a RAM role is not attached to the requester. To resolve this issue, attach the AliyunSTSAssumeRoleAccess policy or a custom policy to the requester. For more information, see [Can I specify the RAM role that a RAM user can assume?](https://help.aliyun.com/document_detail/39744.html) and [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/116146.html).
   * *   Cause of the error: The requester is not authorized to assume the RAM role. To resolve this issue, add the requester to the Principal element in the trust policy of the RAM role For more information, see [Edit the trust policy of a RAM role](https://help.aliyun.com/document_detail/116819.html).
   * ### Best practices
   * An STS token is valid for a period of time after it is issued, and the number of STS tokens that can be issued within an interval is also limited. Therefore, we recommend that you configure a proper validity period for an STS token and repeatedly use the token within this period. This prevents frequent issuing of STS tokens from adversely affecting your services if a large number of requests are sent. For more information about the limit, see [Is the number of STS API requests limited?](https://help.aliyun.com/document_detail/39744.html) You can configure the `DurationSeconds` parameter to specify a validity period for an STS token.
   * When you upload or download Object Storage Service (OSS) objects on mobile devices, a large number of STS API requests are sent. In this case, repeated use of an STS token may not meet your business requirements. To avoid the limit on STS API requests from affecting access to OSS, you can **add a signature to the URL of an OSS object**. For more information, see [Add signatures to URLs](https://help.aliyun.com/document_detail/31952.html) and [Obtain signature information from the server and upload data to OSS](https://help.aliyun.com/document_detail/31926.html).
   * 
   * @param request - AssumeRoleRequest
   * @returns AssumeRoleResponse
   */
  async assumeRole(request: AssumeRoleRequest): Promise<AssumeRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeRoleWithOptions(request, runtime);
  }

  /**
   * Queries a Security Token Service (STS) token to assume a Resource Access Management (RAM) role during role-based single sign-on (SSO) by using OpenID Connect (OIDC).
   * 
   * @remarks
   * ### Prerequisites
   * *   An OIDC token is obtained from an external identity provider (IdP).
   * *   An OIDC IdP is created in the RAM console. For more information, see [Create an OIDC IdP](https://help.aliyun.com/document_detail/327123.html) or [CreateOIDCProvider](https://help.aliyun.com/document_detail/327135.html).
   * *   A RAM role whose trusted entity is an OIDC IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](https://help.aliyun.com/document_detail/116805.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * @param request - AssumeRoleWithOIDCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeRoleWithOIDCResponse
   */
  async assumeRoleWithOIDCWithOptions(request: AssumeRoleWithOIDCRequest, runtime: $dara.RuntimeOptions): Promise<AssumeRoleWithOIDCResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!$dara.isNull(request.OIDCProviderArn)) {
      query["OIDCProviderArn"] = request.OIDCProviderArn;
    }

    if (!$dara.isNull(request.OIDCToken)) {
      query["OIDCToken"] = request.OIDCToken;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.roleSessionName)) {
      query["RoleSessionName"] = request.roleSessionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeRoleWithOIDC",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssumeRoleWithOIDCResponse>(await this.callApi(params, req, runtime), new AssumeRoleWithOIDCResponse({}));
    } else {
      return $dara.cast<AssumeRoleWithOIDCResponse>(await this.execute(params, req, runtime), new AssumeRoleWithOIDCResponse({}));
    }

  }

  /**
   * Queries a Security Token Service (STS) token to assume a Resource Access Management (RAM) role during role-based single sign-on (SSO) by using OpenID Connect (OIDC).
   * 
   * @remarks
   * ### Prerequisites
   * *   An OIDC token is obtained from an external identity provider (IdP).
   * *   An OIDC IdP is created in the RAM console. For more information, see [Create an OIDC IdP](https://help.aliyun.com/document_detail/327123.html) or [CreateOIDCProvider](https://help.aliyun.com/document_detail/327135.html).
   * *   A RAM role whose trusted entity is an OIDC IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](https://help.aliyun.com/document_detail/116805.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * @param request - AssumeRoleWithOIDCRequest
   * @returns AssumeRoleWithOIDCResponse
   */
  async assumeRoleWithOIDC(request: AssumeRoleWithOIDCRequest): Promise<AssumeRoleWithOIDCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeRoleWithOIDCWithOptions(request, runtime);
  }

  /**
   * Obtains a Security Token Service (STS) token to assume a Resource Access Management (RAM) role during role-based single sign-on (SSO) by using Security Assertion Markup Language (SAML).
   * 
   * @remarks
   * ###
   * *   A SAML response is obtained from an external identity provider (IdP).
   * *   A SAML IdP is created in the RAM console. For more information, see [Create a SAML IdP](https://help.aliyun.com/document_detail/116083.html) or [CreateSAMLProvider](https://help.aliyun.com/document_detail/186846.html).
   * *   A RAM role whose trusted entity is a SAML IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](https://help.aliyun.com/document_detail/116805.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * @param request - AssumeRoleWithSAMLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeRoleWithSAMLResponse
   */
  async assumeRoleWithSAMLWithOptions(request: AssumeRoleWithSAMLRequest, runtime: $dara.RuntimeOptions): Promise<AssumeRoleWithSAMLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.SAMLAssertion)) {
      query["SAMLAssertion"] = request.SAMLAssertion;
    }

    if (!$dara.isNull(request.SAMLProviderArn)) {
      query["SAMLProviderArn"] = request.SAMLProviderArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeRoleWithSAML",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssumeRoleWithSAMLResponse>(await this.callApi(params, req, runtime), new AssumeRoleWithSAMLResponse({}));
    } else {
      return $dara.cast<AssumeRoleWithSAMLResponse>(await this.execute(params, req, runtime), new AssumeRoleWithSAMLResponse({}));
    }

  }

  /**
   * Obtains a Security Token Service (STS) token to assume a Resource Access Management (RAM) role during role-based single sign-on (SSO) by using Security Assertion Markup Language (SAML).
   * 
   * @remarks
   * ###
   * *   A SAML response is obtained from an external identity provider (IdP).
   * *   A SAML IdP is created in the RAM console. For more information, see [Create a SAML IdP](https://help.aliyun.com/document_detail/116083.html) or [CreateSAMLProvider](https://help.aliyun.com/document_detail/186846.html).
   * *   A RAM role whose trusted entity is a SAML IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](https://help.aliyun.com/document_detail/116805.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * @param request - AssumeRoleWithSAMLRequest
   * @returns AssumeRoleWithSAMLResponse
   */
  async assumeRoleWithSAML(request: AssumeRoleWithSAMLRequest): Promise<AssumeRoleWithSAMLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeRoleWithSAMLWithOptions(request, runtime);
  }

  /**
   * The ID of the Alibaba Cloud account to which the current requester belongs.
   * 
   * @param request - GetCallerIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallerIdentityResponse
   */
  async getCallerIdentityWithOptions(runtime: $dara.RuntimeOptions): Promise<GetCallerIdentityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetCallerIdentity",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCallerIdentityResponse>(await this.callApi(params, req, runtime), new GetCallerIdentityResponse({}));
    } else {
      return $dara.cast<GetCallerIdentityResponse>(await this.execute(params, req, runtime), new GetCallerIdentityResponse({}));
    }

  }

  /**
   * The ID of the Alibaba Cloud account to which the current requester belongs.
   * @returns GetCallerIdentityResponse
   */
  async getCallerIdentity(): Promise<GetCallerIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallerIdentityWithOptions(runtime);
  }

}
