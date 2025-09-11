// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterStorageLimitationResponseBodyDataClassCodeList extends $dara.Model {
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
   * 8
   */
  defaultStorageInGB?: number;
  /**
   * @example
   * 16
   */
  maxStorageInGB?: number;
  /**
   * @example
   * 16
   */
  memoryInGB?: number;
  /**
   * @example
   * 2
   */
  minStorageInGB?: number;
  /**
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
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  data?: DescribeDBClusterStorageLimitationResponseBodyData;
  /**
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
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

