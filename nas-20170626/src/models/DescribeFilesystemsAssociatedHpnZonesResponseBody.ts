// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsAssociatedHpnZonesResponseBodyFilesystems extends $dara.Model {
  /**
   * @remarks
   * The list of HpnZones supported by the file system.
   */
  associatedHpnZones?: string[];
  /**
   * @remarks
   * The ID of the CPFS for Lingjun file system.
   * 
   * @example
   * bmcpfs-290t15yn4uo8lid****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
  /**
   * @remarks
   * The list of HpnZones associated with the file system.
   */
  filesystems?: DescribeFilesystemsAssociatedHpnZonesResponseBodyFilesystems[];
  /**
   * @remarks
   * Request ID.
   * 
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

