// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceRolloutResponseBodyRolloutStatus extends $dara.Model {
  /**
   * @example
   * service-abc123-v1
   */
  currentRevision?: string;
  /**
   * @example
   * 2026/05/08 16:10:56
   */
  nextBatchStartTime?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * 10
   */
  totalReplicas?: number;
  /**
   * @example
   * service-abc123-v2
   */
  updateRevision?: string;
  /**
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
   * @example
   * 1
   */
  batchSize?: string;
  /**
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
  batch?: DescribeServiceRolloutResponseBodyRolloutStrategyBatch;
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
  status?: DescribeServiceRolloutResponseBodyRolloutStatus;
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
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
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

