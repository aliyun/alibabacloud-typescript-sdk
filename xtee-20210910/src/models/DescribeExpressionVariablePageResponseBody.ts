// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariablePageResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The primary key of the custom variable.
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * ex_OERlw0Zqfb23
   */
  name?: string;
  /**
   * @remarks
   * The variable return type.
   * 
   * @example
   * DOUBLE
   */
  outputs?: string;
  /**
   * @remarks
   * The rule ID of the associated policy.
   */
  ruleList?: string[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 获取手机号前7位自定义变量
   */
  title?: string;
  /**
   * @remarks
   * The version information.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      eventName: 'eventName',
      gmtModified: 'gmtModified',
      id: 'id',
      name: 'name',
      outputs: 'outputs',
      ruleList: 'ruleList',
      status: 'status',
      title: 'title',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventName: 'string',
      gmtModified: 'number',
      id: 'number',
      name: 'string',
      outputs: 'string',
      ruleList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      title: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressionVariablePageResponseBody extends $dara.Model {
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
  resultObject?: DescribeExpressionVariablePageResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 31
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 9
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
      resultObject: { 'type': 'array', 'itemType': DescribeExpressionVariablePageResponseBodyResultObject },
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

