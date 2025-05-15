// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBodyDataResultsWarningWorker extends $dara.Model {
  /**
   * @remarks
   * Whether there is an error
   * 
   * @example
   * true
   */
  errorFlag?: boolean;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 9
   */
  experimentId?: number;
  /**
   * @remarks
   * GPU name
   * 
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @remarks
   * Service address
   * 
   * @example
   * whza008403
   */
  hostname?: string;
  /**
   * @remarks
   * Pod name.
   * 
   * @example
   * fluxserv-6fc89b45cf-w8wq6
   */
  podName?: string;
  /**
   * @remarks
   * Throughput
   * 
   * @example
   * 15
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * TFLOPS value
   * 
   * @example
   * 14
   */
  tflops?: number;
  /**
   * @remarks
   * Whether there is an alarm
   * 
   * @example
   * true
   */
  warningFlag?: boolean;
  /**
   * @remarks
   * Alarm message
   * 
   * @example
   * warging message
   */
  warningMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      experimentId: 'ExperimentId',
      gpuName: 'GpuName',
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      podName: 'PodName',
      samplesPerSecond: 'SamplesPerSecond',
      tflops: 'Tflops',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorFlag: 'boolean',
      errorMsg: 'string',
      experimentId: 'number',
      gpuName: 'string',
      gpuNum: 'number',
      hostname: 'string',
      podName: 'string',
      samplesPerSecond: 'number',
      tflops: 'number',
      warningFlag: 'boolean',
      warningMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

