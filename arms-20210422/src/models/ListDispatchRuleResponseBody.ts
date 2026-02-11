// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDispatchRuleResponseBodyDispatchRules extends $dara.Model {
  name?: string;
  ruleId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleResponseBody extends $dara.Model {
  dispatchRules?: ListDispatchRuleResponseBodyDispatchRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRules: 'DispatchRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRules: { 'type': 'array', 'itemType': ListDispatchRuleResponseBodyDispatchRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dispatchRules)) {
      $dara.Model.validateArray(this.dispatchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

