// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSupportInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs of the instance type.
   * 
   * @example
   * 1
   */
  cpuCoreCount?: number;
  /**
   * @remarks
   * DescribeImageSupportInstanceTypes
   * 
   * @example
   * ecs.t1
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * Queries the instance types supported by an image.
   * 
   * @example
   * ecs.t1.xsmall
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB.
   * 
   * @example
   * 1024
   */
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeId: 'InstanceTypeId',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      instanceTypeFamily: 'string',
      instanceTypeId: 'string',
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

