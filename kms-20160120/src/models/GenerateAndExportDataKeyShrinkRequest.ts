// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAndExportDataKeyShrinkRequest extends $dara.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string of key-value pairs. If you specify this parameter here, an equivalent value is required when you decrypt or re-encrypt the data key. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see [Use aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: a 256-bit symmetric key
   * *   AES_128: a 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If both parameters are not specified, KMS generates a 256-bit data key. If both parameters are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate.
   * 
   * Valid values: 1 to 1024.
   * 
   * Unit: bytes.
   * 
   * @example
   * 32
   */
  numberOfBytes?: number;
  /**
   * @remarks
   * A Base64-encoded public key.
   * 
   * This parameter is required.
   * 
   * @example
   * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAndKfC2ReLL2+y8a0+ZBBeAft/uBYo86GZiYJuflqgUzKxpyuvlo3uQkBv6b+nx+0tz8g8v7GhpPWMSW5L9mNHYsvYFsa7jTxsYdt17yj6GlUHPuMIs8hr5qbwl38IHU1iIa7nYWwE2fb3ePOvLDACRJVgGpU0yxioW80d2QD+9aU4jF5dlAahcfgsNzo2CXzCUc1+xbmNuq7Rp+H9VJB9dyYOwqnW3RhOLBo21FzpORapf0UiRlrHRpk1V6ez+aE1dofaYh/9bh0m6ioxj7j5hpZbWccuEZTMBKd+cbuBkRhJzc6Tti6qwZbDiu4fUwbZS0Tqpuo1UadiyxMW********
   */
  publicKeyBlob?: string;
  /**
   * @remarks
   * The encryption algorithm based on which you want to use the public key specified by PublicKeyBlob to encrypt the data key. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  wrappingAlgorithm?: string;
  /**
   * @remarks
   * The key type of the public key specified by PublicKeyBlob. For more information about key types, see [Introduction to asymmetric keys](https://help.aliyun.com/document_detail/148147.html).
   * 
   * Valid values:
   * 
   * *   RSA_2048
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

