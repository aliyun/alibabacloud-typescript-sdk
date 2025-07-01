// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType extends $dara.Model {
  /**
   * @remarks
   * The protocol type.
   * 
   * *   If the FileSystemType parameter is set to standard, the protocol type is nfs or smb.
   * *   If the FileSystemType parameter is set to extreme, the protocol type is nfs.
   * *   If the FileSystemType parameter is set to cpfs, the protocol type is cpfs.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * nfs
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * *   If the FileSystemType parameter is set to standard, the storage type is Performance or Capacity.
   * *   If the FileSystemType parameter is set to extreme, the storage type is standard or advance.
   * *   If the FileSystemType parameter is set to cpfs, the storage type is advance_100 (100 MB/s/TiB baseline) or advance_200 (200 MB/s/TiB baseline).
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      protocolType: 'ProtocolType',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolType: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

