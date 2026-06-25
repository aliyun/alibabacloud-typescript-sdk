// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceRolloutResponseBodyRolloutStatus extends $dara.Model {
  /**
   * @remarks
   * The identifier for the currently running revision.
   * 
   * @example
   * service-abc123-v1
   */
  currentRevision?: string;
  /**
   * @remarks
   * The scheduled start time for the next batch.
   * 
   * @example
   * 2026/05/08 16:10:56
   */
  nextBatchStartTime?: string;
  /**
   * @remarks
   * The current release phase. Valid values:
   * 
   * - `Pending`: The rollout is waiting to start.
   * 
   * - `Running`: The rollout is in progress.
   * 
   * - `Paused`: The rollout is paused.
   * 
   * - `Completed`: The rollout is complete.
   * 
   * - `Failed`: The rollout has failed.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * The total number of desired replicas for the service.
   * 
   * @example
   * 10
   */
  totalReplicas?: number;
  /**
   * @remarks
   * The identifier for the target revision.
   * 
   * @example
   * service-abc123-v2
   */
  updateRevision?: string;
  /**
   * @remarks
   * The number of replicas updated to the new revision.
   * 
   * @example
   * 5
   */
  updatedReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      currentRevision: 'CurrentRevision',
      nextBatchStartTime: 'NextBatchStartTime',
      phase: 'Phase',
      totalReplicas: 'TotalReplicas',
      updateRevision: 'UpdateRevision',
      updatedReplicas: 'UpdatedReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRevision: 'string',
      nextBatchStartTime: 'string',
      phase: 'string',
      totalReplicas: 'number',
      updateRevision: 'string',
      updatedReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceRolloutResponseBodyRolloutStrategyBatch extends $dara.Model {
  /**
   * @remarks
   * The number or percentage of replicas to update in each batch.
   * 
   * @example
   * 1
   */
  batchSize?: string;
  /**
   * @remarks
   * The time to wait between batches.
   * 
   * @example
   * 5m
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

export class DescribeServiceRolloutResponseBodyRolloutStrategyPartition extends $dara.Model {
  /**
   * @remarks
   * Specifies the number or percentage of old replicas to keep. For example, a value of `50%` indicates that 50% of the old replicas are retained.
   * 
   * @example
   * 50%
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

export class DescribeServiceRolloutResponseBodyRolloutStrategy extends $dara.Model {
  /**
   * @remarks
   * The configuration for a batch release. This object is returned only when the batch release strategy is used.
   */
  batch?: DescribeServiceRolloutResponseBodyRolloutStrategyBatch;
  /**
   * @remarks
   * The configuration for a canary release. This object is returned only when the canary release strategy is used.
   */
  partition?: DescribeServiceRolloutResponseBodyRolloutStrategyPartition;
  static names(): { [key: string]: string } {
    return {
      batch: 'Batch',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batch: DescribeServiceRolloutResponseBodyRolloutStrategyBatch,
      partition: DescribeServiceRolloutResponseBodyRolloutStrategyPartition,
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

export class DescribeServiceRolloutResponseBodyRollout extends $dara.Model {
  /**
   * @remarks
   * The current progress and phase of the rollout.
   */
  status?: DescribeServiceRolloutResponseBodyRolloutStatus;
  /**
   * @remarks
   * The rollout strategy configuration. This object contains the parameters for a canary release or batch release.
   */
  strategy?: DescribeServiceRolloutResponseBodyRolloutStrategy;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: DescribeServiceRolloutResponseBodyRolloutStatus,
      strategy: DescribeServiceRolloutResponseBodyRolloutStrategy,
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceRolloutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This ID is unique to each request and is used for troubleshooting.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the service rollout, including the rollout strategy (`Strategy`) and execution status (`Status`).
   */
  rollout?: DescribeServiceRolloutResponseBodyRollout;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rollout: 'Rollout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rollout: DescribeServiceRolloutResponseBodyRollout,
    };
  }

  validate() {
    if(this.rollout && typeof (this.rollout as any).validate === 'function') {
      (this.rollout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

