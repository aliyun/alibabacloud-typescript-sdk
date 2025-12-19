// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceRequest extends $dara.Model {
  /**
   * @example
   * PC_WEBSITE
   */
  applicationType?: string;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 210713a117660695309606626a
   */
  clientToken?: string;
  /**
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @example
   * 3
   */
  duration?: number;
  /**
   * @example
   * {}
   */
  extend?: string;
  /**
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @example
   * Year
   */
  pricingCycle?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @example
   * 7
   */
  siteVersion?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      deployArea: 'DeployArea',
      duration: 'Duration',
      extend: 'Extend',
      paymentType: 'PaymentType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      autoRenew: 'boolean',
      clientToken: 'string',
      deployArea: 'string',
      duration: 'number',
      extend: 'string',
      paymentType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      siteVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

