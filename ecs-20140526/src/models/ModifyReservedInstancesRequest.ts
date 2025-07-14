// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReservedInstancesRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of pay-as-you-go instances of the specified instance type that the new reserved instance can match. The value of this parameter must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The instance types that the new reserved instance can match.
   * 
   * >  The supported instance types are continuously updated. For information about the instance types supported by reserved instances, see [Overview of reserved instances](~~100370#3c1b682051vt4~~).
   * 
   * @example
   * ecs.c5.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the new reserved instance.
   * 
   * The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testReservedInstanceName
   */
  reservedInstanceName?: string;
  /**
   * @remarks
   * The scope level of the new reserved instance. Valid values:
   * 
   * *   Region
   * *   Zone
   * 
   * Default value: Region.
   * 
   * @example
   * Zone
   */
  scope?: string;
  /**
   * @remarks
   * The zone ID of the new reserved instance.
   * 
   * This parameter is required when you set `Scope` to `Zone`.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAmount: 'InstanceAmount',
      instanceType: 'InstanceType',
      reservedInstanceName: 'ReservedInstanceName',
      scope: 'Scope',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAmount: 'number',
      instanceType: 'string',
      reservedInstanceName: 'string',
      scope: 'string',
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

export class ModifyReservedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the new reserved instances. You can specify up to 100 new reserved instances.
   */
  configuration?: ModifyReservedInstancesRequestConfiguration[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the reserved instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of reserved instances that you want to modify. You can specify up to 20 reserved instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ReservedInstanceId.1="ecsri-bp1cx3****",ReservedInstanceId.2="ecsri-bp15xx2****"......
   */
  reservedInstanceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': ModifyReservedInstancesRequestConfiguration },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    if(Array.isArray(this.reservedInstanceId)) {
      $dara.Model.validateArray(this.reservedInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

