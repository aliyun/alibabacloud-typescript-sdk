// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialResponseBodyCredentialCredentialContentOAuthClientContent extends $dara.Model {
  /**
   * @remarks
   * The client_id of the OAuth protocol.
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
   * The content of the OAuth client credential.
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
   * The creation time, in UNIX timestamp format. Unit: milliseconds.
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
   * The creation type of the credential. Valid values:
   * - system_init: Created by the system.
   * - user_custom: Created by the user.
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
   * The scenarios label of the credential. Valid values:
   * - llm: Large language model.
   * - saas: Third-party SaaS service.
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  credentialSharingScope?: string;
  /**
   * @remarks
   * The ID of the subject to which the credential belongs.
   * 
   * @example
   * apt_werthgfdsasffxxxxx
   */
  credentialSubjectId?: string;
  /**
   * @remarks
   * The type of the subject to which the credential belongs. Valid values:
   * - authentication_token_provider: Authentication token provider.
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - api_key: API key credential.
   * - oauth_client: OAuth client credential.
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
   * The credential information.
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

