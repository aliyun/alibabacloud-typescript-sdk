// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecryptKMSDataKeyResponseBodyDataKey extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer master key (CMK) that was used to decrypt the ciphertext.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyId?: string;
  /**
   * @remarks
   * The plaintext that is generated after decryption.
   * 
   * @example
   * tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv****
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      plaintext: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

