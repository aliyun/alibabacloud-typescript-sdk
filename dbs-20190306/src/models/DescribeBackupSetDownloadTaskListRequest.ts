// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetDownloadTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The backup schedule ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the ID.
   * 
   * >  You must configure the **BackupPlanId** or **BackupSetDownloadTaskId** parameter.
   * 
   * @example
   * dbsqhnuhyw3****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the backup set download task.
   * 
   * *   Full backup set download task: You can call the [CreateFullBackupSetDownload](https://help.aliyun.com/document_detail/2869842.html) operation to create a full backup set download task and obtain the task ID.
   * *   Incremental backup set download task: You can call the [CreateIncrementBackupSetDownload](https://help.aliyun.com/document_detail/2869843.html) operation to create an incremental backup set download task and obtain the task ID.
   * 
   * @example
   * urxgrxt7****
   */
  backupSetDownloadTaskId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzXXXXXX
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be a positive integer. Default value: 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 30, 50, and 100.
   * 
   * > Default value: 30.
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

