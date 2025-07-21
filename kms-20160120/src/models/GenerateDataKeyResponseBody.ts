// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDataKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of the data key that is encrypted by using the primary version of the specified CMK.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias of the CMK, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version. The ID must be globally unique.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The Base64 encoded plaintext of the data key.
   * 
   * @example
   * QmFzZTY0IGVuY29kZWQgcGxhaW50****
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
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

