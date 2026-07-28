// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateGlobalAccelerationInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-1sxeedefrr33****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The type of the instance to disassociate. Valid values:
   * 
   * - **RemoteEcsInstance**: ECS instance.
   * 
   * - **RemoteSlbInstance**: load balancing instance.
   * 
   * - **RemoteEniInstance**: network interface controller (NIC) instance.
   * 
   * @example
   * RemoteEcsInstance
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Alibaba Cloud Global Accelerator (GA) instance is deployed. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

