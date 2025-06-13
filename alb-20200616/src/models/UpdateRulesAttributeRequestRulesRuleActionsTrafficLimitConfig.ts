// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig extends $dara.Model {
  perIpQps?: number;
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

