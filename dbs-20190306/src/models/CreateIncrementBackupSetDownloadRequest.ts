// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIncrementBackupSetDownloadRequest extends $dara.Model {
  /**
   * @remarks
   * The format in which the incremental backup set is downloaded. Valid values:
   * 
   * *   **Native**
   * *   **SQL**
   * *   **CSV**
   * *   **JSON**
   * 
   * > Default value: Native.
   * 
   * @example
   * Native
   */
  backupSetDataFormat?: string;
  /**
   * @remarks
   * The ID of the incremental backup task. To obtain the task ID, you can call the [DescribeIncrementBackupList](https://help.aliyun.com/document_detail/2869833.html) operation and view the value of the **BackupSetJobId** parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01e****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The ID of the incremental backup set. To obtain the backup set ID, you can call the [DescribeIncrementBackupList](https://help.aliyun.com/document_detail/2869833.html) operation and view the value of the **BackupSetId** parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  backupSetName?: string;
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
      backupSetName: 'BackupSetName',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDataFormat: 'string',
      backupSetId: 'string',
      backupSetName: 'string',
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

