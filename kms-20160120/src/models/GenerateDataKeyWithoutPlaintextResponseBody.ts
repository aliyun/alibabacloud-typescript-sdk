// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDataKeyWithoutPlaintextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of the data that is encrypted by using the primary CMK version.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 599fa825-17de-417e-9554-bb032cc6****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version that is used to encrypt the plaintext. It is the primary version of the CMK.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7021b6ec-4be7-4d3c-8a68-1e85d4d515a0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

