// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataMaskingEncryptionAlgorithmRequest extends $dara.Model {
  /**
   * @example
   * AES_256_GCM
   */
  encryptionAlgorithm?: string;
  /**
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  encryptionKeyId?: string;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      encryptionAlgorithm: 'EncryptionAlgorithm',
      encryptionKeyId: 'EncryptionKeyId',
      instanceId: 'InstanceId',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionAlgorithm: 'string',
      encryptionKeyId: 'string',
      instanceId: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

