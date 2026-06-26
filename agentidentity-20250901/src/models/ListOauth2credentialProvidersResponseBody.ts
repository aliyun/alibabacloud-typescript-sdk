// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2ProviderConfig } from "./Oauth2providerConfig";


export class ListOAuth2CredentialProvidersResponseBodyOAuth2CredentialProviders extends $dara.Model {
  callbackURL?: string;
  createTime?: string;
  credentialProviderArn?: string;
  credentialProviderVendor?: string;
  description?: string;
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfig?: OAuth2ProviderConfig;
  tokenVaultName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      credentialProviderVendor: 'CredentialProviderVendor',
      description: 'Description',
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      OAuth2ProviderConfig: 'OAuth2ProviderConfig',
      tokenVaultName: 'TokenVaultName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackURL: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
      credentialProviderVendor: 'string',
      description: 'string',
      OAuth2CredentialProviderName: 'string',
      OAuth2ProviderConfig: OAuth2ProviderConfig,
      tokenVaultName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.OAuth2ProviderConfig && typeof (this.OAuth2ProviderConfig as any).validate === 'function') {
      (this.OAuth2ProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOAuth2CredentialProvidersResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  OAuth2CredentialProviders?: ListOAuth2CredentialProvidersResponseBodyOAuth2CredentialProviders[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OAuth2CredentialProviders: 'OAuth2CredentialProviders',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      OAuth2CredentialProviders: { 'type': 'array', 'itemType': ListOAuth2CredentialProvidersResponseBodyOAuth2CredentialProviders },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.OAuth2CredentialProviders)) {
      $dara.Model.validateArray(this.OAuth2CredentialProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

