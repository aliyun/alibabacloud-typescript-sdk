// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Whether to delete the rule even if it is associated with a quality check task.
   * 
   * @example
   * true
   */
  forceDelete?: boolean;
  /**
   * @remarks
   * Indicates whether this is the new version of quality check. 0: old version. 1: new version. Default is 1.
   * 
   * @example
   * 1
   */
  isSchemeData?: number;
  /**
   * @remarks
   * Rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      forceDelete: 'ForceDelete',
      isSchemeData: 'IsSchemeData',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      forceDelete: 'boolean',
      isSchemeData: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

