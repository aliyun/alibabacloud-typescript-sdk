// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHALogsResponseBodyHaLogItems extends $dara.Model {
  /**
   * @remarks
   * The reason code of the failover.
   * 
   * @example
   * Platform.Ha.AuroraService.ManualOperations
   */
  switchCauseCode?: string;
  /**
   * @remarks
   * The reason of the failover.
   * 
   * @example
   * Platform.Ha.ManuallyTriggered
   */
  switchCauseDetail?: string;
  /**
   * @remarks
   * The time when the failover ended.
   * 
   * @example
   * 2025-05-20T03:09:56Z
   */
  switchFinishTime?: string;
  /**
   * @example
   * e571f897-9b3c-4012-9470-88333832dec4
   */
  switchId?: string;
  /**
   * @remarks
   * The time when the failover started.
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
   * @example
   * pc-a*************
   */
  DBInstanceName?: string;
  /**
   * @example
   * polardb_mysql_rw
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The failover logs.
   */
  haLogItems?: DescribeHALogsResponseBodyHaLogItems[];
  /**
   * @example
   * 1
   */
  haStatus?: number;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
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

