// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoGroupingRuleRequestRuleContents extends $dara.Model {
  /**
   * @remarks
   * The condition for the range of resources to be automatically transferred.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The condition for the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * {"children":[{"desired":"rg-aek2********qcy","featurePath":"$.resourceGroupId","featureSource":"RESOURCE","operator":"StringEquals"}],"operator":"and"}
   */
  targetResourceGroupCondition?: string;
  static names(): { [key: string]: string } {
    return {
      autoGroupingScopeCondition: 'AutoGroupingScopeCondition',
      targetResourceGroupCondition: 'TargetResourceGroupCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoGroupingScopeCondition: 'string',
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

export class CreateAutoGroupingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of regions to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * cn-beijing,cn-guangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * rg-aekz******zj2oi,rg-aekz******r62ua
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * pc-uf6p******4h784y,rmq-cn-******ny0y
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The resource types to be excluded. Separate multiple resource types with commas (,).
   * 
   * @example
   * mse.cluster,slb.loadbalancer
   */
  excludeResourceTypesScope?: string;
  /**
   * @remarks
   * The IDs of regions. Separate multiple IDs with commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups. Separate multiple IDs with commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources. Separate multiple IDs with commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The resource types. Separate multiple resource types with commas (,).
   * 
   * @example
   * rds.dbinstance,oss.bucket
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The content records of the rule.
   * 
   * This parameter is required.
   */
  ruleContents?: CreateAutoGroupingRuleRequestRuleContents[];
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
   * The name of the rule.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * custom_condition
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeResourceTypesScope: 'ExcludeResourceTypesScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      ruleContents: 'RuleContents',
      ruleDesc: 'RuleDesc',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeResourceTypesScope: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      ruleContents: { 'type': 'array', 'itemType': CreateAutoGroupingRuleRequestRuleContents },
      ruleDesc: 'string',
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

