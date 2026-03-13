// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GPUConfig extends $dara.Model {
  /**
   * @remarks
   * The GPU memory size. Unit: MB. The value is a multiple of 1024 MB.
   * 
   * @example
   * 2048
   */
  gpuMemorySize?: number;
  /**
   * @remarks
   * The type of GPU cards. Valid values: fc.gpu.tesla.1: Tesla T4 fc.gpu.ampere.1: Ampere A10
   * 
   * @example
   * fc.gpu.ampere.1
   */
  gpuType?: string;
  static names(): { [key: string]: string } {
    return {
      gpuMemorySize: 'gpuMemorySize',
      gpuType: 'gpuType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuMemorySize: 'number',
      gpuType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

