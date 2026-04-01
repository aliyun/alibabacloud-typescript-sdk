// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 5073731
   */
  backupJobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2C125605-266F-41CA-8AC5-3A643D4F42C5
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

