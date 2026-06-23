// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to automatically drain Pods on the node. Valid values:
   * - `true`: Automatically drain Pods on the node.
   * - `false`: Do not automatically drain Pods on the node.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  drainNode?: boolean;
  /**
   * @remarks
   * List of nodes to remove. The node names must be the names of the nodes in the cluster, for example: `cn-hangzhou.192.168.xx.xx`.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Whether to simultaneously remove ECS instances. Valid values:
   * 
   * - `true`: Simultaneously remove ECS instances.
   * - `false`: Retain ECS instances.
   * 
   * Default value: `false`.
   * 
   * > Simultaneous removal of ECS instances is not supported when the nodes are subscription instances.
   * 
   * @example
   * true
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

