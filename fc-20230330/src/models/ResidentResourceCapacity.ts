// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResidentResourceCapacity extends $dara.Model {
  /**
   * @remarks
   * GPU 卡型
   */
  gpuType?: string;
  /**
   * @remarks
   * CPU 总核数
   */
  totalCpuCores?: number;
  /**
   * @remarks
   * 总磁盘大小，单位 GB
   */
  totalDiskSize?: number;
  /**
   * @remarks
   * GPU总卡数
   */
  totalGpuCards?: number;
  /**
   * @remarks
   * 总显存大小，单位 GB
   */
  totalGpuMemorySize?: number;
  /**
   * @remarks
   * 总内存大小，单位 GB
   */
  totalMemorySize?: number;
  static names(): { [key: string]: string } {
    return {
      gpuType: 'gpuType',
      totalCpuCores: 'totalCpuCores',
      totalDiskSize: 'totalDiskSize',
      totalGpuCards: 'totalGpuCards',
      totalGpuMemorySize: 'totalGpuMemorySize',
      totalMemorySize: 'totalMemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuType: 'string',
      totalCpuCores: 'number',
      totalDiskSize: 'number',
      totalGpuCards: 'number',
      totalGpuMemorySize: 'number',
      totalMemorySize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

