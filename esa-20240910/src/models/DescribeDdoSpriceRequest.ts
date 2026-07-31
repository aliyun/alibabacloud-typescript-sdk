// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * CleanTraffic
   */
  DDoSBillingMode?: string;
  /**
   * @remarks
   * The specification of the instance in the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn_300
   */
  DDoSBurstableDomesticProtection?: string;
  /**
   * @remarks
   * The specification of the instance outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * overseas_300
   */
  DDoSBurstableOverseasProtection?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSBillingMode: 'DDoSBillingMode',
      DDoSBurstableDomesticProtection: 'DDoSBurstableDomesticProtection',
      DDoSBurstableOverseasProtection: 'DDoSBurstableOverseasProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSBillingMode: 'string',
      DDoSBurstableDomesticProtection: 'string',
      DDoSBurstableOverseasProtection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

