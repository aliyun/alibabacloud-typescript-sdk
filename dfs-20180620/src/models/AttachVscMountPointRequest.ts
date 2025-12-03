// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVscMountPointRequest extends $dara.Model {
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
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 037cb49e1d-c***5
   */
  mountPointId?: string;
  useAssumeRoleChkServerPerm?: boolean;
  vscIds?: string[];
  vscName?: string;
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIds: 'InstanceIds',
      mountPointId: 'MountPointId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
      vscIds: 'VscIds',
      vscName: 'VscName',
      vscType: 'VscType',
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
      vscName: 'string',
      vscType: 'string',
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

