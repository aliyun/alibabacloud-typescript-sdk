// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs } from "./DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs";


export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool extends $dara.Model {
  /**
   * @remarks
   * The address pool ID.
   * 
   * @example
   * hra0oq
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The address pool name.
   */
  addrPoolName?: string;
  addrs?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance-zwy-38
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      addrPoolName: 'AddrPoolName',
      addrs: 'Addrs',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      addrPoolName: 'string',
      addrs: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs,
      instanceId: 'string',
    };
  }

  validate() {
    if(this.addrs && typeof (this.addrs as any).validate === 'function') {
      (this.addrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

