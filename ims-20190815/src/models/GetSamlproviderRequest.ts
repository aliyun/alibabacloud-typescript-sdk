// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSAMLProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the identity provider. You can call ListSAMLProviders to view existing identity providers or CreateSAMLProvider to create a new identity provider.
   * 
   * This parameter is required.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderName: 'SAMLProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

