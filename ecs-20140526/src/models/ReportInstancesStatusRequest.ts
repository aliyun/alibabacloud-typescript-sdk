// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportInstancesStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the exception.
   * 
   * This parameter is required.
   * 
   * @example
   * The local disk is unavailable, the mount point is inaccessible, or files cannot be loaded.
   */
  description?: string;
  /**
   * @remarks
   * The device names of disks on an instance that have the exception. You can specify to 100 device names in a single request.
   * 
   * If you are using an ECS bare metal instance, enter the slot numbers of disks on the instance.
   * 
   * > For ECS bare metal instances, this parameter is required when the value of the `Reason` parameter is `abnormal-local-disk` or `abnormal-cloud-disk` or when the value of the `IssueCategory` parameter is `hardware-disk-error`.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string[];
  /**
   * @remarks
   * The IDs of disks on an instance that have the exception. You can specify up to 100 disk IDs in a single request. If you are using an ECS bare metal instance, enter the serial numbers of disks on the instance.
   * 
   * > This parameter is required when the value of the `Reason` parameter is `abnormal-local-disk` or `abnormal-cloud-disk` or when the value of the `IssueCategory` parameter is `hardware-disk-error`.
   * 
   * @example
   * d-bp1aeljlfad7x6u1****
   */
  diskId?: string[];
  /**
   * @remarks
   * The end time of the instance exception. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IDs of instances. You can specify up to 100 instance IDs in a single request.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp165p6xk2tmdhj0****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The category of the exception. This parameter is applicable only to ECS bare metal instances. Valid values:
   * 
   * *   hardware-cpu-error: CPU failure
   * *   hardware-motherboard-error: motherboard failure
   * *   hardware-mem-error: memory failure
   * *   hardware-power-error: power failure
   * *   hardware-disk-error: disk failure
   * *   hardware-networkcard-error: network interface controller (NIC) failure
   * *   hardware-raidcard-error: SAS/RAID card failure
   * *   hardware-fan-error: fan failure
   * *   others: other failures
   * 
   * @example
   * hardware-cpu-error
   */
  issueCategory?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The impact of the exception on the instance. Valid values:
   * 
   * *   instance-hang: The instance is unavailable or cannot be connected.
   * *   instance-stuck-in-status: The instance is stuck in a state such as Starting or Stopping.
   * *   abnormal-network: The instance has a network exception.
   * *   abnormal-local-disk: A local disk attached to the instance has an exception.
   * *   abnormal-cloud-disk: A disk or a Shared Block Storage device attached to the instance has an exception.
   * *   others: other exception types. If the impact is not of the preceding types, you can set `Reason` to others and specify the `Description` parameter.
   * 
   * @example
   * abnormal-local-disk
   */
  reason?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The start time of the instance exception. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      device: 'Device',
      diskId: 'DiskId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      issueCategory: 'IssueCategory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      reason: 'Reason',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      device: { 'type': 'array', 'itemType': 'string' },
      diskId: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      issueCategory: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      reason: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.device)) {
      $dara.Model.validateArray(this.device);
    }
    if(Array.isArray(this.diskId)) {
      $dara.Model.validateArray(this.diskId);
    }
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

