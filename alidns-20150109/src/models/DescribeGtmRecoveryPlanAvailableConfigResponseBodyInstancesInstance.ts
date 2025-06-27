// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools } from "./DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools";


export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The address pools.
   */
  addrPools?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance-example
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * instance-name-example
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools,
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    if(this.addrPools && typeof (this.addrPools as any).validate === 'function') {
      (this.addrPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

