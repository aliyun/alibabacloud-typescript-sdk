// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAPIKeyCredentialProviderResponseBodyAPIKeyCredentialProvider extends $dara.Model {
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
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      description: 'Description',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
      description: 'string',
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
  /**
   * @example
   * 76BF2570-76F5-5093-87CE-0918DD85752C
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

