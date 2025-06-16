// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateGlobalAccelerationInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-1sxeedefrr33****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The backend server type. Valid values:
   * 
   * *   **RemoteEcsInstance**: Elastic Compute Service (ECS) instance
   * *   **RemoteSlbInstance**: Server Load Balancer (SLB) instance
   * *   **RemoteEniInstance**: elastic network interface (ENI)
   * 
   * @example
   * RemoteEcsInstance
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the GA instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

