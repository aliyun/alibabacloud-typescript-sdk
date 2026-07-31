// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCapacityReservationRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the capacity reservation.
   * 
   * This parameter is required.
   * 
   * @example
   * crp-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The name of the capacity reservation. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * eapTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ModifyCapacityReservationRequest extends $dara.Model {
  privatePoolOptions?: ModifyCapacityReservationRequestPrivatePoolOptions;
  /**
   * @remarks
   * The description of the capacity reservation. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the capacity reservation. This parameter takes effect only when `EndTimeType=Limited`. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2021-10-30T06:32:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The expiration method of the capacity reservation. Valid values:
   * 
   * - Limited: The capacity reservation is released at a specified time. You must also specify the `EndTime` parameter.
   * - Unlimited: The capacity reservation is released by manual release. No time limit is imposed.
   * 
   * @example
   * Unlimited
   */
  endTimeType?: string;
  /**
   * @remarks
   * The total number of instances that the capacity reservation needs to reserve. Valid values: the number of used instances to 1000.
   * 
   * > When you increase the total number of instances, the operation may fail due to insufficient inventory.
   * 
   * @example
   * 100
   */
  instanceAmount?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The operating system type of the image used by the instance. Valid values:
   * 
   * - Windows: Windows Server operating system.
   * - Linux: Linux and Unix-like operating system.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region where the capacity reservation resides. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The method by which the capacity reservation takes effect. Currently, only immediate activation is supported, and you do not need to specify a value for this parameter.
   * 
   * > If you leave this parameter empty, the capacity reservation takes effect immediately.
   * 
   * @example
   * Now
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      description: 'Description',
      endTime: 'EndTime',
      endTimeType: 'EndTimeType',
      instanceAmount: 'InstanceAmount',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: ModifyCapacityReservationRequestPrivatePoolOptions,
      description: 'string',
      endTime: 'string',
      endTimeType: 'string',
      instanceAmount: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      platform: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

