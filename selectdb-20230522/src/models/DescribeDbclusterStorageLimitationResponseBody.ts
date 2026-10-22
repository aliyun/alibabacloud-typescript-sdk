// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterStorageLimitationResponseBodyDataClassCodeList extends $dara.Model {
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
   * The default cache size. Unit: GB.
   * 
   * @example
   * 8
   */
  defaultStorageInGB?: number;
  /**
   * @remarks
   * The maximum cache size. Unit: GB.
   * 
   * @example
   * 16
   */
  maxStorageInGB?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 16
   */
  memoryInGB?: number;
  /**
   * @remarks
   * The minimum cache size. Unit: GB.
   * 
   * @example
   * 2
   */
  minStorageInGB?: number;
  /**
   * @remarks
   * The cache step size. Unit: GB.
   * 
   * @example
   * 1
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

export class DescribeDBClusterStorageLimitationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of cache specifications.
   */
  classCodeList?: DescribeDBClusterStorageLimitationResponseBodyDataClassCodeList[];
  static names(): { [key: string]: string } {
    return {
      classCodeList: 'ClassCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCodeList: { 'type': 'array', 'itemType': DescribeDBClusterStorageLimitationResponseBodyDataClassCodeList },
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

export class DescribeDBClusterStorageLimitationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only when RAM authentication fails.
   * 
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeDBClusterStorageLimitationResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
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
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeDBClusterStorageLimitationResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

