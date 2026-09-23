// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCredentialResponseBodyCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @remarks
   * The value of the API Key.
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
   * The credential content of the API Key credential type.
   */
  apiKeyContent?: ObtainCredentialResponseBodyCredentialContentApiKeyContent;
  /**
   * @remarks
   * The credential content of the OAuth client authentication credential type.
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
   * The creation time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The credential content.
   */
  credentialContent?: ObtainCredentialResponseBodyCredentialContent;
  /**
   * @remarks
   * The creation type of the credential. Valid values:
   * - system_init: Created by the system.
   * - user_custom: Created by the user.
   * 
   * @example
   * user_custom
   */
  credentialCreationType?: string;
  /**
   * @remarks
   * The external unique identifier of the credential.
   * 
   * @example
   * 23528e9957304f57b98112c72788b5xxxxx
   */
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
   * The Scenarios label of the credential. Valid values:
   * - llm: Large language model.
   * - saas: Third-party SaaS service.
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  /**
   * @remarks
   * The credential sharing scope.
   * 
   * @example
   * user_exclusive
   */
  credentialSharingScope?: string;
  /**
   * @remarks
   * The subject ID that the credential belongs to.
   * 
   * @example
   * apt_werthgfdsasffxxxxx
   */
  credentialSubjectId?: string;
  /**
   * @remarks
   * The subject type that the credential belongs to. Valid values:
   * - authentication_token_provider: Authentication token provider.
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - api_key: API Key authentication credential.
   * - oauth_client: OAuth client authentication credential.
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
   * The exclusive account ID of the credential.
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
   * The credential status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The update time, in UNIX timestamp format. Unit: milliseconds.
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

