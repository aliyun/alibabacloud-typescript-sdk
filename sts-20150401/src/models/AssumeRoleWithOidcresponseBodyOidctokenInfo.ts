// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

