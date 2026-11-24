// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveNodePoolNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove nodes concurrently. Valid values:
   * - true: Nodes are concurrently removed from the scaling group.
   * - false: Nodes are sequentially removed from the scaling group.
   * Default value: false.
   * 
   * @example
   * false
   */
  concurrency?: boolean;
  /**
   * @remarks
   * Specifies whether to drain the nodes. Valid values:
   * - true: Drains the nodes.
   * - false: Does not drain the nodes.
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
  instanceIdsShrink?: string;
  /**
   * @remarks
   * **[Deprecated]** The list of removed nodes.
   * 
   * >Danger: This parameter is deprecated. Use instance_ids instead.</danger>
   * 
   * @deprecated
   */
  nodesShrink?: string;
  /**
   * @remarks
   * Specifies whether automatic release the nodes. Valid values:
   * - true: Releases the nodes.
   * - false: Does not release the nodes.
   * 
   * Removing nodes does not automatically release subscription nodes. Automatic release subscription nodes, [change the billing method of the nodes from subscription to pay-as-you-go](https://www.alibabacloud.com/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1) and then log on to the ECS console automatic release them.
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
      instanceIdsShrink: 'instance_ids',
      nodesShrink: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'boolean',
      drainNode: 'boolean',
      drainTimeoutSeconds: 'number',
      instanceIdsShrink: 'string',
      nodesShrink: 'string',
      releaseNode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

