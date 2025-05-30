// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataProjectsPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The data encryption algorithm that is supported by the key. Valid values: AES256, AESCTR, and RC4.
   * 
   * @example
   * SHA1
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the data encryption feature needs to be enabled for the project. For more information about data encryption, see
   * 
   * [Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key that is used for data encryption. You can select MaxCompute Default Key or Bring Your Own Key (BYOK) as the key type. If you select MaxCompute Default Key, the default key that is created by MaxCompute is used.
   * 
   * @example
   * dafault
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

