// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPlansResponseBodySQLPlans extends $dara.Model {
  /**
   * @remarks
   * The average execution duration, in ms.
   * 
   * @example
   * 1
   */
  avgExecutionMS?: number;
  /**
   * @remarks
   * The average execution duration when the database uses this execution plan, in ms.
   * 
   * @example
   * 288
   */
  avgExecutionTimeMS?: number;
  /**
   * @remarks
   * The time when the plan was loaded for the first time, .
   * 
   * @example
   * 1641492303000
   */
  firstLoadTime?: number;
  /**
   * @remarks
   * The time when the plan was loaded for the first time, in UTC +0.
   * 
   * @example
   * 2022-01-06T18:05:03Z
   */
  firstLoadTimeUTCString?: string;
  /**
   * @remarks
   * The number of hits.
   * 
   * @example
   * 3
   */
  hitCount?: number;
  /**
   * @remarks
   * The major compaction version.
   * 
   * @example
   * 132
   */
  mergedVersion?: number;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * i-bp16niirq4zdmgvm****
   */
  nodeIp?: string;
  /**
   * @remarks
   * The outline data.
   */
  outlineData?: string;
  /**
   * @remarks
   * OutlineID.
   * 
   * @example
   * -1
   */
  outlineId?: number;
  /**
   * @remarks
   * The time when the plan was bound.
   * 
   * @example
   * 1641492303000
   */
  outlineTime?: number;
  /**
   * @remarks
   * The time when the plan was bound, in UTC +0.
   * 
   * @example
   * 2022-01-06T18:05:03Z
   */
  outlineTimeUTCString?: string;
  /**
   * @remarks
   * The complete execution plan of the SQL statement.
   * 
   * @example
   * PHY_TABLE_SCAN | bmsql_order_line | 40 ******
   */
  planFull?: string;
  /**
   * @remarks
   * The ID of the SQL execution plan in the database.
   * 
   * @example
   * 9114
   */
  planId?: number;
  /**
   * @remarks
   * The information about the plan.
   * 
   * @example
   * PHY_TABLE_SCAN
   */
  planInfo?: string;
  /**
   * @remarks
   * The unique identifier of the SQL execution plan in the diagnostic system.
   * 
   * @example
   * 859ef7ee****b23ac98cdeb2476f****
   */
  planUnionHash?: string;
  /**
   * @remarks
   * The query SQL statement.
   * 
   * @example
   * SELECT ol_i_id, ***, *** FROM aaa
   */
  querySQL?: string;
  static names(): { [key: string]: string } {
    return {
      avgExecutionMS: 'AvgExecutionMS',
      avgExecutionTimeMS: 'AvgExecutionTimeMS',
      firstLoadTime: 'FirstLoadTime',
      firstLoadTimeUTCString: 'FirstLoadTimeUTCString',
      hitCount: 'HitCount',
      mergedVersion: 'MergedVersion',
      nodeIp: 'NodeIp',
      outlineData: 'OutlineData',
      outlineId: 'OutlineId',
      outlineTime: 'OutlineTime',
      outlineTimeUTCString: 'OutlineTimeUTCString',
      planFull: 'PlanFull',
      planId: 'PlanId',
      planInfo: 'PlanInfo',
      planUnionHash: 'PlanUnionHash',
      querySQL: 'QuerySQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgExecutionMS: 'number',
      avgExecutionTimeMS: 'number',
      firstLoadTime: 'number',
      firstLoadTimeUTCString: 'string',
      hitCount: 'number',
      mergedVersion: 'number',
      nodeIp: 'string',
      outlineData: 'string',
      outlineId: 'number',
      outlineTime: 'number',
      outlineTimeUTCString: 'string',
      planFull: 'string',
      planId: 'number',
      planInfo: 'string',
      planUnionHash: 'string',
      querySQL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

