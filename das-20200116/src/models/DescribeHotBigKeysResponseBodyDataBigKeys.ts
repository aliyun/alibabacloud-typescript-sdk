// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHotBigKeysResponseBodyDataBigKeysBigKey } from "./DescribeHotBigKeysResponseBodyDataBigKeysBigKey";


export class DescribeHotBigKeysResponseBodyDataBigKeys extends $dara.Model {
  bigKey?: DescribeHotBigKeysResponseBodyDataBigKeysBigKey[];
  static names(): { [key: string]: string } {
    return {
      bigKey: 'BigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKey: { 'type': 'array', 'itemType': DescribeHotBigKeysResponseBodyDataBigKeysBigKey },
    };
  }

  validate() {
    if(Array.isArray(this.bigKey)) {
      $dara.Model.validateArray(this.bigKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

