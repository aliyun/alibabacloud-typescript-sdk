// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompliancePackShrinkRequestExcludeTagsScope extends $dara.Model {
  tagKey?: string;
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

export class CreateCompliancePackShrinkRequestTagsScope extends $dara.Model {
  tagKey?: string;
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

export class CreateCompliancePackShrinkRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  /**
   * **if can be null:**
   * false
   */
  configRulesShrink?: string;
  defaultEnable?: boolean;
  description?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateCompliancePackShrinkRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagShrink?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateCompliancePackShrinkRequestTagsScope[];
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRulesShrink: 'ConfigRules',
      defaultEnable: 'DefaultEnable',
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
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRulesShrink: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagShrink: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateCompliancePackShrinkRequestTagsScope },
      templateContent: 'string',
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

