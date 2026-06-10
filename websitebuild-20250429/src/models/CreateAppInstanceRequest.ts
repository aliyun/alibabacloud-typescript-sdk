// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * tag key
   * 
   * @example
   * Group
   */
  tagKey?: string;
  /**
   * @remarks
   * value of tag 0
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
   * Application type
   * 
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @remarks
   * Whether to enable auto-renewal upon expiration
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Ensures idempotence of the request. Generate a unique value from your client to ensure that it is unique across different requests. ClientToken only supports ASCII characters and cannot exceed 64 characters
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
   * Deployment area
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
   * Required. The number of subscription periods
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Extended information
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
   * Payment type
   * 
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @remarks
   * Required. The unit of the subscription period, Year: Year, Month: Month, Day: Day, Hour: Hour
   * 
   * @example
   * Year
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Required. The quantity of instances to be ordered.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2smovqqpvuly
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Site version
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * List of tags
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

