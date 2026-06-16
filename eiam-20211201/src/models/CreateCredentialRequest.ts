// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialRequestCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @remarks
   * The API key.
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
   * The `client_id` of the OAuth protocol.
   * 
   * @example
   * dmvncmxersdxxxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The `client_secret` of the OAuth protocol.
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
   * The credential content of the API key type.
   */
  apiKeyContent?: CreateCredentialRequestCredentialContentApiKeyContent;
  /**
   * @remarks
   * The credential content of the OAuth client type.
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
   * A client-generated token that ensures the idempotence of the request. This token must be a unique value that contains only ASCII characters and is no more than 64 characters long. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The use case label of the credential. Valid values:
   * 
   * - `llm`: large language model.
   * 
   * - `saas`: third-party SaaS.
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  credentialSharingScope?: string;
  /**
   * @remarks
   * The ID of the credential\\"s subject.
   * 
   * @example
   * apt_werthgfdsasffxxxxx
   */
  credentialSubjectId?: string;
  /**
   * @remarks
   * The subject type of the credential. Valid value:
   * 
   * - `authentication_token_provider`: an authentication token provider.
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * 
   * - `api_key`: an API key.
   * 
   * - `oauth_client`: an OAuth client.
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

