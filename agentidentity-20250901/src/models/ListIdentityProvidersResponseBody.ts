// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyIdentityProviders extends $dara.Model {
  allowedAudience?: string[];
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * ods_api_public_ios_wanxin_boxgame_user_behavior_integration_di
   */
  description?: string;
  /**
   * @example
   * https://oauth.aliyun.com/.well-known/openid-configuration
   */
  discoveryURL?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:identityprovider/identity-provider-okta
   */
  identityProviderArn?: string;
  /**
   * @example
   * identity-provider-okta
   */
  identityProviderName?: string;
  /**
   * @example
   * 2025-06-09T02:04:23
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowedAudience: 'AllowedAudience',
      createTime: 'CreateTime',
      description: 'Description',
      discoveryURL: 'DiscoveryURL',
      identityProviderArn: 'IdentityProviderArn',
      identityProviderName: 'IdentityProviderName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedAudience: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      discoveryURL: 'string',
      identityProviderArn: 'string',
      identityProviderName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedAudience)) {
      $dara.Model.validateArray(this.allowedAudience);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBody extends $dara.Model {
  identityProviders?: ListIdentityProvidersResponseBodyIdentityProviders[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lsy4U8Dgz6TCndCo6o5TB8
   */
  nextToken?: string;
  /**
   * @example
   * D325DF9D-7CA8-5C47-BA0C-9A74873F2BE3
   */
  requestId?: string;
  /**
   * @example
   * 33
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identityProviders: 'IdentityProviders',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviders: { 'type': 'array', 'itemType': ListIdentityProvidersResponseBodyIdentityProviders },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identityProviders)) {
      $dara.Model.validateArray(this.identityProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

