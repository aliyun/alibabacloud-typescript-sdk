// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingOverviewShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The billing month.
   * 
   * @example
   * 2026-08
   */
  billMonth?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The time granularity.
   * 
   * @example
   * MONTH
   */
  granularity?: string;
  /**
   * @remarks
   * The list of grouping conditions. Currently, you must specify exactly one grouping dimension.
   */
  groupByShrink?: string;
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
   * The query time range, which includes the start and end times. Both the start and end times are included in the query range. The time format must be consistent with the granularity, and the start time cannot be later than the end time.
   */
  timePeriodShrink?: string;
  /**
   * @remarks
   * The number of groups to return. Valid values: 1 to 20. Default value: 20.
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
      billMonth: 'billMonth',
      filterShrink: 'filter',
      granularity: 'granularity',
      groupByShrink: 'groupBy',
      locale: 'locale',
      regionId: 'regionId',
      timePeriodShrink: 'timePeriod',
      topNum: 'topNum',
      zeroFilter: 'zeroFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      filterShrink: 'string',
      granularity: 'string',
      groupByShrink: 'string',
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

