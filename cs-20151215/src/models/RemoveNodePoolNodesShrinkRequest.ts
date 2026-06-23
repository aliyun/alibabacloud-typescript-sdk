// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveNodePoolNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove nodes concurrently.
   * 
   * - true: Nodes are concurrently removed from the scaling group.
   * 
   * - false: Nodes are sequentially removed from the scaling group.
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
   * The list of instances to remove.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The list of nodes to remove.
   * 
   * >Danger: This parameter is deprecated. Use `instance_ids` instead.</danger>.
   * 
   * @deprecated
   */
  nodesShrink?: string;
  /**
   * @remarks
   * Specifies whether to release the nodes. Valid values:
   * - true: Release the nodes.
   * - false: Do not release the nodes.
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

