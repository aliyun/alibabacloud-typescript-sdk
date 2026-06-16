// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The completion time. Unit: milliseconds.
   * 
   * @example
   * 1753804800000
   */
  completionTime?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1753804800000
   */
  createTime?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The total number of mark entries.
   * 
   * @example
   * 100
   */
  mark?: number;
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
   * 样本调度
   */
  sceneName?: string;
  /**
   * @remarks
   * The data status. Valid values:
   * - -1: Failed.
   * - 0: Deleted.
   * - 1: Pending.
   * - 2: Succeeded.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1102
   */
  taskLogId?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * - 1: data upload
   * - 2: supplementary upload
   * - 3: labeling.
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
      mark: 'mark',
      remark: 'remark',
      sceneName: 'sceneName',
      status: 'status',
      taskLogId: 'taskLogId',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTime: 'number',
      createTime: 'number',
      id: 'number',
      mark: 'number',
      remark: 'string',
      sceneName: 'string',
      status: 'string',
      taskLogId: 'number',
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

export class DescribeTaskListResponseBody extends $dara.Model {
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
  resultObject?: DescribeTaskListResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': DescribeTaskListResponseBodyResultObject },
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

