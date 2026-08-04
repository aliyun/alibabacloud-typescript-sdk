// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GPUInfo } from "./Gpuinfo";


export class GetResourceGroupRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of allocated CPUs.
   * 
   * @example
   * 1
   */
  requestCPU?: number;
  /**
   * @remarks
   * The total number of allocated GPUs.
   * 
   * @example
   * 8
   */
  requestGPU?: number;
  /**
   * @remarks
   * The allocated GPU resources counted separately by card type.
   */
  requestGPUInfos?: GPUInfo[];
  /**
   * @remarks
   * The total amount of allocated memory.
   * 
   * @example
   * 2
   */
  requestMemory?: number;
  static names(): { [key: string]: string } {
    return {
      requestCPU: 'requestCPU',
      requestGPU: 'requestGPU',
      requestGPUInfos: 'requestGPUInfos',
      requestMemory: 'requestMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCPU: 'number',
      requestGPU: 'number',
      requestGPUInfos: { 'type': 'array', 'itemType': GPUInfo },
      requestMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requestGPUInfos)) {
      $dara.Model.validateArray(this.requestGPUInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

