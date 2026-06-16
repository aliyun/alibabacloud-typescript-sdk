// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialResponseBodyCredentialCredentialContentOAuthClientContent extends $dara.Model {
  /**
   * @remarks
   * The OAuth client ID.
   * 
   * @example
   * dmvncmxersdxxxxxx
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBodyCredentialCredentialContent extends $dara.Model {
  /**
   * @remarks
   * The credential content for an OAuth client. This parameter is returned only when `CredentialType` is `oauth_client`.
   */
  OAuthClientContent?: GetCredentialResponseBodyCredentialCredentialContentOAuthClientContent;
  static names(): { [key: string]: string } {
    return {
      OAuthClientContent: 'OAuthClientContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OAuthClientContent: GetCredentialResponseBodyCredentialCredentialContentOAuthClientContent,
    };
  }

  validate() {
    if(this.OAuthClientContent && typeof (this.OAuthClientContent as any).validate === 'function') {
      (this.OAuthClientContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBodyCredential extends $dara.Model {
  /**
   * @remarks
   * The creation time of the credential, in Unix timestamp format (milliseconds).
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The content of the credential.
   */
  credentialContent?: GetCredentialResponseBodyCredentialCredentialContent;
  /**
   * @remarks
   * How the credential was created. Valid values:
   * 
   * - `system_init`: The credential was created by the system.
   * 
   * - `user_custom`: The credential was created by a user.
   * 
   * @example
   * user_custom
   */
  credentialCreationType?: string;
  credentialExternalId?: string;
  /**
   * @remarks
   * The ID of the credential.
   * 
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @remarks
   * The identifier of the credential.
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * @example
   * credential_name
   */
  credentialName?: string;
  /**
   * @remarks
   * The use case of the credential. Valid values:
   * 
   * - `llm`: a large language model (LLM).
   * 
   * - `saas`: a third-party Software as a Service (SaaS) application.
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  credentialSharingScope?: string;
  /**
   * @remarks
   * The ID of the subject that owns the credential.
   * 
   * @example
   * apt_werthgfdsasffxxxxx
   */
  credentialSubjectId?: string;
  /**
   * @remarks
   * The type of the subject that owns the credential. Valid value:
   * 
   * - `authentication_token_provider`: The subject is an authentication token provider.
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * The type of the credential. Valid values:
   * 
   * - `api_key`: An API key.
   * 
   * - `oauth_client`: An OAuth client.
   * 
   * @example
   * api_key
   */
  credentialType?: string;
  /**
   * @remarks
   * The user-defined description of the credential.
   * 
   * @example
   * credential_description
   */
  description?: string;
  exclusiveUserId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the credential. Valid values:
   * 
   * - `enabled`: The credential is active.
   * 
   * - `disabled`: The credential is inactive.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time the credential was last updated, in Unix timestamp format (milliseconds).
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
      credentialExternalId: 'CredentialExternalId',
      credentialId: 'CredentialId',
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
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      credentialContent: GetCredentialResponseBodyCredentialCredentialContent,
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

export class GetCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The credential details.
   */
  credential?: GetCredentialResponseBodyCredential;
  /**
   * @remarks
   * The request ID.
   * 
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
      credential: GetCredentialResponseBodyCredential,
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

