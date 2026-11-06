// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created backup job.
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
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the workflow task corresponding to the backup creation.
   * 
   * @example
   * 32077061
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

