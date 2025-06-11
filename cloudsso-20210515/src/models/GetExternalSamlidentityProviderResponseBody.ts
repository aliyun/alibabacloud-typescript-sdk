// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration } from "./GetExternalSamlidentityProviderResponseBodySamlidentityProviderConfiguration";


export class GetExternalSAMLIdentityProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96D1E5FF-0301-5636-8D33-071E033CFB82
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the IdP.
   */
  SAMLIdentityProviderConfiguration?: GetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLIdentityProviderConfiguration: 'SAMLIdentityProviderConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLIdentityProviderConfiguration: GetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration,
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

