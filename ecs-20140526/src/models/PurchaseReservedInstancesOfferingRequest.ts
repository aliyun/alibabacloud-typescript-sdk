// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseReservedInstancesOfferingRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key to add to the reserved instance. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value to add to the reserved instance. The tag value cannot be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseReservedInstancesOfferingRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the reserved instance. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal term of the reserved instance. Unit: months. This parameter takes effect only when AutoRenew is set to true.
   * 
   * Valid values: 12 and 36.
   * 
   * Default value when PeriodUnit is set to Year: 12.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the reserved instance. The description can be 2 to 256 characters in length and cannot start with [http:// or https://](http://https://。).
   * 
   * This parameter is left empty by default.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The number of pay-as-you-go instances of the same instance type that the reserved instance can match. Valid values: 1 to 50.
   * 
   * Default value: 1.
   * 
   * @example
   * 3
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The instance type that the reserved instance can match.
   * 
   * >  The instance types that support reserved instances are subject to updates. For more information, see [Reserved instance overview](~~100370#3c1b682051vt4~~).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The payment option of the reserved instance. Valid values:
   * 
   * *   No Upfront
   * *   Partial Upfront
   * *   All Upfront
   * 
   * Default value: All Upfront.
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The validity period of the reserved instance.
   * 
   * Valid values: 1 and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the validity period of the reserved instance.
   * 
   * Valid value: Year.
   * 
   * Default value: Year.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system of the image used by the instance. Valid values:
   * 
   * *   Windows: Windows Server operating system
   * *   Linux: Linux and UNIX-like operating system
   * 
   * Default value: Linux.
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region in which to purchase a reserved instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the reserved instance. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testReservedInstanceName
   */
  reservedInstanceName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-bp199lyny9b3****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scope of reserved instance N. Valid values:
   * 
   * *   Region: regional
   * *   Zone: zonal
   * 
   * Default value: Region.
   * 
   * @example
   * Zone
   */
  scope?: string;
  /**
   * @remarks
   * The time when you want the reserved instance to take effect. Specify the time in the [ISO 8601 standard](https://help.aliyun.com/document_detail/25696.html) in the `yyyy-MM-ddTHHZ` format. The time must be in UTC.
   * 
   * >  If you do not specify this parameter, the reserved instance takes effect starting on the hour when the reserved instance is purchased. For example, if you purchase a reserved instance at 13:45:35 on November 1, 2024, the reserved instance takes effect starting 13:00:00 on November 1, 2024.
   * 
   * @example
   * 2024-07-04T15Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tags to add to the reserved instance. You can add up to 20 tags.
   */
  tag?: PurchaseReservedInstancesOfferingRequestTag[];
  /**
   * @remarks
   * The ID of the zone in which to purchase the reserved instance. This parameter takes effect and is required only if you set `Scope` to `Zone`. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceAmount: 'InstanceAmount',
      instanceType: 'InstanceType',
      offeringType: 'OfferingType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      platform: 'Platform',
      regionId: 'RegionId',
      reservedInstanceName: 'ReservedInstanceName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scope: 'Scope',
      startTime: 'StartTime',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      description: 'string',
      instanceAmount: 'number',
      instanceType: 'string',
      offeringType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      regionId: 'string',
      reservedInstanceName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scope: 'string',
      startTime: 'string',
      tag: { 'type': 'array', 'itemType': PurchaseReservedInstancesOfferingRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

