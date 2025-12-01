// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  cores?: number;
  /**
   * @example
   * cloud_ssd
   */
  dataDiskCategory?: string;
  /**
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  destinationResource?: string;
  /**
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @example
   * vpc
   */
  networkCategory?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * Region
   */
  scope?: string;
  /**
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      dataDiskCategory: 'DataDiskCategory',
      dedicatedHostId: 'DedicatedHostId',
      destinationResource: 'DestinationResource',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      memory: 'Memory',
      networkCategory: 'NetworkCategory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      spotDuration: 'SpotDuration',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      dataDiskCategory: 'string',
      dedicatedHostId: 'string',
      destinationResource: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      ioOptimized: 'string',
      memory: 'number',
      networkCategory: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scope: 'string',
      spotDuration: 'number',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

