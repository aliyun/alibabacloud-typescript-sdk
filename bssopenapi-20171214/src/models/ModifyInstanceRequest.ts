// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The code of the parameter n. Valid values of n: 1 to 100. Multiple parameters are concatenated in the order of n.
   * 
   * >  Only the parameters of the attributes that you want to modify for the instance must be configured. For example, if the instance has Attribute A and Attribute B and only Attribute A must be modified, configure only the parameter of Attribute A.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  code?: string;
  /**
   * @remarks
   * The value of the parameter n. Valid values of n: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * test
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

export class ModifyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * @example
   * JAKSJFHFAKJSF
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to modify the configurations.
   * 
   * @example
   * rm-akjhkdsjhfskjfhd
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of configuration modifications. Valid values:
   * 
   * *   Upgrade: upgrades the configurations of the instance.
   * *   Downgrade: downgrades the configurations of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The details about the parameters.
   */
  parameter?: ModifyInstanceRequestParameter[];
  /**
   * @remarks
   * The code of the service to which the instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service to which the instance belongs.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
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
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      modifyType: 'string',
      ownerId: 'number',
      parameter: { 'type': 'array', 'itemType': ModifyInstanceRequestParameter },
      productCode: 'string',
      productType: 'string',
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

