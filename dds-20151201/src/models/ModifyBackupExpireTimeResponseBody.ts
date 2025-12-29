// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupExpireTimeResponseBody extends $dara.Model {
  /**
   * @example
   * 2025-03-29T03:47:12Z
   */
  backupExpireTime?: string;
  /**
   * @example
   * 260032xxxx
   */
  backupId?: string;
  /**
   * @example
   * A0181AC4-XXXX-XXXX-87CA-100C70B86729
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupExpireTime: 'BackupExpireTime',
      backupId: 'BackupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupExpireTime: 'string',
      backupId: 'string',
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

