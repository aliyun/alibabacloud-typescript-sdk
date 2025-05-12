// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBundlesResponseBodyBundlesDesktopTypeAttribute extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 10
   */
  cpuCount?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0.5
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 47104
   */
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      gpuCount: 'number',
      gpuSpec: 'string',
      memorySize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

