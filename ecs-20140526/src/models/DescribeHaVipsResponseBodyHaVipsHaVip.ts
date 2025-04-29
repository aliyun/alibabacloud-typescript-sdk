// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses } from "./DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses";
import { DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances } from "./DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances";


export class DescribeHaVipsResponseBodyHaVipsHaVip extends $dara.Model {
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses;
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances;
  createTime?: string;
  description?: string;
  haVipId?: string;
  ipAddress?: string;
  masterInstanceId?: string;
  regionId?: string;
  status?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresses: 'AssociatedEipAddresses',
      associatedInstances: 'AssociatedInstances',
      createTime: 'CreateTime',
      description: 'Description',
      haVipId: 'HaVipId',
      ipAddress: 'IpAddress',
      masterInstanceId: 'MasterInstanceId',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresses: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses,
      associatedInstances: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances,
      createTime: 'string',
      description: 'string',
      haVipId: 'string',
      ipAddress: 'string',
      masterInstanceId: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.associatedEipAddresses && typeof (this.associatedEipAddresses as any).validate === 'function') {
      (this.associatedEipAddresses as any).validate();
    }
    if(this.associatedInstances && typeof (this.associatedInstances as any).validate === 'function') {
      (this.associatedInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

