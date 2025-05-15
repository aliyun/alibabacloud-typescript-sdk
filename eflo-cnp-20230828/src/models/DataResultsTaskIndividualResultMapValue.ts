// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResultsTaskIndividualResultMapValue extends $dara.Model {
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 54
   */
  experimentId?: number;
  /**
   * @remarks
   * Host IP
   * 
   * @example
   * p-jt-waf-app1
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
   * GPU数量
   * 
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @remarks
   * GPU名称
   * 
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
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
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * TFLOPS value
   * 
   * @example
   * 45
   */
  tflops?: number;
  /**
   * @remarks
   * Throughput
   * 
   * @example
   * 23
   */
  samplesPerSecond?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      hostname: 'Hostname',
      podName: 'PodName',
      gpuNum: 'GpuNum',
      gpuName: 'GpuName',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      tflops: 'Tflops',
      samplesPerSecond: 'SamplesPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
      hostname: 'string',
      podName: 'string',
      gpuNum: 'number',
      gpuName: 'string',
      warningFlag: 'boolean',
      warningMsg: 'string',
      errorFlag: 'boolean',
      errorMsg: 'string',
      tflops: 'number',
      samplesPerSecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

