// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool } from "./DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool";


export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPools extends $dara.Model {
  faultAddrPool?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool[];
  static names(): { [key: string]: string } {
    return {
      faultAddrPool: 'FaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.faultAddrPool)) {
      $dara.Model.validateArray(this.faultAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

