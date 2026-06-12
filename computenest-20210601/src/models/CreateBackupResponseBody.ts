// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * backup-cad4a85ff5e340388b93
   */
  backupId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8DC02957-A0FC-5AB2-8C54-496B636EAF12
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the backup.
   * 
   * - Creating: The backup is being created.
   * 
   * - Created: The backup is created.
   * 
   * - CreateFailed: The backup failed to be created.
   * 
   * - Deleting: The backup is being deleted.
   * 
   * - Deleted: The backup is deleted.
   * 
   * - DeleteFailed: The backup failed to be deleted.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      description: 'Description',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      description: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

