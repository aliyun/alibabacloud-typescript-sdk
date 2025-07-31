// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of the task. This parameter is used to filter tasks whose execution duration is longer than the minimum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed for the query.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start time of the O\\&M task to perform. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-16T02:46:21Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple instance IDs with commas (,). You can specify up to 30 instance IDs. This parameter is empty by default, which indicates that the tasks of all instances are queried.
   * 
   * @example
   * dds-8vb38f0e7933xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the pending event. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled: The task is waiting to be executed.
   * *   Running: The task is running.
   * *   Succeed: The task is successful.
   * *   Failed: The task failed.
   * *   Cancelling: The task is being terminated.
   * *   Canceled: The task has been terminated.
   * *   Waiting: The task is waiting for scheduled time.
   * 
   * Separate multiple states with commas (,). This parameter is empty by default, which indicates that tasks in all states are queried.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The task ID. Separate multiple task IDs with commas (,). You can specify up to 30 task IDs. This parameter is empty by default, which indicates that all tasks are queried.
   * 
   * @example
   * t-0mq1yyhm3ffl2bxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. This parameter is left empty by default, which indicates that all types of tasks are queried. Valid values:
   * 
   * *   CreateIns: Create an instance.
   * *   DeleteIns: Delete an instance.
   * *   ChangeVariable: Modify parameter settings for an instance.
   * *   ModifyInsConfig: Change the configurations of an instance.
   * *   RestartIns: Restart an instance.
   * *   HaSwitch: Perform a primary/secondary switchover on an instance.
   * *   CloneIns: Clone an instance.
   * *   KernelVersionUpgrade: Update the minor version of an instance.
   * *   ProxyVersionUpgrade: Upgrade the agent version of an instance.
   * *   ModifyAccount: Change the account of an instance.
   * *   ModifyInsSpec: Change the specifications of an instance or perform a data migration on the instance.
   * *   CreateReadIns: Create a read-only instance.
   * *   StartIns: Start an instance.
   * *   StopIns: Stop an instance.
   * *   ModifyNetwork: Modify the network type for an instance.
   * *   LockIns: Lock an instance.
   * *   UnlockIns: Unlock an instance.
   * *   DiskOnlineExpansion: Scale out the disks of an instance online.
   * *   StorageOnlineExpansion: Expend the storage capacity of an instance online.
   * *   AddInsNode: Add a node to an instance.
   * *   DeleteInsNode: Delete a node from an instance.
   * *   ManualBackupIns: Manually back up an instance.
   * *   ModifyInsStorageType: Modify the storage type for an instance.
   * 
   * @example
   * DeleteIns
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of the task. This parameter is used to filter tasks whose execution duration is shorter than or equal to the maximum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed for the query.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end time of the O\\&M task to perform. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-16T02:15:52Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      fromExecTime: 'FromExecTime',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      toExecTime: 'ToExecTime',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromExecTime: 'number',
      fromStartTime: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      toExecTime: 'number',
      toStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

