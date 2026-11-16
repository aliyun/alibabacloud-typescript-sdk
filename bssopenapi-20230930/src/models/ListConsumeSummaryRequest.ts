// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumeSummaryRequestCommonFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field. For supported fields and operations, see "Common filtering" in the supplementary description of request parameters.
   * 
   * @example
   * ProductCode
   */
  filterField?: string;
  /**
   * @remarks
   * The operator. Default value: `IN`. `IN` indicates inclusion or exact match, `NOT` indicates exclusion, and `PREFIX` indicates prefix match. For the specific support scope, see "Common filtering" in the supplementary description of request parameters.
   * 
   * @example
   * IN
   */
  operation?: string;
  /**
   * @remarks
   * The filter values always use a string array, including single values, Boolean values, and account IDs.
   * 
   * @example
   * ["ecs"]
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

export class ListConsumeSummaryRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of account IDs to query. This parameter is required when an enterprise object is passed. If the entire EcIdAccountIds parameter is omitted, the data of the current calling account is queried by default.
   * 
   * @example
   * [1234567890123456]
   */
  accountIds?: number[];
  /**
   * @remarks
   * The ID of the enterprise entity.
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

export class ListConsumeSummaryRequestPeriod extends $dara.Model {
  /**
   * @remarks
   * For monthly queries, only one month is supported at a time. The value must be the same as the start month, and the format is `yyyy-MM`.
   * 
   * For daily queries, this parameter is required. The format is `yyyy-MM-dd`. The end date cannot be earlier than the start date, and the start and end dates must be in the same month.
   * 
   * @example
   * 2026-10-07
   */
  endTime?: string;
  /**
   * @remarks
   * `MONTHLY`: aggregates by month. `DAILY`: aggregates by day.
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * For monthly queries, the format is `yyyy-MM`.
   * 
   * For daily queries, the format is `yyyy-MM-dd`.
   * 
   * @example
   * 2026-10-01
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

export class ListConsumeSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The common filter conditions. Valid conditions for different fields take effect simultaneously. For supported fields and operations, see "Common filtering" in the supplementary description of request parameters.
   * 
   * @example
   * [{"FilterField":"ProductCode","Operation":"IN","Values":["ecs"]}]
   */
  commonFilters?: ListConsumeSummaryRequestCommonFilters[];
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
  ecIdAccountIds?: ListConsumeSummaryRequestEcIdAccountIds[];
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
  period?: ListConsumeSummaryRequestPeriod;
  static names(): { [key: string]: string } {
    return {
      commonFilters: 'CommonFilters',
      dimensionType: 'DimensionType',
      ecIdAccountIds: 'EcIdAccountIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFilters: { 'type': 'array', 'itemType': ListConsumeSummaryRequestCommonFilters },
      dimensionType: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': ListConsumeSummaryRequestEcIdAccountIds },
      maxResults: 'number',
      nextToken: 'string',
      period: ListConsumeSummaryRequestPeriod,
    };
  }

  validate() {
    if(Array.isArray(this.commonFilters)) {
      $dara.Model.validateArray(this.commonFilters);
    }
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

