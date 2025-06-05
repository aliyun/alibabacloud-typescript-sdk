// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The computing power type. A value of economy specifies economic instances.
   * 
   * @example
   * economy
   */
  computeCategory?: string;
  /**
   * @remarks
   * The number of vCPUs. For information about the vCPU and memory specifications that are supported by Elastic Container Instance, see [vCPU and memory specifications](https://help.aliyun.com/document_detail/114662.html).
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The storage size of the temporary storage space. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The instance type of the Elastic Compute Service (ECS) instance that is used to create the elastic container instance. For information about the ECS instance types that are supported by Elastic Container Instance, see [ECS instance types that are supported by Elastic Container Instance](https://help.aliyun.com/document_detail/114664.html).
   * 
   * > If you specify this parameter, the specified specifications of vCPUs and memory are ignored. Only the price of the ECS instance type is returned.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The size of the memory. Unit: GiB. For information about the vCPU and memory specifications that are supported by Elastic Container Instance, see [vCPU and memory specifications](https://help.aliyun.com/document_detail/114662.html).
   * 
   * @example
   * 4.0
   */
  memory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/146965.html) operation to query the most recent region and zone list.
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
   * The protection period of the preemptible instance. Unit: hours. Default value: 1. The value of 0 indicates no protection period.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The maximum hourly price of the preemptible elastic container instance. The value can contain up to three decimal places. If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
   * 
   * @example
   * 0.2
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the elastic container instance. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/146965.html) operation to query the most recent region and zone list.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeCategory: 'ComputeCategory',
      cpu: 'Cpu',
      ephemeralStorage: 'EphemeralStorage',
      instanceType: 'InstanceType',
      memory: 'Memory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeCategory: 'string',
      cpu: 'number',
      ephemeralStorage: 'number',
      instanceType: 'string',
      memory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
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

