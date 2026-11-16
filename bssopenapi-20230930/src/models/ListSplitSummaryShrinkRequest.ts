// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSplitSummaryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The common filter conditions. Supports filtering by product, commodity, region, billing item, fee type, resource, account, financial unit, resource group, and split item. Different fields are combined by AND. Only one object can be passed for the same field. For more information, see the supplementary description of request parameters.
   * 
   * @example
   * [{"FilterField":"SplitItemId","Operation":"IN","Values":["example-bucket"]}]
   */
  commonFiltersShrink?: string;
  /**
   * @remarks
   * The cost category filter conditions. Different objects in the list and multiple values of the same cost category are matched by OR. The overall cost category filter is combined with the tag filter and CommonFilters by AND.
   * 
   * @example
   * [{"CostCategoriesKey":"business","CostCategoriesValues":["commerce"]}]
   */
  costCategoriesFiltersShrink?: string;
  /**
   * @remarks
   * The query scope for enterprises and accounts. If not passed, the bill scope of the current account is queried. Only one enterprise object can be specified per request. The actual accessible scope is limited by permissions.
   * 
   * @example
   * [{"EcId":"123456","AccountIds":[1234567890123456]}]
   */
  ecIdAccountIdsShrink?: string;
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
  periodShrink?: string;
  /**
   * @remarks
   * The resource tag filter conditions. Different objects in the list and multiple values of the same tag key are matched by OR. The overall tag filter is combined with the cost category filter and CommonFilters by AND.
   * 
   * @example
   * [{"TagKey":"env","TagValues":["prod"]}]
   */
  tagFiltersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonFiltersShrink: 'CommonFilters',
      costCategoriesFiltersShrink: 'CostCategoriesFilters',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      periodShrink: 'Period',
      tagFiltersShrink: 'TagFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFiltersShrink: 'string',
      costCategoriesFiltersShrink: 'string',
      ecIdAccountIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      periodShrink: 'string',
      tagFiltersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

