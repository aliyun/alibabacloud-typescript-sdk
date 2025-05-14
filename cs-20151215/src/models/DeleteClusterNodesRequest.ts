// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all pods from the nodes that you want to remove. Valid values:
   * 
   * *   `true`: removes all pods from the nodes that you want to remove.
   * *   `false`: does not remove pods from the nodes that you want to remove.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The list of nodes to be removed. You need to specify the name of the nodes used in the cluster, for example, `cn-hangzhou.192.168.0.70`.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the Elastic Compute Service (ECS) instances. Valid values:
   * 
   * *   `true`: releases the ECS instances.
   * *   `false`: does not release the ECS instances.
   * 
   * Default value: `false`.
   * 
   * >  You cannot release subscription ECS instances.
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

