// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecryptRequest extends $dara.Model {
  /**
   * @remarks
   * The ciphertext that you want to decrypt.
   * 
   * You can generate the ciphertext by calling the following operations:
   * 
   * *   [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html)
   * *   [Encrypt](https://help.aliyun.com/document_detail/28949.html)
   * *   [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html)
   * 
   * This parameter is required.
   * 
   * @example
   * DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * The JSON string that consists of key-value pairs.
   * 
   * >  If you specify the EncryptionContext parameter when you call the [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [Encrypt](https://help.aliyun.com/document_detail/28949.html), or [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation, you must specify the same context when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.encryptionContext) {
      $dara.Model.validateMap(this.encryptionContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

