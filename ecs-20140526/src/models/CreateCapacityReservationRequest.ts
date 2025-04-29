// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCapacityReservationRequestPrivatePoolOptions } from "./CreateCapacityReservationRequestPrivatePoolOptions";
import { CreateCapacityReservationRequestTag } from "./CreateCapacityReservationRequestTag";


export class CreateCapacityReservationRequest extends $dara.Model {
  privatePoolOptions?: CreateCapacityReservationRequestPrivatePoolOptions;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the capacity reservation. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the capacity reservation expires. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2021-10-30T06:32:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The release mode of the capacity reservation. Valid values:
   * 
   * *   Limited: The capacity reservation is automatically released at a specified time. If you specify this parameter, you must specify the `EndTime` parameter.
   * *   Unlimited: The capacity reservation is manually released. The capacity reservation can be released anytime.
   * 
   * @example
   * Unlimited
   */
  endTimeType?: string;
  /**
   * @remarks
   * The total number of instances for which the capacity of an instance type is reserved.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The instance type. You can create a capacity reservation to reserve the capacity of only one instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the instance types provided by ECS.
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
   * The operating system of the image used by the instance. This parameter corresponds to the `Platform` parameter of regional reserved instances. If the operating system of a capacity reservation matches the operating system of a regional reserved instance, you can apply the regional reserved instance to offset fees of the unused capacity of the capacity reservation. Valid values:
   * 
   * *   Windows: Windows Server operating system
   * *   Linux: Linux and UNIX-like operating system
   * 
   * Default value: Linux.
   * 
   * > This parameter is unavailable.
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region in which to create the capacity reservation. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to assign the capacity reservation.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The mode in which the capacity reservation takes effect. You can call the CreateCapacityReservation operation to create only immediate capacity reservations.
   * 
   * > If you do not specify this parameter, the capacity reservation immediately takes effect.
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

