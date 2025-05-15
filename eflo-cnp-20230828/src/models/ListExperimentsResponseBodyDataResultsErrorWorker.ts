// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentsResponseBodyDataResultsErrorWorker extends $dara.Model {
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
   * Error information
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
   * 176
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
   * Host IP
   * 
   * @example
   * etcd_cluster_c0n2
   */
  hostname?: string;
  /**
   * @remarks
   * Pod name
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
   * 65
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * TFLOPS value
   * 
   * @example
   * 42
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
   * Alarm information
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

