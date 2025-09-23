// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionDBSecretResponseBody extends $dara.Model {
  /**
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @example
   * Enabled
   */
  encryptionDBRegion?: string;
  /**
   * @example
   * cn-beijing
   */
  encryptionDBStatus?: string;
  /**
   * @example
   * 2a4f4ac2-****-****-****-************
   */
  encryptionKey?: string;
  /**
   * @example
   * Disabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * Id of the request
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

