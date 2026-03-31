// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList extends $dara.Model {
  /**
   * @example
   * 20250528
   */
  date?: string;
  /**
   * @example
   * 300
   */
  longTermStorage?: number;
  /**
   * @example
   * GB
   */
  longTermStorageUnit?: string;
  /**
   * @example
   * 200
   */
  lowFreqStorage?: number;
  /**
   * @example
   * GB
   */
  lowFreqStorageUnit?: string;
  /**
   * @example
   * max_testproject
   */
  projectName?: string;
  /**
   * @example
   * 0.011872406445069006
   */
  rate?: number;
  /**
   * @example
   * 0
   */
  recycleBinStorage?: number;
  /**
   * @example
   * B
   */
  recycleBinStorageUnit?: string;
  /**
   * @example
   * 500
   */
  standardStorage?: number;
  /**
   * @example
   * GB
   */
  standardStorageUnit?: string;
  /**
   * @example
   * 1749105045512
   */
  timestamp?: number;
  /**
   * @example
   * 1
   */
  totalStorage?: number;
  /**
   * @example
   * TB
   */
  totalStorageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      longTermStorage: 'longTermStorage',
      longTermStorageUnit: 'longTermStorageUnit',
      lowFreqStorage: 'lowFreqStorage',
      lowFreqStorageUnit: 'lowFreqStorageUnit',
      projectName: 'projectName',
      rate: 'rate',
      recycleBinStorage: 'recycleBinStorage',
      recycleBinStorageUnit: 'recycleBinStorageUnit',
      standardStorage: 'standardStorage',
      standardStorageUnit: 'standardStorageUnit',
      timestamp: 'timestamp',
      totalStorage: 'totalStorage',
      totalStorageUnit: 'totalStorageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      longTermStorage: 'number',
      longTermStorageUnit: 'string',
      lowFreqStorage: 'number',
      lowFreqStorageUnit: 'string',
      projectName: 'string',
      rate: 'number',
      recycleBinStorage: 'number',
      recycleBinStorageUnit: 'string',
      standardStorage: 'number',
      standardStorageUnit: 'string',
      timestamp: 'number',
      totalStorage: 'number',
      totalStorageUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageProjectsInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  storageProjectInfoList?: ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList[];
  /**
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storageProjectInfoList: 'storageProjectInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storageProjectInfoList: { 'type': 'array', 'itemType': ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storageProjectInfoList)) {
      $dara.Model.validateArray(this.storageProjectInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageProjectsInfoResponseBody extends $dara.Model {
  data?: ListStorageProjectsInfoResponseBodyData;
  /**
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 0bc3b4b016674434996033675e71ee
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListStorageProjectsInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
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

