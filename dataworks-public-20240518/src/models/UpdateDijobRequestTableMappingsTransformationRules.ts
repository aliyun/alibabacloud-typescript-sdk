// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestTableMappingsTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * *   DefinePrimaryKey
   * *   Rename
   * *   AddColumn
   * *   HandleDml
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The name of the rule. If the values of the RuleActionType parameter and the RuleTargetType parameter are the same for multiple transformation rules, you must make sure that the transformation rule names are unique.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the object on which you want to perform the action. Valid values:
   * 
   * *   Table
   * *   Schema
   * *   Database
   * 
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

