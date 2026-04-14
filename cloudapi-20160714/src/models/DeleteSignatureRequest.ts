// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSignatureRequest extends $dara.Model {
  securityToken?: string;
  /**
   * @remarks
   * The ID of the key to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

