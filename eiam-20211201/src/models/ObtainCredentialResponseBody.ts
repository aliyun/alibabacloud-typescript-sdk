// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCredentialResponseBodyCredentialCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @example
   * nsklncmwizncxxxx
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

export class ObtainCredentialResponseBodyCredentialCredentialContentOAuthClientContent extends $dara.Model {
  /**
   * @remarks
   * OAuth协议的client_id
   * 
   * @example
   * dmvncmxersdxxxxxx
   */
  clientId?: string;
  /**
   * @example
   * nsklnertyt5ddwizncxxxx
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

export class ObtainCredentialResponseBodyCredentialCredentialContent extends $dara.Model {
  apiKeyContent?: ObtainCredentialResponseBodyCredentialCredentialContentApiKeyContent;
  /**
   * @remarks
   * OAuth客户端认证凭证类型的凭据内容。
   */
  OAuthClientContent?: ObtainCredentialResponseBodyCredentialCredentialContentOAuthClientContent;
  static names(): { [key: string]: string } {
    return {
      apiKeyContent: 'ApiKeyContent',
      OAuthClientContent: 'OAuthClientContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyContent: ObtainCredentialResponseBodyCredentialCredentialContentApiKeyContent,
      OAuthClientContent: ObtainCredentialResponseBodyCredentialCredentialContentOAuthClientContent,
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

export class ObtainCredentialResponseBodyCredential extends $dara.Model {
  /**
   * @remarks
   * 云角色创建时间
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * 凭据的内容。
   */
  credentialContent?: ObtainCredentialResponseBodyCredentialCredentialContent;
  /**
   * @remarks
   * 凭据的创建类型。
   * 
   * @example
   * user_custom
   */
  credentialCreationType?: string;
  /**
   * @remarks
   * 凭据ID。
   * 
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @remarks
   * 凭据标识
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  /**
   * @remarks
   * 凭据名称
   * 
   * @example
   * credential_name
   */
  credentialName?: string;
  /**
   * @remarks
   * 凭据的使用场景标签。
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  /**
   * @remarks
   * 凭据所属的主体ID。
   * 
   * @example
   * apt_werthgfdsasffxxxxx
   */
  credentialSubjectId?: string;
  /**
   * @remarks
   * 凭据所属的主体类型。
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * 凭据类型。
   * 
   * @example
   * api_key
   */
  credentialType?: string;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * credential_description
   */
  description?: string;
  /**
   * @remarks
   * EIAM实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 凭据状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 云角色更新时间
   * 
   * @example
   * 1649830227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialContent: 'CredentialContent',
      credentialCreationType: 'CredentialCreationType',
      credentialId: 'CredentialId',
      credentialIdentifier: 'CredentialIdentifier',
      credentialName: 'CredentialName',
      credentialScenarioLabel: 'CredentialScenarioLabel',
      credentialSubjectId: 'CredentialSubjectId',
      credentialSubjectType: 'CredentialSubjectType',
      credentialType: 'CredentialType',
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      credentialContent: ObtainCredentialResponseBodyCredentialCredentialContent,
      credentialCreationType: 'string',
      credentialId: 'string',
      credentialIdentifier: 'string',
      credentialName: 'string',
      credentialScenarioLabel: 'string',
      credentialSubjectId: 'string',
      credentialSubjectType: 'string',
      credentialType: 'string',
      description: 'string',
      instanceId: 'string',
      status: 'string',
      updateTime: 'number',
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

export class ObtainCredentialResponseBody extends $dara.Model {
  credential?: ObtainCredentialResponseBodyCredential;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      credential: 'Credential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: ObtainCredentialResponseBodyCredential,
      requestId: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

