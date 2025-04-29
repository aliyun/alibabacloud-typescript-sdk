// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySignatureRequest extends $dara.Model {
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * 436fa39b-b3b9-40c5-ae5d-ce3e000e38c5
   */
  securityToken?: string;
  /**
   * @remarks
   * The ID of the signature key that you want to manage.
   * 
   * This parameter is required.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  /**
   * @remarks
   * The new Key value of the key. The value must be 6 to 20 characters in length and can contain letters, digits, and underscores (_). It must start with a letter.
   * 
   * @example
   * qwertyuiop
   */
  signatureKey?: string;
  /**
   * @remarks
   * The new name of the key. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (_). It must start with a letter.
   * 
   * @example
   * backendsignature
   */
  signatureName?: string;
  /**
   * @remarks
   * The new Secret value of the key. The value must be 6 to 30 characters in length and can contain letters, digits, and special characters. Special characters include underscores (_), at signs (@), number signs (#), exclamation points (!), and asterisks (\\*). The value must start with a letter.
   * 
   * @example
   * asdfghjkl
   */
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      signatureKey: 'SignatureKey',
      signatureName: 'SignatureName',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
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

