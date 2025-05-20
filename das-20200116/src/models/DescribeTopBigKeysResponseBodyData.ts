// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTopBigKeysResponseBodyDataBigKey } from "./DescribeTopBigKeysResponseBodyDataBigKey";


export class DescribeTopBigKeysResponseBodyData extends $dara.Model {
  bigKey?: DescribeTopBigKeysResponseBodyDataBigKey[];
  static names(): { [key: string]: string } {
    return {
      bigKey: 'BigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKey: { 'type': 'array', 'itemType': DescribeTopBigKeysResponseBodyDataBigKey },
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

