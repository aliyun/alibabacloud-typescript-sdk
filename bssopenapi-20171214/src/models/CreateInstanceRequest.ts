// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The code property of the Nth module. Value of N: 1 to 100. If multiple module property parameters are involved, concatenate multiple parameters based on the value of N in sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  code?: string;
  /**
   * @remarks
   * The value property of the Nth module. Value of N: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * disk
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The server checks whether a request that uses the same client token has been received. If a request that uses the same client token has been received, the server returns the same request result as the previous request.
   * 
   * @example
   * JASIOFKVNVIXXXXXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The logistics address of this order. This parameter is generally valid for physical orders.
   * 
   * @example
   * {"cityCode":"330100","cityName":"Hangzhou","contactName":"Test","countryCode":"","districtName":"Puyan Street","email":"\\*\\*@example.com","mobilePhone":"153564848844","phone":"1234567","provCode":"330000","provName":"Zhejiang","streetCode":"33010610","streetName":"Zhuantang","zipCode":"0000"}
   */
  logistics?: string;
  ownerId?: number;
  /**
   * @remarks
   * The details of the modules.
   */
  parameter?: CreateInstanceRequestParameter[];
  /**
   * @remarks
   * The subscription duration. Unit: month. The value must be an integral multiple of 12.
   * 
   * >  This parameter is required if you create a subscription instance.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The cycle type of the prepaid period
   * - PricingCycle=1 indicates that the unit of the prepaid period is in years; 
   * - PricingCycle=2 indicates that the unit of the prepaid period is in months; 
   * - PricingCycle=3 indicates that the unit of the prepaid period is in days;
   * - Default value: PricingCycle=2
   * 
   * Applicable only to certain product types (ProductType being ddos_originpre_public_cn, ddosDip, ddoscoo, ddos_originpre_public_intl, ddosDip_intl, ddoscoo_intl)
   * 
   * @example
   * 2
   */
  pricingCycle?: number;
  /**
   * @remarks
   * The code of the service to which the instance belongs. You can query the service code by calling the **QueryProductList** operation or viewing **Codes of Alibaba Cloud Services**.
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
   * The auto-renewal period. Unit: month.
   * 
   * >  This parameter is required if the **RenewalStatus** parameter is set to **AutoRenewal**.
   * 
   * @example
   * 12
   */
  renewPeriod?: number;
  /**
   * @remarks
   * The renewal method. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * 
   * Default value: ManualRenewal.
   * 
   * @example
   * ManualRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method.
   * *   PayAsYouGo: the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logistics: 'Logistics',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewPeriod: 'RenewPeriod',
      renewalStatus: 'RenewalStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logistics: 'string',
      ownerId: 'number',
      parameter: { 'type': 'array', 'itemType': CreateInstanceRequestParameter },
      period: 'number',
      pricingCycle: 'number',
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
      renewalStatus: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

