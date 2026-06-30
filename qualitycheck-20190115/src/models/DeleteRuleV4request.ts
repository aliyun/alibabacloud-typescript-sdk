// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Whether to delete the rule even if it is associated with quality inspection tasks.
   * 
   * @example
   * false
   */
  forceDelete?: boolean;
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
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      forceDelete: 'boolean',
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

