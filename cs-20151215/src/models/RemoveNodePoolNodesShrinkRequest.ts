// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveNodePoolNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove the nodes concurrently. Valid values:
   * 
   * - true: removes the nodes from the scaling group concurrently.
   * - false: removes the nodes from the scaling group sequentially.
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
   * - true: drains the nodes.
   * - false: does not drain the nodes.
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The list of instances to remove.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * The list of nodes to remove.
   * 
   * >Danger: This parameter is deprecated. Use `instance_ids` instead.</danger>
   * 
   * @deprecated
   */
  nodesShrink?: string;
  /**
   * @remarks
   * Specifies whether automatic release the nodes. Valid values:
   * - true: releases the nodes.
   * - false: does not release the nodes.
   * 
   * Subscription nodes are not automatically released when you remove them. Automatic release subscription nodes, [change the billing method of the nodes from subscription to pay-as-you-go](https://www.alibabacloud.com/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1) and then release them in the ECS console.
   * 
   * @example
   * true
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      drainNode: 'drain_node',
      instanceIdsShrink: 'instance_ids',
      nodesShrink: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'boolean',
      drainNode: 'boolean',
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

