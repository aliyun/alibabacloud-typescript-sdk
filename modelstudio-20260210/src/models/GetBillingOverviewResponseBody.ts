// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillingOverviewResponseBodyDataGroups extends $dara.Model {
  /**
   * @example
   * 3000
   */
  amount?: string;
  articleCodes?: string[];
  /**
   * @example
   * inference
   */
  key?: string;
  /**
   * @example
   * 模型调用
   */
  name?: string;
  /**
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
   * @example
   * USD
   */
  currency?: string;
  groups?: GetBillingOverviewResponseBodyDataGroups[];
  /**
   * @example
   * 28729.32
   */
  pretaxAmount?: string;
  /**
   * @example
   * 2499.28
   */
  taxAmount?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetBillingOverviewResponseBodyData;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * BB521414-5D38-5E66-AA66-963B2B4200E2
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

