// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllDBInstanceClassResponseBodyClassCodeList extends $dara.Model {
  /**
   * @remarks
   * The specification code.
   * 
   * @example
   * selectdb.xlarge
   */
  classCode?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  cpuCores?: number;
  /**
   * @remarks
   * The default cache size.
   * 
   * @example
   * 200
   */
  defaultStorageInGB?: number;
  /**
   * @remarks
   * The maximum cache size.
   * 
   * @example
   * 2000
   */
  maxStorageInGB?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 16
   */
  memoryInGB?: number;
  /**
   * @remarks
   * The minimum cache size.
   * 
   * @example
   * 100
   */
  minStorageInGB?: number;
  /**
   * @remarks
   * The cache step size.
   * 
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

export class DescribeAllDBInstanceClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance specifications.
   */
  classCodeList?: DescribeAllDBInstanceClassResponseBodyClassCodeList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      classCodeList: 'ClassCodeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCodeList: { 'type': 'array', 'itemType': DescribeAllDBInstanceClassResponseBodyClassCodeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.classCodeList)) {
      $dara.Model.validateArray(this.classCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

