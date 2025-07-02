// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceType extends $dara.Model {
  /**
   * @remarks
   * cpu架构。
   * 
   * @example
   * X86
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * vCPU内核数目。
   * 
   * @example
   * 4
   */
  cpuCore?: number;
  /**
   * @remarks
   * 实例规格分类。取值范围：
   * - General-purpose： 通用型。
   * - Compute-optimized：计算型。
   * - Memory-optimized：内存型。
   * - Big data：大数据型。
   * - Local SSDs ：本地SSD型。
   * - High Clock Speed ：高主频型。
   * - Enhanced ：增强型。
   * - Shared：共享型。
   * - Compute-optimized with GPU ：GPU计算型。
   * - Visual Compute-optimized ：视觉计算型。
   * - Heterogeneous Service ：异构服务型。
   * - Compute-optimized with FPGA ：FPGA计算型。
   * - Compute-optimized with NPU ：NPU计算型。
   * - ECS Bare Metal ：弹性裸金属服务器。
   * - Super Computing Cluster：超级计算集群。
   * 
   * @example
   * Compute-optimized
   */
  instanceCategory?: string;
  /**
   * @remarks
   * 实例规格。
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * 实例规格所属的实例规格族。取值请参见DescribeInstanceTypeFamilies。
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * 实例挂载的本地盘的数量。
   * 
   * @example
   * 8
   */
  localStorageAmount?: number;
  /**
   * @remarks
   * 实例挂载的本地盘的单盘容量。单位：GiB
   * 
   * @example
   * 40
   */
  localStorageCapacity?: number;
  /**
   * @remarks
   * 是否IO优化类型。
   * 
   * @example
   * true
   */
  optimized?: boolean;
  static names(): { [key: string]: string } {
    return {
      cpuArchitecture: 'CpuArchitecture',
      cpuCore: 'CpuCore',
      instanceCategory: 'InstanceCategory',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCapacity: 'LocalStorageCapacity',
      optimized: 'Optimized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArchitecture: 'string',
      cpuCore: 'number',
      instanceCategory: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      localStorageAmount: 'number',
      localStorageCapacity: 'number',
      optimized: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

