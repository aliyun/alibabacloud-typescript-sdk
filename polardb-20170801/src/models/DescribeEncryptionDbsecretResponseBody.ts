// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionDBSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region where the encryption key is located.
   * 
   * @example
   * Enabled
   */
  encryptionDBRegion?: string;
  /**
   * @remarks
   * Indicates whether encryption is enabled. Valid values:
   * 
   * Enabled: Encryption is enabled. Disabled: Encryption is disabled.
   * 
   * @example
   * cn-beijing
   */
  encryptionDBStatus?: string;
  /**
   * @remarks
   * The custom key ID.
   * 
   * @example
   * 2a4f4ac2-****-****-****-************
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * 
   * - **Enabled**
   * 
   * - **Disabled**
   * 
   * @example
   * Disabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 944CED46-A6F7-40C6-B6DC-C6E5CC******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      encryptionDBRegion: 'EncryptionDBRegion',
      encryptionDBStatus: 'EncryptionDBStatus',
      encryptionKey: 'EncryptionKey',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      encryptionDBRegion: 'string',
      encryptionDBStatus: 'string',
      encryptionKey: 'string',
      encryptionKeyStatus: 'string',
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

