// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthRulePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Console rule ID.
   * 
   * @example
   * 6715
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * MORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Policy primary key ID
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Memo
   * 
   * @example
   * 分析中心事件测试_策略01
   */
  memo?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 102059
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy version primary key ID
   * 
   * @example
   * 3823
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Version number
   * 
   * @example
   * 8
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      consoleRuleId: 'consoleRuleId',
      createType: 'createType',
      gmtModified: 'gmtModified',
      id: 'id',
      memo: 'memo',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleVersionId: 'ruleVersionId',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleRuleId: 'number',
      createType: 'string',
      gmtModified: 'number',
      id: 'number',
      memo: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleVersionId: 'number',
      status: 'string',
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

export class DescribeAuthRulePageListResponseBody extends $dara.Model {
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
  resultObject?: DescribeAuthRulePageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total items
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * Total pages
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
      resultObject: { 'type': 'array', 'itemType': DescribeAuthRulePageListResponseBodyResultObject },
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

