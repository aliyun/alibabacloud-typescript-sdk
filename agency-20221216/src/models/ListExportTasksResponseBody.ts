// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExportTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-11-01 10:22:11
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 511376624869_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
  fileName?: string;
  /**
   * @remarks
   * The unique ID of the export task.
   * 
   * @example
   * 12355
   */
  id?: number;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The display status of the task.
   * 
   * @example
   * Export Success
   */
  status?: string;
  /**
   * @remarks
   * The status code of the task. Valid values:
   * - 2: Exporting.
   * - 3: Export successful.
   * - -1: Export failed.
   * 
   * @example
   * 3
   */
  statusCode?: string;
  /**
   * @remarks
   * The download URL of the file.
   * 
   * @example
   * //aliyun-eco-market-servic-singapore.oss-ap-southeast-1.aliyuncs.com/511376624869_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileName: 'FileName',
      id: 'Id',
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
      id: 'number',
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

export class ListExportTasksResponseBody extends $dara.Model {
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
   * The returned list.
   */
  data?: ListExportTasksResponseBodyData[];
  /**
   * @remarks
   * The description of the returned result.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
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
   * The ID of the request.
   * 
   * @example
   * asda1231as
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListExportTasksResponseBodyData },
      message: 'string',
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

