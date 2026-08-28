// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingOverviewResponseBodyDataGroups extends $dara.Model {
  /**
   * @remarks
   * The amount of the current group.
   * 
   * @example
   * 3000
   */
  amount?: string;
  /**
   * @remarks
   * The list of commodity codes associated with the current group.
   */
  articleCodes?: string[];
  /**
   * @remarks
   * The grouping dimension value. A null value is returned as DIMENSION_FILTER_NULL_VALUE.
   * 
   * @example
   * inference
   */
  key?: string;
  /**
   * @remarks
   * The display name of the group, which is affected by the locale parameter. A null value is displayed as -.
   * 
   * @example
   * Model invocation
   */
  name?: string;
  /**
   * @remarks
   * The ratio of the group amount to the total amount of the top N groups.
   * 
   * @example
   * 0.10
   */
  percentage?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      articleCodes: 'articleCodes',
      key: 'key',
      name: 'name',
      percentage: 'percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      articleCodes: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      name: 'string',
      percentage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articleCodes)) {
      $dara.Model.validateArray(this.articleCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currency of the amount.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The top N groups sorted by amount in descending order.
   */
  groups?: GetBillingOverviewResponseBodyDataGroups[];
  /**
   * @remarks
   * The total pretax amount.
   * 
   * @example
   * 28729.32
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The total tax amount.
   * 
   * @example
   * 2499.28
   */
  taxAmount?: string;
  /**
   * @remarks
   * The total amount.
   * 
   * @example
   * 31228.60
   */
  totalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      groups: 'groups',
      pretaxAmount: 'pretaxAmount',
      taxAmount: 'taxAmount',
      totalAmount: 'totalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      groups: { 'type': 'array', 'itemType': GetBillingOverviewResponseBodyDataGroups },
      pretaxAmount: 'string',
      taxAmount: 'string',
      totalAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillingOverviewResponseBody extends $dara.Model {
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
   * The bill overview data.
   */
  data?: GetBillingOverviewResponseBodyData;
  /**
   * @remarks
   * The request result message.
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
   * BB521414-5D38-5E66-AA66-963B2B4200E2
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
      data: GetBillingOverviewResponseBodyData,
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

