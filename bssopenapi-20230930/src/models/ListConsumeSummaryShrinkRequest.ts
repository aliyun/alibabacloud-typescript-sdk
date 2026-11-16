// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumeSummaryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The common filter conditions. Valid conditions for different fields take effect simultaneously. For supported fields and operations, see "Common filtering" in the supplementary description of request parameters.
   * 
   * @example
   * [{"FilterField":"ProductCode","Operation":"IN","Values":["ecs"]}]
   */
  commonFiltersShrink?: string;
  /**
   * @remarks
   * The aggregation dimension.
   * 
   * `BILLING_ITEM`: aggregates by billing item. This is the default value.
   * 
   * `RESOURCE`: aggregates by resource.
   * 
   * `PRODUCT`: aggregates by product.
   * 
   * `ACCOUNT`: aggregates by account.
   * 
   * @example
   * BILLING_ITEM
   */
  dimensionType?: string;
  /**
   * @remarks
   * The query scope for enterprises and accounts. If this parameter is not specified, the default billing scope of the current calling account is used. Only one enterprise object can be specified per request, and the actual scope is limited by permissions.
   * 
   * @example
   * [{"EcId":"123456","AccountIds":[1234567890123456]}]
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * The maximum number of records expected to be returned for a single query. Specify a positive integer. Keep this value unchanged during pagination. The actual number of returned records may be less than this value.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token for the next page. Do not specify this parameter for the first request. For subsequent requests, pass the value returned in the previous response.
   * 
   * @example
   * example-next-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The query time range, which specifies the time granularity, start time, and end time.
   * 
   * @example
   * {"Granularity":"DAILY","StartTime":"2026-10-01","EndTime":"2026-10-07"}
   */
  periodShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonFiltersShrink: 'CommonFilters',
      dimensionType: 'DimensionType',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      periodShrink: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFiltersShrink: 'string',
      dimensionType: 'string',
      ecIdAccountIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      periodShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

