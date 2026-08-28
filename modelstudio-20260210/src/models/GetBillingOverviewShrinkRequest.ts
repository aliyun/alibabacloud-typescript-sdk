// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingOverviewShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The billing month. This parameter is required.
   * 
   * @example
   * 2026-08
   */
  billMonth?: string;
  /**
   * @remarks
   * The filter condition.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The list of grouping conditions. Currently, you must specify exactly one grouping dimension.
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
   * The region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
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
   * Specifies whether to filter out groups with a zero amount. Default value: true.
   * 
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

