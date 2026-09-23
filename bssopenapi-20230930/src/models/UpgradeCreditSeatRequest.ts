// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeCreditSeatRequestConfigs extends $dara.Model {
  code?: string;
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

export class UpgradeCreditSeatRequest extends $dara.Model {
  clientToken?: string;
  configs?: UpgradeCreditSeatRequestConfigs[];
  instanceId?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configs: 'Configs',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configs: { 'type': 'array', 'itemType': UpgradeCreditSeatRequestConfigs },
      instanceId: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

