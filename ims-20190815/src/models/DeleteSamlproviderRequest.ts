// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSAMLProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the IdP that you want to delete.
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

