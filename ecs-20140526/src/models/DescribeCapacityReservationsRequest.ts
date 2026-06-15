// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationsRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of the capacity reservations. The value can be a JSON array that consists of up to 100 capacity reservation IDs.
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
   * The key of the Nth tag. You can specify up to 20 tags.
   * 
   * A maximum of 1,000 resources that match the specified tags can be returned. If you specify multiple tags, only resources that have all of these tags are returned. If the number of matching resources exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the Nth tag. You can specify up to 20 tags.
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
   * 
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
   * The instance type. You can use this parameter to query only active capacity reservations. To query released capacity reservations, you must specify `PrivatePoolOptions.Ids`.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
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
   * The query token. Set the value to the `NextToken` value returned in the previous call to retrieve the next page of results.
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
   * - windows: Returns only capacity reservations for Windows.
   * 
   * - linux: Returns only capacity reservations for Linux.
   * 
   * - all: Returns all capacity reservations.
   * 
   * Default value: all.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The region ID of the capacity reservation. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. When you use this parameter to filter resources, the operation returns a maximum of 1,000 resources.
   * 
   * > Filtering by the default resource group is not supported.
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
   * - All: all statuses.
   * 
   * - Pending: The capacity reservation is initializing. This is the initial status of a scheduled capacity reservation.
   * 
   * - Preparing: The system is preparing resources for the scheduled capacity reservation.
   * 
   * - Prepared: The resources are prepared, and the scheduled capacity reservation is waiting to take effect.
   * 
   * - Active: The capacity reservation is active.
   * 
   * - Released: The capacity reservation is released, either manually or automatically upon expiration.
   * 
   * If you do not specify this parameter, the operation returns capacity reservations in all states except `Pending` and `Released`.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags attached to the capacity reservations.
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

