// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperationLogPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 100.68.***.166
   */
  clientIp?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The content after the operation.
   * 
   * @example
   * @selfvariable_02
   */
  newContent?: string;
  /**
   * @remarks
   * The content before the operation.
   * 
   * @example
   * @selfvariable_02 + 1001
   */
  oldContent?: string;
  /**
   * @remarks
   * The brief description of the operation.
   * 
   * @example
   * 更新事件:决策引擎可观测性持续建设_事件A(de_afghcf6411)
   */
  operationSummary?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * CREATE_EVENT
   */
  operationType?: string;
  /**
   * @remarks
   * The operator.
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
  resultObject?: DescribeOperationLogPageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
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

