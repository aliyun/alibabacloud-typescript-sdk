// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingTrendShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dimension filter condition.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The query granularity. This parameter is required.
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * The grouping condition. This parameter must contain exactly one element.
   */
  groupByShrink?: string;
  /**
   * @remarks
   * Specifies whether to query the previous non-overlapping period of the same length. Default value: false.
   * 
   * @example
   * false
   */
  includeHistoryPeriod?: boolean;
  /**
   * @remarks
   * The language of the response. Default value: en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The time range to query, including the start time and end time. This parameter is required.
   */
  timePeriodShrink?: string;
  /**
   * @remarks
   * The number of groups to return. Valid values: 1 to 20. Default value: 20. The remaining groups are merged into "Other".
   * 
   * @example
   * 20
   */
  topNum?: number;
  /**
   * @remarks
   * Specifies whether to filter out groups with an amount of 0. Default value: true.
   * 
   * @example
   * true
   */
  zeroFilter?: boolean;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'filter',
      granularity: 'granularity',
      groupByShrink: 'groupBy',
      includeHistoryPeriod: 'includeHistoryPeriod',
      locale: 'locale',
      regionId: 'regionId',
      timePeriodShrink: 'timePeriod',
      topNum: 'topNum',
      zeroFilter: 'zeroFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      granularity: 'string',
      groupByShrink: 'string',
      includeHistoryPeriod: 'boolean',
      locale: 'string',
      regionId: 'string',
      timePeriodShrink: 'string',
      topNum: 'number',
      zeroFilter: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

