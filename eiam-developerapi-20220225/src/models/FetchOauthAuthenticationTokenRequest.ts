// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchOAuthAuthenticationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The credential provider identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  customParameters?: { [key: string]: string };
  forceAuthentication?: boolean;
  /**
   * @remarks
   * The scope in the OAuth protocol.
   * 
   * > If not specified, the scope of the issued OAuth Access Token defaults to the Scope configuration of the corresponding credential provider.
   * 
   * >Notice: Multiple Scope values are separated by spaces.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      credentialProviderIdentifier: 'credentialProviderIdentifier',
      customParameters: 'customParameters',
      forceAuthentication: 'forceAuthentication',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProviderIdentifier: 'string',
      customParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      forceAuthentication: 'boolean',
      scope: 'string',
    };
  }

  validate() {
    if(this.customParameters) {
      $dara.Model.validateMap(this.customParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

