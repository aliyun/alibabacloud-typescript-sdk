// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider extends $dara.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuanceLimitTime?: number;
  issuerUrl?: string;
  OIDCProviderName?: string;
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

