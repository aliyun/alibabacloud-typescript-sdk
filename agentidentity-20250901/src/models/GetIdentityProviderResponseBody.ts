// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderResponseBodyIdentityProvider extends $dara.Model {
  allowedAudience?: string[];
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * example agent
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
   * 2025-12-18T06:19:17Z
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

export class GetIdentityProviderResponseBody extends $dara.Model {
  identityProvider?: GetIdentityProviderResponseBodyIdentityProvider;
  /**
   * @example
   * 117E1427-1D4C-59CF-A0A8-D7DCDFE88863
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProvider: 'IdentityProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProvider: GetIdentityProviderResponseBodyIdentityProvider,
      requestId: 'string',
    };
  }

  validate() {
    if(this.identityProvider && typeof (this.identityProvider as any).validate === 'function') {
      (this.identityProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

