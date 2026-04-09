// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserExclusiveCredentialRequestCredentialContentApiKeyContent extends $dara.Model {
  /**
   * @remarks
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
   * This parameter is required.
   */
  credentialContent?: CreateUserExclusiveCredentialRequestCredentialContent;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * credential_name
   */
  credentialName?: string;
  /**
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * api_key
   */
  credentialType?: string;
  /**
   * @example
   * credential_description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      credentialContent: 'credentialContent',
      credentialIdentifier: 'credentialIdentifier',
      credentialName: 'credentialName',
      credentialScenarioLabel: 'credentialScenarioLabel',
      credentialType: 'credentialType',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialContent: CreateUserExclusiveCredentialRequestCredentialContent,
      credentialIdentifier: 'string',
      credentialName: 'string',
      credentialScenarioLabel: 'string',
      credentialType: 'string',
      description: 'string',
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

