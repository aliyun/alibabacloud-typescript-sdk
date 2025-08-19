// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResidentResourceAllocation extends $dara.Model {
  /**
   * @remarks
   * 使用该资源池的函数名
   */
  functionName?: string;
  /**
   * @remarks
   * 实例数
   */
  instanceCount?: number;
  /**
   * @remarks
   * 函数的别名
   */
  qualifier?: string;
  /**
   * @remarks
   * CPU 占用总核数
   */
  totalCpuCores?: number;
  /**
   * @remarks
   * 占用磁盘大小，单位 GB
   */
  totalDiskSize?: number;
  /**
   * @remarks
   * 占用显存大小，单位 GB
   */
  totalGpuMemorySize?: number;
  /**
   * @remarks
   * 内存占用大小，单位 GB
   */
  totalMemorySize?: number;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      instanceCount: 'instanceCount',
      qualifier: 'qualifier',
      totalCpuCores: 'totalCpuCores',
      totalDiskSize: 'totalDiskSize',
      totalGpuMemorySize: 'totalGpuMemorySize',
      totalMemorySize: 'totalMemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      instanceCount: 'number',
      qualifier: 'string',
      totalCpuCores: 'number',
      totalDiskSize: 'number',
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

