// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider extends $dara.Model {
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

export class RemoveClientIdFromOIDCProviderResponseBody extends $dara.Model {
  OIDCProvider?: RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider,
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

