// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRolloutRequestBatch extends $dara.Model {
  /**
   * @remarks
   * The number of instances to update in each batch.
   * 
   * @example
   * 1
   */
  batchSize?: string;
  /**
   * @remarks
   * The wait interval after each batch completes.
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

export class CreateServiceRolloutRequestPartition extends $dara.Model {
  /**
   * @remarks
   * The number of instances to update to the new version.
   * 
   * @example
   * 1
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

export class CreateServiceRolloutRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the Batch strategy.
   */
  batch?: CreateServiceRolloutRequestBatch;
  /**
   * @remarks
   * The configuration for the Partition strategy.
   */
  partition?: CreateServiceRolloutRequestPartition;
  /**
   * @remarks
   * Specifies whether to pause the rollout.
   * 
   * @example
   * False
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
      batch: CreateServiceRolloutRequestBatch,
      partition: CreateServiceRolloutRequestPartition,
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

