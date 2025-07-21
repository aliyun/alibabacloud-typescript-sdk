// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDataKeyResponseBody extends $dara.Model {
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
   * The ID of the CMK that is used to decrypt the specified ciphertext of the data key.
   * 
   * This parameter is the globally unique ID of the CMK.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the specified ciphertext of the data key.
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
   * 4bd560a1-729e-45f1-a3d9-b2a33d61046b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

