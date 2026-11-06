// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically drain pods from the nodes. Valid values:
   * - `true`: Automatically drains pods from the nodes.
   * - `false`: Does not automatically drain pods from the nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The drain timeout period in seconds. Valid values: (0, 1800]. If this parameter is not specified, the default value 1800 is used. This parameter takes effect only when drain_node is set to true.
   * 
   * @example
   * 600
   */
  drainTimeoutSeconds?: number;
  /**
   * @remarks
   * The list of nodes to remove. The node name must be the name of the node in the cluster, such as `cn-hangzhou.192.168.xx.xx`.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the associated ECS instances. Valid values:
   * 
   * - `true`: Releases the associated ECS instances.
   * - `false`: Retains the associated ECS instances.
   * 
   * Default value: `false`.
   * 
   * > When a node is a subscription instance, you cannot release the associated ECS instance.
   * 
   * @example
   * true
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      drainNode: 'drain_node',
      drainTimeoutSeconds: 'drain_timeout_seconds',
      nodes: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drainNode: 'boolean',
      drainTimeoutSeconds: 'number',
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

