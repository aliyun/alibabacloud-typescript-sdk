// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAPIKeyCredentialProviderRequest extends $dara.Model {
  /**
   * @example
   * new example api key
   */
  APIKey?: string;
  /**
   * @example
   * api-key-dash-scope
   */
  APIKeyCredentialProviderName?: string;
  /**
   * @example
   * new example provider
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

