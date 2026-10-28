// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaListExportPagedResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in the YYYY-MM-DD HH:mm:ss format in the UTC+8 time zone.
   * 
   * @example
   * 2023-12-21 21:31:57 UTC+8
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 5113766248601929_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
  fileName?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The display status of the task.
   * 
   * @example
   * 3
   */
  status?: string;
  /**
   * @remarks
   * The status code of the task. Valid values:
   * - 2: Exporting.
   * - 3: Export succeeded.
   * - -1: Export failed.
   * 
   * @example
   * Export Success
   */
  statusCode?: string;
  /**
   * @remarks
   * The download URL of the file.
   * 
   * @example
   * //aliyun-eco-market-servic-singapore.oss-ap-southeast-1.aliyuncs.com/5113766248601929_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileName: 'FileName',
      message: 'Message',
      status: 'Status',
      statusCode: 'StatusCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileName: 'string',
      message: 'string',
      status: 'string',
      statusCode: 'string',
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

export class QuotaListExportPagedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the returned result. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of returned results.
   */
  data?: QuotaListExportPagedResponseBodyData[];
  /**
   * @remarks
   * The description of the returned result.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
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
   * The request ID.
   * 
   * @example
   * 210e876f16704666020714468dab35
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QuotaListExportPagedResponseBodyData },
      msg: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

