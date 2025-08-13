// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePocTaskListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1753804800000
   */
  createTime?: string;
  /**
   * @remarks
   * Download URL.
   * 
   * @example
   * https://xxxxx-oss-xxxxx.xxxxxx.aliyuncs.com/xx/xx/xxx/xxxxxx.csv?Expires=1753433384&OSSAccessKeyId=xxxxxxxxx&Signature=%2F%xxxxxxxxxxxx%3D
   */
  downloadUrl?: string;
  /**
   * @remarks
   * File type.
   * 
   * @example
   * EXCEL
   */
  fileType?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * 注册风险识别
   */
  serviceName?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * WAIT_CHECK
   */
  status?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 7
   */
  taskId?: string;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * 任务
   */
  taskName?: string;
  /**
   * @remarks
   * Last modified time.
   * 
   * @example
   * 1753804800000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      downloadUrl: 'downloadUrl',
      fileType: 'fileType',
      serviceName: 'serviceName',
      status: 'status',
      taskId: 'taskId',
      taskName: 'taskName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      fileType: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePocTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribePocTaskListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribePocTaskListResponseBodyResultObject },
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

