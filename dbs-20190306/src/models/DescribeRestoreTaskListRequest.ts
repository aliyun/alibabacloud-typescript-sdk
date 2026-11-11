// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * > You must specify either this parameter or `RestoreTaskId`.
   * 
   * @example
   * dbs1hvb0wwwXXXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The end of the time range to query restore tasks. Specify the time in the UNIX timestamp format. The timestamp is a millisecond-level timestamp.
   * 
   * @example
   * 1570701361528
   */
  endTimestamp?: number;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * > The default value is 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the restore task. You can specify multiple IDs, separated by commas. You can call the [CreateRestoreTask](https://help.aliyun.com/document_detail/2869836.html) operation to obtain the restore task ID.
   * 
   * > You must specify either this parameter or `BackupPlanId`. Specifying both parameters returns an error.
   * 
   * @example
   * s102h7rf5anq
   */
  restoreTaskId?: string;
  /**
   * @remarks
   * The beginning of the time range to query restore tasks. Specify the time in the UNIX timestamp format. The timestamp is a millisecond-level timestamp.
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

