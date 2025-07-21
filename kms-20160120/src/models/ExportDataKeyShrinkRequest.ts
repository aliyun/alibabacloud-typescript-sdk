// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDataKeyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of the data key encrypted by using a CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter when you use a CMK to encrypt the data key, an equivalent value is required here. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
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
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      dryRun: 'string',
      encryptionContextShrink: 'string',
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

