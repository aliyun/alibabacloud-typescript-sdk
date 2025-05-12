// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllDBInstanceClassResponseBodyClassCodeList extends $dara.Model {
  /**
   * @example
   * selectdb.xlarge
   */
  classCode?: string;
  /**
   * @example
   * 4
   */
  cpuCores?: number;
  /**
   * @example
   * 200
   */
  defaultStorageInGB?: number;
  /**
   * @example
   * 2000
   */
  maxStorageInGB?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 32
   */
  memoryInGB?: number;
  /**
   * @example
   * 100
   */
  minStorageInGB?: number;
  /**
   * @example
   * 100
   */
  stepStorageInGB?: number;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      cpuCores: 'CpuCores',
      defaultStorageInGB: 'DefaultStorageInGB',
      maxStorageInGB: 'MaxStorageInGB',
      memoryInGB: 'MemoryInGB',
      minStorageInGB: 'MinStorageInGB',
      stepStorageInGB: 'StepStorageInGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      cpuCores: 'number',
      defaultStorageInGB: 'number',
      maxStorageInGB: 'number',
      memoryInGB: 'number',
      minStorageInGB: 'number',
      stepStorageInGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

