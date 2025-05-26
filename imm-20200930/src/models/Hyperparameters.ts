// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomParams } from "./CustomParams";
import { Optimization } from "./Optimization";
import { Schedule } from "./Schedule";


export class Hyperparameters extends $dara.Model {
  /**
   * @example
   * 1
   */
  backupInterval?: number;
  /**
   * @example
   * 32
   */
  batchSize?: number;
  /**
   * @example
   * 4
   */
  dataLoaderWorkers?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  evaluator?: CustomParams;
  /**
   * @remarks
   * This parameter is required.
   */
  inputSize?: number[];
  /**
   * @example
   * 10
   */
  maxEpoch?: number;
  optimization?: Optimization;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      backupInterval: 'BackupInterval',
      batchSize: 'BatchSize',
      dataLoaderWorkers: 'DataLoaderWorkers',
      evaluator: 'Evaluator',
      inputSize: 'InputSize',
      maxEpoch: 'MaxEpoch',
      optimization: 'Optimization',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInterval: 'number',
      batchSize: 'number',
      dataLoaderWorkers: 'number',
      evaluator: CustomParams,
      inputSize: { 'type': 'array', 'itemType': 'number' },
      maxEpoch: 'number',
      optimization: Optimization,
      schedule: Schedule,
    };
  }

  validate() {
    if(this.evaluator && typeof (this.evaluator as any).validate === 'function') {
      (this.evaluator as any).validate();
    }
    if(Array.isArray(this.inputSize)) {
      $dara.Model.validateArray(this.inputSize);
    }
    if(this.optimization && typeof (this.optimization as any).validate === 'function') {
      (this.optimization as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

