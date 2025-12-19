// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider extends $dara.Model {
  /**
   * @example
   * api-key-dash-scope
   */
  APIKeyCredentialProviderName?: string;
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:tokenvault/default/apikeycredentialprovider/api-key-dash-scope
   */
  credentialProviderArn?: string;
  /**
   * @example
   * example provider
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
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

export class CreateAPIKeyCredentialProviderResponseBody extends $dara.Model {
  APIKeyCredentialProvider?: CreateAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider;
  /**
   * @example
   * 0B447F15-7037-512D-8EFC-A4188FC9E9E6
   */
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

