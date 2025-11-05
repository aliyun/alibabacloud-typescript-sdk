// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaListExportPagedResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Create Time
   * 
   * @example
   * 2023-12-21 21:31:57 UTC+8
   */
  createTime?: string;
  /**
   * @remarks
   * File Name
   * 
   * @example
   * 5113766248601929_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
  fileName?: string;
  /**
   * @remarks
   * Notification Message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Display of Task Status
   * 
   * @example
   * 3
   */
  status?: string;
  /**
   * @remarks
   * Task Status Enum</br>
   * 2: Exporting</br>
   * 3: Export Success</br>
   * -1: Export Fail</br>
   * 
   * @example
   * Export Success
   */
  statusCode?: string;
  /**
   * @remarks
   * The link to download exported file.
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
   * Status code of returning result, 200 means success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Listed data of returning result
   */
  data?: QuotaListExportPagedResponseBodyData[];
  /**
   * @remarks
   * Description of returning result
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Record number on each page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the Request
   * 
   * @example
   * 210e876f16704666020714468dab35
   */
  requestId?: string;
  /**
   * @remarks
   * Total volume
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

