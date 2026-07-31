// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationsRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of capacity reservation IDs. The value can be a JSON array that consists of up to 100 IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["crp-bp1gubrkqutenqdd****", "crp-bp67acfmxazb5****"]
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. N indicates that you can set multiple tag keys for filtering. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count with all specified tags attached cannot exceed 1000. If the resource count exceeds 1000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. N indicates that you can set multiple tag values for filtering. Valid values of N: 1 to 20.
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

export class DescribeCapacityReservationsRequest extends $dara.Model {
  privatePoolOptions?: DescribeCapacityReservationsRequestPrivatePoolOptions;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - PostPaid: pay-as-you-go.
   * - PrePaid: subscription.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. You can use the instance type to query only active capacity reservations. Released capacity reservations can be queried only by using PrivatePoolOptions.Ids.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the capacity reservation query. Obtain the value from the result of the previous request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The operating system of the instance. Valid values:
   * 
   * - windows: queries only capacity reservations for Windows instances.
   * - linux: queries only capacity reservations for Linux instances.
   * - all: queries all capacity reservations.
   * 
   * Default value: all.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The region ID of the capacity reservation. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the capacity reservation. Valid values:
   * 
   * - All: all states.
   * - Pending: initializing. A capacity reservation that takes effect at a specified time enters the initializing state first.
   * - Preparing: being prepared. A capacity reservation that takes effect at a specified time is in the Preparing state during the resource delivery phase.
   * - Prepared: to take effect. A capacity reservation that takes effect at a specified time is in the Prepared state after resource delivery is complete but before the service takes effect.
   * - Active: active.
   * - Released: released, including manual release and automatic release upon expiration.
   * 
   * If you do not specify this parameter, capacity reservations in all states except Pending and Released are queried.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags bound to the capacity reservation.
   */
  tag?: DescribeCapacityReservationsRequestTag[];
  /**
   * @remarks
   * The zone ID of the capacity reservation.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: DescribeCapacityReservationsRequestPrivatePoolOptions,
      instanceChargeType: 'string',
      instanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      platform: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeCapacityReservationsRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
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

