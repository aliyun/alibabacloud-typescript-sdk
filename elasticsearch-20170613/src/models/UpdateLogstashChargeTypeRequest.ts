// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogstashChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The billing information of the Logstash instance after conversion, including the subscription duration and billing cycle.
   * 
   * @example
   * {"paymentInfo":{"duration":1,"pricingCycle":"Month"},"paymentType":"prepaid"}
   */
  body?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client generates the parameter value. The value must be unique across different requests and can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

