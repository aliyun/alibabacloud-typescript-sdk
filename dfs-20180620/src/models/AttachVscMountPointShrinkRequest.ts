// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVscMountPointShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved field. This field has no practical meaning.
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
   * The IDs of the ECS instances to which you want to mount the Apsara File Storage for HDFS file system. Separate multiple ECS instance IDs with commas (,). You can specify up to 100 ECS instance IDs.
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
   * - true: yes.
   * - false: no. This is the default value.
   * 
   * @example
   * false
   */
  useAssumeRoleChkServerPerm?: boolean;
  /**
   * @remarks
   * The IDs of the VSCs to which you want to mount the HDFS file system. Specify up to 100 VSC IDs.
   */
  vscIdsShrink?: string;
  /**
   * @remarks
   * The custom name of the VSC.
   * 
   * @example
   * 1fb6b247-4c4a-4fb9-b3b5-7ea38b167bb5
   */
  vscName?: string;
  /**
   * @remarks
   * The VSC type. Valid values:
   * - Primary: the reserved default VSC on the ECS instance. This is the default value.
   * - Secondary: a repeatable VSC on the ECS instance.
   * 
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIdsShrink: 'InstanceIds',
      mountPointId: 'MountPointId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
      vscIdsShrink: 'VscIds',
      vscName: 'VscName',
      vscType: 'VscType',
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
      vscName: 'string',
      vscType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

