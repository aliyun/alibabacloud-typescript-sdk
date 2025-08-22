// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDcdnWafRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the protection rules that you want to delete. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 20000001,20000002
   */
  ruleIds?: string;
  static names(): { [key: string]: string } {
    return {
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

