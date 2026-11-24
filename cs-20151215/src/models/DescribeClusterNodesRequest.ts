// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of node instance IDs. Separate multiple values with commas (,).
   * 
   * @example
   * "i-bp11xjhwkj8k966u****,i-bp1dmhc2bu5igkyq****"
   */
  instanceIds?: string;
  /**
   * @remarks
   * The list of node IP addresses. Separate multiple values with commas (,). This parameter is used to filter nodes by IP address.
   * 
   * @example
   * 192.168.0.1
   */
  nodeIps?: string;
  /**
   * @remarks
   * The labels used to filter nodes. Specify the labels as key=value pairs separated by commas (,). Multiple labels are evaluated by using the logical AND operator. Only nodes that match all specified labels are returned.
   * 
   * @example
   * nodeLabels=app=nginx,env=prod
   */
  nodeLabels?: string;
  /**
   * @remarks
   * The list of node names. Separate multiple values with commas (,). This parameter is used to filter nodes by name.
   * 
   * @example
   * cn-hangzhou.192.168.0.1
   */
  nodeNames?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * npe25633140a7d4fbea56cd0479c******
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The page number of the current query.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100.
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The state of the cluster nodes. This parameter is used to filter nodes by their running state. Valid values:
   * - `all`: all nodes.
   * - `running`: running nodes.
   * - `removing`: nodes that are being removed.
   * - `initial`: nodes that are being initialized.
   * - `failed`: nodes that failed to be created.
   * Default value: `all`.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      nodeIps: 'nodeIps',
      nodeLabels: 'nodeLabels',
      nodeNames: 'nodeNames',
      nodepoolId: 'nodepool_id',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      nodeIps: 'string',
      nodeLabels: 'string',
      nodeNames: 'string',
      nodepoolId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

