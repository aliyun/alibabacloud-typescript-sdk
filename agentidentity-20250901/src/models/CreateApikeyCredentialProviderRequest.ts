// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAPIKeyCredentialProviderRequest extends $dara.Model {
  /**
   * @example
   * example api key
   */
  APIKey?: string;
  /**
   * @example
   * api-key-dash-scope
   */
  APIKeyCredentialProviderName?: string;
  /**
   * @example
   * example provider
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      APIKeyCredentialProviderName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

