// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GPUInfo } from "./Gpuinfo";


export class GetResourceGroupRequestResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  requestCPU?: number;
  /**
   * @example
   * 8
   */
  requestGPU?: number;
  requestGPUInfos?: GPUInfo[];
  /**
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

