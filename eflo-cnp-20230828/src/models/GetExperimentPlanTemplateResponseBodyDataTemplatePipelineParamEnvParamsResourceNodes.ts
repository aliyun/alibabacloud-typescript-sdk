// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes extends $dara.Model {
  /**
   * @remarks
   * Node name
   * 
   * @example
   * exclusive_coud
   */
  nodeName?: string;
  /**
   * @remarks
   * 当前请求的cpu
   * 
   * @example
   * 10
   */
  requestCPU?: number;
  /**
   * @remarks
   * Requested GPU
   * 
   * @example
   * 10
   */
  requestGPU?: number;
  /**
   * @remarks
   * Requested memory
   * 
   * @example
   * 1024
   */
  requestMemory?: number;
  /**
   * @remarks
   * Total CPU
   * 
   * @example
   * 100
   */
  totalCPU?: number;
  /**
   * @remarks
   * Total GPU
   * 
   * @example
   * 100
   */
  totalGPU?: number;
  /**
   * @remarks
   * Total memory
   * 
   * @example
   * 2048
   */
  totalMemory?: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

