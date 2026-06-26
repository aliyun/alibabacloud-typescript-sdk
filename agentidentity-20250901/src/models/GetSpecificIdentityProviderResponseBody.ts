// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpecificIdentityProviderResponseBodySpecificIdentityProviderConfiguration extends $dara.Model {
  IDPMetadata?: string;
  identityProviderType?: string;
  SSOStatus?: string;
  static names(): { [key: string]: string } {
    return {
      IDPMetadata: 'IDPMetadata',
      identityProviderType: 'IdentityProviderType',
      SSOStatus: 'SSOStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IDPMetadata: 'string',
      identityProviderType: 'string',
      SSOStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpecificIdentityProviderResponseBody extends $dara.Model {
  requestId?: string;
  specificIdentityProviderConfiguration?: GetSpecificIdentityProviderResponseBodySpecificIdentityProviderConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      specificIdentityProviderConfiguration: 'SpecificIdentityProviderConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      specificIdentityProviderConfiguration: GetSpecificIdentityProviderResponseBodySpecificIdentityProviderConfiguration,
    };
  }

  validate() {
    if(this.specificIdentityProviderConfiguration && typeof (this.specificIdentityProviderConfiguration as any).validate === 'function') {
      (this.specificIdentityProviderConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

