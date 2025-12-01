// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFullBackupSetDownloadRequest extends $dara.Model {
  /**
   * @remarks
   * The format in which the full backup set is downloaded. Valid values:
   * 
   * *   **Native**
   * *   **SQL**
   * *   **CSV**(Default value)
   * *   **JSON**
   * 
   * @example
   * SQL
   */
  backupSetDataFormat?: string;
  /**
   * @remarks
   * The ID of the full backup set.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1hv****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetDataFormat: 'BackupSetDataFormat',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDataFormat: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

