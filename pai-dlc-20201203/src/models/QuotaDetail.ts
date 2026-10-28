// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GPUDetail } from "./Gpudetail";


export class QuotaDetail extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 5
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU details.
   */
  GPUDetails?: GPUDetail[];
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * Tesla-V100
   */
  GPUType?: string;
  /**
   * @remarks
   * The full name of the GPU type.
   * 
   * @example
   * nvidia.com/gpu
   */
  GPUTypeFullName?: string;
  /**
   * @remarks
   * The memory capacity.
   * 
   * @example
   * 10Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUDetails: 'GPUDetails',
      GPUType: 'GPUType',
      GPUTypeFullName: 'GPUTypeFullName',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUDetails: { 'type': 'array', 'itemType': GPUDetail },
      GPUType: 'string',
      GPUTypeFullName: 'string',
      memory: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.GPUDetails)) {
      $dara.Model.validateArray(this.GPUDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

