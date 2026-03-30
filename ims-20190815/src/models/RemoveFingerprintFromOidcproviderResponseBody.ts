// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFingerprintFromOIDCProviderResponseBodyOIDCProvider extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).
   * 
   * @example
   * 0oa4u6l8x5WoaVbd****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 5938fd4d98bab03faadb97b34396831e3780****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 12
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuanceLimitTime: 'IssuanceLimitTime',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuanceLimitTime: 'number',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFingerprintFromOIDCProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProvider?: RemoveFingerprintFromOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C90CE971-4C7F-5D93-BD3E-2D0E79D03C01
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: RemoveFingerprintFromOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  validate() {
    if(this.OIDCProvider && typeof (this.OIDCProvider as any).validate === 'function') {
      (this.OIDCProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

