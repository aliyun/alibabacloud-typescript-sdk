// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNodePoolComponentInstanceShrinkRequest extends $dara.Model {
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
   * The maximum number of nodes that can fail during the rolling process. Default value: 0. A value of 0 indicates that the task fails if any node fails. A value greater than 0 indicates that the task fails and stops if the cumulative number of failed nodes exceeds this value.
   * 
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @remarks
   * The maximum number of parallel operations per batch. Default value: 1.
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
  nodeNamesShrink?: string;
  /**
   * @remarks
   * The auto-pause policy during a node upgrade. Valid values:
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
      nodeNamesShrink: 'node_names',
      pausePolicy: 'pause_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
      maxFailedNodes: 'number',
      maxParallelism: 'number',
      nodeNamesShrink: 'string',
      pausePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

