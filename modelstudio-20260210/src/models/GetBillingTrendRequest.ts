// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingTrendRequestFilterDimensions extends $dara.Model {
  /**
   * @remarks
   * The filter dimension code. For more information, see the "Additional information" section below.
   * 
   * @example
   * CHARGE_TYPE
   */
  code?: string;
  /**
   * @remarks
   * The filter method.
   * 
   * @example
   * IN
   */
  selectType?: string;
  /**
   * @remarks
   * The filter value list.
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

export class GetBillingTrendRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The dimension filter list.
   */
  dimensions?: GetBillingTrendRequestFilterDimensions[];
  static names(): { [key: string]: string } {
    return {
      dimensions: 'dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': GetBillingTrendRequestFilterDimensions },
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

export class GetBillingTrendRequestGroupBy extends $dara.Model {
  /**
   * @remarks
   * The grouping dimension code. For more information, see the "Additional information" section below.
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

export class GetBillingTrendRequestTimePeriod extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-08-25
   */
  end?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-08-01
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

export class GetBillingTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The dimension filter conditions.
   */
  filter?: GetBillingTrendRequestFilter;
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
  groupBy?: GetBillingTrendRequestGroupBy[];
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
  timePeriod?: GetBillingTrendRequestTimePeriod;
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
      filter: GetBillingTrendRequestFilter,
      granularity: 'string',
      groupBy: { 'type': 'array', 'itemType': GetBillingTrendRequestGroupBy },
      locale: 'string',
      regionId: 'string',
      timePeriod: GetBillingTrendRequestTimePeriod,
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

