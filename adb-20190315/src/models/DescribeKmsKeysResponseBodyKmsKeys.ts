// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKmsKeysResponseBodyKmsKeysKmsKey } from "./DescribeKmsKeysResponseBodyKmsKeysKmsKey";


export class DescribeKmsKeysResponseBodyKmsKeys extends $dara.Model {
  kmsKey?: DescribeKmsKeysResponseBodyKmsKeysKmsKey[];
  static names(): { [key: string]: string } {
    return {
      kmsKey: 'KmsKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKey: { 'type': 'array', 'itemType': DescribeKmsKeysResponseBodyKmsKeysKmsKey },
    };
  }

  validate() {
    if(Array.isArray(this.kmsKey)) {
      $dara.Model.validateArray(this.kmsKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

