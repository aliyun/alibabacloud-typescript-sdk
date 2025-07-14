// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider extends $dara.Model {
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
   * The ID of the client, If you want to specify multiple client IDs, separate the client IDs with commas (,).
   * 
   * @example
   * 498469743454717****
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
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
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

export class ListOIDCProvidersResponseBodyOIDCProviders extends $dara.Model {
  OIDCProvider?: ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider[];
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: { 'type': 'array', 'itemType': ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider },
    };
  }

  validate() {
    if(Array.isArray(this.OIDCProvider)) {
      $dara.Model.validateArray(this.OIDCProvider);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOIDCProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.``
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProviders?: ListOIDCProvidersResponseBodyOIDCProviders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D2148337-B86A-57F0-8B31-EB7BE0125226
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      OIDCProviders: 'OIDCProviders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      OIDCProviders: ListOIDCProvidersResponseBodyOIDCProviders,
      requestId: 'string',
    };
  }

  validate() {
    if(this.OIDCProviders && typeof (this.OIDCProviders as any).validate === 'function') {
      (this.OIDCProviders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

