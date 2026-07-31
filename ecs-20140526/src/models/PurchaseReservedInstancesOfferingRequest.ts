// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseReservedInstancesOfferingRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the reserved instance. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the reserved instance. The tag value cannot be an empty string. The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - true: enables auto-renewal.
   * - false (default): disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period, in months. This parameter takes effect only when AutoRenew is set to True.
   * 
   * <props="china">Valid values of AutoRenewPeriod: 1, 12, 36, and 60.
   * 
   * <props="china">If PeriodUnit is set to Month, the default value is 1.
   * 
   * <props="intl">Valid values of AutoRenewPeriod: 12 and 36.
   * 
   * If PeriodUnit is set to Year, the default value is 12.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the reserved instance. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The number of pay-as-you-go instances of the same instance type that the reserved instance can match at the same time. Valid values: 1 to 50.
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
   * > Applicable instance types are continuously updated. For more information, see [Overview of reserved instances](~~100370#3c1b682051vt4~~).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The payment type of the reserved instance. Valid values: 
   *          
   * - No Upfront: no upfront.
   * - Partial Upfront: partial upfront.
   * - All Upfront: all upfront.
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
   * The term of the reserved instance.
   * 
   * <props="intl">Valid values: 1 and 3.
   * 
   * 
   * <props="china">
   * 
   * - If `PeriodUnit` is set to `Year`, valid values are 1, 3, and 5.
   * 
   * - If `PeriodUnit` is set to `Month`, the valid value is 1.
   * 
   * 
   * 
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the term of the reserved instance.
   * 
   * <props="intl">Valid values: Year.
   * 
   * <props="intl">Default value: Year.
   * 
   * <props="china">Valid values: Year and Month.
   * 
   * <props="china">Default value: Month.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system type of the image used by the instance. Valid values:
   * 
   * - Windows: Windows Server operating system.
   * - Linux: Linux and Unix-like operating system.
   * 
   * Default value: Linux.
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the reserved instance. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testReservedInstanceName
   */
  reservedInstanceName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp199lyny9b3****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
   * The effective period of the reserved instance. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in UTC+0. Format: `yyyy-MM-ddTHHZ`.
   * 
   * > If you do not specify this parameter, the effective period starts from the nearest time frame by default. For example, if you successfully purchase a reserved instance at 2024-11-01 13:45:35, the effective period starts at 2024-11-01 13:00:00.
   * 
   * @example
   * 2024-07-04T15Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tags. Array length: 0 to 20.
   */
  tag?: PurchaseReservedInstancesOfferingRequestTag[];
  /**
   * @remarks
   * The zone ID. This parameter is required and takes effect only when `Scope` is set to `Zone`. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the zone list.
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

