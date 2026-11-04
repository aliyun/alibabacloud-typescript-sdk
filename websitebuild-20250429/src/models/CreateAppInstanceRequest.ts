// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Group
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * ufo
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceRequest extends $dara.Model {
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
   * Ensures request idempotence. You can generate a parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length.
   * 
   * @example
   * 210713a117660695309606626a
   */
  clientToken?: string;
  /**
   * @remarks
   * The action.
   * 
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
   * @remarks
   * The description of the website.
   * 
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
   * @remarks
   * The name of the website.
   * 
   * @example
   * docs
   */
  name?: string;
  /**
   * @remarks
   * The payment method.
   * 
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @remarks
   * Required. The unit of the subscription period. Valid values: Year, Month, Day, and Hour.
   * 
   * @example
   * Year
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
  tags?: CreateAppInstanceRequestTags[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': CreateAppInstanceRequestTags },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

