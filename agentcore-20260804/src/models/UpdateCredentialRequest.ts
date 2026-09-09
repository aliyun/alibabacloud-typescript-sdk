// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialRequestBody extends $dara.Model {
  /**
   * @remarks
   * The new credential content. The value is a JSON string. If credentialType is set to apiKey, only the apiKey field can be included, and the value cannot be empty. At least one of credentialMetadata and description must be specified.
   * 
   * @example
   * {"apiKey":"sk-example-value"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The new credential description. The description can be up to 256 characters in length. At least one of credentialMetadata and description must be specified.
   * 
   * @example
   * API Key used for calling model services in the production environment
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      credentialMetadata: 'credentialMetadata',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialMetadata: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating the credential.
   */
  body?: UpdateCredentialRequestBody;
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
      body: UpdateCredentialRequestBody,
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

