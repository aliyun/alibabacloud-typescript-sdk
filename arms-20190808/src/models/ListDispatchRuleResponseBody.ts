// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDispatchRuleResponseBodyDispatchRules extends $dara.Model {
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * Prod
   */
  name?: string;
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 10282
   */
  ruleId?: number;
  /**
   * @remarks
   * Indicates whether the notification policy is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The returned struct.
   */
  dispatchRules?: ListDispatchRuleResponseBodyDispatchRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
   */
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

