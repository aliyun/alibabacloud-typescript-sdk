// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddResolverRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 725B8BED-901F-480C-BBAC-FA59A18580C1
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * hr****
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

