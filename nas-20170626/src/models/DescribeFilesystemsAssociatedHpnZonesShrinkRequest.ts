// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsAssociatedHpnZonesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of file system IDs.
   * 
   * >  The maximum number of elements in the set must be less than or equal to 20.
   */
  filesystemsShrink?: string;
  /**
   * @remarks
   * The ID of the region where the file system resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filesystemsShrink: 'Filesystems',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filesystemsShrink: 'string',
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

