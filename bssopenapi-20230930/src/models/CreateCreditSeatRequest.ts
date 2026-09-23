// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditSeatRequestSubscriptionConfigsConfigs extends $dara.Model {
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

export class CreateCreditSeatRequestSubscriptionConfigs extends $dara.Model {
  configs?: CreateCreditSeatRequestSubscriptionConfigsConfigs[];
  /**
   * @remarks
   * This parameter is required.
   */
  seats?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      seats: 'Seats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': CreateCreditSeatRequestSubscriptionConfigsConfigs },
      seats: 'number',
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

export class CreateCreditSeatRequest extends $dara.Model {
  autoRenew?: boolean;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: number;
  periodUnit?: string;
  productCode?: string;
  productType?: string;
  subscriptionConfigs?: CreateCreditSeatRequestSubscriptionConfigs[];
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionConfigs: 'SubscriptionConfigs',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientToken: 'string',
      period: 'number',
      periodUnit: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionConfigs: { 'type': 'array', 'itemType': CreateCreditSeatRequestSubscriptionConfigs },
      subscriptionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionConfigs)) {
      $dara.Model.validateArray(this.subscriptionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

