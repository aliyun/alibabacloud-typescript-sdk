// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOIDCProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client, which is provided by the external IdP. If you want to specify multiple client IDs, separate the client IDs with commas (,).
   * 
   * The client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are `periods (.), hyphens (-), underscores (_), colons (:), and forward slashes (/)`.``
   * 
   * The client ID can be up to 128 characters in length.
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * The description can be up to 256 characters in length.
   * 
   * @example
   * This is an OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS CA certificate, which is provided by the external IdP. If you want to specify multiple fingerprints, separate the fingerprints with commas (,).
   * 
   * The fingerprint can contain letters and digits.
   * 
   * The fingerprint can be up to 128 characters in length.
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 6
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer, which is provided by the external IdP. The URL of the issuer must be unique within an Alibaba Cloud account.
   * 
   * The URL of the issuer must start with `https` and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (`?`) or logon information that is identified by at signs (`@`). The URL cannot be a fragment URL that contains number signs (`#`).
   * 
   * The URL can be up to 255 characters in length.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are `periods, (.), hyphens (-), and underscores (_)`.``
   * 
   * The name can be up to 128 characters in length.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      description: 'Description',
      fingerprints: 'Fingerprints',
      issuanceLimitTime: 'IssuanceLimitTime',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      description: 'string',
      fingerprints: 'string',
      issuanceLimitTime: 'number',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

