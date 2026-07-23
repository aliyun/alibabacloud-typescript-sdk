// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseDDoSInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CleanTraffic
   */
  DDoSBillingMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn_300
   */
  DDoSBurstableDomesticProtection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * overseas_300
   */
  DDoSBurstableOverseasProtection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esa-site-23kde*****
   */
  siteInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSBillingMode: 'DDoSBillingMode',
      DDoSBurstableDomesticProtection: 'DDoSBurstableDomesticProtection',
      DDoSBurstableOverseasProtection: 'DDoSBurstableOverseasProtection',
      siteInstanceId: 'SiteInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSBillingMode: 'string',
      DDoSBurstableDomesticProtection: 'string',
      DDoSBurstableOverseasProtection: 'string',
      siteInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

