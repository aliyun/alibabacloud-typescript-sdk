// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveNodePoolNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to remove concurrently.
   * 
   * @example
   * false
   */
  concurrency?: boolean;
  /**
   * @remarks
   * Specifies whether to drain the nodes that you want to remove. Valid values:
   * 
   * *   true: drain the nodes that you want to remove.
   * *   false: do not drain the nodes that you want to remove.
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * A list of instances that you want to remove.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * A list of nodes that you want to remove.
   * 
   * >  This parameter is deprecated. Use instance_ids instead.
   * 
   * @deprecated
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the nodes after they are removed. Valid values:
   * 
   * *   true: release the nodes after they are removed.
   * *   false: do not release the nodes after they are removed.
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

