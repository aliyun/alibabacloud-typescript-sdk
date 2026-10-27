// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNodePoolComponentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The interval between batches, in seconds. Default value: 0.
   * 
   * @example
   * 10
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes that are allowed to fail during the rolling process. Default value: 0. A value of 0 indicates that the task fails if any node fails. A value greater than 0 indicates that the task fails and stops if the cumulative number of failed nodes exceeds this value.
   * 
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @remarks
   * The maximum number of parallel nodes per batch. Default value: 1.
   * 
   * @example
   * 1
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The list of nodes to rotate. Default value: all nodes.
   * 
   * @example
   * ["cn-hangzhou.10.91.xx.xx"]
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The auto-pause policy during the node upgrade process. Valid values:
   * - NotPause
   * - FirstBatch
   * - EveryBatch
   * 
   * Default value: NotPause.
   * 
   * @example
   * NotPause
   */
  pausePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'batch_interval',
      maxFailedNodes: 'max_failed_nodes',
      maxParallelism: 'max_parallelism',
      nodeNames: 'node_names',
      pausePolicy: 'pause_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
      maxFailedNodes: 'number',
      maxParallelism: 'number',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      pausePolicy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

