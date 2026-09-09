// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList extends $dara.Model {
  /**
   * @remarks
   * The statistics collection date. The date is accurate to the day. The date must be in the `YYYYMMdd` format.
   * 
   * @example
   * 20250528
   */
  date?: string;
  /**
   * @remarks
   * The Long Term storage usage.
   * 
   * @example
   * 300
   */
  longTermStorage?: number;
  /**
   * @remarks
   * The unit of the Long Term storage usage.
   * 
   * @example
   * GB
   */
  longTermStorageUnit?: string;
  /**
   * @remarks
   * The IA storage class usage.
   * 
   * @example
   * 200
   */
  lowFreqStorage?: number;
  /**
   * @remarks
   * The unit of the IA storage class usage.
   * 
   * @example
   * GB
   */
  lowFreqStorageUnit?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * max_testproject
   */
  projectName?: string;
  /**
   * @remarks
   * The year-over-year change rate of the total storage usage in the last {$recentDays} days.
   * 
   * @example
   * 0.011872406445069006
   */
  rate?: number;
  /**
   * @remarks
   * The recycle bin storage usage.
   * 
   * @example
   * 0
   */
  recycleBinStorage?: number;
  /**
   * @remarks
   * The unit of the recycle bin storage usage.
   * 
   * @example
   * B
   */
  recycleBinStorageUnit?: string;
  /**
   * @remarks
   * The Standard storage usage.
   * 
   * @example
   * 500
   */
  standardStorage?: number;
  /**
   * @remarks
   * The unit of the Standard storage usage.
   * 
   * @example
   * GB
   */
  standardStorageUnit?: string;
  /**
   * @remarks
   * The timestamp of the last data update.
   * 
   * @example
   * 1749105045512
   */
  timestamp?: number;
  /**
   * @remarks
   * The total storage usage.
   * 
   * @example
   * 1
   */
  totalStorage?: number;
  /**
   * @remarks
   * The unit of the total storage usage.
   * 
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
   * @remarks
   * The statistics collection date.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of project-level storage information.
   */
  storageProjectInfoList?: ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
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
  /**
   * @remarks
   * The data.
   */
  data?: ListStorageProjectsInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: an informational response. The request has been received and is being processed.
   * 
   * - 2xx: a success response. The request has been successfully received, understood, and accepted by the server.
   * 
   * - 3xx: a redirection response. The request is redirected. You must take further action to complete the request.
   * 
   * - 4xx: a client error. The request contains invalid request parameters or syntax, or cannot be fulfilled.
   * 
   * - 5xx: a server error. The server fails to fulfill the request for other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
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

