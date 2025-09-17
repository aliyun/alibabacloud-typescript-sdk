// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCrossZoneMigrationJobRequestDisk extends $dara.Model {
  /**
   * @remarks
   * The disk category. A value of cloud_essd indicates enhanced SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp1eeplkn4j29wf7irpb
   */
  diskId?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrossZoneMigrationJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. In this case, you must manually pay for the instance. For more information, see [Renew a subscription instance](https://help.aliyun.com/document_detail/85052.html).
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The disk list.
   */
  disk?: CreateCrossZoneMigrationJobRequestDisk[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1ff25rzvnul6kr****
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the destination Alibaba Cloud region.
   * 
   * For example, if you want to migrate the source server to the China (Hangzhou) region, set this parameter to `cn-hangzhou`. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw3ty5y7****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The type of the new instance.
   * 
   * @example
   * ecs.g7.large
   */
  targetInstanceType?: string;
  /**
   * @remarks
   * The vSwitch ID of the destination Elastic Compute Service (ECS) instance.
   * 
   * @example
   * vsw-bp1mxqnssl8nafltcx32e
   */
  targetVSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      disk: 'Disk',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetInstanceType: 'TargetInstanceType',
      targetVSwitchId: 'TargetVSwitchId',
      targetZoneId: 'TargetZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      disk: { 'type': 'array', 'itemType': CreateCrossZoneMigrationJobRequestDisk },
      instanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      targetInstanceType: 'string',
      targetVSwitchId: 'string',
      targetZoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

