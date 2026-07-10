// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialRequestCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @remarks
   * The API key content.
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

export class CreateCredentialRequestCredentialContentOAuthClientContent extends $dara.Model {
  /**
   * @remarks
   * The client_id of the OAuth protocol.
   * 
   * @example
   * dmvncmxersdxxxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client_secret of the OAuth protocol.
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

export class CreateCredentialRequestCredentialContent extends $dara.Model {
  /**
   * @remarks
   * The credential content of the API key credential type.
   */
  apiKeyContent?: CreateCredentialRequestCredentialContentApiKeyContent;
  /**
   * @remarks
   * The credential content of the OAuth client authentication credential type.
   */
  OAuthClientContent?: CreateCredentialRequestCredentialContentOAuthClientContent;
  static names(): { [key: string]: string } {
    return {
      apiKeyContent: 'ApiKeyContent',
      OAuthClientContent: 'OAuthClientContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyContent: CreateCredentialRequestCredentialContentApiKeyContent,
      OAuthClientContent: CreateCredentialRequestCredentialContentOAuthClientContent,
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

export class CreateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken parameter supports only ASCII characters and cannot exceed 64 characters in length. For more information, see References: [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The credential content.
   * 
   * This parameter is required.
   */
  credentialContent?: CreateCredentialRequestCredentialContent;
  credentialExternalId?: string;
  /**
   * @remarks
   * The credential identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  /**
   * @remarks
   * The credential name.
   * 
   * This parameter is required.
   * 
   * @example
   * credential_name
   */
  credentialName?: string;
  /**
   * @remarks
   * The Scenarios label of the credential. Valid values:
   * - llm: large language model.
   * - saas: third-party SaaS service.
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  credentialSharingScope?: string;
  /**
   * @remarks
   * The subject ID of the credential.
   * 
   * @example
   * apt_werthgfdsasffxxxxx
   */
  credentialSubjectId?: string;
  /**
   * @remarks
   * The subject type of the credential. Valid values:
   * - authentication_token_provider: authentication token provider.
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - api_key: API key authentication credential.
   * - oauth_client: OAuth client authentication credential.
   * 
   * This parameter is required.
   * 
   * @example
   * api_key
   */
  credentialType?: string;
  /**
   * @remarks
   * The credential description.
   * 
   * @example
   * credential_description
   */
  description?: string;
  exclusiveUserId?: string;
  /**
   * @remarks
   * The instance ID.
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
      credentialExternalId: 'CredentialExternalId',
      credentialIdentifier: 'CredentialIdentifier',
      credentialName: 'CredentialName',
      credentialScenarioLabel: 'CredentialScenarioLabel',
      credentialSharingScope: 'CredentialSharingScope',
      credentialSubjectId: 'CredentialSubjectId',
      credentialSubjectType: 'CredentialSubjectType',
      credentialType: 'CredentialType',
      description: 'Description',
      exclusiveUserId: 'ExclusiveUserId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      credentialContent: CreateCredentialRequestCredentialContent,
      credentialExternalId: 'string',
      credentialIdentifier: 'string',
      credentialName: 'string',
      credentialScenarioLabel: 'string',
      credentialSharingScope: 'string',
      credentialSubjectId: 'string',
      credentialSubjectType: 'string',
      credentialType: 'string',
      description: 'string',
      exclusiveUserId: 'string',
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

