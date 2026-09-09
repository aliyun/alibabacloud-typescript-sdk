// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialRequestBody extends $dara.Model {
  /**
   * @remarks
   * The credential content. The value is a JSON string. When credentialType is set to apiKey, the JSON string can contain only the apiKey field, and the value cannot be empty. After being written, the content can only be queried in masked form.
   * 
   * This parameter is required.
   * 
   * @example
   * {"apiKey":"sk-example-value"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The credential type. Currently, only apiKey is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @remarks
   * The credential description. The description can be up to 256 characters in length.
   * 
   * @example
   * API Key used for calling model services in the production environment
   */
  description?: string;
  /**
   * @remarks
   * The credential name. The name must be unique within the workspace and can contain only letters, digits, periods, underscores, and hyphens. The name must be 3 to 128 characters in length and cannot use runtime reserved names.
   * 
   * This parameter is required.
   * 
   * @example
   * model-api-key
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      credentialMetadata: 'credentialMetadata',
      credentialType: 'credentialType',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialMetadata: 'string',
      credentialType: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating a credential.
   */
  body?: CreateCredentialRequestBody;
  /**
   * @remarks
   * Not supported.
   * 
   * @example
   * Not supported
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateCredentialRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

