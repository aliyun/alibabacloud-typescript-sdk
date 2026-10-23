// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportInstancesStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed description of the exception.
   * 
   * This parameter is required.
   * 
   * @example
   * The local disk is unavailable, access to the mount point is denied, and files cannot be loaded
   */
  description?: string;
  /**
   * @remarks
   * The device names of the attached disks that have the same exception. You can specify up to 100 device names. If you use ECS Bare Metal instances, specify the slot information of the disk devices.
   * 
   * > For ECS Bare Metal instances, this parameter is required when the Reason parameter is set to abnormal-local-disk or abnormal-cloud-disk, or when the IssueCategory parameter is set to hardware-disk-error.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string[];
  /**
   * @remarks
   * The IDs of the disks that have the same exception. You can specify up to 100 disk IDs. If you use ECS Bare Metal instances, specify the serial numbers (SNs) of the disk devices.
   * 
   * > This parameter is required when the Reason parameter is set to abnormal-local-disk or abnormal-cloud-disk, or when the IssueCategory parameter is set to hardware-disk-error.
   * 
   * @example
   * d-bp1aeljlfad7x6u1****
   */
  diskId?: string[];
  /**
   * @remarks
   * The end time of the instance failures. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IDs of the ECS instances. You can specify up to 100 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp165p6xk2tmdhj0****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The category of the exception. This parameter is applicable only to ECS Bare Metal instances. Valid values:
   * - hardware-cpu-error: CPU failure
   * - hardware-motherboard-error: Motherboard failure
   * - hardware-mem-error: Memory failure
   * - hardware-power-error: Power supply failure
   * - hardware-disk-error: Disk failure
   * - hardware-networkcard-error: Network interface controller (NIC) failure
   * - hardware-raidcard-error: SAS/RAID card failure
   * - hardware-fan-error: Fan failure
   * - others: Other exceptions
   * 
   * @example
   * hardware-cpu-error
   */
  issueCategory?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The impact of the exception on the ECS instance. Valid values:
   * 
   * - instance-hang: The ECS instance is unavailable or unreachable.
   * - instance-stuck-in-status: The ECS instance remains in a specific state, such as Starting or Stopping, for an extended period.
   * - abnormal-network: A network exception occurs on the ECS instance.
   * - abnormal-local-disk: An exception occurs on the local disk attached to the ECS instance.
   * - abnormal-cloud-disk: An exception occurs on the disk or Shared Block Storage attached to the ECS instance.
   * - others: Other exception types. If none of the preceding impact types apply, you can set Reason to others and provide more information in Description.
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
   * The start time of the instance failures. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

