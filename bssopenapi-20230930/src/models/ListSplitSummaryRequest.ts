// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSplitSummaryRequestCommonFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field. It is required when setting conditions. For supported fields and matching rules, see the supplementary description of request parameters.
   * 
   * @example
   * SplitItemId
   */
  filterField?: string;
  /**
   * @remarks
   * The matching method. This parameter is case-insensitive and defaults to IN if it is not specified or is empty. Valid values:
   * - IN: includes
   * - NOT: excludes
   * - PREFIX: literal prefix match
   * For the supported scope of each field, refer to the supplementary description of the request parameters.
   * 
   * @example
   * IN
   */
  operation?: string;
  /**
   * @remarks
   * The filter values. It is always an array of strings. Arrays are also used for single values, Boolean values, and account IDs.
   * 
   * @example
   * ["example-bucket"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      filterField: 'FilterField',
      operation: 'Operation',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterField: 'string',
      operation: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSplitSummaryRequestCostCategoriesFilters extends $dara.Model {
  /**
   * @remarks
   * The cost category name. It cannot be empty or a string of only whitespace characters.
   * 
   * This parameter is required.
   * 
   * @example
   * business
   */
  costCategoriesKey?: string;
  /**
   * @remarks
   * The list of cost category values. Matches any given value under the specified cost category. If this parameter is not passed or an empty array is passed, it only requires the existence of the cost category.
   * 
   * @example
   * ["commerce"]
   */
  costCategoriesValues?: string[];
  static names(): { [key: string]: string } {
    return {
      costCategoriesKey: 'CostCategoriesKey',
      costCategoriesValues: 'CostCategoriesValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCategoriesKey: 'string',
      costCategoriesValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.costCategoriesValues)) {
      $dara.Model.validateArray(this.costCategoriesValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSplitSummaryRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of account IDs to access. If it is empty, all accounts under the current enterprise entity are selected. The actual scope is limited by permissions.
   * 
   * @example
   * [1234567890123456]
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * @example
   * 123456
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSplitSummaryRequestPeriod extends $dara.Model {
  /**
   * @remarks
   * The end time. It is inclusive. It is required for `DAILY` and the format is `yyyy-MM-dd`. It cannot be earlier than `StartTime` and must be in the same month as `StartTime`. It is optional for `MONTHLY`, but if passed, it must be the same as `StartTime`.
   * 
   * @example
   * 2026-09-07
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity. This parameter is required for business logic and is case-insensitive. Valid values:
   * - DAILY: aggregates by day
   * - MONTHLY: aggregates by month
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The start time. It is required for business logic and is inclusive. The format is yyyy-MM for MONTHLY and yyyy-MM-dd for DAILY.
   * 
   * @example
   * 2026-09-01
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      granularity: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSplitSummaryRequestTagFilters extends $dara.Model {
  /**
   * @remarks
   * The tag key. It cannot be empty or a string of only whitespace characters.
   * 
   * This parameter is required.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The list of tag values. Matches any given value under the specified tag key. If this parameter is not passed or an empty array is passed, it only requires the existence of the tag key.
   * 
   * @example
   * ["prod"]
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSplitSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The common filter conditions. Supports filtering by product, commodity, region, billing item, fee type, resource, account, financial unit, resource group, and split item. Different fields are combined by AND. Only one object can be passed for the same field. For more information, see the supplementary description of request parameters.
   * 
   * @example
   * [{"FilterField":"SplitItemId","Operation":"IN","Values":["example-bucket"]}]
   */
  commonFilters?: ListSplitSummaryRequestCommonFilters[];
  /**
   * @remarks
   * The cost category filter conditions. Different objects in the list and multiple values of the same cost category are matched by OR. The overall cost category filter is combined with the tag filter and CommonFilters by AND.
   * 
   * @example
   * [{"CostCategoriesKey":"business","CostCategoriesValues":["commerce"]}]
   */
  costCategoriesFilters?: ListSplitSummaryRequestCostCategoriesFilters[];
  /**
   * @remarks
   * The query scope for enterprises and accounts. If not passed, the bill scope of the current account is queried. Only one enterprise object can be specified per request. The actual accessible scope is limited by permissions.
   * 
   * @example
   * [{"EcId":"123456","AccountIds":[1234567890123456]}]
   */
  ecIdAccountIds?: ListSplitSummaryRequestEcIdAccountIds[];
  /**
   * @remarks
   * The maximum number of records expected to be returned per page. It is used in conjunction with `NextToken`. Pass a positive integer. We recommend that you explicitly set this parameter and keep it unchanged during pagination. The actual number of returned records may be less than this value.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of query results. Do not pass this parameter for the first query. For subsequent queries, pass the `NextToken` returned in the previous response as is. The query ends when the token is empty or no longer returned. Do not construct or parse the token yourself. Keep `Period`, account scope, all filter conditions, and `MaxResults` consistent during pagination.
   * 
   * @example
   * opaque-token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The query time range. It is required for business logic and includes Granularity, StartTime, and EndTime. Only one billing month can be queried per request. If passed, it overrides the legacy flat time parameters.
   * 
   * @example
   * {"Granularity":"DAILY","StartTime":"2026-09-01","EndTime":"2026-09-07"}
   */
  period?: ListSplitSummaryRequestPeriod;
  /**
   * @remarks
   * The resource tag filter conditions. Different objects in the list and multiple values of the same tag key are matched by OR. The overall tag filter is combined with the cost category filter and CommonFilters by AND.
   * 
   * @example
   * [{"TagKey":"env","TagValues":["prod"]}]
   */
  tagFilters?: ListSplitSummaryRequestTagFilters[];
  static names(): { [key: string]: string } {
    return {
      commonFilters: 'CommonFilters',
      costCategoriesFilters: 'CostCategoriesFilters',
      ecIdAccountIds: 'EcIdAccountIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      period: 'Period',
      tagFilters: 'TagFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFilters: { 'type': 'array', 'itemType': ListSplitSummaryRequestCommonFilters },
      costCategoriesFilters: { 'type': 'array', 'itemType': ListSplitSummaryRequestCostCategoriesFilters },
      ecIdAccountIds: { 'type': 'array', 'itemType': ListSplitSummaryRequestEcIdAccountIds },
      maxResults: 'number',
      nextToken: 'string',
      period: ListSplitSummaryRequestPeriod,
      tagFilters: { 'type': 'array', 'itemType': ListSplitSummaryRequestTagFilters },
    };
  }

  validate() {
    if(Array.isArray(this.commonFilters)) {
      $dara.Model.validateArray(this.commonFilters);
    }
    if(Array.isArray(this.costCategoriesFilters)) {
      $dara.Model.validateArray(this.costCategoriesFilters);
    }
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    if(Array.isArray(this.tagFilters)) {
      $dara.Model.validateArray(this.tagFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

