// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPayAsYouGoPriceRequestModuleList extends $dara.Model {
  /**
   * @remarks
   * The configuration of the Nth pricing module. Valid values of N: 1 to 50. Format: AA:aa,BB:bb. The values of AA and BB are the property IDs of the pricing module. The values of aa and bb are the property values of the pricing module.
   * 
   * >  You can call the [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html) operation to obtain the configuration parameters of the pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType:ecs.g5.xlarge,IoOptimized:IoOptimized,ImageOs:linux
   */
  config?: string;
  /**
   * @remarks
   * The code of the Nth pricing module.
   * 
   * >  You can call the [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html) operation to obtain the module code.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  moduleCode?: string;
  /**
   * @remarks
   * The price type of the Nth pricing module. Valid values:
   * 
   * *   Hour: hourly price
   * *   Usage: usage price
   * *   Month: monthly price
   * *   Year: annual price
   * 
   * >  You can call the [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html) operation to obtain the configuration parameters of the pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      moduleCode: 'ModuleCode',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      moduleCode: 'string',
      priceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The details of pricing modules.
   * 
   * This parameter is required.
   */
  moduleList?: GetPayAsYouGoPriceRequestModuleList[];
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
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The billing method. Set the value to PayAsYouGo.
   * 
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: { 'type': 'array', 'itemType': GetPayAsYouGoPriceRequestModuleList },
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.moduleList)) {
      $dara.Model.validateArray(this.moduleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

