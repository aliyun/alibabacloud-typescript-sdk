// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResultDataResponseBodyDataMetricsInfos extends $dara.Model {
  /**
   * @remarks
   * GPU
   * 
   * @example
   * 8
   */
  gpuNum?: string;
  /**
   * @remarks
   * Iteration
   * 
   * @example
   * 100
   */
  iteration?: number;
  /**
   * @remarks
   * TFLOPS
   * 
   * @example
   * 43
   */
  tflops?: number;
  /**
   * @remarks
   * Operation Timestamp
   * 
   * @example
   * 1715393860
   */
  timestamp?: number;
  /**
   * @remarks
   * Metric Value
   * 
   * @example
   * 126
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      gpuNum: 'Gpu_num',
      iteration: 'Iteration',
      tflops: 'Tflops',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuNum: 'string',
      iteration: 'number',
      tflops: 'number',
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

