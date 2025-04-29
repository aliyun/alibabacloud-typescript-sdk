// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * fa876ffb-caab-4f0a-93b3-3409f2fa5199
   */
  securityToken?: string;
  /**
   * @remarks
   * The Key value of the key. The value must be 6 to 20 characters in length and can contain letters, digits, and underscores (_). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * qwertyuiop
   */
  signatureKey?: string;
  /**
   * @remarks
   * The displayed name of the key. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (_). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * backendsignature
   */
  signatureName?: string;
  /**
   * @remarks
   * The Secret value of the key. The value must be 6 to 30 characters in length and can contain letters, digits, and special characters. Special characters include underscores (_), at signs (@), number signs (#), exclamation points (!), and asterisks (\\*). The value must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * asdfghjkl
   */
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureKey: 'SignatureKey',
      signatureName: 'SignatureName',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureKey: 'string',
      signatureName: 'string',
      signatureSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

