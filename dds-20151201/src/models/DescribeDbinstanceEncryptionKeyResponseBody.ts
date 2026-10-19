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
   * The scheduled deletion time of the instance key. If this value is empty, the key is not automatically deleted.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the instance key.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The instance key.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the instance key. Valid values:
   * - **Enabled**: The instance key is available.
   * - **Disabled**: The instance key is unavailable.
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The purpose of the instance key.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The expiration time of the key (UTC). If this value is empty, the key does not expire.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The source of the instance key.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the request.
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

