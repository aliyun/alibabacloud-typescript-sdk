// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSwitchLogResponseBodyLogItems extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance if the instance is a replica set instance, or instance ID of the switched node if the instance is a sharded cluster instance.
   * 
   * @example
   * If the instance is a replica set instance: dds-uf68f1b5a57exxxx.
   * If the instance is a sharded cluster instance: d-uf652b73f554xxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The cause code of the switchover. Valid values:
   * - USER_CONSOLE_OPERATION: manual operation
   * - OPERATION_AND_MAINTENANCE: potential risk
   * - MACHINE_DOWNTIME: host offline
   * - PRIMARY_UNHEALTHY: instance failures
   * - SECONDARY_UNHEALTHY: instance failures
   * - MULTIPLE_NODE_FAILURES: instance failures
   * 
   * @example
   * USER_CONSOLE_OPERATION
   */
  switchCode?: string;
  /**
   * @remarks
   * The switchover status. Valid values:
   * - **1**: The switchover is successful.
   * - **0**: The switchover failed.
   * 
   * @example
   * 1
   */
  switchStatus?: string;
  /**
   * @remarks
   * The switchover time. The time is in the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2023-02-07T18:00:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      switchCode: 'SwitchCode',
      switchStatus: 'SwitchStatus',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      switchCode: 'string',
      switchStatus: 'string',
      switchTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSwitchLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-uf68f1b5a57exxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of primary/secondary switchover logs.
   */
  logItems?: DescribeDBInstanceSwitchLogResponseBodyLogItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ECBCA991-XXXX-XXXX-834C-B3E8007F33AA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of primary/secondary switchover records returned in the query.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      logItems: 'LogItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      logItems: { 'type': 'array', 'itemType': DescribeDBInstanceSwitchLogResponseBodyLogItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logItems)) {
      $dara.Model.validateArray(this.logItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

