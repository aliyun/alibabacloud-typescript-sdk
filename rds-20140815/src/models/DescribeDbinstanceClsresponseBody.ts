// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceCLSResponseBody extends $dara.Model {
  /**
   * @example
   * AES_256_GCM
   */
  algorithm?: string;
  /**
   * @example
   * acs:kms:cn-hangzhou:123456789:key/xxxxx
   */
  encryptionKey?: string;
  /**
   * @example
   * KMS
   */
  encryptionKeyMode?: string;
  /**
   * @example
   * D0073A98-52F1-3075-8256-3943F*******
   */
  requestId?: string;
  /**
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

