// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEgressProxyRulesAttributeRequestEgressProxyRulesAddConditions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * request:DestinationDomain
   */
  conditionKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * StringEquals
   */
  conditionOperator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionOperator: 'ConditionOperator',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionOperator: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.conditionValues)) {
      $dara.Model.validateArray(this.conditionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyRulesAttributeRequestEgressProxyRulesRemoveConditions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * request:DestinationDomain
   */
  conditionKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * StringEquals
   */
  conditionOperator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionOperator: 'ConditionOperator',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionOperator: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.conditionValues)) {
      $dara.Model.validateArray(this.conditionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyRulesAttributeRequestEgressProxyRules extends $dara.Model {
  /**
   * @example
   * Allow
   */
  action?: string;
  addConditions?: UpdateEgressProxyRulesAttributeRequestEgressProxyRulesAddConditions[];
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * epr-gw80bb6a91dbb775****
   */
  egressProxyRuleId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyRuleName?: string;
  /**
   * @example
   * 10
   */
  priority?: number;
  removeConditions?: UpdateEgressProxyRulesAttributeRequestEgressProxyRulesRemoveConditions[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      addConditions: 'AddConditions',
      description: 'Description',
      egressProxyRuleId: 'EgressProxyRuleId',
      egressProxyRuleName: 'EgressProxyRuleName',
      priority: 'Priority',
      removeConditions: 'RemoveConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      addConditions: { 'type': 'array', 'itemType': UpdateEgressProxyRulesAttributeRequestEgressProxyRulesAddConditions },
      description: 'string',
      egressProxyRuleId: 'string',
      egressProxyRuleName: 'string',
      priority: 'number',
      removeConditions: { 'type': 'array', 'itemType': UpdateEgressProxyRulesAttributeRequestEgressProxyRulesRemoveConditions },
    };
  }

  validate() {
    if(Array.isArray(this.addConditions)) {
      $dara.Model.validateArray(this.addConditions);
    }
    if(Array.isArray(this.removeConditions)) {
      $dara.Model.validateArray(this.removeConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyRulesAttributeRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eprg-gw80bb6a95380edb****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  egressProxyRules?: UpdateEgressProxyRulesAttributeRequestEgressProxyRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      egressProxyRules: 'EgressProxyRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyRuleGroupId: 'string',
      egressProxyRules: { 'type': 'array', 'itemType': UpdateEgressProxyRulesAttributeRequestEgressProxyRules },
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyRules)) {
      $dara.Model.validateArray(this.egressProxyRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

