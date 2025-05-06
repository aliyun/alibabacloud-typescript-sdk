// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRuleResponseBodyConfigRule } from "./GetConfigRuleResponseBodyConfigRule";


export class GetConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  configRule?: GetConfigRuleResponseBodyConfigRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 811234F4-C3AB-4D15-B90B-F55016D1B5AA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRule: 'ConfigRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRule: GetConfigRuleResponseBodyConfigRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRule && typeof (this.configRule as any).validate === 'function') {
      (this.configRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

