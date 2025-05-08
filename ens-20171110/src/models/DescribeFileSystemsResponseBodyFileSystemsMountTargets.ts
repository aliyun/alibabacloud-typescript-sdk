// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsMountTargets extends $dara.Model {
  /**
   * @remarks
   * The path of the mount target.
   * 
   * @example
   * *.*.*.*:/${FileSystemName}/{MountTargetName}
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The name of the mount target.
   * 
   * @example
   * target1
   */
  mountTargetName?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-****
   */
  netWorkId?: string;
  /**
   * @remarks
   * The status of the mount target. Valid values:
   * 
   * *   active: The mount target is available.
   * *   inactive: The mount target is unavailable.
   * *   pending: The task is running.
   * *   deleting: The mount target is being deleted.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      mountTargetName: 'MountTargetName',
      netWorkId: 'NetWorkId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      mountTargetName: 'string',
      netWorkId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

