// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. Separate multiple IDs with commas (,). A maximum of 100 IDs can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-xxxxxxxxxxxx
   */
  instanceIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The method that is used to renew the instance. Valid values:
   * 
   * AutoRenewal: automatically renews the instance.
   * 
   * ManualRenewal: manually renews the instance.
   * 
   * NotRenewal: does not renew the instance.
   * 
   * @example
   * AutoRenewal
   */
  renewStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * Subscription: the subscription billing method.
   * 
   * PayAsYouGo: the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      renewStatus: 'RenewStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      renewStatus: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

