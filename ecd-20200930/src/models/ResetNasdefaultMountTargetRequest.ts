// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetNASDefaultMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the NAS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 3a6ef4****
   */
  fileSystemId?: string;
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
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

