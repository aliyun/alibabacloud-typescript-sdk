// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderServiceProviderRequest extends $dara.Model {
  /**
   * @remarks
   * Required. The query parameter. Only the exact value SAML is supported. The response returns SAML.
   * 
   * This parameter is required.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

