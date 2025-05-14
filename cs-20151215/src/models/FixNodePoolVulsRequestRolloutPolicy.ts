// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixNodePoolVulsRequestRolloutPolicy extends $dara.Model {
  /**
   * @remarks
   * The maximum concurrency for batch patching. Minimum value: 1. The maximum value equals the number of nodes in the node pool.
   * 
   * @example
   * 1
   */
  maxParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      maxParallelism: 'max_parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

