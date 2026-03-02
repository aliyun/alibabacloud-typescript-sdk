// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpServiceInfo } from "./PdpServiceInfo";
import { RuleCondition } from "./RuleCondition";
import { ServiceGroupInfo } from "./ServiceGroupInfo";


export class PdpLane extends $dara.Model {
  /**
   * @example
   * 灰度
   */
  alias?: string;
  /**
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @example
   * 252333049301505383
   */
  creatorUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
  description?: string;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * true
   */
  initGroupFlag?: boolean;
  inletServices?: PdpServiceInfo[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEMPLATE
   */
  markingRuleType?: string;
  /**
   * @example
   * gray
   */
  name?: string;
  /**
   * @example
   * 1
   */
  productId?: number;
  /**
   * @example
   * linkemall
   */
  productName?: string;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  ruleConditions?: RuleCondition[];
  /**
   * @example
   * and
   */
  ruleConnectType?: string;
  serviceGroups?: ServiceGroupInfo[];
  /**
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      companyId: 'companyId',
      creatorName: 'creatorName',
      creatorUid: 'creatorUid',
      customeMarkingRules: 'customeMarkingRules',
      description: 'description',
      env: 'env',
      id: 'id',
      initGroupFlag: 'initGroupFlag',
      inletServices: 'inletServices',
      markingRuleType: 'markingRuleType',
      name: 'name',
      productId: 'productId',
      productName: 'productName',
      requestId: 'requestId',
      ruleConditions: 'ruleConditions',
      ruleConnectType: 'ruleConnectType',
      serviceGroups: 'serviceGroups',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      companyId: 'number',
      creatorName: 'string',
      creatorUid: 'string',
      customeMarkingRules: 'string',
      description: 'string',
      env: 'string',
      id: 'number',
      initGroupFlag: 'boolean',
      inletServices: { 'type': 'array', 'itemType': PdpServiceInfo },
      markingRuleType: 'string',
      name: 'string',
      productId: 'number',
      productName: 'string',
      requestId: 'string',
      ruleConditions: { 'type': 'array', 'itemType': RuleCondition },
      ruleConnectType: 'string',
      serviceGroups: { 'type': 'array', 'itemType': ServiceGroupInfo },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inletServices)) {
      $dara.Model.validateArray(this.inletServices);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    if(Array.isArray(this.serviceGroups)) {
      $dara.Model.validateArray(this.serviceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

