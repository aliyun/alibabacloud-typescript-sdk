// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSwitchLogResponseBodyLogItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the replica set instance or the ID of the node on which a primary/secondary switchover is performed.
   * 
   * @example
   * dds-uf68f1b5a57exxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The code that indicates the reason of a primary/secondary switchover. Valid values:
   * 
   * *   USER_CONSOLE_OPERATION: The switchover is manually performed.
   * *   OPERATION_AND_MAINTENANCE: Potential risks exist.
   * *   MACHINE_DOWNTIME: The host is offline.
   * *   PRIMARY_UNHEALTHY: An exception occurs on the primary node of the instance.
   * *   SECONDARY_UNHEALTHY: An exception occurs on the secondary node of the instance.
   * *   MULTIPLE_NODE_FAILURES: An exception occurs on multiple nodes of the instance.
   * 
   * @example
   * USER_CONSOLE_OPERATION
   */
  switchCode?: string;
  /**
   * @remarks
   * The switchover status. Valid values: **1** and **0**. The value 1 indicates a successful primary/secondary switchover and the value 0 indicates a failed primary/secondary switchover.
   * 
   * @example
   * 1
   */
  switchStatus?: string;
  /**
   * @remarks
   * The point in time when a primary/secondary switchover was performed. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
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
   * The primary/secondary switchover logs.
   */
  logItems?: DescribeDBInstanceSwitchLogResponseBodyLogItems[];
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * ECBCA991-XXXX-XXXX-834C-B3E8007F33AA
   */
  requestId?: string;
  /**
   * @remarks
   * The number of primary/secondary switching entries.
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

