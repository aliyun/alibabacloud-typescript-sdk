// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDataKeyWithoutPlaintextRequest extends $dara.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter, an equivalent value is required when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see Use aliases.
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
   * *   AES_256: 256-bit symmetric key
   * *   AES_128: 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If both of them are not specified, KMS generates a 256-bit data key. If both of them are specified, KMS ignores the KeySpec parameter.
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
   * 256
   */
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
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

