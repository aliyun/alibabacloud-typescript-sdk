// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskLogListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Completion time, in milliseconds.
   * 
   * @example
   * 1753804800000
   */
  completionTime?: number;
  /**
   * @remarks
   * Task creation time.
   * 
   * @example
   * 1753804800000
   */
  createTime?: number;
  /**
   * @remarks
   * Log ID.
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * Remark.
   * 
   * @example
   * 备注
   */
  remark?: string;
  /**
   * @remarks
   * Scene name
   * 
   * @example
   * coupon_abuse_detection
   */
  sceneName?: string;
  /**
   * @remarks
   * Status.
   * 
   * 0: Deleted
   * 1: Normal
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * Task type
   * 
   * 1: Data upload
   * 2: Supplemental upload
   * 3: Labeling
   * 
   * @example
   * 1
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completionTime: 'completionTime',
      createTime: 'createTime',
      id: 'id',
      remark: 'remark',
      sceneName: 'sceneName',
      status: 'status',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTime: 'number',
      createTime: 'number',
      id: 'number',
      remark: 'string',
      sceneName: 'string',
      status: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskLogListResponseBody extends $dara.Model {
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
   * Number of items per page, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeTaskLogListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
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
      resultObject: { 'type': 'array', 'itemType': DescribeTaskLogListResponseBodyResultObject },
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

