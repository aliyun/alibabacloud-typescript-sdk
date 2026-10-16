// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoGroupingRuleRequestRuleContents extends $dara.Model {
  /**
   * @remarks
   * The scope condition for automatic resource group transfer. This parameter specifies the scope of resources that need to be automatically transferred.
   * 
   * @example
   * {"children":[{"desired":{"env":"online","project":"A"},"featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
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
   * The target resource group condition. This parameter specifies the target resource group for automatic resource group transfer.
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

export class UpdateAutoGroupingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The excluded scope of region IDs. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-beijing,cn-guangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The excluded scope of resource group IDs. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekz******zj2oi,rg-aekz******r62ua
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The excluded scope of resource IDs. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * pc-uf6p******4h784y,rmq-cn-******ny0y
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded scope of resource types. Separate multiple resource types with commas (,).
   * 
   * @example
   * mse.cluster,slb.loadbalancer
   */
  excludeResourceTypesScope?: string;
  /**
   * @remarks
   * The scope of region IDs. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The scope of resource group IDs. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The scope of resource IDs. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The scope of resource types. Separate multiple resource types with commas (,).
   * 
   * @example
   * rds.dbinstance,oss.bucket
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The list of rule contents.
   * 
   * This parameter is required.
   */
  ruleContents?: UpdateAutoGroupingRuleRequestRuleContents[];
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
   * This parameter is required.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * Automatic resource group transfer rule for Project A online resources
   */
  ruleName?: string;
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
      ruleId: 'RuleId',
      ruleName: 'RuleName',
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
      ruleContents: { 'type': 'array', 'itemType': UpdateAutoGroupingRuleRequestRuleContents },
      ruleDesc: 'string',
      ruleId: 'string',
      ruleName: 'string',
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

