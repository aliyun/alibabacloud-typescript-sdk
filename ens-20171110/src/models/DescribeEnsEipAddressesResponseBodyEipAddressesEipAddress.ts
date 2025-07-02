// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags } from "./DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags";


export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress extends $dara.Model {
  allocationId?: string;
  allocationTime?: string;
  bandwidth?: number;
  chargeType?: string;
  description?: string;
  ensRegionId?: string;
  instanceId?: string;
  instanceType?: string;
  internetChargeType?: string;
  ipAddress?: string;
  ipStatus?: string;
  isp?: string;
  name?: string;
  standby?: boolean;
  status?: string;
  tags?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationTime: 'AllocationTime',
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      ipStatus: 'IpStatus',
      isp: 'Isp',
      name: 'Name',
      standby: 'Standby',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      allocationTime: 'string',
      bandwidth: 'number',
      chargeType: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      ipStatus: 'string',
      isp: 'string',
      name: 'string',
      standby: 'boolean',
      status: 'string',
      tags: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

