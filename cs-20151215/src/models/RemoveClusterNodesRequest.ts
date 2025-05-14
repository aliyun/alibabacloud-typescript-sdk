// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to evict all pods from the nodes that you want to remove.
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The list of nodes to be removed.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the Elastic Compute Service (ECS) instances when they are removed from the cluster.
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      drainNode: 'drain_node',
      nodes: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drainNode: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      releaseNode: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

