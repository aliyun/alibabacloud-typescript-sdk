// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupExpireTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time-to-live (TTL) of the backup. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and is in UTC.
   * 
   * > - *9999-01-01*T*00:00:00*&#x5A;*&#x20;indicates that the backup is retained permanently.*
   * >
   * >   **
   * >
   * > **
   * 
   * @example
   * 2025-03-29T03:47:12Z
   */
  backupExpireTime?: string;
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * 260032xxxx
   */
  backupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

