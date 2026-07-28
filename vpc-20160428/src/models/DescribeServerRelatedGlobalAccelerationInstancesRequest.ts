// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerRelatedGlobalAccelerationInstancesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Alibaba Cloud Global Accelerator (GA) instance resides. 
   * 
   * You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to obtain the region ID.
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
   * - **EcsInstance** (default): ECS instance.
   * 
   * - **SlbInstance**: load balancing instance.
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

