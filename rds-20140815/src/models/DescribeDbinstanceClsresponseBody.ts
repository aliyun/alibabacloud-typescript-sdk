// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceCLSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * - AES_128_CBC
   * - AES_128_GCM
   * - AES_128_CTR
   * - AES_128_ECB
   * - AES_256_CBC
   * - AES_256_GCM
   * - AES_256_CTR
   * - AES_256_ECB
   * - SM4_128_CBC
   * - SM4_128_GCM
   * - SM4_128_CTR
   * - SM4_128_ECB
   * 
   * @example
   * AES_256_GCM
   */
  algorithm?: string;
  /**
   * @remarks
   * The custom KMS master key ID.
   * 
   * >  This parameter takes effect only when the column encryption key pattern is set to kms_key. If this parameter is not specified, the current column encryption key settings of the database remain unchanged.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The column encryption key mode. Valid values:
   * 
   * - client_key: configures a user-generated random key on the client side.
   * - kms_key: configures a custom key by using Alibaba Cloud Key Management Service (KMS).
   * 
   * >  After an instance is configured to use KMS for key management, you can no longer switch back to the client-side random key mode.
   * 
   * @example
   * kms_key
   */
  encryptionKeyMode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0073A98-52F1-3075-8256-3943F*******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the whitelist mode is enabled.
   * 
   * @example
   * true
   */
  whiteListMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      encryptionKey: 'EncryptionKey',
      encryptionKeyMode: 'EncryptionKeyMode',
      requestId: 'RequestId',
      whiteListMode: 'WhiteListMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      encryptionKey: 'string',
      encryptionKeyMode: 'string',
      requestId: 'string',
      whiteListMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

