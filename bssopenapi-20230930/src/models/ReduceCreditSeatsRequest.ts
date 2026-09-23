// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReduceCreditSeatsRequest extends $dara.Model {
  clientToken?: string;
  instanceId?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      productCode: 'string',
      productType: 'string',
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

