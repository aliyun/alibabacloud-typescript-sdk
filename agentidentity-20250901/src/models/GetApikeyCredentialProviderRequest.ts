// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAPIKeyCredentialProviderRequest extends $dara.Model {
  /**
   * @example
   * api-key-dash-scope
   */
  APIKeyCredentialProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

