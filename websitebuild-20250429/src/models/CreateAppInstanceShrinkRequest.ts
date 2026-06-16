// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceShrinkRequest extends $dara.Model {
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
   * 210713a117660695309606626a
   */
  clientToken?: string;
  /**
   * @example
   * OPEN_SUBSCRIPTION
   */
  createAction?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @example
   * go-to-the-docks-for-french-fries
   */
  description?: string;
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
   * {}
   */
  extend?: string;
  /**
   * @example
   * docs
   */
  name?: string;
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
   * Year
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Required. The number of instances to subscribe to.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2smovqqpvuly
   */
  resourceGroupId?: string;
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
   * The list of tags.
   */
  tagsShrink?: string;
  /**
   * @example
   * 2023-09-01
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      createAction: 'CreateAction',
      deployArea: 'DeployArea',
      description: 'Description',
      duration: 'Duration',
      extend: 'Extend',
      name: 'Name',
      paymentType: 'PaymentType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      resourceGroupId: 'ResourceGroupId',
      siteVersion: 'SiteVersion',
      tagsShrink: 'Tags',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      autoRenew: 'boolean',
      clientToken: 'string',
      createAction: 'string',
      deployArea: 'string',
      description: 'string',
      duration: 'number',
      extend: 'string',
      name: 'string',
      paymentType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      resourceGroupId: 'string',
      siteVersion: 'string',
      tagsShrink: 'string',
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

