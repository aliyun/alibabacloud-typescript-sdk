// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingTrendResponseBodyDataCostTotals extends $dara.Model {
  /**
   * @example
   * 100
   */
  amount?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 94.34
   */
  pretaxAmount?: string;
  /**
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
   * @example
   * 60
   */
  amount?: string;
  /**
   * @example
   * qwen-plus
   */
  key?: string;
  /**
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @example
   * 56.60
   */
  pretaxAmount?: string;
  /**
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
   * @example
   * 20
   */
  amount?: string;
  /**
   * @example
   * qwen-plus
   */
  key?: string;
  /**
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @example
   * 0.6667
   */
  percentage?: string;
  /**
   * @example
   * 18.87
   */
  pretaxAmount?: string;
  /**
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
   * @example
   * 30
   */
  amount?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 28.30
   */
  pretaxAmount?: string;
  /**
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
   * @example
   * 20260801
   */
  period?: string;
  periodDetails?: GetBillingTrendResponseBodyDataResultByTimePeriodDetails[];
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
  costTotals?: GetBillingTrendResponseBodyDataCostTotals;
  groupByTotal?: GetBillingTrendResponseBodyDataGroupByTotal[];
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
   * @example
   * 200
   */
  code?: string;
  data?: GetBillingTrendResponseBodyData;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 099A671E-FA21-5A36-8A73-918572DDEF53
   */
  requestId?: string;
  /**
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

