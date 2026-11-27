// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsAssociatedHpnZonesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the file systems.
   * > The maximum number of elements in the collection must be less than or equal to 20.
   */
  filesystemsShrink?: string;
  /**
   * @remarks
   * The ID of the region to which the file system belongs.
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

