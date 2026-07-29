// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCredentialResponseBodyCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @remarks
   * The API key value.
   * 
   * @example
   * sk-nsklncmwizncxxxx
   */
  apiKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
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

export class ObtainCredentialResponseBodyCredentialContentOauthClientContent extends $dara.Model {
  /**
   * @remarks
   * The `client_id` for OAuth 2.0.
   * 
   * @example
   * dmvncmxersdxxxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The `client_secret` for OAuth 2.0.
   * 
   * @example
   * nsklnertyt5ddwizncxxxx
   */
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
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

export class ObtainCredentialResponseBodyCredentialContent extends $dara.Model {
  /**
   * @remarks
   * Contains details for an API key credential. Returned only when `credentialType` is `api_key`.
   */
  apiKeyContent?: ObtainCredentialResponseBodyCredentialContentApiKeyContent;
  /**
   * @remarks
   * Contains details for an OAuth client credential. Returned only when `credentialType` is `oauth_client`.
   */
  oauthClientContent?: ObtainCredentialResponseBodyCredentialContentOauthClientContent;
  static names(): { [key: string]: string } {
    return {
      apiKeyContent: 'apiKeyContent',
      oauthClientContent: 'oauthClientContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyContent: ObtainCredentialResponseBodyCredentialContentApiKeyContent,
      oauthClientContent: ObtainCredentialResponseBodyCredentialContentOauthClientContent,
    };
  }

  validate() {
    if(this.apiKeyContent && typeof (this.apiKeyContent as any).validate === 'function') {
      (this.apiKeyContent as any).validate();
    }
    if(this.oauthClientContent && typeof (this.oauthClientContent as any).validate === 'function') {
      (this.oauthClientContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time of the credential, formatted as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The detailed content of the credential. The structure of this object depends on the value of `credentialType`.
   */
  credentialContent?: ObtainCredentialResponseBodyCredentialContent;
  /**
   * @remarks
   * Indicates how the credential was created. Valid values:
   * 
   * - `system_init`: System-initiated.
   * 
   * - `user_custom`: User-created.
   * 
   * @example
   * user_custom
   */
  credentialCreationType?: string;
  credentialExternalId?: string;
  /**
   * @remarks
   * The credential ID.
   * 
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @remarks
   * The credential identifier.
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  /**
   * @remarks
   * The credential name.
   * 
   * @example
   * credential_name
   */
  credentialName?: string;
  /**
   * @remarks
   * The usage scenario for the credential. Valid values:
   * 
   * - `llm`: For use with a large language model.
   * 
   * - `saas`: For use with a third-party SaaS application.
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  /**
   * @remarks
   * The sharing scope of the credential, such as whether it is exclusive to a specific account.
   * 
   * @example
   * user_exclusive
   */
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
   * The credential\\"s subject type. Valid values:
   * 
   * - `authentication_token_provider`: An authentication token provider.
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * 
   * - `api_key`: The credential is an API key.
   * 
   * - `oauth_client`: The credential represents an OAuth client.
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
  /**
   * @remarks
   * The ID of the account that exclusively owns the credential. This field is present only when `credentialSharingScope` is `user_exclusive`.
   * 
   * @example
   * user_xxx
   */
  exclusiveUserId?: string;
  /**
   * @remarks
   * The EIAM instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the credential. Valid values:
   * 
   * - `enabled`: The credential can be used.
   * 
   * - `disabled`: The credential cannot be used.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The last update time of the credential, formatted as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1649830227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      credentialContent: 'credentialContent',
      credentialCreationType: 'credentialCreationType',
      credentialExternalId: 'credentialExternalId',
      credentialId: 'credentialId',
      credentialIdentifier: 'credentialIdentifier',
      credentialName: 'credentialName',
      credentialScenarioLabel: 'credentialScenarioLabel',
      credentialSharingScope: 'credentialSharingScope',
      credentialSubjectId: 'credentialSubjectId',
      credentialSubjectType: 'credentialSubjectType',
      credentialType: 'credentialType',
      description: 'description',
      exclusiveUserId: 'exclusiveUserId',
      instanceId: 'instanceId',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      credentialContent: ObtainCredentialResponseBodyCredentialContent,
      credentialCreationType: 'string',
      credentialExternalId: 'string',
      credentialId: 'string',
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

