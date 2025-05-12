// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNASFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the NAS file systems that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string[];
  /**
   * @remarks
   * The region ID of the NAS file system that you want to delete.
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystemId)) {
      $dara.Model.validateArray(this.fileSystemId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

