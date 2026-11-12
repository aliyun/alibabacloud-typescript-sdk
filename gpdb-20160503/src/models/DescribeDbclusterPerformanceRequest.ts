// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specified region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the `YYYY-MM-DDTHH:mmZ` format.
   * 
   * > The end time must be later than the start time, and the time interval between the start time and the end time cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The names of the performance metrics. Separate multiple metrics with commas (,). For more information, see [Performance metric table](https://help.aliyun.com/document_detail/86943.html).
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
   * - **master**: Master node.
   * - **segment**: Segment node.
   * 
   * > If you do not specify this parameter, the monitoring metrics of all nodes are returned.
   * 
   * @example
   * master
   */
  nodeType?: string;
  /**
   * @remarks
   * The names of the nodes for which you want to query monitoring metrics. Separate multiple node names with commas (,), such as `master-10******1,master-10******2`. You can call the [DescribeDBClusterNode](https://help.aliyun.com/document_detail/390136.html) operation to obtain the node names.
   * 
   * You can also filter nodes based on the values of monitoring metrics. Valid values:
   * - **top10**: The top 10 nodes with the highest monitoring metric values.
   * - **top20**: The top 20 nodes with the highest monitoring metric values.
   * - **bottom10**: The bottom 10 nodes with the lowest monitoring metric values.
   * - **bottom20**: The bottom 20 nodes with the lowest monitoring metric values.
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
   * The start time of the query. Specify the time in the `YYYY-MM-DDTHH:mmZ` format.
   * 
   * > You can query monitoring information only for the last 30 days.
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

