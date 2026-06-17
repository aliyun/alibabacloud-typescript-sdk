// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHALogsResponseBodyHaLogItems extends $dara.Model {
  /**
   * @remarks
   * The cause code of the switchover.
   * 
   * @example
   * Platform.Ha.AuroraService.ManualOperations
   */
  switchCauseCode?: string;
  /**
   * @remarks
   * The cause of the switchover.
   * 
   * @example
   * Platform.Ha.ManuallyTriggered
   */
  switchCauseDetail?: string;
  /**
   * @remarks
   * The end time of the switchover.
   * 
   * @example
   * 2025-05-20T03:09:56Z
   */
  switchFinishTime?: string;
  /**
   * @remarks
   * The ID of the primary/secondary switchover log.
   * 
   * @example
   * e571f897-9b3c-4012-9470-88333832dec4
   */
  switchId?: string;
  /**
   * @remarks
   * The start time of the switchover.
   * 
   * @example
   * 2025-05-20T03:09:45Z
   */
  switchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      switchCauseCode: 'SwitchCauseCode',
      switchCauseDetail: 'SwitchCauseDetail',
      switchFinishTime: 'SwitchFinishTime',
      switchId: 'SwitchId',
      switchStartTime: 'SwitchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchCauseCode: 'string',
      switchCauseDetail: 'string',
      switchFinishTime: 'string',
      switchId: 'string',
      switchStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHALogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-a*************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **polardb_mysql_rw**: read-write instance.
   * - **polardb_mysql_ro**: read-only instance.
   * - **polardb_mysql_standby**: standby instance.
   * 
   * @example
   * polardb_mysql_rw
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The list of primary/secondary 这里 AI 机翻使用了 failover，但代码里用了 switch，建议保持一致，都改为 swichover logs.
   */
  haLogItems?: DescribeHALogsResponseBodyHaLogItems[];
  /**
   * @remarks
   * Indicates whether primary/secondary switchover records exist. Valid values:
   * 
   * - **1**: No
   * - **0**: Yes
   * 
   * @example
   * 1
   */
  haStatus?: number;
  /**
   * @remarks
   * The number of items in the log list on the current page.
   * 
   * @example
   * 10
   */
  itemsNumbers?: number;
  /**
   * @remarks
   * The page number. The value is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 30 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 160
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBInstanceType: 'DBInstanceType',
      haLogItems: 'HaLogItems',
      haStatus: 'HaStatus',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBInstanceType: 'string',
      haLogItems: { 'type': 'array', 'itemType': DescribeHALogsResponseBodyHaLogItems },
      haStatus: 'number',
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.haLogItems)) {
      $dara.Model.validateArray(this.haLogItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

