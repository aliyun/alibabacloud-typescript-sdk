// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskLogListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The completion time, in milliseconds.
   * 
   * @example
   * 1753804800000
   */
  completionTime?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1753804800000
   */
  createTime?: number;
  /**
   * @remarks
   * The log ID.
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 备注
   */
  remark?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * coupon_abuse_detection
   */
  sceneName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * 0: deleted
   * 1: Normal.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * 1: data upload
   * 2: supplementary upload
   * 3: labeling.
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
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeTaskLogListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
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

