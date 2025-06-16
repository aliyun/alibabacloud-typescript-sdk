// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeResponseBodyBillingConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic payment is enabled. If the **InstanceChargeType** parameter is set to **PrePaid**, one of the following values is returned:
   * 
   * *   **false**: disabled. After an order is generated, you must go to the Order Center to complete the payment.
   * *   **true**: enabled. Payments are automatically completed.
   * 
   * The return value of this parameter is empty if **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * false
   */
  autoPay?: string;
  /**
   * @remarks
   * The billing method of the NAT gateway. The value is set to **PostPaid**, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the NAT gateway. Valid values:
   * 
   * *   **PayBySpec**: pay-by-specification
   * *   **PayByLcu**: pay-by-CU
   * 
   * @example
   * PayBySpec
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The specification of the Internet NAT gateway. If the **InternetChargeType** parameter is set to **PayBySpec**, one of the following values is returned:
   * 
   * *   **Small**: small
   * 
   * *   **Middle**: medium
   * 
   * *   **Large**: large
   * 
   *     The return value of this parameter is empty if **InternetChargeType** is set to **PayByLcu**.
   * 
   * @example
   * Small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

