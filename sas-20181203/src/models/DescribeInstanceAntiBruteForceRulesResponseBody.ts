// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of servers on which brute-force attacks defense rules take effect on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of servers on which brute-force attacks defense rules take effect.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the brute-force attacks defense rule.
   * 
   * @example
   * 215779601
   */
  id?: number;
  /**
   * @remarks
   * The name of the brute-force attacks defense rule.
   * 
   * @example
   * TestRule
   */
  name?: string;
  /**
   * @remarks
   * The UUID of the server on which the brute-force attacks defense rule takes effect.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * 97286A-4A6B-4A4-95FA-EC7E3E2451
   */
  requestId?: string;
  /**
   * @remarks
   * The list of servers on which brute-force attacks defense rules take effect.
   */
  rules?: DescribeInstanceAntiBruteForceRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeInstanceAntiBruteForceRulesResponseBodyRules },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

