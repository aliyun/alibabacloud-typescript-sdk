// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KMSConfig extends $dara.Model {
  kmsInstanceId?: string;
  kmsKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceId: 'kmsInstanceId',
      kmsKeyId: 'kmsKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceId: 'string',
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

