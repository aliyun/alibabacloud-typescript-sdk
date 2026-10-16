// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoGroupingRulesResponseBodyRulesRuleContents extends $dara.Model {
  /**
   * @remarks
   * The automatic group transfer scope condition, which specifies the scope of resources to be automatically transferred to a group.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The rule content ID.
   * 
   * @example
   * grc-acfo******fwybpq
   */
  ruleContentId?: string;
  /**
   * @remarks
   * The target resource group condition, which specifies the target resource group for automatic grouping.
   * 
   * @example
   * {"children":[{"desired":"rg-aek2********qcy","featurePath":"$.resourceGroupId","featureSource":"RESOURCE","operator":"StringEquals"}],"operator":"and"}
   */
  targetResourceGroupCondition?: string;
  static names(): { [key: string]: string } {
    return {
      autoGroupingScopeCondition: 'AutoGroupingScopeCondition',
      ruleContentId: 'RuleContentId',
      targetResourceGroupCondition: 'TargetResourceGroupCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoGroupingScopeCondition: 'string',
      ruleContentId: 'string',
      targetResourceGroupCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The time when the rule was created, in RFC 3339 format with a UTC offset of +08:00.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The excluded region IDs. Multiple region IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The excluded resource group IDs. Multiple resource group IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz****ql4b5ea,rg-aek2****akfxykq
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The excluded resource IDs. Multiple resource IDs are separated by commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded resource types. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ecs.instance,vpc.vpc
   */
  excludeResourceTypesScope?: string;
  /**
   * @remarks
   * The time when the rule was last updated, in RFC 3339 format with a UTC offset of +08:00.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The region IDs in scope. Multiple region IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The resource group IDs in scope. Multiple resource group IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz****ql4b5ea,rg-aek2****akfxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The resource IDs in scope. Multiple resource IDs are separated by commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The resource types in scope. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ecs.instance,vpc.vpc
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The list of rule contents.
   */
  ruleContents?: ListAutoGroupingRulesResponseBodyRulesRuleContents[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Transfer resources with tags {"env": "online"} and {"project": "A"} to resource group rg-aek2********qcy
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * Auto group transfer rule for Project A online resources
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - custom_condition: custom rule-based group transfer.
   * - associated_transfer: attached-resource allocation group transfer.
   * 
   * @example
   * custom_condition
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeResourceTypesScope: 'ExcludeResourceTypesScope',
      modifyTime: 'ModifyTime',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      ruleContents: 'RuleContents',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeResourceTypesScope: 'string',
      modifyTime: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      ruleContents: { 'type': 'array', 'itemType': ListAutoGroupingRulesResponseBodyRulesRuleContents },
      ruleDesc: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleContents)) {
      $dara.Model.validateArray(this.ruleContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in a single request. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If the response is truncated, you can use NextToken to send another request to retrieve the content after the current truncation point.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: ListAutoGroupingRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListAutoGroupingRulesResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

