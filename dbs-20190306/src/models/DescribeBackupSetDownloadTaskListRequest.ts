// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetDownloadTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the value of this parameter.
   * 
   * > You must specify either **BackupPlanId** or **BackupSetDownloadTaskId**.
   * 
   * @example
   * dbsqhnuhyw3****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the backup set download task.
   * 
   * - For a full backup, call the [CreateFullBackupSetDownload](https://help.aliyun.com/document_detail/2869842.html) operation to obtain the value of this parameter.
   * 
   * - For an incremental backup, call the [CreateIncrementBackupSetDownload](https://help.aliyun.com/document_detail/2869843.html) operation to obtain the value of this parameter.
   * 
   * @example
   * urxgrxt7****
   */
  backupSetDownloadTaskId?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. This prevents duplicate requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzXXXXXX
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be a non-negative integer that does not exceed the maximum value of the integer type. The default value is 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 30, 50, and 100.
   * 
   * > The default value is 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetDownloadTaskId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

