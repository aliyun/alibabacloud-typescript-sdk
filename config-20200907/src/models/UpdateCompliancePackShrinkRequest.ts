// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCompliancePackShrinkRequestExcludeTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-2
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-2
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackShrinkRequestTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique token for each request. The `ClientToken` value can contain only ASCII characters and must be no more than 64 characters long.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the compliance pack.
   * 
   * For more information, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance pack.
   * 
   * For more information, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * @example
   * 等保三级预检合规包
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The rules in the compliance pack.
   * 
   * If you leave this parameter empty when you modify the compliance pack, the original rules are retained. If you specify new rules, they replace the original rules.
   */
  configRulesShrink?: string;
  /**
   * @remarks
   * The description of the compliance pack.
   * 
   * @example
   * 基于等保2.0三级标准，提供持续检测合规性的建议模板，帮助您提前自检并修复问题，以便快速通过正式检测。
   */
  description?: string;
  /**
   * @remarks
   * The compliance pack does not evaluate resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The compliance pack does not evaluate resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance pack does not evaluate the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * 23642660635687****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded tag scope.
   */
  excludeTagsScope?: UpdateCompliancePackShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * The compliance pack evaluates only resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The compliance pack evaluates only resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzdibsjjc****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance pack evaluates only the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The risk level of the compliance pack. Valid values:
   * 
   * - 1: High risk.
   * 
   * - 2: Medium risk.
   * 
   * - 3: Low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated. Ignore this parameter because it is no longer valid.
   * 
   * You can add up to 20 tags.
   * 
   * @deprecated
   */
  tagShrink?: string;
  /**
   * @remarks
   * The compliance pack evaluates only resources that have the specified tag key.
   * 
   * @example
   * ECS
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * The compliance pack evaluates only resources that have the specified tag key and value.
   * 
   * > You must use TagValueScope with TagKeyScope.
   * 
   * @example
   * test
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The tag scope.
   */
  tagsScope?: UpdateCompliancePackShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRulesShrink: 'ConfigRules',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagShrink: 'Tag',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRulesShrink: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagShrink: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackShrinkRequestTagsScope },
    };
  }

  validate() {
    if(Array.isArray(this.excludeTagsScope)) {
      $dara.Model.validateArray(this.excludeTagsScope);
    }
    if(Array.isArray(this.tagsScope)) {
      $dara.Model.validateArray(this.tagsScope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

