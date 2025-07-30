// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyData extends $dara.Model {
  businessCategoryNameList?: string[];
  comments?: string;
  /**
   * @example
   * 2020-04-20T20:10Z
   */
  createTime?: string;
  name?: string;
  /**
   * @example
   * 1234567
   */
  rid?: number;
  /**
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @example
   * 1
   */
  type?: number;
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 20
   */
  count?: number;
  data?: ListRulesResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F**
   */
  requestId?: string;
  /**
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

