// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSpecificIdentityProviderResponseBodySpecificIdentityProviderConfiguration extends $dara.Model {
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

export class SetSpecificIdentityProviderResponseBody extends $dara.Model {
  requestId?: string;
  specificIdentityProviderConfiguration?: SetSpecificIdentityProviderResponseBodySpecificIdentityProviderConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      specificIdentityProviderConfiguration: 'SpecificIdentityProviderConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      specificIdentityProviderConfiguration: SetSpecificIdentityProviderResponseBodySpecificIdentityProviderConfiguration,
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

