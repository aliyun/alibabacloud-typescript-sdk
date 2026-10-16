// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoGroupingRuleRequestRuleContents extends $dara.Model {
  /**
   * @remarks
   * The scope condition for automatic allocation. Specifies the scope of resources to be automatically allocated.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The target resource group condition. Specifies the target resource group for automatic allocation.
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
   * The region IDs to exclude. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-beijing,cn-guangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The resource group IDs to exclude. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekz******zj2oi,rg-aekz******r62ua
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The resource IDs to exclude. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * pc-uf6p******4h784y,rmq-cn-******ny0y
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The resource types to exclude. Separate multiple resource types with commas (,).
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
   * The list of rule content entries.
   * 
   * This parameter is required.
   */
  ruleContents?: CreateAutoGroupingRuleRequestRuleContents[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Move resources with tags {"env": "online"} and {"project": "A"} to resource group rg-aek2********qcy
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * Auto allocation rule for Project A online resources
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - custom_condition: custom allocation rule.
   * - associated_transfer: attached-resource allocation rule.
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

