// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFullBackupSetDownloadRequest extends $dara.Model {
  /**
   * @remarks
   * The format of the downloaded full backup set. Valid values:
   * 
   * - **Native**
   * 
   * - **SQL**
   * 
   * - **CSV**
   * 
   * - **JSON**
   * 
   * > The default value is CSV.
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
   * dbs1hvXXXXX
   */
  backupSetId?: string;
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. This prevents the same request from being sent multiple times.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
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

