// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNodePoolComponentInstanceRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  batchInterval?: number;
  /**
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @example
   * 1
   */
  maxParallelism?: number;
  /**
   * @example
   * ["cn-hangzhou.10.91.xx.xx"]
   */
  nodeNames?: string[];
  /**
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

