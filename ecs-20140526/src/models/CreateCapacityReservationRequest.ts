// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCapacityReservationRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The type of the private pool generated after the capacity reservation takes effect. Valid values:
   * 
   * - Open: open mode. When an instance is started, the system automatically matches the capacity of an open private pool. If no eligible private pool capacity is available, the instance is started by using public pool resources.
   * - Target: targeted mode. The instance is started by using the capacity of the specified private pool. If the capacity of the private pool is unavailable, the instance fails to be started.
   * 
   * Default value: Open.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  /**
   * @remarks
   * The name of the capacity reservation. The name must be 2 to 128 characters in length, and can contain letters and Chinese characters. It must start with a letter or a Chinese character, and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
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
   * The tag key of the capacity reservation. Valid values of N: 1 to 20. If this parameter is specified, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the capacity reservation. Valid values of N: 1 to 20. If this parameter is specified, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with acs:, or contain http:// or https://.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests. The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the capacity reservation. The description must be 2 to 256 characters in length, and can contain letters and Chinese characters. It cannot start with http:// or https://.
   * 
   * Default value: empty.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the capacity reservation. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be displayed in UTC+0. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2021-10-30T06:32:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The expiration pattern of the capacity reservation. Valid values:
   * 
   * - Limited: releases the reservation at a specified time. You must also specify the EndTime parameter.
   * - Unlimited: manual release. The expiration time is not limited.
   * 
   * @example
   * Unlimited
   */
  endTimeType?: string;
  /**
   * @remarks
   * The total number of instances to be reserved for the instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The billing method for the instance. Currently, only PostPaid (pay-as-you-go) is supported. Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. Currently, you can configure the settings for a capacity reservation for only one instance type. You can invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the instance types of servers provided by Elastic Compute Service (ECS).
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
   * The operating system type of the image used by the instance. This parameter corresponds to the Platform parameter of a regional reserved instance. If the operating system type of the capacity reservation matches that of the regional reserved instance, you can use the regional reserved instance to offset the bills for the unused capacity of the capacity reservation. Valid values:
   * 
   * - Windows: Windows Server operating systems.
   * - Linux: Linux and Unix-like operating systems.
   * 
   * Default value: Linux.
   * 
   * > This parameter is not available.
   * 
   * @example
   * Linux
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
   * The ID of the enterprise resource group to which the capacity reservation belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The effective mode of the capacity reservation. Currently, calling this API operation only supports setting the reservation to take effect immediately. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be displayed in UTC.
   * 
   * > If this parameter is not specified, the capacity reservation takes effect immediately.
   * 
   * @example
   * 2021-10-30T05:32:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The list of tags bound to the capacity reservation.
   */
  tag?: CreateCapacityReservationRequestTag[];
  /**
   * @remarks
   * The zone ID of the region to which the capacity reservation belongs. Currently, you can create a capacity reservation in only one zone.
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

