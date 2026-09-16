// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInfoCheckExportRecordResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The download time. The value is a UNIX timestamp in milliseconds (ms), for example, 1758250979000.
   * 
   * @example
   * 1758250979000
   */
  downloadDate?: string;
  /**
   * @remarks
   * The ID of the download task.
   * 
   * @example
   * 202510189017278
   */
  downloadTaskId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * -
   */
  errorCode?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 手机号二要素统计202509013975081.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * The product type name. Valid values:
   * - **ID_CARD_2_META**: ID card two-element verification.
   * - **ID_PERIOD**: ID card validity period verification.
   * - **MOBILE_ONLINE_LENGTH**: Mobile number online duration.
   * - **MOBILE_ONLINE_STATUS**: Mobile number online status.
   * - **MOBILE_3_META_SIMPLE**: Mobile number three-element verification (simple edition).
   * - **MOBILE_3_META**: Mobile number three-element verification (detailed edition).
   * - **MOBILE_2_META**: Mobile number two-element verification.
   * - **BANK_CARD_N_META**: Bank card verification (detailed edition).
   * - **MOBILE_DETECT**: Number detection.
   * - **VEHICLE_N_META**: Vehicle element verification (enhanced edition).
   * - **VEHICLE_PENTA_INFO**: Vehicle five-element information recognition.
   * - **VEHICLE_LICENSE_INFO**: Vehicle information recognition.
   * - **VEHICLE_INSURE_DATE**: Vehicle insurance date query.
   * - **VEHICLE_CHECK**: Vehicle element verification.
   * 
   * @example
   * ID_CARD_2_META
   */
  productType?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **1**: File is being generated.
   * - **2**: File generation is complete.
   * - **3**: File generation failed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The task URL.
   * 
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
   * @remarks
   * The return code. A value of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * The result list.
   */
  items?: DescribeInfoCheckExportRecordResponseBodyItems[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
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
   * @remarks
   * Indicates whether the response is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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

