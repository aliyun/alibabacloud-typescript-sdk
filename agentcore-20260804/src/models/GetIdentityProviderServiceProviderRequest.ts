// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderServiceProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The query parameter is required and only supports the exact value SAML. The response returns SAML.
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

