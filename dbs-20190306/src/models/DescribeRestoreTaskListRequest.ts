// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * > Specify either BackupPlanId or RestoreTaskId.
   * 
   * @example
   * dbs1hvb0wwwXXXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. This prevents duplicate requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 1570701361528
   */
  endTimestamp?: number;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 0 and not exceed the maximum value of the integer data type. Default value: 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * > Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the restore job. You can specify multiple IDs. Separate them with commas (,). Call the [CreateRestoreTask](https://help.aliyun.com/document_detail/2869836.html) operation to obtain this parameter.
   * 
   * > Specify either RestoreTaskId or BackupPlanId. An error occurs if you specify both parameters.
   * 
   * @example
   * s102h7rf5anq
   */
  restoreTaskId?: string;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 1570701361528
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      endTimestamp: 'EndTimestamp',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      restoreTaskId: 'RestoreTaskId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      endTimestamp: 'number',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      restoreTaskId: 'string',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

