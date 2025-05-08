// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpuCoreCount?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * This parameter is not needed temporarily.
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The name of the instance type.
   * 
   * @example
   * ens.xxx.small
   */
  instanceTypeName?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      instanceTypeId: 'InstanceTypeId',
      instanceTypeName: 'InstanceTypeName',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      instanceTypeId: 'string',
      instanceTypeName: 'string',
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

