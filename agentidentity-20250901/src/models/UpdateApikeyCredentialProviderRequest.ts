// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAPIKeyCredentialProviderRequest extends $dara.Model {
  APIKey?: string;
  APIKeyCredentialProviderName?: string;
  description?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      description: 'Description',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      APIKeyCredentialProviderName: 'string',
      description: 'string',
      tokenVaultName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

