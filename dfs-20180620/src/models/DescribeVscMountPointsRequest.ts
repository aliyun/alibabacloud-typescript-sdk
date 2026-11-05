// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscMountPointsRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e389e5c7-bcb4-4558-846a-e5afc444****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance on which the HDFS file system is mounted.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mount point ID.
   * 
   * @example
   * f-037cb49e1d-c****.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @remarks
   * The instance status of the ECS instance on which the HDFS file system is mounted. Valid values:
   * - NORMAL: The mount operation succeeded.
   * - CREATING: The mount operation is in progress.
   * - INVALID: The mount operation failed.
   * - OK: Returns instances in the NORMAL, CREATING, and INVALID states.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VSC on which the HDFS file system is mounted.
   * 
   * @example
   * vsc-asjodjoio****
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceId: 'InstanceId',
      mountPointId: 'MountPointId',
      status: 'Status',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceId: 'string',
      mountPointId: 'string',
      status: 'string',
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

