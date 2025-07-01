// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: 31a8e4\\*\\*\\*\\*.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of Cloud Parallel File Storage (CPFS) file systems must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
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

