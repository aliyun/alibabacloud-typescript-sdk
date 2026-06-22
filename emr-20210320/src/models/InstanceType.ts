// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceType extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * 
   * - `X86`: X86 architecture.
   * 
   * - `ARM`: ARM architecture.
   * 
   * @example
   * X86
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpuCore?: number;
  /**
   * @remarks
   * The instance category. Valid values:
   * 
   * - `General-purpose`: A general-purpose instance type.
   * 
   * - `Compute-optimized`: A compute-optimized instance type.
   * 
   * - `Memory-optimized`: A memory-optimized instance type.
   * 
   * - `Big data`: A big data instance type.
   * 
   * - `Local SSDs`: A local SSD instance type.
   * 
   * - `High Clock Speed`: A high clock speed instance type.
   * 
   * - `Enhanced`: An enhanced instance type.
   * 
   * - `Shared`: A shared instance type.
   * 
   * - `Compute-optimized with GPU`: A compute-optimized instance type with GPUs.
   * 
   * - `Visual Compute-optimized`: A visual compute-optimized instance type.
   * 
   * - `Heterogeneous Service`: A heterogeneous service instance type.
   * 
   * - `Compute-optimized with FPGA`: A compute-optimized instance type with FPGAs.
   * 
   * - `Compute-optimized with NPU`: A compute-optimized instance type with NPUs.
   * 
   * - `ECS Bare Metal`: An ECS Bare Metal instance.
   * 
   * - `Super Computing Cluster`: A supercomputing cluster instance type.
   * 
   * @example
   * Compute-optimized
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The ECS instance type. For more information, see [Instance type families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance type family. For valid values, see the ECS documentation for [DescribeInstanceTypeFamilies](https://help.aliyun.com/document_detail/25621.html).
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The number of local disks attached to the instance.
   * 
   * @example
   * 8
   */
  localStorageAmount?: number;
  /**
   * @remarks
   * The capacity of each local disk attached to the instance, in GiB.
   * 
   * @example
   * 40
   */
  localStorageCapacity?: number;
  modifyType?: string;
  /**
   * @remarks
   * Specifies whether the instance type is I/O optimized. Valid values:
   * 
   * - `true`: The instance type is I/O optimized.
   * 
   * - `false`: The instance type is not I/O optimized.
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
      modifyType: 'ModifyType',
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
      modifyType: 'string',
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

