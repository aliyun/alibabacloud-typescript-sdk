// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsAssociatedHpnZonesRequestFilesystems extends $dara.Model {
  /**
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
  filesystems?: DescribeFilesystemsAssociatedHpnZonesRequestFilesystems[];
  /**
   * @remarks
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

