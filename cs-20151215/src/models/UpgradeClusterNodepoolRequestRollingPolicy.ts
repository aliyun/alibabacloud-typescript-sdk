// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterNodepoolRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The update interval between batches takes effect only when the pause policy is set to NotPause. Unit: minutes. Valid values: 5 to 120.
   * 
   * @example
   * 5 minutes
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes per batch.
   * 
   * @example
   * 3
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The policy used to pause the update. Valid values:
   * 
   * *   FirstBatch: pauses after the first batch is updated.
   * *   EveryBatch: pauses after each batch is updated.
   * *   NotPause: does not pause.
   * 
   * @example
   * NotPause
   */
  pausePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'batch_interval',
      maxParallelism: 'max_parallelism',
      pausePolicy: 'pause_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
      maxParallelism: 'number',
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

