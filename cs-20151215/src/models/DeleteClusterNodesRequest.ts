// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically drain the pods on the nodes. Valid values:
   * - `true`: Automatically drains the pods on the nodes.
   * - `false`: Does not automatically drain the pods on the nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The list of nodes to remove. The node name must be the name of the node in the cluster, such as `cn-hangzhou.192.168.xx.xx`.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the ECS instances at the same time. Valid values:
   * 
   * - `true`: Releases the ECS instances at the same time.
   * - `false`: Retains the ECS instances.
   * 
   * Default value: `false`.
   * 
   * > If the nodes are subscription instances, you cannot release the ECS instances at the same time.
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

