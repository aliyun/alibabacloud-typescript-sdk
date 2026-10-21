// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * - General-purpose NAS: 31a8e4\\*\\*\\*\\*.
   * 
   * - Extreme NAS: must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * 
   * - Cloud Parallel File Storage (CPFS): must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * 174494b666-x****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountTargetDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

