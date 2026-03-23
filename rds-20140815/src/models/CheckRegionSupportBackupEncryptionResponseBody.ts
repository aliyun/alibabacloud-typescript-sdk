// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRegionSupportBackupEncryptionResponseBody extends $dara.Model {
  requestId?: string;
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

