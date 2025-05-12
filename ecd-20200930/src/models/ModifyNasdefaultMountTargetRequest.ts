// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNASDefaultMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the NAS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * 0bf744****-xo***.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

