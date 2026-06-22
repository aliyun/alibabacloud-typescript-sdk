// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoTagRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the rules. Separate multiple IDs with commas (,).
   * > Call the [ListAutoTagRules](~~ListAutoTagRules~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2331,56,5644
   */
  ruleIdList?: string;
  static names(): { [key: string]: string } {
    return {
      ruleIdList: 'RuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

