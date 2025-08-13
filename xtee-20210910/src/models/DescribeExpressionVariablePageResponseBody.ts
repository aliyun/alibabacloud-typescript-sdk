// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariablePageResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Primary key of custom variable
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * Variable return type
   * 
   * @example
   * DOUBLE
   */
  outputs?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 获取手机号前7位自定义变量
   */
  title?: string;
  /**
   * @remarks
   * Version information.
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
      outputs: 'outputs',
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
      outputs: 'string',
      status: 'string',
      title: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressionVariablePageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
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
   * Page size, with a default value of 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeExpressionVariablePageResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 31
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
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

