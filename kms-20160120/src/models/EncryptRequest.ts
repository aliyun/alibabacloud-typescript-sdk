// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptRequest extends $dara.Model {
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
   * The plaintext to be encrypted. The plaintext must be Base64 encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * SGVsbG8gd29y****
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      plaintext: 'string',
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

