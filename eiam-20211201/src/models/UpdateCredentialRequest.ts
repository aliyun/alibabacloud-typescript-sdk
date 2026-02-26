// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialRequestCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @remarks
   * API Key 凭证类型的凭据内容。
   * 
   * @example
   * nsklnertyt5ddwizncxxxx
   */
  apiKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialRequestCredentialContentOAuthClientContent extends $dara.Model {
  /**
   * @remarks
   * OAuth协议的client_id。
   * 
   * @example
   * dmvncmxersdxxxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * OAuth协议的client_secret。
   * 
   * @example
   * nsklncmwizncxxxx
   */
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialRequestCredentialContent extends $dara.Model {
  /**
   * @remarks
   * Api Key的内容。
   */
  apiKeyContent?: UpdateCredentialRequestCredentialContentApiKeyContent;
  /**
   * @remarks
   * OAuth客户端认证凭证类型的凭据内容。
   */
  OAuthClientContent?: UpdateCredentialRequestCredentialContentOAuthClientContent;
  static names(): { [key: string]: string } {
    return {
      apiKeyContent: 'ApiKeyContent',
      OAuthClientContent: 'OAuthClientContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyContent: UpdateCredentialRequestCredentialContentApiKeyContent,
      OAuthClientContent: UpdateCredentialRequestCredentialContentOAuthClientContent,
    };
  }

  validate() {
    if(this.apiKeyContent && typeof (this.apiKeyContent as any).validate === 'function') {
      (this.apiKeyContent as any).validate();
    }
    if(this.OAuthClientContent && typeof (this.OAuthClientContent as any).validate === 'function') {
      (this.OAuthClientContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 凭据的内容。
   */
  credentialContent?: UpdateCredentialRequestCredentialContent;
  /**
   * @remarks
   * 凭据ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @remarks
   * 凭据名称。
   * 
   * @example
   * credential_name
   */
  credentialName?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      credentialContent: 'CredentialContent',
      credentialId: 'CredentialId',
      credentialName: 'CredentialName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      credentialContent: UpdateCredentialRequestCredentialContent,
      credentialId: 'string',
      credentialName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(this.credentialContent && typeof (this.credentialContent as any).validate === 'function') {
      (this.credentialContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

