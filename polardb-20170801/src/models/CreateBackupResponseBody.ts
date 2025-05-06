// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 11111111
   */
  backupJobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3322AFE-083E-4D77-A074-421301******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
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

