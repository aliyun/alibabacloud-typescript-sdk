// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the reserved instance. The tag key cannot be an empty string and can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * > If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count with all specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the reserved instance. The tag value cannot be an empty string and can be up to 128 characters in length. It cannot start with acs: and cannot contain http:// or https://.
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

export class DescribeReservedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The allocation type. Valid values:
   * 
   * - Normal: queries reserved instances under the current account.
   * - Shared: queries reserved instances that have been shared between the current account and linked accounts.
   * 
   * Default value: Normal.
   * 
   * @example
   * Normal
   */
  allocationType?: string;
  /**
   * @remarks
   * The instance type that the reserved instance can be applied to. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html). 
   * 
   * > This is the instance type selected when you purchased the reserved instance. During actual deduction, region-level reserved instances support size-flexible deduction within the same instance family.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family that the reserved instance can be applied to. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The lock type. Valid values:
   * 
   * - financial: The account has an overdue payment or the service has expired.
   * - security: Locked for security reasons.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The payment type of the reserved instance. Valid values:
   * 
   * - No Upfront: no upfront.
   * - Partial Upfront: partial upfront.
   * - All Upfront: all upfront.
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the reserved instance list. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the reserved instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of reserved instances. Array length: 1 to 100.
   * 
   * @example
   * ri-bpzhex2ulpzf53****
   */
  reservedInstanceId?: string[];
  /**
   * @remarks
   * The name of the reserved instance.
   * 
   * > Only exact match is supported. Fuzzy match is not supported.
   * 
   * @example
   * testReservedInstanceName
   */
  reservedInstanceName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scope of the reserved instance. Valid values:
   *          
   * - Region: regional.
   * - Zone: zonal.
   * 
   * @example
   * Region
   */
  scope?: string;
  /**
   * @remarks
   * The statuses of reserved instances.
   * 
   * @example
   * Active
   */
  status?: string[];
  /**
   * @remarks
   * The tags. Array length: 1 to 20.
   */
  tag?: DescribeReservedInstancesRequestTag[];
  /**
   * @remarks
   * The zone ID of the instance. This parameter is required and takes effect only when Scope is set to Zone. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the zone list.
   * 
   * @example
   * cn-hangzhou-z
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationType: 'AllocationType',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      lockReason: 'LockReason',
      offeringType: 'OfferingType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      reservedInstanceName: 'ReservedInstanceName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scope: 'Scope',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationType: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      lockReason: 'string',
      offeringType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
      reservedInstanceName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scope: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeReservedInstancesRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstanceId)) {
      $dara.Model.validateArray(this.reservedInstanceId);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

