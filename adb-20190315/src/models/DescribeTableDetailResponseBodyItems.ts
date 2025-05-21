// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTableDetailResponseBodyItemsShard } from "./DescribeTableDetailResponseBodyItemsShard";


export class DescribeTableDetailResponseBodyItems extends $dara.Model {
  shard?: DescribeTableDetailResponseBodyItemsShard[];
  static names(): { [key: string]: string } {
    return {
      shard: 'Shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: { 'type': 'array', 'itemType': DescribeTableDetailResponseBodyItemsShard },
    };
  }

  validate() {
    if(Array.isArray(this.shard)) {
      $dara.Model.validateArray(this.shard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

