// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBodyDataEnvParamsResourceNodes extends $dara.Model {
  /**
   * @remarks
   * Node name
   * 
   * @example
   * p-jt-waf-app1
   */
  nodeName?: string;
  /**
   * @remarks
   * Requested CPU
   * 
   * @example
   * 90
   */
  requestCPU?: number;
  /**
   * @remarks
   * Requested GPU
   * 
   * @example
   * 8
   */
  requestGPU?: number;
  /**
   * @remarks
   * Requested memory
   * 
   * @example
   * 500
   */
  requestMemory?: number;
  /**
   * @remarks
   * Total CPU
   * 
   * @example
   * 90
   */
  totalCPU?: number;
  /**
   * @remarks
   * Total GPU
   * 
   * @example
   * 8
   */
  totalGPU?: number;
  /**
   * @remarks
   * Total memory
   * 
   * @example
   * 500
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

