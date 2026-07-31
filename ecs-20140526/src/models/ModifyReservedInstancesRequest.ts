// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReservedInstancesRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of pay-as-you-go instances of the same instance type that the reserved instance can match simultaneously. Valid values: ≥ 1.
   * 
   * @example
   * 1
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The instance type that the reserved instance can match.
   * 
   * > Applicable instance types are continuously updated. For more information, see [Reserved instance overview](~~100370#3c1b682051vt4~~).
   * 
   * @example
   * ecs.c5.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the reserved instance.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter or Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * testReservedInstanceName
   */
  reservedInstanceName?: string;
  /**
   * @remarks
   * The scope of the reserved instance. Valid values: 
   * 
   * - Region: regional.
   * - Zone: zonal.
   * 
   * Default value: Region.
   * 
   * @example
   * Zone
   */
  scope?: string;
  /**
   * @remarks
   * The zone ID of the reserved instance.
   * 
   * This parameter is required when the `Scope` parameter is set to `Zone`.
   * 
   * You can call [DescribeZones](https://help.aliyun.com/document_detail/25609.html) to query the zone list.
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
   * The configuration information of the reserved instances. Array length: 1 to 100.
   */
  configuration?: ModifyReservedInstancesRequestConfiguration[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the reserved instance.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the reserved instances. Array length: 1 to 20.
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

