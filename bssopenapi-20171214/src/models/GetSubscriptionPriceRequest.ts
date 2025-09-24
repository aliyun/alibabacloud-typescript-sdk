// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionPriceRequestModuleList extends $dara.Model {
  /**
   * @remarks
   * The configurations of the Nth pricing module. Valid values of N: 1 to 50. Format: AA:aa,BB:bb. The values of AA and BB are the property IDs of the pricing module. The values of aa and bb are the property values of the pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * PackageCode:version_1
   */
  config?: string;
  /**
   * @remarks
   * The identifier of the Nth pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * PackageCode
   */
  moduleCode?: string;
  /**
   * @remarks
   * The status of the pricing module. This parameter is required only if the order type is Upgrade. Valid values:
   * 
   * *   1: adds one or more instances.
   * *   2: modifies the configurations of an instance. In the upgrade scenario, if the configurations of the pricing module change, you must specify this value for the parameter.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  moduleStatus?: number;
  /**
   * @remarks
   * The tag of the specified resource. This parameter is required only if you upgrade or modify the configurations of an Alibaba Cloud service. For example, if you want to modify the configurations of a disk, you can use a tag to identify the ID of the disk.
   * 
   * @example
   * 213213123
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      moduleCode: 'ModuleCode',
      moduleStatus: 'ModuleStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      moduleCode: 'string',
      moduleStatus: 'number',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance for which the price is queried. This parameter is required if you upgrade an instance. You can specify this parameter to obtain the pre-upgrade configurations of the instance.
   * 
   * @example
   * i-khkjhxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The information about the pricing module.
   * 
   * This parameter is required.
   */
  moduleList?: GetSubscriptionPriceRequestModuleList[];
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   NewOrder: purchases an instance of an Alibaba Cloud service.
   * *   Renewal: renews an instance of an Alibaba Cloud service.
   * *   Upgrade: upgrades an instance of an Alibaba Cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * NewOrder
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service. For more information about the service code, see **Codes of Alibaba Cloud Services**.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service. Specify the parameter based on the pricing document of the specific service.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  quantity?: number;
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
   * The service duration.
   * 
   * @example
   * 1
   */
  servicePeriodQuantity?: number;
  /**
   * @remarks
   * The unit of the service duration. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * @example
   * Year
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The billing method. Set the value to Subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleList: 'ModuleList',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      quantity: 'Quantity',
      region: 'Region',
      servicePeriodQuantity: 'ServicePeriodQuantity',
      servicePeriodUnit: 'ServicePeriodUnit',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleList: { 'type': 'array', 'itemType': GetSubscriptionPriceRequestModuleList },
      orderType: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      quantity: 'number',
      region: 'string',
      servicePeriodQuantity: 'number',
      servicePeriodUnit: 'string',
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

