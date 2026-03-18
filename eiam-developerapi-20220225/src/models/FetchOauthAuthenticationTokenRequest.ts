// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchOAuthAuthenticationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      credentialProviderIdentifier: 'credentialProviderIdentifier',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProviderIdentifier: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

