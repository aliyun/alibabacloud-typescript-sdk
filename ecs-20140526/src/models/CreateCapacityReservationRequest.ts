// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCapacityReservationRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The type of the private pool that is generated after the capacity reservation takes effect. Valid values:
   * 
   * - Open: open mode. When you launch an instance, it is automatically matched with the capacity of an open private pool. If no suitable private pool capacity is available, the instance is launched by using public pool resources.
   * 
   * - Target: targeted mode. The instance is launched by using the capacity of a specified private pool. If the capacity is unavailable, the instance fails to launch.
   * 
   * Default value: Open.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  /**
   * @remarks
   * The name of the capacity reservation. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * crpTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapacityReservationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the capacity reservation. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the capacity reservation. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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

export class CreateCapacityReservationRequest extends $dara.Model {
  privatePoolOptions?: CreateCapacityReservationRequestPrivatePoolOptions;
  /**
   * @remarks
   * A client-generated token that ensures the request is idempotent. You can use the same token to retry a request. The `ClientToken` value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the capacity reservation. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty string.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The end time of the capacity reservation. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2021-10-30T06:32:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The release mode of the capacity reservation. Valid values:
   * 
   * - Limited: The capacity reservation is automatically released at a specific time. You must also specify the `EndTime` parameter.
   * 
   * - Unlimited: The capacity reservation must be released manually.
   * 
   * @example
   * Unlimited
   */
  endTimeType?: string;
  /**
   * @remarks
   * The number of instances of the specified instance type for which to reserve capacity.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  instanceAmount?: number;
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type for which to reserve capacity. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to view the instance types that ECS provides.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The operating system of the image used by the instance. This parameter corresponds to the `Platform` parameter of a regional reserved instance. If this platform matches the platform of a regional reserved instance, the regional reserved instance can be used to offset the costs of unused capacity in the reservation. Valid values:
   * 
   * - Windows: Windows Server operating systems.
   * 
   * - Linux: Linux and Unix-like operating systems.
   * 
   * Default value: Linux.
   * 
   * > This parameter is not yet available for use.
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region in which to create the capacity reservation. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the capacity reservation belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when the capacity reservation takes effect. The capacity reservation takes effect immediately after it is created.
   * 
   * > If you do not specify this parameter, the capacity reservation takes effect immediately.
   * 
   * @example
   * 2021-10-30T05:32:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tags to add to the capacity reservation.
   */
  tag?: CreateCapacityReservationRequestTag[];
  /**
   * @remarks
   * The ID of the zone in which you want to create the capacity reservation. A capacity reservation can reserve resources within only one zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      clientToken: 'ClientToken',
      description: 'Description',
      endTime: 'EndTime',
      endTimeType: 'EndTimeType',
      instanceAmount: 'InstanceAmount',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: CreateCapacityReservationRequestPrivatePoolOptions,
      clientToken: 'string',
      description: 'string',
      endTime: 'string',
      endTimeType: 'string',
      instanceAmount: 'number',
      instanceChargeType: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      platform: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tag: { 'type': 'array', 'itemType': CreateCapacityReservationRequestTag },
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zoneId)) {
      $dara.Model.validateArray(this.zoneId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

