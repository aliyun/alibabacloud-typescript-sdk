// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportInstancesStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed description of the anomalous issue.
   * 
   * This parameter is required.
   * 
   * @example
   * 本地盘不可用，挂载点拒绝访问，无法加载文件。
   */
  description?: string;
  /**
   * @remarks
   * The list of device names of the disks that have the same anomalous issue and are attached to the instance. You can specify up to 100 device names.
   * 
   * If you are using an ECS Bare Metal server instance, specify the SLOT information list of the disk devices.
   * 
   * > For ECS bare metal instances, this parameter is required when the `Reason` parameter is set to `abnormal-local-disk` or `abnormal-cloud-disk`, or when the `IssueCategory` parameter is set to `hardware-disk-error`.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string[];
  /**
   * @remarks
   * The list of IDs of the disks that have the same anomalous issue. You can specify up to 100 disk IDs. If you are using an ECS Bare Metal server instance, specify the SN list of the disk devices.
   * 
   * > This parameter is required when the `Reason` parameter is set to `abnormal-local-disk` or `abnormal-cloud-disk`, or when the `IssueCategory` parameter is set to `hardware-disk-error`.
   * 
   * @example
   * d-bp1aeljlfad7x6u1****
   */
  diskId?: string[];
  /**
   * @remarks
   * The time when the instance failures ended. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of ECS instance IDs. You can specify up to 100 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp165p6xk2tmdhj0****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The category of the anomalous issue. This parameter is applicable only to Elastic Compute Service Bare Metal Instance instances. Valid values:
   * - hardware-cpu-error: CPU failure.
   * - hardware-motherboard-error: Motherboard failure.
   * - hardware-mem-error: Memory failure.
   * - hardware-power-error: Power failure.
   * - hardware-disk-error: Disk failure.
   * - hardware-networkcard-error: Network interface controller (NIC) failure.
   * - hardware-raidcard-error: SAS/RAID card failure.
   * - hardware-fan-error: Fan failure.
   * - others: Other failures.
   * 
   * @example
   * hardware-cpu-error
   */
  issueCategory?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The impact of the anomalous issue on the ECS instance. Valid values:
   * 
   * - instance-hang: The ECS instance is unavailable or cannot be connected to.
   * - instance-stuck-in-status: The ECS instance is stuck in a specific state, such as Starting or Stopping, for an extended period of time.
   * - abnormal-network: A network exception occurred on the ECS instance.
   * - abnormal-local-disk: A local disk attached to the ECS instance is abnormal.
   * - abnormal-cloud-disk: A cloud disk or Shared Block Storage device attached to the ECS instance is abnormal.
   * - others: Other exception types. If none of the preceding values apply, set `Reason=others` and provide more information in `Description`.
   * 
   * @example
   * abnormal-local-disk
   */
  reason?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent list of Alibaba Cloud regions.
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
   * The time when the instance failures started. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

