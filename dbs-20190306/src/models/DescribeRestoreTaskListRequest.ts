// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * @example
   * dbs1hvb0wwwXXXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 1570701361528
   */
  endTimestamp?: number;
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
   * The number of entries to return on each page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * > Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The restoration task ID. Separate multiple IDs with commas (,). You can call the [CreateRestoreTask](https://help.aliyun.com/document_detail/2869836.html) operation to obtain the ID.
   * 
   * >  Configure the BackupPlanId or RestoreTaskId parameter. If you configure the two parameters, an error is returned.
   * 
   * @example
   * s102h7rf5anq
   */
  restoreTaskId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
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

