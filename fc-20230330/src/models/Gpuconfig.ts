// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GPUConfig extends $dara.Model {
  /**
   * @example
   * 2048
   */
  gpuMemorySize?: number;
  /**
   * @example
   * fc.gpu.tesla.1
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

