// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachVscMountPointRequest extends $dara.Model {
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
  instanceIds?: string[];
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
  vscIds?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIds: 'InstanceIds',
      mountPointId: 'MountPointId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
      vscIds: 'VscIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      mountPointId: 'string',
      useAssumeRoleChkServerPerm: 'boolean',
      vscIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.vscIds)) {
      $dara.Model.validateArray(this.vscIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

