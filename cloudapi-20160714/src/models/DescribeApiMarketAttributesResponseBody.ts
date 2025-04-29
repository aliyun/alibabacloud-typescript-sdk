// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiMarketAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 6318cd8f6a304cac9318dea8d9a78f7a
   */
  apiId?: string;
  /**
   * @remarks
   * The billing method used by the Alibaba Cloud Marketplace.
   * 
   * @example
   * PREPAID_BY_USAGE
   */
  marketChargingMode?: string;
  /**
   * @remarks
   * Indicates whether fees are charged.
   * 
   * @example
   * true
   */
  needCharging?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 545D4E52-4F77-5EC4-BB7E-7344CEC7B5E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      marketChargingMode: 'MarketChargingMode',
      needCharging: 'NeedCharging',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      marketChargingMode: 'string',
      needCharging: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

