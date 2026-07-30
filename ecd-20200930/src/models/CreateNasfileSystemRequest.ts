// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNASFileSystemRequest extends $dara.Model {
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
   * Specifies whether the file system uses a KMS-managed key to encrypt data stored on the file system. Encrypted data does not need to be decrypted during read and write operations.
   * 
   * @example
   * 0
   */
  encryptType?: string;
  /**
   * @remarks
   * The NAS file system name. The name must meet the following requirements: The name must be 2 to 128 characters in length and can contain letters and Chinese characters. The name must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The name can contain digits, underscores (_), or hyphens (-).
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
  protocolType?: string;
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
   * The storage type of the NAS file system.
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
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

