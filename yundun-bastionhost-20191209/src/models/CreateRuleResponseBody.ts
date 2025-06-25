// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFA818E3-0A53-51F4-8DB5-AF2A62A6D042
   */
  requestId?: string;
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * @example
   * 1
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

