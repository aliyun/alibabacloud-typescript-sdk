// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricDecryptRequest extends $dara.Model {
  /**
   * @remarks
   * The decryption algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * The ciphertext that you want to decrypt.
   * 
   * > * The value is encoded in Base64.
   * > * You can call the [AsymmetricEncrypt](https://help.aliyun.com/document_detail/148131.html) operation to generate the ciphertext.
   * 
   * This parameter is required.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * >  You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      ciphertextBlob: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

