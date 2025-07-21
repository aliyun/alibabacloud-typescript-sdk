// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAndExportDataKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of the data key encrypted by using the primary CMK version.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The data key encrypted by using the public key and then exported.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVs*******
   */
  exportedDataKey?: string;
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
   * The ID of the CMK version that is used to encrypt the plaintext. It is the primary version of the CMK.
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
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      exportedDataKey: 'string',
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

