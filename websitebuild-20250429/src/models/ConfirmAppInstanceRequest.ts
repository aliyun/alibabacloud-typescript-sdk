// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmAppInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal upon expiration.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123456
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @remarks
   * Required. The number of subscription periods.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"视觉设计确认\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @remarks
   * Required. The unit of the subscription period. Valid values:
   * - Year: year
   * - Month: month
   * - Day: day
   * - Hour: hour.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Required. The number of instances to purchase.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The website version.
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * The business ID of the trial instance.
   * 
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

