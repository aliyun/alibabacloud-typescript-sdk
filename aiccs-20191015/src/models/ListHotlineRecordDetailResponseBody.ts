// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineRecordDetailResponseBodyResultDataData extends $dara.Model {
  /**
   * @remarks
   * The end time of the hotline call.
   * 
   * @example
   * 1614578410000
   */
  endTime?: number;
  /**
   * @remarks
   * The URL of the hotline call recording.
   * 
   * @example
   * http://xxx.xxxxx/xx.wav
   */
  ossUrl?: string;
  /**
   * @remarks
   * The customer service representative account.
   * 
   * @example
   * 123@123.com
   */
  servicerName?: string;
  /**
   * @remarks
   * The start time of the hotline call.
   * 
   * @example
   * 1614578400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ossUrl: 'OssUrl',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ossUrl: 'string',
      servicerName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The query result data.
   */
  data?: ListHotlineRecordDetailResponseBodyResultDataData[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  onePageSize?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 945
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListHotlineRecordDetailResponseBodyResultDataData },
      onePageSize: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   */
  resultData?: ListHotlineRecordDetailResponseBodyResultData;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultData: ListHotlineRecordDetailResponseBodyResultData,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultData && typeof (this.resultData as any).validate === 'function') {
      (this.resultData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

