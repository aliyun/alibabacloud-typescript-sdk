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
   * The ID of the desktop group.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-fh0vdzyh6rdc*****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data in the NAS file system. You can use keys that are hosted by Key Management Service (KMS) to encrypt data in a file system. When you read and write the encrypted data, the data is automatically decrypted. Valid values:
   * 
   * *   0: does not encrypt data in the NAS file system.
   * *   1: encrypts data in the NAS file system by using a NAS-managed key. ` If you set  `FileSystemType`  to  `standard`  or  `extreme`, you can use a NAS-managed key to encrypt data in a NAS file system.`
   * *   2: encrypts data in the NAS file system by using a KMS-managed key. `If` you set FileSystemType`  to  `extreme`, you can use a KMS-managed key to encrypt data in a NAS file system.`
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  encryptType?: number;
  /**
   * @remarks
   * The list of users.
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
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing+dir-15657*****
   */
  officeSiteId?: string;
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
  /**
   * @remarks
   * The storage type of the NAS file system. Valid values:
   * 
   * *   Capacity
   * *   Performance
   * 
   * Default value: Capacity.
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

