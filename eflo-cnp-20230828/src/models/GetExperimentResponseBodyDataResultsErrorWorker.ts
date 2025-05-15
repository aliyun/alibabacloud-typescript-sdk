// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBodyDataResultsErrorWorker extends $dara.Model {
  /**
   * @remarks
   * error flag
   * 
   * @example
   * true
   */
  errorFlag?: boolean;
  /**
   * @remarks
   * error message
   * 
   * @example
   * Connection reset
   */
  errorMsg?: string;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 97
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
   * 60.188.98.209
   */
  hostname?: string;
  /**
   * @remarks
   * Pod name.
   * 
   * @example
   * hzs-forge-sdxl-online-7ff4d86444-pc95h
   */
  podName?: string;
  /**
   * @remarks
   * Samples Per Second
   * 
   * @example
   * 23
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * TFLOPS
   * 
   * @example
   * 12
   */
  tflops?: number;
  /**
   * @remarks
   * Whether there is a warning
   * 
   * @example
   * false
   */
  warningFlag?: boolean;
  /**
   * @remarks
   * Warning message
   * 
   * @example
   * warning message
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

