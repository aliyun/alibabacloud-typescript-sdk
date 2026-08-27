// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingOverviewShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2026-08
   */
  billMonth?: string;
  filterShrink?: string;
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
      billMonth: 'billMonth',
      filterShrink: 'filter',
      groupByShrink: 'groupBy',
      locale: 'locale',
      regionId: 'regionId',
      topNum: 'topNum',
      zeroFilter: 'zeroFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      filterShrink: 'string',
      groupByShrink: 'string',
      locale: 'string',
      regionId: 'string',
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

