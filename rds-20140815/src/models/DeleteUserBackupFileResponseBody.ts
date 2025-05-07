// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserBackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted full backup file.
   * 
   * @example
   * b-w1haya7e4i25********
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F28AE40B-203B-4CFE-B81F-FD981CD97B17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

