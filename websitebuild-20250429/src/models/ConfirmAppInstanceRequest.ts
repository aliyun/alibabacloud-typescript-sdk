// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmAppInstanceRequest extends $dara.Model {
  /**
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 123456
   */
  clientToken?: string;
  /**
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * {\\"deliveryNodeName\\":\\"视觉设计确认\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
   */
  extend?: string;
  /**
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @example
   * WS123456
   */
  trialBizId?: string;
  version?: string;
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
      trialBizId: 'TrialBizId',
      version: 'Version',
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
      trialBizId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

