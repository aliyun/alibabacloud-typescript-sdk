// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResourceUsageResponseBodyDataJobResourceUsageList extends $dara.Model {
  /**
   * @remarks
   * The total number of used compute units (CUs).
   * 
   * @example
   * 1185100
   */
  cuUsage?: number;
  /**
   * @remarks
   * The start date of the query in the format of yyyy-MM-dd.
   * 
   * @example
   * 2023-05-09
   */
  date?: string;
  /**
   * @remarks
   * The job executor.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The total memory usage.
   * 
   * @example
   * 15169536
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The quota nickname.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      date: 'date',
      jobOwner: 'jobOwner',
      memoryUsage: 'memoryUsage',
      quotaNickname: 'quotaNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      date: 'string',
      jobOwner: 'string',
      memoryUsage: 'number',
      quotaNickname: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list returned.
   */
  jobResourceUsageList?: GetJobResourceUsageResponseBodyDataJobResourceUsageList[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobResourceUsageList: 'jobResourceUsageList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResourceUsageList: { 'type': 'array', 'itemType': GetJobResourceUsageResponseBodyDataJobResourceUsageList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobResourceUsageList)) {
      $dara.Model.validateArray(this.jobResourceUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetJobResourceUsageResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * 0A3B1E82006A23A918C70905BF08AEC7
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
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
   * 0b57ff7616612271051086500ea3ce
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
      data: GetJobResourceUsageResponseBodyData,
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

