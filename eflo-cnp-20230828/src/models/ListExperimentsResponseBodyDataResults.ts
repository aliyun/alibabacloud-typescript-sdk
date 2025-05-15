// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentsResponseBodyDataResultsErrorWorker } from "./ListExperimentsResponseBodyDataResultsErrorWorker";
import { ListExperimentsResponseBodyDataResultsWarningWorker } from "./ListExperimentsResponseBodyDataResultsWarningWorker";


export class ListExperimentsResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * Error nodes
   */
  errorWorker?: ListExperimentsResponseBodyDataResultsErrorWorker[];
  /**
   * @remarks
   * Parameter name
   * 
   * @example
   * 440
   */
  experimentId?: number;
  /**
   * @remarks
   * MFU
   * 
   * @example
   * 34
   */
  mfu?: number;
  /**
   * @remarks
   * Samples per second
   * 
   * @example
   * 10
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * Seconds per iteration
   * 
   * @example
   * 89
   */
  secondsPerIteration?: number;
  /**
   * @remarks
   * Warning worker
   */
  warningWorker?: ListExperimentsResponseBodyDataResultsWarningWorker[];
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorWorker: 'ErrorWorker',
      experimentId: 'ExperimentId',
      mfu: 'Mfu',
      samplesPerSecond: 'SamplesPerSecond',
      secondsPerIteration: 'SecondsPerIteration',
      warningWorker: 'WarningWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorWorker: { 'type': 'array', 'itemType': ListExperimentsResponseBodyDataResultsErrorWorker },
      experimentId: 'number',
      mfu: 'number',
      samplesPerSecond: 'number',
      secondsPerIteration: 'number',
      warningWorker: { 'type': 'array', 'itemType': ListExperimentsResponseBodyDataResultsWarningWorker },
    };
  }

  validate() {
    if(Array.isArray(this.errorWorker)) {
      $dara.Model.validateArray(this.errorWorker);
    }
    if(Array.isArray(this.warningWorker)) {
      $dara.Model.validateArray(this.warningWorker);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

