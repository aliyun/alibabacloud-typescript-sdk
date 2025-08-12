// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscriptionConditions extends $dara.Model {
  field?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
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

export class Subscription extends $dara.Model {
  conditions?: SubscriptionConditions[];
  createTime?: string;
  description?: string;
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  product?: string;
  relation?: string;
  strategyUuid?: string;
  updateTime?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      createTime: 'CreateTime',
      description: 'Description',
      enabled: 'Enabled',
      name: 'Name',
      product: 'Product',
      relation: 'Relation',
      strategyUuid: 'StrategyUuid',
      updateTime: 'UpdateTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': SubscriptionConditions },
      createTime: 'string',
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      product: 'string',
      relation: 'string',
      strategyUuid: 'string',
      updateTime: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

