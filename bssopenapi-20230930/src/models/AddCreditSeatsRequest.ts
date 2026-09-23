// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCreditSeatsRequestConfigs extends $dara.Model {
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

export class AddCreditSeatsRequest extends $dara.Model {
  clientToken?: string;
  configs?: AddCreditSeatsRequestConfigs[];
  productCode?: string;
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  seats?: number;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configs: 'Configs',
      productCode: 'ProductCode',
      productType: 'ProductType',
      seats: 'Seats',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configs: { 'type': 'array', 'itemType': AddCreditSeatsRequestConfigs },
      productCode: 'string',
      productType: 'string',
      seats: 'number',
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

