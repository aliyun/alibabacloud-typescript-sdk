// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPublicKeysResponseBodyPublicKeys extends $dara.Model {
  /**
   * @remarks
   * The description of the public key.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The fingerprint of the public key.
   * 
   * @example
   * d8:7d:b6:27:70:2d:07:fb:c6:b6:66:0a:86:7b:0f:9a
   */
  fingerPrint?: string;
  /**
   * @remarks
   * The ID of the public key.
   * 
   * @example
   * 1
   */
  publicKeyId?: string;
  /**
   * @remarks
   * The name of the public key.
   * 
   * @example
   * Keyname
   */
  publicKeyName?: string;
  /**
   * @remarks
   * The ID of the user to which the public key belongs.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fingerPrint: 'FingerPrint',
      publicKeyId: 'PublicKeyId',
      publicKeyName: 'PublicKeyName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fingerPrint: 'string',
      publicKeyId: 'string',
      publicKeyName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

