// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecryptKMSDataKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ciphertext that you want to decrypt.
   * 
   * This parameter is required.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

