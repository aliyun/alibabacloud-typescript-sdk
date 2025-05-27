// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ARN of the event rule. The ARN is used for authorization.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/MNSRule
   */
  ruleARN?: string;
  static names(): { [key: string]: string } {
    return {
      ruleARN: 'RuleARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

