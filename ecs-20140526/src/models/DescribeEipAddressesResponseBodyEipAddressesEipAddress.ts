// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks } from "./DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks";


export class DescribeEipAddressesResponseBodyEipAddressesEipAddress extends $dara.Model {
  allocationId?: string;
  allocationTime?: string;
  bandwidth?: string;
  chargeType?: string;
  eipBandwidth?: string;
  expiredTime?: string;
  instanceId?: string;
  instanceType?: string;
  internetChargeType?: string;
  ipAddress?: string;
  operationLocks?: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationTime: 'AllocationTime',
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      eipBandwidth: 'EipBandwidth',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      operationLocks: 'OperationLocks',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      allocationTime: 'string',
      bandwidth: 'string',
      chargeType: 'string',
      eipBandwidth: 'string',
      expiredTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      operationLocks: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks,
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

