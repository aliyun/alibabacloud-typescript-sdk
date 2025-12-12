// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoGroupingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7701451-340B-5CB3-AEA7-7D831F7F38C0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

