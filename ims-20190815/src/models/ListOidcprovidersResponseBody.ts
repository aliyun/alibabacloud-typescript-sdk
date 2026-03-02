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
  isTruncated?: boolean;
  marker?: string;
  OIDCProviders?: ListOIDCProvidersResponseBodyOIDCProviders;
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

