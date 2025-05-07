// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserBackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * b-g14d0m772f7b********
   */
  backupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A236067-4727-4B42-92CF-734E417ED69A
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

