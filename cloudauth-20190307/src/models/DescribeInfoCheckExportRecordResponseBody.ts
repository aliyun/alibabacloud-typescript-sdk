// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInfoCheckExportRecordResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 1758250979000
   */
  downloadDate?: string;
  /**
   * @example
   * 202510189017278
   */
  downloadTaskId?: string;
  /**
   * @example
   * -
   */
  errorCode?: string;
  fileName?: string;
  /**
   * @example
   * CSV
   */
  fileType?: string;
  productType?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth.oss-cn-shanghai.aliyuncs.com/console/xxxxxxxx.xlsx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      downloadDate: 'DownloadDate',
      downloadTaskId: 'DownloadTaskId',
      errorCode: 'ErrorCode',
      fileName: 'FileName',
      fileType: 'FileType',
      productType: 'ProductType',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadDate: 'string',
      downloadTaskId: 'string',
      errorCode: 'string',
      fileName: 'string',
      fileType: 'string',
      productType: 'string',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInfoCheckExportRecordResponseBody extends $dara.Model {
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
  items?: DescribeInfoCheckExportRecordResponseBodyItems[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      items: 'Items',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeInfoCheckExportRecordResponseBodyItems },
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

