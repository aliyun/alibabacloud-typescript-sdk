// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingTrendShrinkRequest extends $dara.Model {
  filterShrink?: string;
  /**
   * @example
   * DAY
   */
  granularity?: string;
  groupByShrink?: string;
  /**
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  timePeriodShrink?: string;
  /**
   * @example
   * 20
   */
  topNum?: number;
  /**
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

