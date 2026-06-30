// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The names of business categories associated with the rule.
   */
  businessCategoryNameList?: string[];
  /**
   * @remarks
   * Comments for the rule.
   * 
   * @example
   * 检测是否出现了禁用语
   */
  comments?: string;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2020-04-20T20:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 禁用语检测
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1234567
   */
  rid?: number;
  /**
   * @remarks
   * The rule category. Valid values:
   * 
   * - 1: Custom rule
   * 
   * - 0: System-provided rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The type value of the rule\\"s rule type.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The name of the rule\\"s rule type.
   * 
   * @example
   * 服务规范
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createTime: 'CreateTime',
      name: 'Name',
      rid: 'Rid',
      ruleType: 'RuleType',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      comments: 'string',
      createTime: 'string',
      name: 'string',
      rid: 'number',
      ruleType: 'number',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of 200 means success. Any other value means failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The rule list.
   */
  data?: ListRulesResponseBodyData[];
  /**
   * @remarks
   * Details about an error if the request failed. If the request succeeded, the value is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number of the rule list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F**
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. A value of true means success. A value of false or null means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListRulesResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
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

