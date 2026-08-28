// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingTrendShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dimension filter conditions.
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
   * The grouping conditions. This parameter must contain one and only one element.
   */
  groupByShrink?: string;
  /**
   * @remarks
   * The response language. Default value: en-US.
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
   * The query time range, including the start time and end time. This parameter is required.
   */
  timePeriodShrink?: string;
  /**
   * @remarks
   * The number of groups to return. Valid values: 1 to 20. Default value: 20. The remaining groups are merged into "Others".
   * 
   * @example
   * 20
   */
  topNum?: number;
  /**
   * @remarks
   * Specifies whether to filter out groups with a zero amount. Default value: true.
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

