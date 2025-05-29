// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query details about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDTHH:mmZ` format.
   * 
   * > The end time must be later than the start time. The maximum time range that can be specified is seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metric that you want to query. Separate multiple values with commas (,). For more information, see [Performance parameters](https://help.aliyun.com/document_detail/86943.html).
   * 
   * This parameter is required.
   * 
   * @example
   * adbpg_conn_count
   */
  key?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **master**: coordinator node.
   * *   **segment**: compute node.
   * 
   * > If you do not specify this parameter, the performance metrics of all nodes are returned.
   * 
   * @example
   * master
   */
  nodeType?: string;
  /**
   * @remarks
   * The nodes for which you want to query performance metrics. Separate multiple values with commas (,). Example: `master-10******1,master-10******2`. You can call the [DescribeDBClusterNode](https://help.aliyun.com/document_detail/390136.html) operation to query the names of nodes.
   * 
   * You can also filter the nodes based on their metric values. Valid values:
   * 
   * *   **top10**: the 10 nodes that have the highest metric values.
   * *   **top20**: the 20 nodes that have the highest metric values.
   * *   **bottom10**: the 10 nodes that have the lowest metric values.
   * *   **bottom20**: the 20 nodes that have the lowest metric values.
   * 
   * @example
   * top10
   */
  nodes?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * testgroup
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDTHH:mmZ` format.
   * 
   * > You can query monitoring information only within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-03T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      nodeType: 'NodeType',
      nodes: 'Nodes',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      key: 'string',
      nodeType: 'string',
      nodes: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

