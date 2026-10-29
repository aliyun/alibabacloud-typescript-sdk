// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingOverviewRequestFilterDimensions extends $dara.Model {
  /**
   * @remarks
   * The filter field. For more information, see the "Additional notes" section below.
   * 
   * @example
   * CHARGE_TYPE
   */
  code?: string;
  /**
   * @remarks
   * The filter type.
   * 
   * @example
   * IN
   */
  selectType?: string;
  /**
   * @remarks
   * The list of filter values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      selectType: 'selectType',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      selectType: 'string',
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

export class GetBillingOverviewRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of dimension filters.
   */
  dimensions?: GetBillingOverviewRequestFilterDimensions[];
  static names(): { [key: string]: string } {
    return {
      dimensions: 'dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': GetBillingOverviewRequestFilterDimensions },
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingOverviewRequestGroupBy extends $dara.Model {
  /**
   * @remarks
   * The code of the grouping dimension. For more information, see the "Additional notes" section below.
   * 
   * @example
   * BASE_MODEL
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingOverviewRequestTimePeriod extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. This time point is included in the query range. The format is determined by granularity.
   * 
   * @example
   * 202609
   */
  end?: string;
  /**
   * @remarks
   * The start time of the query. This time point is included in the query range. The format is determined by granularity.
   * 
   * @example
   * 202609
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingOverviewRequest extends $dara.Model {
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
  filter?: GetBillingOverviewRequestFilter;
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
  groupBy?: GetBillingOverviewRequestGroupBy[];
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
  timePeriod?: GetBillingOverviewRequestTimePeriod;
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
      filter: 'filter',
      granularity: 'granularity',
      groupBy: 'groupBy',
      locale: 'locale',
      regionId: 'regionId',
      timePeriod: 'timePeriod',
      topNum: 'topNum',
      zeroFilter: 'zeroFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      filter: GetBillingOverviewRequestFilter,
      granularity: 'string',
      groupBy: { 'type': 'array', 'itemType': GetBillingOverviewRequestGroupBy },
      locale: 'string',
      regionId: 'string',
      timePeriod: GetBillingOverviewRequestTimePeriod,
      topNum: 'number',
      zeroFilter: 'boolean',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(this.timePeriod && typeof (this.timePeriod as any).validate === 'function') {
      (this.timePeriod as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

