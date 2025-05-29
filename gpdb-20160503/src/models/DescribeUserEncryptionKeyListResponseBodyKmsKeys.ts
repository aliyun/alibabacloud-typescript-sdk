// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEncryptionKeyListResponseBodyKmsKeys extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * 0b8b1825-fd99-418f-875e-e4dec1dd8715
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

