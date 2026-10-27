// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveNodePoolNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove the nodes concurrently. Valid values:
   * 
   * - true: removes the nodes from the scaling group concurrently.
   * 
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
   * The list of instances to be removed.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * The list of nodes to be removed.
   * 
   * >Danger: This parameter is deprecated. Use instance_ids instead.</danger>
   * 
   * @deprecated
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the nodes. Valid values:
   * - true: releases the nodes.
   * - false: does not release the nodes.
   * 
   * @example
   * true
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      drainNode: 'drain_node',
      instanceIds: 'instance_ids',
      nodes: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'boolean',
      drainNode: 'boolean',
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

