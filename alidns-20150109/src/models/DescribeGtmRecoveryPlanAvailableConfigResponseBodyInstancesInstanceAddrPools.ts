// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool } from "./DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool";


export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools extends $dara.Model {
  addrPool?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool },
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

