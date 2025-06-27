// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr } from "./DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr";


export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs extends $dara.Model {
  addr?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr },
    };
  }

  validate() {
    if(Array.isArray(this.addr)) {
      $dara.Model.validateArray(this.addr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

