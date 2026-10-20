// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceAPIKeyRequest extends $dara.Model {
  resourceCredentialProviderName?: string;
  tokenVaultName?: string;
  workloadAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCredentialProviderName: 'ResourceCredentialProviderName',
      tokenVaultName: 'TokenVaultName',
      workloadAccessToken: 'WorkloadAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCredentialProviderName: 'string',
      tokenVaultName: 'string',
      workloadAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

