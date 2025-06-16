// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses } from "./DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses";
import { DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances } from "./DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances";
import { DescribeHaVipsResponseBodyHaVipsHaVipTags } from "./DescribeHaVipsResponseBodyHaVipsHaVipTags";


export class DescribeHaVipsResponseBodyHaVipsHaVip extends $dara.Model {
  /**
   * @remarks
   * The list of EIPs associated with the HAVIP.
   */
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses;
  /**
   * @remarks
   * The type of the instance with which the HAVIP is associated. Valid values:
   * 
   * *   **EcsInstance**: Elastic Compute Service (ECS) instance
   * *   **NetworkInterface**: elastic network interface (ENI)
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The information about the instance associated with the HAVIP.
   */
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances;
  /**
   * @remarks
   * The parameter is invalid. No value is returned.
   * 
   * @example
   * none
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the HAVIP was created.
   * 
   * @example
   * 2021-07-03T14:25:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the HAVIP.
   * 
   * @example
   * My HaVip
   */
  description?: string;
  /**
   * @remarks
   * The ID of the HAVIP.
   * 
   * @example
   * havip-bp149uyvut73dpld****
   */
  haVipId?: string;
  /**
   * @remarks
   * The private IP address of the HAVIP.
   * 
   * @example
   * 192.168.24.5
   */
  ipAddress?: string;
  /**
   * @remarks
   * The ID of the active instance that is associated with the HAVIP.
   * 
   * @example
   * i-bp145q7glnuzdvz****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The name of the HAVIP.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region to which the HAVIP belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the HAVIP belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the HAVIP. Valid values:
   * 
   * *   **Creating**: The server group is being created.
   * *   **Available**: The FULLNAT entry is available.
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: DescribeHaVipsResponseBodyHaVipsHaVipTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the HAVIP belongs.
   * 
   * @example
   * vsw-bp1pkt1fba8e824ez****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the HAVIP belongs.
   * 
   * @example
   * vpc-bp1kcm36tevkpms97****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresses: 'AssociatedEipAddresses',
      associatedInstanceType: 'AssociatedInstanceType',
      associatedInstances: 'AssociatedInstances',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      haVipId: 'HaVipId',
      ipAddress: 'IpAddress',
      masterInstanceId: 'MasterInstanceId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresses: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses,
      associatedInstanceType: 'string',
      associatedInstances: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances,
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      haVipId: 'string',
      ipAddress: 'string',
      masterInstanceId: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeHaVipsResponseBodyHaVipsHaVipTags,
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
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

