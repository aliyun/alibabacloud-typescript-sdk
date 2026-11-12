// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceRolloutResponseBodyRolloutStatus extends $dara.Model {
  /**
   * @remarks
   * The current revision. The identifier of the version that is currently running.
   * 
   * @example
   * service-abc123-v1
   */
  currentRevision?: string;
  /**
   * @remarks
   * The time when the next batch starts updating, in the format of YYYY/MM/DD HH:mm:ss.
   * 
   * @example
   * 2026/05/08 16:10:56
   */
  nextBatchStartTime?: string;
  /**
   * @remarks
   * The rollout phase. Valid values:
   * - Pending: Waiting to start the rollout.
   * - Running: The rollout is in progress.
   * - Paused: The rollout is paused.
   * - Completed: The rollout is completed.
   * - Failed: The rollout failed.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * The total number of replicas for the service.
   * 
   * @example
   * 10
   */
  totalReplicas?: number;
  /**
   * @remarks
   * The update revision. The identifier of the target version to which the service is being updated.
   * 
   * @example
   * service-abc123-v2
   */
  updateRevision?: string;
  /**
   * @remarks
   * The number of replicas that have been updated to the new version.
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
   * The batch size. The number or percentage of replicas to update in each batch.
   * 
   * @example
   * 1
   */
  batchSize?: string;
  /**
   * @remarks
   * The batch interval. The wait time between two consecutive rollout batches.
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
   * The partition value. Specifies the number or percentage of old replicas to retain. For example, \\"50%\\" indicates that 50% of the old replicas are retained.
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
   * The batch rollout configuration. This field is returned only if a batch-based rollout strategy is used.
   */
  batch?: DescribeServiceRolloutResponseBodyRolloutStrategyBatch;
  /**
   * @remarks
   * The partition rollout configuration. This field is returned only if a partition-based rollout strategy is used.
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
   * The rollout execution status. Contains the current rollout progress and phase information.
   */
  status?: DescribeServiceRolloutResponseBodyRolloutStatus;
  /**
   * @remarks
   * The rollout strategy configuration. Contains the specific configuration parameters for partition-based or batch-based rollout.
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
   * The request ID. A unique identifier returned with each request, used for troubleshooting and tracing.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The rollout strategy information. Contains the strategy configuration (Strategy) and execution status (Status).
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

