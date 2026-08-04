// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GPUInfo } from "./Gpuinfo";


export class GetResourceGroupTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 100
   */
  totalCPU?: number;
  /**
   * @remarks
   * The total number of GPU cores.
   * 
   * @example
   * 24
   */
  totalGPU?: number;
  /**
   * @remarks
   * The resources counted by GPU card type.
   */
  totalGPUInfos?: GPUInfo[];
  /**
   * @remarks
   * The total memory.
   * 
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

