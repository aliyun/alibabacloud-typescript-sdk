// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRegionSupportBackupEncryptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 081FAAD5-9E56-5BE7-A495-*******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether backup encryption is supported. Valid values: true and false.
   * 
   * @example
   * true
   */
  supportBackupEncryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportBackupEncryption: 'SupportBackupEncryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportBackupEncryption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

