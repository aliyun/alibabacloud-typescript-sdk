// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all pods from the nodes you want to remove. Valid values:
   * 
   * *   `true`: removes all pods automatically.
   * *   `false`: skips removing pods.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The list of nodes to remove. You must specify the node names used in the cluster, for example, `cn-hangzhou.192.168.xx.xx`.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the ECS instances. Valid values:
   * 
   * *   `true`: releases the ECS instances.
   * *   `false`: retains the ECS instances.
   * 
   * Default value: `false`
   * 
   * **
   * 
   * **Notes** Unsupported for subscription ECS instances.
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

