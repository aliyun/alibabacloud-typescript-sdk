// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Whether to copy. Setting to true is equivalent to copying the rule.
   * 
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @remarks
   * For more information about the format of JsonStrForlRule, see [`Rule object description`](https://help.aliyun.com/document_detail/453053.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  jsonStrForRule?: string;
  /**
   * @remarks
   * Returns the IDs and names of quality inspection schemes associated with this rule.
   * 
   * @example
   * 1
   */
  returnRelatedSchemes?: boolean;
  /**
   * @remarks
   * Rule ID. Not required when creating, required when modifying.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      isCopy: 'IsCopy',
      jsonStrForRule: 'JsonStrForRule',
      returnRelatedSchemes: 'ReturnRelatedSchemes',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      isCopy: 'boolean',
      jsonStrForRule: 'string',
      returnRelatedSchemes: 'boolean',
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

