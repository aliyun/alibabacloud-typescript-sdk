// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupabaseBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup job. You can call ListSupabaseBackupJobs to query the status and progress of the corresponding job.
   * 
   * @example
   * 123
   */
  backupJobId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
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
      backupJobId: 'number',
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

