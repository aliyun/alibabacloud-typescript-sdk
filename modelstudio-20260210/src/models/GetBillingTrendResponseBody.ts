// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingTrendResponseBodyDataCostTotals extends $dara.Model {
  /**
   * @remarks
   * The total amount.
   * 
   * @example
   * 100
   */
  amount?: string;
  /**
   * @remarks
   * The currency of the amount.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 94.34
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The tax amount.
   * 
   * @example
   * 5.66
   */
  taxAmount?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      currency: 'currency',
      pretaxAmount: 'pretaxAmount',
      taxAmount: 'taxAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      pretaxAmount: 'string',
      taxAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingTrendResponseBodyDataGroupByTotal extends $dara.Model {
  /**
   * @remarks
   * The total amount of the current group.
   * 
   * @example
   * 60
   */
  amount?: string;
  /**
   * @remarks
   * The grouping dimension value.
   * 
   * @example
   * qwen-plus
   */
  key?: string;
  /**
   * @remarks
   * The display name of the group. This value is affected by the locale parameter.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @remarks
   * The pretax amount of the current group.
   * 
   * @example
   * 56.60
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The tax amount of the current group.
   * 
   * @example
   * 3.40
   */
  taxAmount?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      key: 'key',
      name: 'name',
      pretaxAmount: 'pretaxAmount',
      taxAmount: 'taxAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      key: 'string',
      name: 'string',
      pretaxAmount: 'string',
      taxAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingTrendResponseBodyDataResultByTimePeriodDetails extends $dara.Model {
  /**
   * @remarks
   * The amount of the group within the current period.
   * 
   * @example
   * 20
   */
  amount?: string;
  /**
   * @remarks
   * The grouping dimension value. Data beyond the top N uses DIMENSION_GROUP_OTHERS_VALUE.
   * 
   * @example
   * qwen-plus
   */
  key?: string;
  /**
   * @remarks
   * The display name of the group. This value is affected by the locale parameter.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @remarks
   * The ratio of the current group amount to the total amount of the current period.
   * 
   * @example
   * 0.6667
   */
  percentage?: string;
  /**
   * @remarks
   * The pretax amount of the group within the current period.
   * 
   * @example
   * 18.87
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The tax amount of the group within the current period.
   * 
   * @example
   * 1.13
   */
  taxAmount?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      key: 'key',
      name: 'name',
      percentage: 'percentage',
      pretaxAmount: 'pretaxAmount',
      taxAmount: 'taxAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      key: 'string',
      name: 'string',
      percentage: 'string',
      pretaxAmount: 'string',
      taxAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingTrendResponseBodyDataResultByTimeTotal extends $dara.Model {
  /**
   * @remarks
   * The total amount for the current period.
   * 
   * @example
   * 30
   */
  amount?: string;
  /**
   * @remarks
   * The currency of the amount for the current period.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The pretax amount for the current period.
   * 
   * @example
   * 28.30
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The tax amount for the current period.
   * 
   * @example
   * 1.70
   */
  taxAmount?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      currency: 'currency',
      pretaxAmount: 'pretaxAmount',
      taxAmount: 'taxAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      pretaxAmount: 'string',
      taxAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingTrendResponseBodyDataResultByTime extends $dara.Model {
  /**
   * @remarks
   * The statistical period. DAY returns yyyyMMdd. MONTH returns yyyyMM.
   * 
   * @example
   * 20260801
   */
  period?: string;
  /**
   * @remarks
   * The cost groups that actually exist in the current period.
   */
  periodDetails?: GetBillingTrendResponseBodyDataResultByTimePeriodDetails[];
  /**
   * @remarks
   * The total cost for the current period.
   */
  total?: GetBillingTrendResponseBodyDataResultByTimeTotal;
  static names(): { [key: string]: string } {
    return {
      period: 'period',
      periodDetails: 'periodDetails',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'string',
      periodDetails: { 'type': 'array', 'itemType': GetBillingTrendResponseBodyDataResultByTimePeriodDetails },
      total: GetBillingTrendResponseBodyDataResultByTimeTotal,
    };
  }

  validate() {
    if(Array.isArray(this.periodDetails)) {
      $dara.Model.validateArray(this.periodDetails);
    }
    if(this.total && typeof (this.total as any).validate === 'function') {
      (this.total as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total cost for the entire query time range, including the top N groups and "Others".
   */
  costTotals?: GetBillingTrendResponseBodyDataCostTotals;
  /**
   * @remarks
   * The total cost of the top N groups and the optional "Others" group within the period.
   */
  groupByTotal?: GetBillingTrendResponseBodyDataGroupByTotal[];
  /**
   * @remarks
   * The cost trend list sorted by time in ascending order.
   */
  resultByTime?: GetBillingTrendResponseBodyDataResultByTime[];
  static names(): { [key: string]: string } {
    return {
      costTotals: 'costTotals',
      groupByTotal: 'groupByTotal',
      resultByTime: 'resultByTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTotals: GetBillingTrendResponseBodyDataCostTotals,
      groupByTotal: { 'type': 'array', 'itemType': GetBillingTrendResponseBodyDataGroupByTotal },
      resultByTime: { 'type': 'array', 'itemType': GetBillingTrendResponseBodyDataResultByTime },
    };
  }

  validate() {
    if(this.costTotals && typeof (this.costTotals as any).validate === 'function') {
      (this.costTotals as any).validate();
    }
    if(Array.isArray(this.groupByTotal)) {
      $dara.Model.validateArray(this.groupByTotal);
    }
    if(Array.isArray(this.resultByTime)) {
      $dara.Model.validateArray(this.resultByTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetBillingTrendResponseBodyData;
  /**
   * @remarks
   * The request result description.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 099A671E-FA21-5A36-8A73-918572DDEF53
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBillingTrendResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

