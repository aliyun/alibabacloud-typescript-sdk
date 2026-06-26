// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAPIKeyCredentialProviderRequest extends $dara.Model {
  APIKeyCredentialProviderName?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
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

