// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderResponseBodyIdentityProvider extends $dara.Model {
  allowedAudience?: string[];
  createTime?: string;
  description?: string;
  discoveryURL?: string;
  identityProviderArn?: string;
  identityProviderName?: string;
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

