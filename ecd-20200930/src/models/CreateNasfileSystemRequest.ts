// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNASFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The capacity.
   * 
   * @example
   * 3600
   */
  capacity?: number;
  /**
   * @remarks
   * The description of the NAS file system.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the file system uses a key managed by Key Management Service (KMS) to encrypt data stored on the file system. Encrypted data does not need to be decrypted during read and write operations.
   * 
   * @example
   * 0
   */
  encryptType?: string;
  /**
   * @remarks
   * The file system type.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The name of the NAS file system. The name must meet the following requirements: The name must be 2 to 128 characters in length and can contain letters and Chinese characters. The name must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The name can contain digits, underscores (_), or hyphens (-).
   * 
   * @example
   * testNAS
   */
  name?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * SMB
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage type of the NAS file system.
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      description: 'Description',
      encryptType: 'EncryptType',
      fileSystemType: 'FileSystemType',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      description: 'string',
      encryptType: 'string',
      fileSystemType: 'string',
      name: 'string',
      officeSiteId: 'string',
      protocolType: 'string',
      regionId: 'string',
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

