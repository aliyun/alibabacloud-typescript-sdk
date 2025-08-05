// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUdmSnapshotsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1560750pclffpzxy70
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value must be a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1643092168
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp18x2k7sw925ir7ofh8
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-*********************
   */
  jobId?: string;
  /**
   * @remarks
   * The list of backup snapshots.
   * 
   * @example
   * [\\"s-000e3vhhu62xsm6v92r0\\"]
   */
  snapshotIdsShrink?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * *   **UDM_ECS_DISK**: disk backup subtask of ECS instance backup
   * *   **UDM_DISK**: disk backup
   * 
   * This parameter is required.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value must be a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642057551
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the region where the ECS instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  udmRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      snapshotIdsShrink: 'SnapshotIds',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      udmRegionId: 'UdmRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      snapshotIdsShrink: 'string',
      sourceType: 'string',
      startTime: 'number',
      udmRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

