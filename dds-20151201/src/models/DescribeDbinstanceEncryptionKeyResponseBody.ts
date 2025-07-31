// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEncryptionKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UID of the key creator.
   * 
   * @example
   * 123456
   */
  creator?: string;
  /**
   * @remarks
   * The scheduled time when the key for the instance will be deleted. If the parameter is left empty, the key will not be deleted.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the key for the instance.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The key for the instance.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Indicates whether the key for the instance is enabled. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The purpose of the key for the instance.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The expiration time of the key for the instance. The time is displayed in UTC. If the parameter is left empty, the key for the instance will not expire.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The source of the key for the instance.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 783C2062-A2D3-4EA8-88AD-E43F990C23BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      encryptionKey: 'EncryptionKey',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      keyUsage: 'KeyUsage',
      materialExpireTime: 'MaterialExpireTime',
      origin: 'Origin',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      encryptionKey: 'string',
      encryptionKeyStatus: 'string',
      keyUsage: 'string',
      materialExpireTime: 'string',
      origin: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

