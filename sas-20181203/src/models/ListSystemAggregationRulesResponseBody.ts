// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemAggregationRulesResponseBodyAggregationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule cluster.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule cluster.
   * 
   * @example
   * 远程控制****
   */
  name?: string;
  /**
   * @remarks
   * The number of rules in the cluster.
   * 
   * @example
   * 0
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAggregationRulesResponseBodyPageInfo extends $dara.Model {
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
   * The total number of entries.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListSystemAggregationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result list.
   */
  aggregationList?: ListSystemAggregationRulesResponseBodyAggregationList[];
  /**
   * @remarks
   * The pagination information of the query result.
   */
  pageInfo?: ListSystemAggregationRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 6800B790-B10A-5C2F-BEB3-F1D5CE61****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregationList: 'AggregationList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationList: { 'type': 'array', 'itemType': ListSystemAggregationRulesResponseBodyAggregationList },
      pageInfo: ListSystemAggregationRulesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregationList)) {
      $dara.Model.validateArray(this.aggregationList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

