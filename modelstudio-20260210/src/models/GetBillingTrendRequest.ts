// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingTrendRequestFilterDimensions extends $dara.Model {
  /**
   * @example
   * CHARGE_TYPE
   */
  code?: string;
  /**
   * @example
   * IN
   */
  selectType?: string;
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
   * @example
   * 2026-08-25
   */
  end?: string;
  /**
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
  filter?: GetBillingTrendRequestFilter;
  /**
   * @example
   * DAY
   */
  granularity?: string;
  groupBy?: GetBillingTrendRequestGroupBy[];
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
  timePeriod?: GetBillingTrendRequestTimePeriod;
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

