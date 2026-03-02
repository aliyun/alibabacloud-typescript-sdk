// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RuleCondition } from "./RuleCondition";


export class PdpLaneCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 灰度
   */
  alias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 252333049301505383
   */
  creatorUid?: string;
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
   * 泳道描述信息
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gray
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productId?: number;
  ruleConditions?: RuleCondition[];
  /**
   * @example
   * and
   */
  ruleConnectType?: string;
  /**
   * @example
   * 1,2
   */
  serviceGroupIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 灰度
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      companyId: 'companyId',
      creatorUid: 'creatorUid',
      customeMarkingRules: 'customeMarkingRules',
      description: 'description',
      env: 'env',
      initGroupFlag: 'initGroupFlag',
      inletServiceIds: 'inletServiceIds',
      markingRuleType: 'markingRuleType',
      name: 'name',
      productId: 'productId',
      ruleConditions: 'ruleConditions',
      ruleConnectType: 'ruleConnectType',
      serviceGroupIds: 'serviceGroupIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      companyId: 'number',
      creatorUid: 'string',
      customeMarkingRules: 'string',
      description: 'string',
      env: 'string',
      initGroupFlag: 'boolean',
      inletServiceIds: 'string',
      markingRuleType: 'string',
      name: 'string',
      productId: 'number',
      ruleConditions: { 'type': 'array', 'itemType': RuleCondition },
      ruleConnectType: 'string',
      serviceGroupIds: 'string',
      type: 'string',
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

