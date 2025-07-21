// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDataKeyShrinkRequest extends $dara.Model {
  dryRun?: string;
  /**
   * @remarks
   * The JSON string that consists of key-value pairs.
   * 
   * If you specify this parameter, an equivalent value is required when you call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The type of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: a 256-bit symmetric key
   * *   AES_128: a 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If none of the parameters are specified, KMS generates a 256-bit data key. If both parameters are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Unit: bytes.
   * 
   * Valid values: 1 to 1024.
   * 
   * Default value:
   * 
   * *   If the KeySpec parameter is set to AES_256, set the value of the NumberOfBytes parameter to 32.
   * *   If the KeySpec parameter is set to AES_128, set the value of the NumberOfBytes parameter to 16.
   * 
   * @example
   * 256
   */
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

