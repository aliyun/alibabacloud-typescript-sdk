// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKeyPairsResponseBodyKeyPairsKeyPair } from "./DescribeKeyPairsResponseBodyKeyPairsKeyPair";


export class DescribeKeyPairsResponseBodyKeyPairs extends $dara.Model {
  keyPair?: DescribeKeyPairsResponseBodyKeyPairsKeyPair[];
  static names(): { [key: string]: string } {
    return {
      keyPair: 'KeyPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPair: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyKeyPairsKeyPair },
    };
  }

  validate() {
    if(Array.isArray(this.keyPair)) {
      $dara.Model.validateArray(this.keyPair);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

