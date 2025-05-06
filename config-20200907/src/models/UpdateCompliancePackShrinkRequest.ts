// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateCompliancePackShrinkRequestExcludeTagsScope } from "./UpdateCompliancePackShrinkRequestExcludeTagsScope";
import { UpdateCompliancePackShrinkRequestTagsScope } from "./UpdateCompliancePackShrinkRequestTagsScope";


export class UpdateCompliancePackShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotency of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.``
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * For more information about how to obtain the name of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * @example
   * The name of the compliance package.
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The rules in the compliance package.
   * 
   * If you leave this parameter empty, the rules in the compliance package remain unchanged. If you configure this parameter, Cloud Config replaces the existing rules in the compliance package with the specified rules.
   */
  configRulesShrink?: string;
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * The description of the compliance package.
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the regions to which the rule not applies. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * ExcludeResourceGroupIdsScope. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource that you do not want to evaluate by using the compliance package. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * 23642660635687****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * ExcludeTagsScope
   */
  excludeTagsScope?: UpdateCompliancePackShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * The ID of the region whose resources you want to evaluate by using the compliance package. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource group whose resources you want to evaluate by using the compliance package. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzdibsjjc****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resources included from the compliance evaluations performed by the rule. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the rules in the compliance package. Valid values:
   * 
   * *   1: high risk level
   * *   2: medium risk level
   * *   3: low risk level
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The tag key of the resource that you want to evaluate by using the compliance package.
   * 
   * @example
   * ECS
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * The tag value of the resource that you want to evaluate by using the compliance package.
   * 
   * >  You must configure the TagValueScope parameter together with the TagValueScope parameter.
   * 
   * @example
   * test
   */
  tagValueScope?: string;
  /**
   * @remarks
   * TagsScope
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

