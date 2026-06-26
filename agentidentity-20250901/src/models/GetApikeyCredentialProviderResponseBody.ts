// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider extends $dara.Model {
  APIKeyCredentialProviderName?: string;
  createTime?: string;
  credentialProviderArn?: string;
  description?: string;
  tokenVaultName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      description: 'Description',
      tokenVaultName: 'TokenVaultName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
      description: 'string',
      tokenVaultName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAPIKeyCredentialProviderResponseBody extends $dara.Model {
  APIKeyCredentialProvider?: GetAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProvider: 'APIKeyCredentialProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProvider: GetAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider,
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

