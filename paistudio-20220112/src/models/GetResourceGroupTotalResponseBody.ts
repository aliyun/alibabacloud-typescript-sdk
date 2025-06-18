// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GPUInfo } from "./Gpuinfo";


export class GetResourceGroupTotalResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  totalCPU?: number;
  /**
   * @example
   * 24
   */
  totalGPU?: number;
  totalGPUInfos?: GPUInfo[];
  /**
   * @example
   * 300
   */
  totalMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalCPU: 'totalCPU',
      totalGPU: 'totalGPU',
      totalGPUInfos: 'totalGPUInfos',
      totalMemory: 'totalMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCPU: 'number',
      totalGPU: 'number',
      totalGPUInfos: { 'type': 'array', 'itemType': GPUInfo },
      totalMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.totalGPUInfos)) {
      $dara.Model.validateArray(this.totalGPUInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

