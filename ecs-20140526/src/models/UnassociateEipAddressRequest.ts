// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The allocation ID of the EIP.
   * 
   * This parameter is required.
   */
  allocationId?: string;
  /**
   * @remarks
   * This parameter is optional because the system automatically determines the instance ID from the provided `AllocationId`.
   * 
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the associated instance. Valid values:
   * 
   * - `EcsInstance`: An ECS instance. This is the default.
   * - `SlbInstance`: A Classic Load Balancer (CLB) instance.
   * - `Nat`: A NAT gateway.
   * - `HaVip`: A high-availability virtual IP address (HaVip).
   * - `NetworkInterface`: A secondary elastic network interface.
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the EIP is located. To get the latest list of regions, call the `DescribeRegions` operation.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
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
      allocationId: 'string',
      instanceId: 'string',
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

