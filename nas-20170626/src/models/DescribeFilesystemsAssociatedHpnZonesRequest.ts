// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsAssociatedHpnZonesRequestFilesystems extends $dara.Model {
  /**
   * @remarks
   * The ID of the CPFS for Lingjun file system. Must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * @example
   * bmcpfs-290t15yn4uo8lid****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesystemsAssociatedHpnZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of file system IDs.
   * 
   * >  The maximum number of elements in the set must be less than or equal to 20.
   */
  filesystems?: DescribeFilesystemsAssociatedHpnZonesRequestFilesystems[];
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
      filesystems: 'Filesystems',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filesystems: { 'type': 'array', 'itemType': DescribeFilesystemsAssociatedHpnZonesRequestFilesystems },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filesystems)) {
      $dara.Model.validateArray(this.filesystems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

