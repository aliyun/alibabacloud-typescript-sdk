// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReEncryptRequest extends $dara.Model {
  /**
   * @remarks
   * The ciphertext that you want to re-encrypt.
   * 
   * You can set this parameter to the ciphertext that is returned after a symmetric or asymmetric encryption operation.
   * 
   * *   Symmetric encryption: the ciphertext returned after you call the [Encrypt](https://help.aliyun.com/document_detail/28949.html), [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html), or [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation
   * *   Asymmetric encryption: the public key-encrypted ciphertext returned after you call the [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation, or the ciphertext encrypted by using the public key of an asymmetric key pair outside KMS
   * 
   * This parameter is required.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. This parameter specifies the EncryptionContext that is used to re-encrypt the decrypted data or data key.
   * 
   * @example
   * {"Example":"Example"}
   */
  destinationEncryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the symmetric CMK that is used to re-encrypt the ciphertext after the ciphertext is decrypted.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  destinationKeyId?: string;
  dryRun?: string;
  /**
   * @remarks
   * The encryption algorithm based on which the public key is used to encrypt the ciphertext specified by CiphertextBlob. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  sourceEncryptionAlgorithm?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify EncryptionContext when you call the [Encrypt](https://help.aliyun.com/document_detail/28949.html), [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html), or [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation to encrypt the data or data key, an equivalent value is required here. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * >  If you set CiphertextBlob to the ciphertext that is returned after a symmetric encryption operation, specify this parameter.
   * 
   * @example
   * {"Example":"Example"}
   */
  sourceEncryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the CMK that is used to decrypt the ciphertext.
   * 
   * This parameter is the globally unique ID of the CMK.
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  sourceKeyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the ciphertext.
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  sourceKeyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      destinationEncryptionContext: 'DestinationEncryptionContext',
      destinationKeyId: 'DestinationKeyId',
      dryRun: 'DryRun',
      sourceEncryptionAlgorithm: 'SourceEncryptionAlgorithm',
      sourceEncryptionContext: 'SourceEncryptionContext',
      sourceKeyId: 'SourceKeyId',
      sourceKeyVersionId: 'SourceKeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      destinationEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destinationKeyId: 'string',
      dryRun: 'string',
      sourceEncryptionAlgorithm: 'string',
      sourceEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceKeyId: 'string',
      sourceKeyVersionId: 'string',
    };
  }

  validate() {
    if(this.destinationEncryptionContext) {
      $dara.Model.validateMap(this.destinationEncryptionContext);
    }
    if(this.sourceEncryptionContext) {
      $dara.Model.validateMap(this.sourceEncryptionContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

