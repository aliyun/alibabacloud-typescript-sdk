// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKMSEncryptionRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  disableEncryption?: boolean;
  /**
   * @example
   * key-abc***
   */
  kmsKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      disableEncryption: 'disable_encryption',
      kmsKeyId: 'kms_key_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableEncryption: 'boolean',
      kmsKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

