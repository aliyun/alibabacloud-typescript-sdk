// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndBindNasFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the NAS file system.
   * 
   * @example
   * newDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the shared cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-fh0vdzyh6rdc*****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Specifies whether the file system uses a KMS-managed key to encrypt data at rest. Encrypted data does not need to be decrypted during read and write operations.
   * 
   * > NAS-managed keys are supported when `FileSystemType` is set to `standard` or `extreme`. User-managed keys are supported when `FileSystemType` is set to `extreme`.
   * 
   * @example
   * 0
   */
  encryptType?: number;
  /**
   * @remarks
   * The list of user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The name of the NAS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * szy-asp-upm-test
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing+dir-15657*****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage specification type of the NAS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desktopGroupId: 'DesktopGroupId',
      encryptType: 'EncryptType',
      endUserIds: 'EndUserIds',
      fileSystemName: 'FileSystemName',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desktopGroupId: 'string',
      encryptType: 'number',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      fileSystemName: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      storageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

