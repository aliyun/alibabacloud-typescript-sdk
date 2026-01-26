// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsAssociatedHpnZonesResponseBodyFilesystems extends $dara.Model {
  associatedHpnZones?: string[];
  /**
   * @example
   * bmcpfs-290t15yn4uo8lid****
   */
  fileSystemId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedHpnZones: 'AssociatedHpnZones',
      fileSystemId: 'FileSystemId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedHpnZones: { 'type': 'array', 'itemType': 'string' },
      fileSystemId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedHpnZones)) {
      $dara.Model.validateArray(this.associatedHpnZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesystemsAssociatedHpnZonesResponseBody extends $dara.Model {
  filesystems?: DescribeFilesystemsAssociatedHpnZonesResponseBodyFilesystems[];
  /**
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filesystems: 'Filesystems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filesystems: { 'type': 'array', 'itemType': DescribeFilesystemsAssociatedHpnZonesResponseBodyFilesystems },
      requestId: 'string',
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

