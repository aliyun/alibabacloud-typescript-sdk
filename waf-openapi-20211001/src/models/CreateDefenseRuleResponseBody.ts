// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 26E46541-7AAB-5565-801D-F14DBDC5F186
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the protection rules. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 22215,23354,462165
   */
  ruleIds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

