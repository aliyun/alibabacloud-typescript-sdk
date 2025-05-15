// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes extends $dara.Model {
  /**
   * @remarks
   * Node Name
   * 
   * @example
   * honeypot
   */
  nodeName?: string;
  /**
   * @remarks
   * Requested CPU
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
   * Requested Memory
   * 
   * @example
   * 10
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
   * Total Memory
   * 
   * @example
   * 100
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

