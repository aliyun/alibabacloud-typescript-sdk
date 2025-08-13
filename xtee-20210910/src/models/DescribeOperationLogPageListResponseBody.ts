// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperationLogPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Client IP.
   * 
   * @example
   * 100.68.***.166
   */
  clientIp?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Content after operation
   * 
   * @example
   * @selfvariable_02
   */
  newContent?: string;
  /**
   * @remarks
   * Content before operation
   * 
   * @example
   * @selfvariable_02 + 1001
   */
  oldContent?: string;
  /**
   * @remarks
   * Operation summary
   * 
   * @example
   * 更新事件:决策引擎可观测性持续建设_事件A(de_afghcf6411)
   */
  operationSummary?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * CREATE_EVENT
   */
  operationType?: string;
  /**
   * @remarks
   * Operator
   * 
   * @example
   * root
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'clientIp',
      gmtCreate: 'gmtCreate',
      newContent: 'newContent',
      oldContent: 'oldContent',
      operationSummary: 'operationSummary',
      operationType: 'operationType',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      gmtCreate: 'number',
      newContent: 'string',
      oldContent: 'string',
      operationSummary: 'string',
      operationType: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperationLogPageListResponseBody extends $dara.Model {
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
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeOperationLogPageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 3
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
      resultObject: { 'type': 'array', 'itemType': DescribeOperationLogPageListResponseBodyResultObject },
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

