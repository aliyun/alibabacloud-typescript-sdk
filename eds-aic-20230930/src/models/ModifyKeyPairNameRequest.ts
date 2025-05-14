// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyKeyPairNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * newKeyPairName
   */
  newKeyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairId: 'KeyPairId',
      newKeyPairName: 'NewKeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairId: 'string',
      newKeyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

