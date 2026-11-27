// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * - General-purpose NAS: 31a8e4\*\*\*\*.
   * 
   * - Extreme NAS: must start with `extreme-`, such as extreme-0015\*\*\*\*.
   * 
   * - CPFS: must start with `cpfs-`, such as cpfs-125487\*\*\*\*.
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
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

