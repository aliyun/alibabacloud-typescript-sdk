// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemAggregationRulesResponseBodyAggregationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the aggregation type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the aggregation type.
   * 
   * @example
   * Remote control\\*\\*\\*\\*
   */
  name?: string;
  /**
   * @remarks
   * The number of rules that are of the aggregation type.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * An array that consists of the details about the aggregation types.
   */
  aggregationList?: ListSystemAggregationRulesResponseBodyAggregationList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListSystemAggregationRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

