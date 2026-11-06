// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveNodePoolNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove nodes concurrently. Valid values:
   * - true: Nodes are removed from the scaling group concurrently.
   * - false: Nodes are removed from the scaling group sequentially.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  concurrency?: boolean;
  /**
   * @remarks
   * Specifies whether to drain the nodes. Valid values:
   * - true: Drain the nodes.
   * - false: Do not drain the nodes.
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The drain timeout period in seconds. Valid values: (0, 1800]. Default value: 1800. This parameter takes effect only when drain_node is set to true.
   * 
   * @example
   * 600
   */
  drainTimeoutSeconds?: number;
  /**
   * @remarks
   * The list of instances to be removed.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * The list of nodes to be removed.
   * 
   * >Danger: This parameter is deprecated. Use `instance_ids` instead.</danger>
   * 
   * @deprecated
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether automatic release the nodes. Valid values:
   * - true: Release the nodes.
   * - false: Do not release the nodes.
   * 
   * Removing nodes does not automatically release subscription nodes. Automatic release subscription nodes, [change the billing method of the nodes from subscription to pay-as-you-go](https://www.alibabacloud.com/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1), and then log on to the ECS console automatic release them.
   * 
   * @example
   * true
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      drainNode: 'drain_node',
      drainTimeoutSeconds: 'drain_timeout_seconds',
      instanceIds: 'instance_ids',
      nodes: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'boolean',
      drainNode: 'boolean',
      drainTimeoutSeconds: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nodes: { 'type': 'array', 'itemType': 'string' },
      releaseNode: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

