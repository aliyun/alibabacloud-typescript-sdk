// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRenewalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can enable auto-renewal for up to 100 subscription instances at a time. Separate multiple instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-askjdhaskfjh
   */
  instanceIDs?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The auto-renewal period. Valid values:
   * 
   * *   1
   * *   2
   * *   3
   * *   6
   * *   12
   * 
   * >  This parameter is required if the RenewalStatus parameter is set to AutoRenewal.
   * 
   * @example
   * 1
   */
  renewalPeriod?: number;
  /**
   * @remarks
   * The unit of the auto-renewal period. Valid values:
   * 
   * *   M: months
   * *   Y: years
   * 
   * >  This parameter is required if the RenewalStatus parameter is set to AutoRenewal.
   * 
   * @example
   * M
   */
  renewalPeriodUnit?: string;
  /**
   * @remarks
   * The status of renewal. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * *   NotRenewal: The instance is not renewed.
   * 
   * This parameter is required.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIDs: 'InstanceIDs',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewalPeriod: 'RenewalPeriod',
      renewalPeriodUnit: 'RenewalPeriodUnit',
      renewalStatus: 'RenewalStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIDs: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      renewalPeriod: 'number',
      renewalPeriodUnit: 'string',
      renewalStatus: 'string',
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

