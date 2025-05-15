// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBodyDataResultsTaskIndividualResultList extends $dara.Model {
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
   * 实验ID。
   * 
   * @example
   * 48
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
   * 节点主机名称。
   * 
   * @example
   * p-jt-waf-app1
   */
  hostname?: string;
  /**
   * @remarks
   * Pod名称。
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
   * 28
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * TFLOPS value
   * 
   * @example
   * 16
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

