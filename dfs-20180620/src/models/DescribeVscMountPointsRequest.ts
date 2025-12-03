// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscMountPointsRequest extends $dara.Model {
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
  instanceId?: string;
  /**
   * @example
   * 037cb49e1d-c***5
   */
  mountPointId?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
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

