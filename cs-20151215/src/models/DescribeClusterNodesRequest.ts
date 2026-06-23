// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs of nodes. Separate multiple IDs with commas (,).
   * 
   * @example
   * "i-bp11xjhwkj8k966u****,i-bp1dmhc2bu5igkyq****"
   */
  instanceIds?: string;
  /**
   * @example
   * 192.168.0.1
   */
  nodeIps?: string;
  /**
   * @example
   * nodeLabels=app=nginx,env=prod
   */
  nodeLabels?: string;
  /**
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
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of records that can be displayed on each page. Valid values: [1, 100].
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The status of cluster nodes. Used to filter by node running status. Valid values:
   * 
   * - `all`: does not filter by running status. All nodes are returned.
   * - `running`: running nodes.
   * - `removing`: nodes that are being removed.
   * - `initial`: nodes that are being initialized.
   * - `failed`: nodes that failed to be created.
   * 
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

