// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * c50f8*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * TestMountPath
   */
  mountTargetName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      fileSystemId: 'FileSystemId',
      mountTargetName: 'MountTargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      fileSystemId: 'string',
      mountTargetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

