// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachVscMountPointShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. This parameter has no practical effect.
   * 
   * @example
   * None
   */
  description?: string;
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
   * The IDs of the ECS instances from which the HDFS file system is to be disassociated. Separate multiple ECS instance IDs with commas (,). Specify a maximum of 50 ECS instance IDs.
   * 
   * @example
   * [
   *       "i-bp1g6zv0ce8oghu7****",
   *       "i-bp1g6zv0ce8oghu1****"
   * ]
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The mount point ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-037cb49e1d-c****.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @remarks
   * Specifies whether to use the assumed role to verify the permissions of the compute node. Valid values:
   * - true: Yes.
   * - false: No.
   * Default value: false.
   * 
   * @example
   * false
   */
  useAssumeRoleChkServerPerm?: boolean;
  /**
   * @remarks
   * The IDs of the VSCs from which the HDFS file system is to be disassociated. Specify a maximum of 50 VSC IDs.
   */
  vscIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIdsShrink: 'InstanceIds',
      mountPointId: 'MountPointId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
      vscIdsShrink: 'VscIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIdsShrink: 'string',
      mountPointId: 'string',
      useAssumeRoleChkServerPerm: 'boolean',
      vscIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

