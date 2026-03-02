// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RuleCondition } from "./RuleCondition";


export class PdpLaneUpdateCmd extends $dara.Model {
  /**
   * @example
   * 灰度
   */
  alias?: string;
  /**
   * @example
   * rules:
   *     - vars:
   *         - name: userId
   *           position: header
   *           key: x-linkedmall-user-id
   *         - name: userType
   *           position: query
   *           key: userType
   *       expression: "userId % 10 == 0 && userType == A"
   *       tag: "gray"
   *       scope: "pbc1,pbc2"
   */
  customeMarkingRules?: string;
  /**
   * @example
   * 灰度描述
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  initGroupFlag?: boolean;
  /**
   * @example
   * 1,2
   */
  inletServiceIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEMPLATE
   */
  markingRuleType?: string;
  ruleConditions?: RuleCondition[];
  /**
   * @example
   * and
   */
  ruleConnectType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  serviceGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      customeMarkingRules: 'customeMarkingRules',
      description: 'description',
      id: 'id',
      initGroupFlag: 'initGroupFlag',
      inletServiceIds: 'inletServiceIds',
      markingRuleType: 'markingRuleType',
      ruleConditions: 'ruleConditions',
      ruleConnectType: 'ruleConnectType',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      customeMarkingRules: 'string',
      description: 'string',
      id: 'number',
      initGroupFlag: 'boolean',
      inletServiceIds: 'string',
      markingRuleType: 'string',
      ruleConditions: { 'type': 'array', 'itemType': RuleCondition },
      ruleConnectType: 'string',
      serviceGroupIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

