// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentsResponseBodyDataResultsWarningWorker extends $dara.Model {
  /**
   * @remarks
   * Whether there is an error
   * 
   * @example
   * false
   */
  errorFlag?: boolean;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * error msg
   */
  errorMsg?: string;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 113
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
   * 90
   */
  gpuNum?: number;
  /**
   * @remarks
   * Host IP
   * 
   * @example
   * 101.66.165.102
   */
  hostname?: string;
  /**
   * @remarks
   * Pod name
   * 
   * @example
   * hzs-forge-sdxl-online-7ff4d86444-pc95h
   */
  podName?: string;
  /**
   * @remarks
   * Throughput
   * 
   * @example
   * 53
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * TFLOPS value
   * 
   * @example
   * 43
   */
  tflops?: number;
  /**
   * @remarks
   * Whether there is an alarm
   * 
   * @example
   * false
   */
  warningFlag?: boolean;
  /**
   * @remarks
   * Alarm message
   * 
   * @example
   * warning msg
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

