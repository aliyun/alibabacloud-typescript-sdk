// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backup ID
   * 
   * @example
   * backup-cad4a85ff5e340388b93
   */
  backupId?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8DC02957-A0FC-5AB2-8C54-496B636EAF12
   */
  requestId?: string;
  /**
   * @remarks
   * Backup status 
   * - Creating: In progress 
   * - Created: Success 
   * - CreateFailed: Failed 
   * - Deleting: In progress 
   * - Deleted: Success 
   * - DeleteFailed: Failed
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

