// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration } from "./SetExternalSamlidentityProviderResponseBodySamlidentityProviderConfiguration";


export class SetExternalSAMLIdentityProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63160579-2E1B-57B0-8273-B27427172385
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the IdP.
   */
  SAMLIdentityProviderConfiguration?: SetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLIdentityProviderConfiguration: 'SAMLIdentityProviderConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLIdentityProviderConfiguration: SetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration,
    };
  }

  validate() {
    if(this.SAMLIdentityProviderConfiguration && typeof (this.SAMLIdentityProviderConfiguration as any).validate === 'function') {
      (this.SAMLIdentityProviderConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

