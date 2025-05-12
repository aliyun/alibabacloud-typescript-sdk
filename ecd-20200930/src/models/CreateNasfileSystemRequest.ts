// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNASFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the NAS file system.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Whether the file system is encrypted. Uses KMS service-managed keys to encrypt the file system\\"s on-disk data. No decryption is required when reading and writing encrypted data. Possible values and their meanings:
   * 
   * - 0: Not encrypted.
   * - 1: Encrypted using NAS-managed keys.
   * 
   * Default value: 0
   * 
   * @example
   * 0
   */
  encryptType?: string;
  /**
   * @remarks
   * Name of the NAS file system.
   * The file name must follow these rules:
   * - Length: 2 to 128 English or Chinese characters.
   * - Must start with an uppercase or lowercase letter or a Chinese character, cannot start with http:// or https://.
   * - Can include numbers, underscores (_), or hyphens (-).
   * 
   * @example
   * testNAS
   */
  name?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Storage specification type of the NAS file system. Allowed values:
   * 
   * - Capacity: Capacity type.
   * - Performance: Performance type.
   * 
   * Default value: Capacity
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

