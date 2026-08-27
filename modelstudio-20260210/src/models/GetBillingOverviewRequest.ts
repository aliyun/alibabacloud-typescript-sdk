// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingOverviewRequestFilterDimensions extends $dara.Model {
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

export class GetBillingOverviewRequestFilter extends $dara.Model {
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

export class GetBillingOverviewRequest extends $dara.Model {
  /**
   * @example
   * 2026-08
   */
  billMonth?: string;
  filter?: GetBillingOverviewRequestFilter;
  groupBy?: GetBillingOverviewRequestGroupBy[];
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
      filter: 'filter',
      groupBy: 'groupBy',
      locale: 'locale',
      regionId: 'regionId',
      topNum: 'topNum',
      zeroFilter: 'zeroFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      filter: GetBillingOverviewRequestFilter,
      groupBy: { 'type': 'array', 'itemType': GetBillingOverviewRequestGroupBy },
      locale: 'string',
      regionId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

