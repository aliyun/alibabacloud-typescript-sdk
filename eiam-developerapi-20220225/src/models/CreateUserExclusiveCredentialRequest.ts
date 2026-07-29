// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserExclusiveCredentialRequestCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @remarks
   * The value of the API Key.
   * 
   * This parameter is required.
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

export class CreateUserExclusiveCredentialRequestCredentialContent extends $dara.Model {
  /**
   * @remarks
   * The credential content for the API Key credential type.
   */
  apiKeyContent?: CreateUserExclusiveCredentialRequestCredentialContentApiKeyContent;
  static names(): { [key: string]: string } {
    return {
      apiKeyContent: 'apiKeyContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyContent: CreateUserExclusiveCredentialRequestCredentialContentApiKeyContent,
    };
  }

  validate() {
    if(this.apiKeyContent && typeof (this.apiKeyContent as any).validate === 'function') {
      (this.apiKeyContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserExclusiveCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The credential content.
   * 
   * This parameter is required.
   */
  credentialContent?: CreateUserExclusiveCredentialRequestCredentialContent;
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
   * The scenarios label of the credential. Valid values:
   * - llm: large language model.
   * - saas: third-party SaaS service.
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - api_key: API Key authentication credential.
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
  returnCiphertext?: boolean;
  static names(): { [key: string]: string } {
    return {
      credentialContent: 'credentialContent',
      credentialExternalId: 'credentialExternalId',
      credentialIdentifier: 'credentialIdentifier',
      credentialName: 'credentialName',
      credentialScenarioLabel: 'credentialScenarioLabel',
      credentialType: 'credentialType',
      description: 'description',
      returnCiphertext: 'returnCiphertext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialContent: CreateUserExclusiveCredentialRequestCredentialContent,
      credentialExternalId: 'string',
      credentialIdentifier: 'string',
      credentialName: 'string',
      credentialScenarioLabel: 'string',
      credentialType: 'string',
      description: 'string',
      returnCiphertext: 'boolean',
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

