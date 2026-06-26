// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider extends $dara.Model {
  APIKeyCredentialProviderName?: string;
  createTime?: string;
  credentialProviderArn?: string;
  description?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      description: 'Description',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
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

export class CreateAPIKeyCredentialProviderResponseBody extends $dara.Model {
  APIKeyCredentialProvider?: CreateAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProvider: 'APIKeyCredentialProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProvider: CreateAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider,
      requestId: 'string',
    };
  }

  validate() {
    if(this.APIKeyCredentialProvider && typeof (this.APIKeyCredentialProvider as any).validate === 'function') {
      (this.APIKeyCredentialProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

