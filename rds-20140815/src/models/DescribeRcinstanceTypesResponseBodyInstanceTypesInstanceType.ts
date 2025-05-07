// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores.
   * 
   * @example
   * 32
   */
  cpuCoreCount?: number;
  /**
   * @remarks
   * The ID of the instance family.
   * 
   * @example
   * gn8.cm
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * rds.gna8.2xlarge.8cm
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB.
   * 
   * @example
   * 256
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

