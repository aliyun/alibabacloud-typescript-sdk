// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRolloutRequestBatch extends $dara.Model {
  /**
   * @example
   * 25%
   */
  batchSize?: string;
  /**
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
  batch?: UpdateServiceRolloutRequestBatch;
  partition?: UpdateServiceRolloutRequestPartition;
  /**
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

