// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVscMountPointShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 037****e1d
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @example
   * ["ecs-instance1", "ecs-instance2"]
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 037cb49e1d-c***5
   */
  mountPointId?: string;
  useAssumeRoleChkServerPerm?: boolean;
  vscIdsShrink?: string;
  vscName?: string;
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

