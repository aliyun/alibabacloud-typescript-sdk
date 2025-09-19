// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoTagRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset auto-tagging rule. Separate multiple IDs with commas (,).
   * 
   * >  You can call the [ListAutoTagRules](~~ListAutoTagRules~~) operation to query the ID.
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

