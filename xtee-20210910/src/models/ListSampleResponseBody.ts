// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSampleResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 202604016426_2_MOB_10W.csv
   */
  fileName?: string;
  /**
   * @example
   * 78
   */
  fileSize?: number;
  /**
   * @example
   * vpc-gw8hs2m7qiiy4onxnjf7x
   */
  remark?: string;
  /**
   * @example
   * 284
   */
  rowCount?: number;
  /**
   * @example
   * 7
   */
  sampleId?: number;
  /**
   * @example
   * TEst
   */
  sampleName?: string;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * 2023-04-09 12:45:23
   */
  uploadTime?: string;
  /**
   * @example
   * mest
   */
  uploadUserName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      remark: 'Remark',
      rowCount: 'RowCount',
      sampleId: 'SampleId',
      sampleName: 'SampleName',
      tab: 'Tab',
      uploadTime: 'UploadTime',
      uploadUserName: 'UploadUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      remark: 'string',
      rowCount: 'number',
      sampleId: 'number',
      sampleName: 'string',
      tab: 'string',
      uploadTime: 'string',
      uploadUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSampleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  resultObject?: ListSampleResponseBodyResultObject[];
  /**
   * @example
   * 0
   */
  totalItem?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      httpStatusCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': ListSampleResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

