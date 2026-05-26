// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptionConfig extends $dara.Model {
  keyType?: string;
  kmsKeyArn?: string;
  static names(): { [key: string]: string } {
    return {
      keyType: 'KeyType',
      kmsKeyArn: 'KmsKeyArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyType: 'string',
      kmsKeyArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

