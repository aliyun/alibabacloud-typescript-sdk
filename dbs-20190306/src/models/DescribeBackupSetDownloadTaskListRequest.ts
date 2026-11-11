// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetDownloadTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * > You must specify either **BackupPlanId** or **BackupSetDownloadTaskId** as a required request parameter.
   * 
   * @example
   * dbsqhnuhyw3****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the backup set download task.
   * 
   * - Full backup: You can call the [CreateFullBackupSetDownload](https://help.aliyun.com/document_detail/2869842.html) operation to query the value of this parameter.
   * - Incremental backup: You can call the [CreateIncrementBackupSetDownload](https://help.aliyun.com/document_detail/2869843.html) operation to query the value of this parameter.
   * 
   * @example
   * urxgrxt7****
   */
  backupSetDownloadTaskId?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request and prevent duplicate submissions. You can enter any value.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzXXXXXX
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 0 and cannot exceed the maximum value of an integer. Default value: 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30, 50, and 100.
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

