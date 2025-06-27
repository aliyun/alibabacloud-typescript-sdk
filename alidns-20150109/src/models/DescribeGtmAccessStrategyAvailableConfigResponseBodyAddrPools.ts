// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool } from "./DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool";


export class DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools extends $dara.Model {
  addrPool?: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.addrPool)) {
      $dara.Model.validateArray(this.addrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

