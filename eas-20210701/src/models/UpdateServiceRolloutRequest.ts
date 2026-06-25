// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRolloutRequestBatch extends $dara.Model {
  /**
   * @remarks
   * The number of replicas to update in each batch. This can be an integer or a percentage. The default is `"25%"`.
   * 
   * @example
   * 25%
   */
  batchSize?: string;
  /**
   * @remarks
   * The interval to wait between batches. Supported units include `s` (seconds), `m` (minutes), and `h` (hours).
   * 
   * @example
   * 60s
   */
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'string',
      interval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRolloutRequestPartition extends $dara.Model {
  /**
   * @remarks
   * **Partition value**
   * 
   * - Type: string
   * 
   * - Required: Yes
   * 
   * - Description: The partition value. This parameter specifies the number or percentage of old-version replicas to retain. It supports two formats:
   * 
   *   1. An integer, such as "5", for the number of replicas.
   * 
   *   2. A percentage, such as "50%", for the proportion of replicas.
   * 
   *   Adjustment strategy:
   * 
   *   - Increasing the value rolls back to the previous version by increasing the number of old-version replicas.
   * 
   *   - Decreasing the value continues the rollout by reducing the number of old-version replicas.
   * 
   *   - Setting the value to "0" or "0%" completes the rollout, replacing all old-version replicas.
   * 
   * - Example: 30%
   * 
   * @example
   * 30%
   */
  partition?: string;
  static names(): { [key: string]: string } {
    return {
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRolloutRequest extends $dara.Model {
  /**
   * @remarks
   * The batch rollout configuration. This parameter is mutually exclusive with `Partition`.
   * 
   * - Type: object
   * 
   * - Required: No
   * 
   * - Description: The batch rollout configuration for adjusting batch policy parameters. This parameter is mutually exclusive with Partition.
   */
  batch?: UpdateServiceRolloutRequestBatch;
  /**
   * @remarks
   * The partition rollout configuration. This parameter is mutually exclusive with `Batch`.
   * 
   * - Type: object
   * 
   * - Required: No
   * 
   * - Description: The partition rollout configuration. This parameter adjusts the parameters for the partition strategy. It is mutually exclusive with `Batch`.
   */
  partition?: UpdateServiceRolloutRequestPartition;
  /**
   * @remarks
   * Set to `true` to pause the rollout or `false` to resume it.
   * 
   * @example
   * true
   */
  paused?: boolean;
  static names(): { [key: string]: string } {
    return {
      batch: 'Batch',
      partition: 'Partition',
      paused: 'Paused',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batch: UpdateServiceRolloutRequestBatch,
      partition: UpdateServiceRolloutRequestPartition,
      paused: 'boolean',
    };
  }

  validate() {
    if(this.batch && typeof (this.batch as any).validate === 'function') {
      (this.batch as any).validate();
    }
    if(this.partition && typeof (this.partition as any).validate === 'function') {
      (this.partition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

