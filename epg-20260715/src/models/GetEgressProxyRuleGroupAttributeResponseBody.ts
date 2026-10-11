// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPostResponseConditions extends $dara.Model {
  /**
   * @example
   * request:DestinationDomain
   */
  conditionKey?: string;
  /**
   * @example
   * StringEquals
   */
  conditionOperator?: string;
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

export class GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPostResponse extends $dara.Model {
  /**
   * @example
   * Allow
   */
  action?: string;
  conditions?: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPostResponseConditions[];
  /**
   * @example
   * 2026-01-15T11:58:34Z
   */
  createTime?: string;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
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
   * 66
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditions: 'Conditions',
      createTime: 'CreateTime',
      description: 'Description',
      egressProxyRuleId: 'EgressProxyRuleId',
      egressProxyRuleName: 'EgressProxyRuleName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditions: { 'type': 'array', 'itemType': GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPostResponseConditions },
      createTime: 'string',
      description: 'string',
      egressProxyRuleId: 'string',
      egressProxyRuleName: 'string',
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreDnsConditions extends $dara.Model {
  /**
   * @example
   * request:DestinationDomain
   */
  conditionKey?: string;
  /**
   * @example
   * StringEquals
   */
  conditionOperator?: string;
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

export class GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreDns extends $dara.Model {
  /**
   * @example
   * Allow
   */
  action?: string;
  conditions?: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreDnsConditions[];
  /**
   * @example
   * 2024-08-19T03:34:29Z
   */
  createTime?: string;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
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
   * 66
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditions: 'Conditions',
      createTime: 'CreateTime',
      description: 'Description',
      egressProxyRuleId: 'EgressProxyRuleId',
      egressProxyRuleName: 'EgressProxyRuleName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditions: { 'type': 'array', 'itemType': GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreDnsConditions },
      createTime: 'string',
      description: 'string',
      egressProxyRuleId: 'string',
      egressProxyRuleName: 'string',
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreRequestConditions extends $dara.Model {
  /**
   * @example
   * request:DestinationDomain
   */
  conditionKey?: string;
  /**
   * @example
   * StringEquals
   */
  conditionOperator?: string;
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

export class GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreRequest extends $dara.Model {
  /**
   * @example
   * Allow
   */
  action?: string;
  conditions?: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreRequestConditions[];
  /**
   * @example
   * 2024-12-20T15:58:33.343
   */
  createTime?: string;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
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
   * 66
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditions: 'Conditions',
      createTime: 'CreateTime',
      description: 'Description',
      egressProxyRuleId: 'EgressProxyRuleId',
      egressProxyRuleName: 'EgressProxyRuleName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditions: { 'type': 'array', 'itemType': GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreRequestConditions },
      createTime: 'string',
      description: 'string',
      egressProxyRuleId: 'string',
      egressProxyRuleName: 'string',
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRules extends $dara.Model {
  postResponse?: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPostResponse[];
  preDns?: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreDns[];
  preRequest?: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreRequest[];
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: { 'type': 'array', 'itemType': GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPostResponse },
      preDns: { 'type': 'array', 'itemType': GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreDns },
      preRequest: { 'type': 'array', 'itemType': GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRulesPreRequest },
    };
  }

  validate() {
    if(Array.isArray(this.postResponse)) {
      $dara.Model.validateArray(this.postResponse);
    }
    if(Array.isArray(this.preDns)) {
      $dara.Model.validateArray(this.preDns);
    }
    if(Array.isArray(this.preRequest)) {
      $dara.Model.validateArray(this.preRequest);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyRuleGroupAttributeResponseBodyTags extends $dara.Model {
  /**
   * @example
   * epg
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyRuleGroupAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 2025-10-16T15:34:56Z
   */
  createTime?: string;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  egressProxyIpPoolId?: string;
  /**
   * @example
   * eprg-uf60966a9633667c****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyRuleGroupName?: string;
  egressProxyRules?: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRules;
  /**
   * @example
   * 01A05AB5-5BED-56ED-8EE9-304FBC2F8537
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmzvr2nr****
   */
  resourceGroupId?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  tags?: GetEgressProxyRuleGroupAttributeResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      egressProxyRuleGroupName: 'EgressProxyRuleGroupName',
      egressProxyRules: 'EgressProxyRules',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      egressProxyIpPoolId: 'string',
      egressProxyRuleGroupId: 'string',
      egressProxyRuleGroupName: 'string',
      egressProxyRules: GetEgressProxyRuleGroupAttributeResponseBodyEgressProxyRules,
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetEgressProxyRuleGroupAttributeResponseBodyTags },
    };
  }

  validate() {
    if(this.egressProxyRules && typeof (this.egressProxyRules as any).validate === 'function') {
      (this.egressProxyRules as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

