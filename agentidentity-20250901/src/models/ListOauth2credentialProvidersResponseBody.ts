// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2ProviderConfig } from "./Oauth2providerConfig";


export class ListOAuth2CredentialProvidersResponseBodyOAuth2CredentialProviders extends $dara.Model {
  /**
   * @example
   * https://agentidentitydata.cn-beijing.aliyuncs.com/oauth2/callback/d51171bc-0dae-3219-8e65-6b4cdafa3beb
   */
  callbackURL?: string;
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:tokenvault/default/oauth2credentialprovider/oauth-provider-aliyun
   */
  credentialProviderArn?: string;
  /**
   * @example
   * AliyunOAuth2
   */
  credentialProviderVendor?: string;
  /**
   * @example
   * example provider
   */
  description?: string;
  /**
   * @example
   * oauth2-provider-aliyun
   */
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfig?: OAuth2ProviderConfig;
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
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
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lURp7zQ6t4/95+g/5jN5r/
   */
  nextToken?: string;
  OAuth2CredentialProviders?: ListOAuth2CredentialProvidersResponseBodyOAuth2CredentialProviders[];
  /**
   * @example
   * 690C4C7A-AFB9-54ED-9A06-84426F5C6369
   */
  requestId?: string;
  /**
   * @example
   * 400
   */
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

