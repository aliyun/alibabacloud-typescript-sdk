// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerRelatedGlobalAccelerationInstancesRequest extends $dara.Model {
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
  /**
   * @remarks
   * The ID of the backend service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-12s3sdf****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of the backend service instance. Valid values:
   * 
   * *   **EcsInstance** (default): Elastic Compute Service (ECS)
   * *   **SlbInstance**: Server Load Balancer (SLB)
   * 
   * @example
   * EcsInstance
   */
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverId: 'ServerId',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverId: 'string',
      serverType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

