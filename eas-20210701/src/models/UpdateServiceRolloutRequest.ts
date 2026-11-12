// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRolloutRequestBatch extends $dara.Model {
  /**
   * @remarks
   * The batch size. The number of replicas to update in each batch. Integer or percentage formats are supported. Default value: `"25%"`.
   * 
   * @example
   * 25%
   */
  batchSize?: string;
  /**
   * @remarks
   * The batch interval. The wait time between two rollouts. Supported units: `s` (seconds), `m` (minutes), and `h` (hours).
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
   * **Partition**  
   * * Type: string
   * * Required: yes
   * * Description: The partition value. Two formats are supported:
   *   1. Integer format: such as "5", which indicates that 5 old replicas are retained.
   *   2. Percentage format: such as "50%", which indicates that 50% of the old replicas are retained.
   *   Adjustment strategies:
   *   - Increase the value: Roll back to the old version and increase the proportion of old replicas.
   *   - Decrease the value: Proceed to the new version and decrease the proportion of old replicas.
   *   - Set to "0%": Complete the full update and switch all replicas to the new version.
   * * Example: 30%
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
   * **Batch**  
   * * Type: object
   * * Required: no
   * * Description: The batch rollout configuration. Used to adjust batch policy parameters. Mutually exclusive with Partition.
   */
  batch?: UpdateServiceRolloutRequestBatch;
  /**
   * @remarks
   * **Partition**  
   * * Type: object
   * * Required: no
   * * Description: The partition rollout configuration. Used to adjust partition policy parameters. Mutually exclusive with Batch.
   */
  partition?: UpdateServiceRolloutRequestPartition;
  /**
   * @remarks
   * Specifies whether to pause the rollout. A value of `true` indicates that the rollout is paused. A value of `false` indicates that the rollout is resumed.
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

