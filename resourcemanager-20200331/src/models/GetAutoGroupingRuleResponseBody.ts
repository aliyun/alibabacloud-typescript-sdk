// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoGroupingRuleResponseBodyRuleRuleContents extends $dara.Model {
  /**
   * @remarks
   * The condition for the range of resources that are automatically transferred.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The ID of the content record.
   * 
   * @example
   * grc-acfo******fwybpq
   */
  ruleContentId?: string;
  /**
   * @remarks
   * The condition for the destination resource group.
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

export class GetAutoGroupingRuleResponseBodyRule extends $dara.Model {
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The IDs of excluded regions. Multiple IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of excluded resource groups. Multiple IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of excluded resources. Multiple IDs are separated by commas (,).
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
   * The time when the rule was modified.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The IDs of regions. Multiple IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups. Multiple IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources. Multiple IDs are separated by commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The resource types. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ecs.instance,vpc.vpc
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The content records of the rule.
   */
  ruleContents?: GetAutoGroupingRuleResponseBodyRuleRuleContents[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Transfer resources to which the {"env": "online"} and {"project": "A"} tags are added to the resource group rg-aek2********qcy.
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Custom Transfer Rule for Online Resources of Project A
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   custom_condition: custom transfer rule
   * *   associated_transfer: transfer rule for associated resources
   * 
   * @example
   * associated_transfer
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
      ruleContents: { 'type': 'array', 'itemType': GetAutoGroupingRuleResponseBodyRuleRuleContents },
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

export class GetAutoGroupingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9EA4F962-1A2E-4AFE-BE0C-B14736FC46CC
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rule.
   */
  rule?: GetAutoGroupingRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: GetAutoGroupingRuleResponseBodyRule,
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

