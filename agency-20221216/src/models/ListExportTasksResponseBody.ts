// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExportTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-01 10:22:11
   */
  createTime?: string;
  /**
   * @example
   * 511376624869_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
  fileName?: string;
  /**
   * @example
   * 12355
   */
  id?: number;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * Export Success
   */
  status?: string;
  /**
   * @example
   * 3
   */
  statusCode?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: ListExportTasksResponseBodyData[];
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * asda1231as
   */
  requestId?: string;
  /**
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

