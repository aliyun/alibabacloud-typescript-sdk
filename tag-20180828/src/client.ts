// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateTagsRequestTagKeyValueParamListTagValueParamList extends $dara.Model {
  /**
   * @remarks
   * The description of the value for tag N.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * Test environment
   */
  description?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class CreateTagsRequestTagKeyValueParamList extends $dara.Model {
  /**
   * @remarks
   * The description of the key for tag N.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * Business environment
   */
  description?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * Environment
   */
  key?: string;
  /**
   * @remarks
   * The information about the tag values.
   */
  tagValueParamList?: CreateTagsRequestTagKeyValueParamListTagValueParamList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      tagValueParamList: 'TagValueParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      tagValueParamList: { 'type': 'array', 'itemType': CreateTagsRequestTagKeyValueParamListTagValueParamList },
    };
  }

  validate() {
    if(Array.isArray(this.tagValueParamList)) {
      $dara.Model.validateArray(this.tagValueParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the Tag service in the region.
   * 
   * @example
   * tag.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the report was generated. This value is a UNIX timestamp.
   * 
   * @example
   * 1655089159000
   */
  createdTime?: number;
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * crp-ao0786618088006c****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * >  This parameter is returned if you set the `TargetType` and `TargetId` parameters in the current request to the same values as the parameters that are configured when you call the [GenerateConfigRuleReport](https://help.aliyun.com/document_detail/433313.html) operation to generate the report.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  This parameter is returned if you set the `TargetType` and `TargetId` parameters in the current request to the same values as the parameters that are configured when you call the [GenerateConfigRuleReport](https://help.aliyun.com/document_detail/433313.html) operation to generate the report.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      reportId: 'ReportId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      reportId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponseBodyPolicyAttachmentsPolicyList extends $dara.Model {
  attachSeq?: number;
  attachTime?: string;
  policyId?: string;
  policyName?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      attachSeq: 'AttachSeq',
      attachTime: 'AttachTime',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachSeq: 'number',
      attachTime: 'string',
      policyId: 'string',
      policyName: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponseBodyPolicyAttachments extends $dara.Model {
  policyList?: GetEffectivePolicyResponseBodyPolicyAttachmentsPolicyList[];
  policyType?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      policyList: 'PolicyList',
      policyType: 'PolicyType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyList: { 'type': 'array', 'itemType': GetEffectivePolicyResponseBodyPolicyAttachmentsPolicyList },
      policyType: 'string',
      tagKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The document of the tag policy.
   * 
   * @example
   * {\\"tags\\":{\\"CostCenter\\":{\\"tag_value\\":{\\"@@assign\\":[\\"Beijing\\",\\"Shanghai\\"]},\\"tag_key\\":{\\"@@assign\\":\\"CostCenter\\"}}}}
   */
  policyContent?: string;
  /**
   * @remarks
   * The description of the tag policy.
   * 
   * @example
   * This is a tag policy example.
   */
  policyDesc?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyName: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusResponseBodyStatusModels extends $dara.Model {
  /**
   * @remarks
   * The status of the Tag Policy feature. Valid values:
   * 
   * *   PendingEnable: The feature is being enabled.
   * *   Enabled: The feature is enabled.
   * *   Closing: The feature is being disabled.
   * *   Disabled: The feature is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * RD
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * You can use the ID to query the content of the related resource non-compliance report in Cloud Config.
   * 
   * >  This parameter is returned only if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * ca-efdc33dc9b37002d****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * cr-0lb4866180880069****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The use scenario of the tag policy. Valid values:
   * 
   * *   tags: enables tags with specified tag values to be added to resources.
   * *   rg_inherit: enables resources in a resource group to automatically inherit tags from the resource group.
   * 
   * @example
   * tags
   */
  policyType?: string;
  /**
   * @remarks
   * Indicates whether automatic remediation is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  remediation?: boolean;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * CostCenter
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value for automatic remediation.
   * 
   * @example
   * Project
   */
  tagValue?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 134254031178****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * USER
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      policyType: 'PolicyType',
      remediation: 'Remediation',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      policyType: 'string',
      remediation: 'boolean',
      tagKey: 'string',
      tagValue: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicyList extends $dara.Model {
  /**
   * @remarks
   * The document of the tag policy.
   * 
   * @example
   * {\\"tags\\":{\\"CostCenter\\":{\\"tag_value\\":{\\"@@assign\\":[\\"Beijing\\",\\"Shanghai\\"]},\\"tag_key\\":{\\"@@assign\\":\\"CostCenter\\"}}}}
   */
  policyContent?: string;
  /**
   * @remarks
   * The description of the tag policy.
   * 
   * @example
   * This is a tag policy example.
   */
  policyDesc?: string;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * @example
   * p-de62a0bf400e4b69****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * @example
   * example
   */
  policyName?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
      policyName: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The document of the tag policy.
   * 
   * @example
   * {\\"tags\\":{\\"CostCenter\\":{\\"tag_value\\":{\\"@@assign\\":[\\"Beijing\\",\\"Shanghai\\"]},\\"tag_key\\":{\\"@@assign\\":\\"CostCenter\\"}}}}
   */
  policyContent?: string;
  /**
   * @remarks
   * The description of the tag policy.
   * 
   * @example
   * This is a tag policy example.
   */
  policyDesc?: string;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * @example
   * p-de62a0bf400e4b69****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * @example
   * example
   */
  policyName?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
      policyName: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * The tag key can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter specifies a filter condition for the query.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
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

export class ListResourcesByTagResponseBodyResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   custom
   * *   system
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

export class ListResourcesByTagResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-wz9pifyuw26esxd05****
   */
  resourceId?: string;
  /**
   * @remarks
   * The information of the tags.
   * 
   * This parameter is returned only if the `IncludeAllTags` parameter is set to `True`.
   */
  tags?: ListResourcesByTagResponseBodyResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tags: { 'type': 'array', 'itemType': ListResourcesByTagResponseBodyResourcesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tag-related capability item is supported. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  support?: boolean;
  /**
   * @remarks
   * The code of the tag-related capability item.
   * 
   * @example
   * TAG_CONSOLE_SUPPORT
   */
  supportCode?: string;
  /**
   * @remarks
   * The details of the support for the tag-related capability item.
   */
  supportDetails?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      support: 'Support',
      supportCode: 'SupportCode',
      supportDetails: 'SupportDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      support: 'boolean',
      supportCode: 'string',
      supportDetails: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.supportDetails)) {
      $dara.Model.validateArray(this.supportDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBodySupportResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource ARN template.
   * 
   * @example
   * acs:ecs:*:*:instance/${ResourceId}
   */
  arnTemplate?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The supported tag-related capability items.
   * 
   * >  This parameter is returned only if the `ShowItems` parameter is set to `true`.
   */
  supportItems?: ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems[];
  static names(): { [key: string]: string } {
    return {
      arnTemplate: 'ArnTemplate',
      productCode: 'ProductCode',
      resourceType: 'ResourceType',
      supportItems: 'SupportItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arnTemplate: 'string',
      productCode: 'string',
      resourceType: 'string',
      supportItems: { 'type': 'array', 'itemType': ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems },
    };
  }

  validate() {
    if(Array.isArray(this.supportItems)) {
      $dara.Model.validateArray(this.supportItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag key for a fuzzy query.
   * 
   * This parameter is used together with the `FuzzyType` parameter.
   * 
   * @example
   * team
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeysKey extends $dara.Model {
  /**
   * @remarks
   * The type of the resource tag. Valid values:
   * 
   * *   custom
   * *   system
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The description of the tag key.
   * 
   * @example
   * Business team
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * team
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeys extends $dara.Model {
  key?: ListTagKeysResponseBodyKeysKey[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeysKey },
    };
  }

  validate() {
    if(Array.isArray(this.key)) {
      $dara.Model.validateArray(this.key);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   Custom
   * *   System
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * arn:acs:ecs:cn-hangzhou:123456789****:instance/i-bp15hr53jws84akg****
   */
  resourceARN?: string;
  /**
   * @remarks
   * The information of the tags.
   */
  tags?: ListTagResourcesResponseBodyTagResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag value for a fuzzy query.
   * 
   * This parameter is used together with the `FuzzyType` parameter.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListTagValuesResponseBodyValues extends $dara.Model {
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyResponseBodyTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 195320939469****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResourcesFailedResourceResult extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidResourceId.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified ResourceIds are not found in our records.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResourcesFailedResource extends $dara.Model {
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * arn:acs:vpc:cn-hangzhou:123456789****:vpc/vpc-bp19dd90tkt6tz7wu****
   */
  resourceARN?: string;
  /**
   * @remarks
   * The information about the error.
   */
  result?: TagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: TagResourcesResponseBodyFailedResourcesFailedResourceResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResources extends $dara.Model {
  failedResource?: TagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': TagResourcesResponseBodyFailedResourcesFailedResource },
    };
  }

  validate() {
    if(Array.isArray(this.failedResource)) {
      $dara.Model.validateArray(this.failedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResourcesFailedResourceResult extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidResourceId.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified ResourceIds are not found in our records.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResourcesFailedResource extends $dara.Model {
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * arn:acs:ecs:cn-hangzhou:123456789****:instance/i-xxxxxxxxxx1
   */
  resourceARN?: string;
  /**
   * @remarks
   * The information about the error.
   */
  result?: UntagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: UntagResourcesResponseBodyFailedResourcesFailedResourceResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResources extends $dara.Model {
  failedResource?: UntagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': UntagResourcesResponseBodyFailedResourcesFailedResource },
    };
  }

  validate() {
    if(Array.isArray(this.failedResource)) {
      $dara.Model.validateArray(this.failedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * This parameter is required.
   * 
   * @example
   * p-de62a0bf400e4b69****
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * >  If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this feature is required.
   * 
   * @example
   * 151266687691****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this feature is required. The value of this parameter is not case-sensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreatedByEnabledRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreatedByEnabledResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  openStatus?: boolean;
  /**
   * @example
   * 682DD9E1-F530-5D14-A839-A6787FA82B74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openStatus: 'OpenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreatedByEnabledResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckCreatedByEnabledResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckCreatedByEnabledResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseCreatedByRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseCreatedByResponseBody extends $dara.Model {
  /**
   * @example
   * AECFE0F2-CEC3-5D16-BE4C-E2F95083D063
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseCreatedByResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseCreatedByResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseCreatedByResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   false (default): performs a dry run and performs the actual request.
   * *   true: performs only a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The document of the tag policy.
   * 
   * For more information about the syntax of a tag policy, see [Syntax of a tag policy](https://help.aliyun.com/document_detail/417436.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"tags":{"CostCenter":{"tag_value":{"@@assign":["Beijing","Shanghai"]},"tag_key":{"@@assign":"CostCenter"}}}}
   */
  policyContent?: string;
  /**
   * @remarks
   * The description of the tag policy.
   * 
   * The description must be 0 to 512 characters in length.
   * 
   * @example
   * This is a tag policy example.
   */
  policyDesc?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode. Set the value to USER if you use an Alibaba Cloud account or a member of a resource directory to call this API operation to create a tag policy for the Alibaba Cloud account or member.
   * *   RD: multi-account mode. Set the value to RD if you use the management account of a resource directory to call this API operation to create a tag policy for the resource directory.
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * RD
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      policyContent: 'string',
      policyDesc: 'string',
      policyName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * @example
   * p-5732750813924f90****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FDBE270D-C491-5EEC-A5CD-98245422D3F7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > Only `cn-hangzhou` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The information about the tags.
   * 
   * This parameter is required.
   */
  tagKeyValueParamList?: CreateTagsRequestTagKeyValueParamList[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKeyValueParamList: 'TagKeyValueParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKeyValueParamList: { 'type': 'array', 'itemType': CreateTagsRequestTagKeyValueParamList },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeyValueParamList)) {
      $dara.Model.validateArray(this.tagKeyValueParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94E16BB6-3FB6-1297-B5B2-ED2250F437CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * This parameter is required.
   * 
   * @example
   * p-557cb141331f41c7****
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * If no tag value is associated with a tag key, you can specify the `Key` parameter without specifying the Value parameter to delete the tag key. Otherwise, you must specify both the `Key` and `Value` parameters to delete a preset tag.
   * 
   * This parameter is required.
   * 
   * @example
   * Environment
   */
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  Only `cn-hangzhou` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
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

export class DeleteTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6E27F22C-EDA3-132E-A53F-77DE3BC2343D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The supported natural language. Valid values:
   * 
   * *   zh-CN: Chinese (default value)
   * *   en-US: English
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 632BBAE2-9C44-4212-8B51-B54742DA9713
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * This parameter is required.
   * 
   * @example
   * p-a3381efe2fe34a75****
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * >  If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this feature is required.
   * 
   * @example
   * 151266687691****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this feature is required. The value of this parameter is not case-sensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePolicyTypeRequest extends $dara.Model {
  openType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      openType: 'OpenType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePolicyTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6E27F22C-EDA3-132E-A53F-77DE3BC2343D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePolicyTypeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisablePolicyTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisablePolicyTypeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePolicyTypeRequest extends $dara.Model {
  openType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      openType: 'OpenType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePolicyTypeResponseBody extends $dara.Model {
  /**
   * @example
   * 6E27F22C-EDA3-132E-A53F-77DE3BC2343D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePolicyTypeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnablePolicyTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnablePolicyTypeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRuleReportRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * >  This parameter is required if the management account of your resource directory is used to enable the Tag Policy feature in both single-account mode and multi-account mode. The value of this parameter is not case-sensitive.
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRuleReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource non-compliance report.
   * 
   * @example
   * crp-ao0786618088006c****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 37B2AC06-89D8-5D95-98DF-3E68C12BDE05
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRuleReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateConfigRuleReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateConfigRuleReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * USER
   */
  targetType?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic information of the resource non-compliance report that is last generated.
   */
  data?: GetConfigRuleReportResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A68BD5BC-5B12-5A9B-8AE9-77884886BE10
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetConfigRuleReportResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigRuleReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConfigRuleReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  tagKeys?: string[];
  /**
   * @remarks
   * The ID of the object.
   * 
   * >  If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this feature is required.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this feature is required. The value of this parameter is not case-sensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKeys: 'TagKeys',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The effective tag policy.
   * 
   * @example
   * {\\"tags\\":{\\"costcenter\\":{\\"tag_value\\":[\\"Beijing\\",\\"Shanghai\\"],\\"tag_key\\":\\"CostCenter\\"}}}
   */
  effectivePolicy?: string;
  policyAttachments?: GetEffectivePolicyResponseBodyPolicyAttachments[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BB532282-94F5-5F56-877F-32D5E2A04F3F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      effectivePolicy: 'EffectivePolicy',
      policyAttachments: 'PolicyAttachments',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectivePolicy: 'string',
      policyAttachments: { 'type': 'array', 'itemType': GetEffectivePolicyResponseBodyPolicyAttachments },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyAttachments)) {
      $dara.Model.validateArray(this.policyAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEffectivePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEffectivePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * This parameter is required.
   * 
   * @example
   * p-557cb141331f41c7****
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the tag policy.
   */
  policy?: GetPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E7A4802-AB57-570A-9860-F15B60E1586B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The enabling type. Valid values:
   * 
   * *   TAG_POLICY: the Tag Policy feature.
   * *   VERIFY_NO_TAG: the strong verification feature.
   * 
   * @example
   * TAG_POLICY
   */
  openType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * RD
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      openType: 'OpenType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C8DF1B1-C65F-5D3A-9FDA-26A4683BB36B
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the Tag Policy feature.
   */
  statusModels?: GetPolicyEnableStatusResponseBodyStatusModels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusModels: 'StatusModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusModels: { 'type': 'array', 'itemType': GetPolicyEnableStatusResponseBodyStatusModels },
    };
  }

  validate() {
    if(Array.isArray(this.statusModels)) {
      $dara.Model.validateArray(this.statusModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyEnableStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPolicyEnableStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 50. Maximum value: 1000.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The use scenario of the tag policy. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   tags: enables tags with specified tag values to be added to resources.
   * *   rg_inherit: enables resources in a resource group to automatically inherit tags from the resource group.
   * 
   * @example
   * tags
   */
  policyType?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * @example
   * CostCenter
   */
  tagKey?: string;
  /**
   * @remarks
   * The ID of the object. This parameter specifies a filter condition for the query.
   * 
   * @example
   * 134254031178****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKey: 'TagKey',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKey: 'string',
      targetId: 'string',
      targetType: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag detection tasks.
   */
  data?: ListConfigRulesForTargetResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7126AECD-D7AD-5073-8E88-DD2BD1FC139E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListConfigRulesForTargetResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigRulesForTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigRulesForTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 50. Maximum value: 1000.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of a tag policy. This parameter specifies a filter condition for the query.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The name of a tag policy. This parameter specifies a filter condition for the query.
   */
  policyNames?: string[];
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyIds: 'PolicyIds',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      policyNames: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      userType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    if(Array.isArray(this.policyNames)) {
      $dara.Model.validateArray(this.policyNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The tag policies.
   */
  policyList?: ListPoliciesResponseBodyPolicyList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72477CFF-5B24-5E30-9861-3DD9C4BD46E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      policyList: 'PolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      policyList: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 50. Maximum value: 1000.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the object. This parameter specifies a filter condition for the query.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag policies that are attached to the object.
   */
  data?: ListPoliciesForTargetResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8C962146-AB38-516C-818C-695D4E9F2EA2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListPoliciesForTargetResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesForTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPoliciesForTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagRequest extends $dara.Model {
  tagFilter?: ListResourcesByTagRequestTagFilter;
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * *   EQUAL: exact match for resources to which the specified tag is added. This is the default value.
   * *   NOT: exact match for resources to which the specified tag is not added.
   * 
   * @example
   * EQUAL
   */
  fuzzyType?: string;
  /**
   * @remarks
   * Specifies whether to return the information of tags added to the resources. Valid values:
   * 
   * *   False: does not return the information of tags added to the resources. This is the default value.
   * *   True: returns the information of all tags added to the resources.
   * 
   * @example
   * False
   */
  includeAllTags?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 50. Maximum value: 1000.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * For more information about region IDs, see [Endpoints](https://help.aliyun.com/document_detail/2330902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition for the query.
   * 
   * *   If you set the FuzzyType parameter to EQUAL, you can set this parameter to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * *   If you set the FuzzyType parameter to NOT, you can set this parameter to a resource type provided in **Types of resources that support queries based on the NOT operator**.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::VPC::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      fuzzyType: 'FuzzyType',
      includeAllTags: 'IncludeAllTags',
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListResourcesByTagRequestTagFilter,
      fuzzyType: 'string',
      includeAllTags: 'boolean',
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.tagFilter && typeof (this.tagFilter as any).validate === 'function') {
      (this.tagFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the `next query` is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the `next query` is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the `token` used to start the next query.
   * 
   * This parameter is required.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D61FF74-61C2-5768-B01F-05FC97F24F35
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resources.
   */
  resources?: ListResourcesByTagResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListResourcesByTagResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesByTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesByTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Y3wDNwUdssyKODK****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The service code. This parameter specifies a filter condition for the query.
   * 
   * This parameter is obtained from the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * For more information about region IDs, see [Endpoints](https://help.aliyun.com/document_detail/2330902.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition for the query.
   * 
   * This parameter is obtained from the response.
   * 
   * @example
   * instance
   */
  resourceTye?: string;
  /**
   * @remarks
   * Specifies whether to return tag-related capability items. Valid values:
   * 
   * *   true: The system returns tag-related capability items.
   * *   false (default value): The system does not return tag-related capability items.
   * 
   * @example
   * false
   */
  showItems?: boolean;
  /**
   * @remarks
   * The code of the tag-related capability item. This parameter specifies a filter condition for the query.
   * 
   * For more information, see **Tag-related capability items**.
   * 
   * @example
   * TAG_CONSOLE_SUPPORT
   */
  supportCode?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceTye: 'ResourceTye',
      showItems: 'ShowItems',
      supportCode: 'SupportCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceTye: 'string',
      showItems: 'boolean',
      supportCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty, all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABC71772-F3A1-59CA-B811-4A5B0E0B72F8
   */
  requestId?: string;
  /**
   * @remarks
   * The supported resource types.
   */
  supportResourceTypes?: ListSupportResourceTypesResponseBodySupportResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supportResourceTypes: 'SupportResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      supportResourceTypes: { 'type': 'array', 'itemType': ListSupportResourceTypesResponseBodySupportResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportResourceTypes)) {
      $dara.Model.validateArray(this.supportResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSupportResourceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSupportResourceTypesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $dara.Model {
  tagFilter?: ListTagKeysRequestTagFilter;
  /**
   * @remarks
   * The type of the resource tags. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   all (default value)
   * *   custom
   * *   system
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * all
   */
  category?: string;
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * *   EQUAL (default): exact match
   * *   PREFIX: prefix-based fuzzy match
   * 
   * @example
   * EQUAL
   */
  fuzzyType?: string;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of tag keys to return on each page.
   * 
   * Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The category of the tags. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   ResourceTag: resource tags, including custom and system tags. This is the default value.
   * *   MetaTag: preset tags.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * ResourceTag
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * For more information about region IDs, see [Endpoints](https://help.aliyun.com/document_detail/2330902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition for the query.
   * 
   * Format: `ALIYUN::${ProductCode}::${ResourceType}`. All letters in the value of this parameter must be in uppercase.
   * 
   * *   `ProductCode`: the service code. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * *   `ResourceType`: the resource type. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * 
   * @example
   * ALIYUN::ECS::INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      category: 'Category',
      fuzzyType: 'FuzzyType',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListTagKeysRequestTagFilter,
      category: 'string',
      fuzzyType: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      queryType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.tagFilter && typeof (this.tagFilter as any).validate === 'function') {
      (this.tagFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the tag keys.
   */
  keys?: ListTagKeysResponseBodyKeys;
  /**
   * @remarks
   * Indicates whether the next query is required. The value of this parameter may be empty.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC09A6AA-2713-4E10-A2E9-E6C5C43A8842
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: ListTagKeysResponseBodyKeys,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.keys && typeof (this.keys as any).validate === 'function') {
      (this.keys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   Custom
   * *   System
   * *   All
   * 
   * Default value: All.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * *   If the resources belong to a service that is centrally deployed, set the value to the region ID of the resources by referring to [Regions supported by tag-related operations on resources of centrally deployed Alibaba Cloud services](https://help.aliyun.com/document_detail/2579691.html).
   * *   If the resources belong to a service that is not centrally deployed, set the value to the region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of a resource.
   * 
   * @example
   * arn:acs:ecs:cn-hangzhou:123456789****:instance/i-bp15hr53jws84akg****
   */
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The key-value pairs of tags. You can specify 1 to 10 key-value pairs.
   * 
   * If you specify multiple tags, the system queries the resources to which all these tags are added.
   * 
   * Limits:
   * 
   * *   A tag key must be 1 to 128 characters in length.
   * *   A tag value must be 1 to 128 characters in length.
   * *   Tag keys and tag values are case-sensitive.
   * *   Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceARN)) {
      $dara.Model.validateArray(this.resourceARN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the `next query` is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the `next query` is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the `token` used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 014738E0-3C7F-47D8-8FB9-469500C6F387
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tags that are added to the resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $dara.Model {
  tagFilter?: ListTagValuesRequestTagFilter;
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * *   EQUAL (default): exact match
   * *   PREFIX: prefix-based fuzzy match
   * 
   * @example
   * EQUAL
   */
  fuzzyType?: string;
  /**
   * @remarks
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of tag values to return on each page.
   * 
   * Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The category of the tags. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   ResourceTag: resource tags, including custom and system tags. This is the default value.
   * *   MetaTag: preset tags.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * ResourceTag
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * For more information about region IDs, see [Endpoints](https://help.aliyun.com/document_detail/2330902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition for the query.
   * 
   * Format: `ALIYUN::${ProductCode}::${ResourceType}`. All letters in the value of this parameter must be in uppercase.
   * 
   * *   `ProductCode`: the service code. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * *   `ResourceType`: the resource type. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * 
   * @example
   * ALIYUN::ECS::INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      fuzzyType: 'FuzzyType',
      key: 'Key',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListTagValuesRequestTagFilter,
      fuzzyType: 'string',
      key: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      queryType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.tagFilter && typeof (this.tagFilter as any).validate === 'function') {
      (this.tagFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required. The value of this parameter may be empty.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8989CA7E-D2E0-4B6D-8282-311106E80150
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tag values.
   */
  values?: ListTagValuesResponseBodyValues;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: ListTagValuesResponseBodyValues,
    };
  }

  validate() {
    if(this.values && typeof (this.values as any).validate === 'function') {
      (this.values as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagValuesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 50. Maximum value: 1000.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * This parameter is required.
   * 
   * @example
   * p-de62a0bf400e4b69****
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the object belongs to the resource directory. Valid values:
   * 
   * *   true: The object belongs to the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   false: The object does not belong to the resource directory. This value is available if you use the Tag Policy feature in single-account mode.
   * 
   * @example
   * true
   */
  isRd?: boolean;
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * >  This parameter is returned only if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * rd-3G****
   */
  rdId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2EE71C8D-6DB8-56AC-8B05-3D4C0116E6A1
   */
  requestId?: string;
  /**
   * @remarks
   * The objects to which the tag policy is attached.
   */
  targets?: ListTargetsForPolicyResponseBodyTargets[];
  static names(): { [key: string]: string } {
    return {
      isRd: 'IsRd',
      nextToken: 'NextToken',
      rdId: 'RdId',
      requestId: 'RequestId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRd: 'boolean',
      nextToken: 'string',
      rdId: 'string',
      requestId: 'string',
      targets: { 'type': 'array', 'itemType': ListTargetsForPolicyResponseBodyTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTargetsForPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTargetsForPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run for the request. Valid values:
   * 
   * *   false: The system performs the related operation based on the parameter settings in the request. This is the default value.
   * *   true: The system does not perform the related operation based on the parameter settings in the request but only verifies the parameter settings.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The document of the tag policy.
   * 
   * For more information about the syntax of a tag policy, see [Syntax of a tag policy](https://help.aliyun.com/document_detail/417436.html).
   * 
   * @example
   * {"tags":{"CostCenter":{"tag_value":{"@@assign":["Beijing","Shanghai"]},"tag_key":{"@@assign":"CostCenter"}}}}
   * 
   * **if can be null:**
   * true
   */
  policyContent?: string;
  /**
   * @remarks
   * The description of the tag policy.
   * 
   * The description must be 0 to 512 characters in length.
   * 
   * @example
   * This is a tag policy example.
   * 
   * **if can be null:**
   * true
   */
  policyDesc?: string;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * This parameter is required.
   * 
   * @example
   * p-5732750813924f90****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (_).
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCreatedByRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCreatedByResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 74F03511-FDFA-54AF-96A4-71575B41E74D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCreatedByResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenCreatedByResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenCreatedByResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * *   If the resources belong to a service that is centrally deployed, set the value to `cn-hangzhou` or to the region ID of the resources by referring to [Regions supported by tag-related operations on resources of centrally deployed Alibaba Cloud services](https://help.aliyun.com/document_detail/2579691.html).
   * *   If the resources belong to a service that is not centrally deployed, set the value to the region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of a resource.
   * 
   * This parameter is required.
   * 
   * @example
   * arn:acs:vpc:cn-hangzhou:123456789****:vpc/vpc-bp19dd90tkt6tz7wu****
   */
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The key-value pairs of tags. You can specify 1 to 10 key-value pairs.
   * 
   * If you specify multiple tags, the system adds all the tags to the specified resources.
   * 
   * Limits:
   * 
   * *   A tag key must be 1 to 128 characters in length.
   * *   A tag value must be 1 to 128 characters in length.
   * *   Tag keys and tag values are case-sensitive.
   * *   Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.
   * 
   * This parameter is required.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceARN)) {
      $dara.Model.validateArray(this.resourceARN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resources to which tags fail to be added.
   * 
   * > 
   * 
   * *   If tags are added to all resources, the value of `FailedResources` is empty.
   * 
   * *   If tags fail to be added to some or all resources, the value of `FailedResources` contains the detailed information about the resources.
   */
  failedResources?: TagResourcesResponseBodyFailedResources;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72086426-9F8C-4A60-852B-864048FD1199
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: TagResourcesResponseBodyFailedResources,
      requestId: 'string',
    };
  }

  validate() {
    if(this.failedResources && typeof (this.failedResources as any).validate === 'function') {
      (this.failedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * *   If the resources belong to a service that is centrally deployed, set the value to `cn-hangzhou` or to the region ID of the resources by referring to [Regions supported by tag-related operations on resources of centrally deployed Alibaba Cloud services](https://help.aliyun.com/document_detail/2579691.html).
   * *   If the resources belong to a service that is not centrally deployed, set the value to the region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of a resource.
   * 
   * This parameter is required.
   * 
   * @example
   * arn:acs:vpc:cn-hangzhou:123456789****:vpc/vpc-bp19dd90tkt6tz7wu****
   */
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceARN)) {
      $dara.Model.validateArray(this.resourceARN);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resources from which tags fail to be removed.
   * 
   * > 
   * 
   * *   If tags are removed from all resources, the value of FailedResources is empty.
   * 
   * *   If tags fail to be removed from some or all resources, the value of FailedResources contains the detailed information about the resources.
   */
  failedResources?: UntagResourcesResponseBodyFailedResources;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 43D12436-B10F-4469-8136-FD1C5D2B2083
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: UntagResourcesResponseBodyFailedResources,
      requestId: 'string',
    };
  }

  validate() {
    if(this.failedResources && typeof (this.failedResources as any).validate === 'function') {
      (this.failedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'us-west-1': "tag.us-east-1.aliyuncs.com",
      'cn-hangzhou-finance': "tag.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-finance-1': "tag.aliyuncs.com",
      'ap-northeast-2-pop': "tag.aliyuncs.com",
      'cn-beijing-finance-pop': "tag.aliyuncs.com",
      'cn-beijing-gov-1': "tag.aliyuncs.com",
      'cn-beijing-nu16-b01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-edge-1': "tag.aliyuncs.com",
      'cn-fujian': "tag.cn-hangzhou.aliyuncs.com",
      'cn-haidian-cm12-c01': "tag.cn-north-2-gov-1.aliyuncs.com",
      'cn-hangzhou-bj-b01': "tag.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "tag.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "tag.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-test-306': "tag.cn-hangzhou.aliyuncs.com",
      'cn-hongkong-finance-pop': "tag.aliyuncs.com",
      'cn-huhehaote-nebula-1': "tag.cn-qingdao-nebula.aliyuncs.com",
      'cn-shanghai-et15-b01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-et2-b01': "tag.aliyuncs.com",
      'cn-shanghai-inner': "tag.aliyuncs.com",
      'cn-shanghai-internal-test-1': "tag.aliyuncs.com",
      'cn-shenzhen-inner': "tag.aliyuncs.com",
      'cn-shenzhen-st4-d01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-su18-b01': "tag.aliyuncs.com",
      'cn-wuhan': "tag.aliyuncs.com",
      'cn-yushanfang': "tag.aliyuncs.com",
      'cn-zhangbei': "tag.aliyuncs.com",
      'cn-zhangbei-na61-b01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "tag.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "tag.cn-qingdao-nebula.aliyuncs.com",
      'eu-west-1-oxs': "tag.cn-shenzhen-cloudstone.aliyuncs.com",
      'rus-west-1-pop': "tag.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 绑定策略
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to attach a tag policy to the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to attach a tag policy to the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to attach the tag policy with an ID of `p-de62a0bf400e4b69****` to the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - AttachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyResponse
   */
  async attachPolicyWithOptions(request: AttachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<AttachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachPolicyResponse>(await this.callApi(params, req, runtime), new AttachPolicyResponse({}));
    } else {
      return $dara.cast<AttachPolicyResponse>(await this.execute(params, req, runtime), new AttachPolicyResponse({}));
    }

  }

  /**
   * 绑定策略
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to attach a tag policy to the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to attach a tag policy to the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to attach the tag policy with an ID of `p-de62a0bf400e4b69****` to the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - AttachPolicyRequest
   * @returns AttachPolicyResponse
   */
  async attachPolicy(request: AttachPolicyRequest): Promise<AttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  /**
   * 校验CreatedBy开通状态
   * 
   * @param request - CheckCreatedByEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCreatedByEnabledResponse
   */
  async checkCreatedByEnabledWithOptions(request: CheckCreatedByEnabledRequest, runtime: $dara.RuntimeOptions): Promise<CheckCreatedByEnabledResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCreatedByEnabled",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckCreatedByEnabledResponse>(await this.callApi(params, req, runtime), new CheckCreatedByEnabledResponse({}));
    } else {
      return $dara.cast<CheckCreatedByEnabledResponse>(await this.execute(params, req, runtime), new CheckCreatedByEnabledResponse({}));
    }

  }

  /**
   * 校验CreatedBy开通状态
   * 
   * @param request - CheckCreatedByEnabledRequest
   * @returns CheckCreatedByEnabledResponse
   */
  async checkCreatedByEnabled(request: CheckCreatedByEnabledRequest): Promise<CheckCreatedByEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCreatedByEnabledWithOptions(request, runtime);
  }

  /**
   * 关闭CreatedBy服务
   * 
   * @param request - CloseCreatedByRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseCreatedByResponse
   */
  async closeCreatedByWithOptions(request: CloseCreatedByRequest, runtime: $dara.RuntimeOptions): Promise<CloseCreatedByResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseCreatedBy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloseCreatedByResponse>(await this.callApi(params, req, runtime), new CloseCreatedByResponse({}));
    } else {
      return $dara.cast<CloseCreatedByResponse>(await this.execute(params, req, runtime), new CloseCreatedByResponse({}));
    }

  }

  /**
   * 关闭CreatedBy服务
   * 
   * @param request - CloseCreatedByRequest
   * @returns CloseCreatedByResponse
   */
  async closeCreatedBy(request: CloseCreatedByRequest): Promise<CloseCreatedByResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeCreatedByWithOptions(request, runtime);
  }

  /**
   * Creates a tag policy.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to call the API operation to create a tag policy named `test`. In this example, the Tag Policy feature in multi-account mode is used. The tag policy defines that resources to which the `CostCenter:Beijing` or `CostCenter:Shanghai` tag is added are compliant and other resources are not compliant.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyContent)) {
      query["PolicyContent"] = request.policyContent;
    }

    if (!$dara.isNull(request.policyDesc)) {
      query["PolicyDesc"] = request.policyDesc;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
    } else {
      return $dara.cast<CreatePolicyResponse>(await this.execute(params, req, runtime), new CreatePolicyResponse({}));
    }

  }

  /**
   * Creates a tag policy.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to call the API operation to create a tag policy named `test`. In this example, the Tag Policy feature in multi-account mode is used. The tag policy defines that resources to which the `CostCenter:Beijing` or `CostCenter:Shanghai` tag is added are compliant and other resources are not compliant.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * Creates predefined tags.
   * 
   * @remarks
   * ###
   * A preset tag is a tag that you create in advance and is available for the resources in all regions. You can create preset tags in the stage of tag planning and add them to specific resources in the stage of tag implementation. When you create a preset tag, you can specify only the tag key. You can specify a tag value in the future.
   * This topic provides an example on how to call the API operation to create a preset tag whose tag key is `Environment` to indicate the business environment.
   * 
   * @param request - CreateTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagsResponse
   */
  async createTagsWithOptions(request: CreateTagsRequest, runtime: $dara.RuntimeOptions): Promise<CreateTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tagKeyValueParamList)) {
      query["TagKeyValueParamList"] = request.tagKeyValueParamList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTags",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTagsResponse>(await this.callApi(params, req, runtime), new CreateTagsResponse({}));
    } else {
      return $dara.cast<CreateTagsResponse>(await this.execute(params, req, runtime), new CreateTagsResponse({}));
    }

  }

  /**
   * Creates predefined tags.
   * 
   * @remarks
   * ###
   * A preset tag is a tag that you create in advance and is available for the resources in all regions. You can create preset tags in the stage of tag planning and add them to specific resources in the stage of tag implementation. When you create a preset tag, you can specify only the tag key. You can specify a tag value in the future.
   * This topic provides an example on how to call the API operation to create a preset tag whose tag key is `Environment` to indicate the business environment.
   * 
   * @param request - CreateTagsRequest
   * @returns CreateTagsResponse
   */
  async createTags(request: CreateTagsRequest): Promise<CreateTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagsWithOptions(request, runtime);
  }

  /**
   * 删除策略
   * 
   * @remarks
   * Before you delete a tag policy, make sure that the tag policy is detached from all objects to which the tag policy is attached. For more information about how to detach a tag policy, see [DetachPolicy](https://help.aliyun.com/document_detail/429724.html).
   * This topic provides an example on how to call the API operation to delete the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
    } else {
      return $dara.cast<DeletePolicyResponse>(await this.execute(params, req, runtime), new DeletePolicyResponse({}));
    }

  }

  /**
   * 删除策略
   * 
   * @remarks
   * Before you delete a tag policy, make sure that the tag policy is detached from all objects to which the tag policy is attached. For more information about how to detach a tag policy, see [DetachPolicy](https://help.aliyun.com/document_detail/429724.html).
   * This topic provides an example on how to call the API operation to delete the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a preset tag.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to delete the preset tag whose tag key is `Environment` and tag value is `test`.
   * 
   * @param request - DeleteTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(request: DeleteTagRequest, runtime: $dara.RuntimeOptions): Promise<DeleteTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTag",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTagResponse>(await this.callApi(params, req, runtime), new DeleteTagResponse({}));
    } else {
      return $dara.cast<DeleteTagResponse>(await this.execute(params, req, runtime), new DeleteTagResponse({}));
    }

  }

  /**
   * Deletes a preset tag.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to delete the preset tag whose tag key is `Environment` and tag value is `test`.
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: DeleteTagRequest): Promise<DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * Queries the regions where the Tag service is available.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries the regions where the Tag service is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 解除策略绑定
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to detach a tag policy from the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to detach a tag policy from the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to detach the tag policy with an ID of `p-a3381efe2fe34a75****` from the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - DetachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyResponse
   */
  async detachPolicyWithOptions(request: DetachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DetachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachPolicyResponse>(await this.callApi(params, req, runtime), new DetachPolicyResponse({}));
    } else {
      return $dara.cast<DetachPolicyResponse>(await this.execute(params, req, runtime), new DetachPolicyResponse({}));
    }

  }

  /**
   * 解除策略绑定
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to detach a tag policy from the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to detach a tag policy from the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to detach the tag policy with an ID of `p-a3381efe2fe34a75****` from the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - DetachPolicyRequest
   * @returns DetachPolicyResponse
   */
  async detachPolicy(request: DetachPolicyRequest): Promise<DetachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  /**
   * 关闭策略
   * 
   * @param request - DisablePolicyTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisablePolicyTypeResponse
   */
  async disablePolicyTypeWithOptions(request: DisablePolicyTypeRequest, runtime: $dara.RuntimeOptions): Promise<DisablePolicyTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openType)) {
      query["OpenType"] = request.openType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisablePolicyType",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisablePolicyTypeResponse>(await this.callApi(params, req, runtime), new DisablePolicyTypeResponse({}));
    } else {
      return $dara.cast<DisablePolicyTypeResponse>(await this.execute(params, req, runtime), new DisablePolicyTypeResponse({}));
    }

  }

  /**
   * 关闭策略
   * 
   * @param request - DisablePolicyTypeRequest
   * @returns DisablePolicyTypeResponse
   */
  async disablePolicyType(request: DisablePolicyTypeRequest): Promise<DisablePolicyTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disablePolicyTypeWithOptions(request, runtime);
  }

  /**
   * 开通策略
   * 
   * @param request - EnablePolicyTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnablePolicyTypeResponse
   */
  async enablePolicyTypeWithOptions(request: EnablePolicyTypeRequest, runtime: $dara.RuntimeOptions): Promise<EnablePolicyTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openType)) {
      query["OpenType"] = request.openType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnablePolicyType",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnablePolicyTypeResponse>(await this.callApi(params, req, runtime), new EnablePolicyTypeResponse({}));
    } else {
      return $dara.cast<EnablePolicyTypeResponse>(await this.execute(params, req, runtime), new EnablePolicyTypeResponse({}));
    }

  }

  /**
   * 开通策略
   * 
   * @param request - EnablePolicyTypeRequest
   * @returns EnablePolicyTypeResponse
   */
  async enablePolicyType(request: EnablePolicyTypeRequest): Promise<EnablePolicyTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enablePolicyTypeWithOptions(request, runtime);
  }

  /**
   * 生成规则检测报告
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to generate a resource non-compliance report for the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to generate a resource non-compliance report for the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to generate a resource non-compliance report for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GenerateConfigRuleReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateConfigRuleReportResponse
   */
  async generateConfigRuleReportWithOptions(request: GenerateConfigRuleReportRequest, runtime: $dara.RuntimeOptions): Promise<GenerateConfigRuleReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateConfigRuleReport",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateConfigRuleReportResponse>(await this.callApi(params, req, runtime), new GenerateConfigRuleReportResponse({}));
    } else {
      return $dara.cast<GenerateConfigRuleReportResponse>(await this.execute(params, req, runtime), new GenerateConfigRuleReportResponse({}));
    }

  }

  /**
   * 生成规则检测报告
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to generate a resource non-compliance report for the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to generate a resource non-compliance report for the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to generate a resource non-compliance report for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GenerateConfigRuleReportRequest
   * @returns GenerateConfigRuleReportResponse
   */
  async generateConfigRuleReport(request: GenerateConfigRuleReportRequest): Promise<GenerateConfigRuleReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateConfigRuleReportWithOptions(request, runtime);
  }

  /**
   * Queries the basic information of the resource non-compliance report that is last generated.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the basic information of the resource non-compliance report that is last generated for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the basic information of the resource non-compliance report that is last generated for an object in the resource directory. The object can be the Root folder, a folder other than the Root folder, or a member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to query the basic information of the resource non-compliance report that is last generated for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that the ID of the report is `crp-ao0786618088006c****`.
   * 
   * @param request - GetConfigRuleReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigRuleReportResponse
   */
  async getConfigRuleReportWithOptions(request: GetConfigRuleReportRequest, runtime: $dara.RuntimeOptions): Promise<GetConfigRuleReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigRuleReport",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConfigRuleReportResponse>(await this.callApi(params, req, runtime), new GetConfigRuleReportResponse({}));
    } else {
      return $dara.cast<GetConfigRuleReportResponse>(await this.execute(params, req, runtime), new GetConfigRuleReportResponse({}));
    }

  }

  /**
   * Queries the basic information of the resource non-compliance report that is last generated.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the basic information of the resource non-compliance report that is last generated for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the basic information of the resource non-compliance report that is last generated for an object in the resource directory. The object can be the Root folder, a folder other than the Root folder, or a member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to query the basic information of the resource non-compliance report that is last generated for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that the ID of the report is `crp-ao0786618088006c****`.
   * 
   * @param request - GetConfigRuleReportRequest
   * @returns GetConfigRuleReportResponse
   */
  async getConfigRuleReport(request: GetConfigRuleReportRequest): Promise<GetConfigRuleReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRuleReportWithOptions(request, runtime);
  }

  /**
   * 查询有效策略
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the effective tag policy for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the effective tag policy for the Root folder, a folder other than the Root folder, or a member in the resource directory. You can also use a member of a resource directory to call this API operation to query the effective tag policy for the member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * An effective tag policy is obtained based on tag policy inheritance. For more information, see [Inheritance of a tag policy and calculation of an effective tag policy](https://help.aliyun.com/document_detail/417435.html).
   * This topic provides an example on how to call the API operation to query the effective tag policy for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GetEffectivePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEffectivePolicyResponse
   */
  async getEffectivePolicyWithOptions(request: GetEffectivePolicyRequest, runtime: $dara.RuntimeOptions): Promise<GetEffectivePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEffectivePolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetEffectivePolicyResponse>(await this.callApi(params, req, runtime), new GetEffectivePolicyResponse({}));
    } else {
      return $dara.cast<GetEffectivePolicyResponse>(await this.execute(params, req, runtime), new GetEffectivePolicyResponse({}));
    }

  }

  /**
   * 查询有效策略
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the effective tag policy for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the effective tag policy for the Root folder, a folder other than the Root folder, or a member in the resource directory. You can also use a member of a resource directory to call this API operation to query the effective tag policy for the member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * An effective tag policy is obtained based on tag policy inheritance. For more information, see [Inheritance of a tag policy and calculation of an effective tag policy](https://help.aliyun.com/document_detail/417435.html).
   * This topic provides an example on how to call the API operation to query the effective tag policy for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GetEffectivePolicyRequest
   * @returns GetEffectivePolicyResponse
   */
  async getEffectivePolicy(request: GetEffectivePolicyRequest): Promise<GetEffectivePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEffectivePolicyWithOptions(request, runtime);
  }

  /**
   * 查询策略
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<GetPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPolicyResponse>(await this.callApi(params, req, runtime), new GetPolicyResponse({}));
    } else {
      return $dara.cast<GetPolicyResponse>(await this.execute(params, req, runtime), new GetPolicyResponse({}));
    }

  }

  /**
   * 查询策略
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Tag Policy feature.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the status of the Tag Policy feature for the current logon account. The response shows that the Tag Policy feature in multi-account mode is enabled for the current logon account.
   * 
   * @param request - GetPolicyEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyEnableStatusResponse
   */
  async getPolicyEnableStatusWithOptions(request: GetPolicyEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetPolicyEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openType)) {
      query["OpenType"] = request.openType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyEnableStatus",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPolicyEnableStatusResponse>(await this.callApi(params, req, runtime), new GetPolicyEnableStatusResponse({}));
    } else {
      return $dara.cast<GetPolicyEnableStatusResponse>(await this.execute(params, req, runtime), new GetPolicyEnableStatusResponse({}));
    }

  }

  /**
   * Queries the status of the Tag Policy feature.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the status of the Tag Policy feature for the current logon account. The response shows that the Tag Policy feature in multi-account mode is enabled for the current logon account.
   * 
   * @param request - GetPolicyEnableStatusRequest
   * @returns GetPolicyEnableStatusResponse
   */
  async getPolicyEnableStatus(request: GetPolicyEnableStatusRequest): Promise<GetPolicyEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyEnableStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of tag detection tasks for an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag detection tasks for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag detection tasks for the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag detection tasks for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag detection task exists.
   * 
   * @param request - ListConfigRulesForTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigRulesForTargetResponse
   */
  async listConfigRulesForTargetWithOptions(request: ListConfigRulesForTargetRequest, runtime: $dara.RuntimeOptions): Promise<ListConfigRulesForTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigRulesForTarget",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListConfigRulesForTargetResponse>(await this.callApi(params, req, runtime), new ListConfigRulesForTargetResponse({}));
    } else {
      return $dara.cast<ListConfigRulesForTargetResponse>(await this.execute(params, req, runtime), new ListConfigRulesForTargetResponse({}));
    }

  }

  /**
   * Queries a list of tag detection tasks for an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag detection tasks for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag detection tasks for the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag detection tasks for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag detection task exists.
   * 
   * @param request - ListConfigRulesForTargetRequest
   * @returns ListConfigRulesForTargetResponse
   */
  async listConfigRulesForTarget(request: ListConfigRulesForTargetRequest): Promise<ListConfigRulesForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRulesForTargetWithOptions(request, runtime);
  }

  /**
   * Queries tag policies.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query all tag policies that are created for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query all tag policies that are created for the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query all tag policies that are created for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that two tag policies are created.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<ListPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
    } else {
      return $dara.cast<ListPoliciesResponse>(await this.execute(params, req, runtime), new ListPoliciesResponse({}));
    }

  }

  /**
   * Queries tag policies.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query all tag policies that are created for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query all tag policies that are created for the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query all tag policies that are created for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that two tag policies are created.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the tag policies that are attached to an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag policies that are attached to the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag policies that are attached to the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag policies that are attached to the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag policy is attached to the current logon account.
   * 
   * @param request - ListPoliciesForTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForTargetResponse
   */
  async listPoliciesForTargetWithOptions(request: ListPoliciesForTargetRequest, runtime: $dara.RuntimeOptions): Promise<ListPoliciesForTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPoliciesForTarget",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPoliciesForTargetResponse>(await this.callApi(params, req, runtime), new ListPoliciesForTargetResponse({}));
    } else {
      return $dara.cast<ListPoliciesForTargetResponse>(await this.execute(params, req, runtime), new ListPoliciesForTargetResponse({}));
    }

  }

  /**
   * Queries the tag policies that are attached to an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag policies that are attached to the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag policies that are attached to the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag policies that are attached to the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag policy is attached to the current logon account.
   * 
   * @param request - ListPoliciesForTargetRequest
   * @returns ListPoliciesForTargetResponse
   */
  async listPoliciesForTarget(request: ListPoliciesForTargetRequest): Promise<ListPoliciesForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesForTargetWithOptions(request, runtime);
  }

  /**
   * Queries resources to which a specified tag is added or resources to which a specified tag is not added.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation in the China (Shenzhen) region to query virtual private clouds (VPCs) to which the tag key `k1` is added. The response shows that the tag key is added to two VPCs.
   * 
   * @param request - ListResourcesByTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesByTagResponse
   */
  async listResourcesByTagWithOptions(request: ListResourcesByTagRequest, runtime: $dara.RuntimeOptions): Promise<ListResourcesByTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!$dara.isNull(request.includeAllTags)) {
      query["IncludeAllTags"] = request.includeAllTags;
    }

    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourcesByTag",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourcesByTagResponse>(await this.callApi(params, req, runtime), new ListResourcesByTagResponse({}));
    } else {
      return $dara.cast<ListResourcesByTagResponse>(await this.execute(params, req, runtime), new ListResourcesByTagResponse({}));
    }

  }

  /**
   * Queries resources to which a specified tag is added or resources to which a specified tag is not added.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation in the China (Shenzhen) region to query virtual private clouds (VPCs) to which the tag key `k1` is added. The response shows that the tag key is added to two VPCs.
   * 
   * @param request - ListResourcesByTagRequest
   * @returns ListResourcesByTagResponse
   */
  async listResourcesByTag(request: ListResourcesByTagRequest): Promise<ListResourcesByTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesByTagWithOptions(request, runtime);
  }

  /**
   * Queries the resource types supported by tags and tag-related capability items.
   * 
   * @remarks
   * ### [](#)Call example
   * *   Query a list of resource types supported by TagResources or UntagResources. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22TAG_CONSOLE_SUPPORT%22%7D).
   * *   Query a list of resource types supported by ListTagResources or ListResourcesByTag. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22%7D).
   * *   Query a list of resource types that support createdby tags. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22CREATED_BY_TAG_CONSOLE_SUPPORT%22%7D).
   * 
   * @param request - ListSupportResourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupportResourceTypesResponse
   */
  async listSupportResourceTypesWithOptions(request: ListSupportResourceTypesRequest, runtime: $dara.RuntimeOptions): Promise<ListSupportResourceTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceTye)) {
      query["ResourceTye"] = request.resourceTye;
    }

    if (!$dara.isNull(request.showItems)) {
      query["ShowItems"] = request.showItems;
    }

    if (!$dara.isNull(request.supportCode)) {
      query["SupportCode"] = request.supportCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSupportResourceTypes",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSupportResourceTypesResponse>(await this.callApi(params, req, runtime), new ListSupportResourceTypesResponse({}));
    } else {
      return $dara.cast<ListSupportResourceTypesResponse>(await this.execute(params, req, runtime), new ListSupportResourceTypesResponse({}));
    }

  }

  /**
   * Queries the resource types supported by tags and tag-related capability items.
   * 
   * @remarks
   * ### [](#)Call example
   * *   Query a list of resource types supported by TagResources or UntagResources. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22TAG_CONSOLE_SUPPORT%22%7D).
   * *   Query a list of resource types supported by ListTagResources or ListResourcesByTag. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22%7D).
   * *   Query a list of resource types that support createdby tags. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22CREATED_BY_TAG_CONSOLE_SUPPORT%22%7D).
   * 
   * @param request - ListSupportResourceTypesRequest
   * @returns ListSupportResourceTypesResponse
   */
  async listSupportResourceTypes(request: ListSupportResourceTypesRequest): Promise<ListSupportResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupportResourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag keys in the `cn-hangzhou` region. The response shows that the following tag keys exist: `team`, `k1`, and `k2`.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
    } else {
      return $dara.cast<ListTagKeysResponse>(await this.execute(params, req, runtime), new ListTagKeysResponse({}));
    }

  }

  /**
   * Queries tag keys.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag keys in the `cn-hangzhou` region. The response shows that the following tag keys exist: `team`, `k1`, and `k2`.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are added to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the values of the tag key `k1` in the `cn-hangzhou` region. The response shows that the value of the tag key `k1` is `v1`.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
    } else {
      return $dara.cast<ListTagValuesResponse>(await this.execute(params, req, runtime), new ListTagValuesResponse({}));
    }

  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the values of the tag key `k1` in the `cn-hangzhou` region. The response shows that the value of the tag key `k1` is `v1`.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the objects to which a tag policy is attached.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the object to which a tag policy is attached. The object is the current logon account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the objects to which a tag policy is attached. The objects include the Root folder, folders other than the Root folder, and members in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the objects to which the tag policy with an ID of `p-de62a0bf400e4b69****` is attached. In this example, the Tag Policy feature in multi-account mode is used. The response shows that the tag policy is attached to two members in the related resource directory.
   * 
   * @param request - ListTargetsForPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTargetsForPolicyResponse
   */
  async listTargetsForPolicyWithOptions(request: ListTargetsForPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ListTargetsForPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTargetsForPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTargetsForPolicyResponse>(await this.callApi(params, req, runtime), new ListTargetsForPolicyResponse({}));
    } else {
      return $dara.cast<ListTargetsForPolicyResponse>(await this.execute(params, req, runtime), new ListTargetsForPolicyResponse({}));
    }

  }

  /**
   * Queries the objects to which a tag policy is attached.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the object to which a tag policy is attached. The object is the current logon account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the objects to which a tag policy is attached. The objects include the Root folder, folders other than the Root folder, and members in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the objects to which the tag policy with an ID of `p-de62a0bf400e4b69****` is attached. In this example, the Tag Policy feature in multi-account mode is used. The response shows that the tag policy is attached to two members in the related resource directory.
   * 
   * @param request - ListTargetsForPolicyRequest
   * @returns ListTargetsForPolicyResponse
   */
  async listTargetsForPolicy(request: ListTargetsForPolicyRequest): Promise<ListTargetsForPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetsForPolicyWithOptions(request, runtime);
  }

  /**
   * 修改策略
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to change the name of a tag policy to `test`.
   * 
   * @param request - ModifyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyResponse
   */
  async modifyPolicyWithOptions(request: ModifyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyContent)) {
      query["PolicyContent"] = request.policyContent;
    }

    if (!$dara.isNull(request.policyDesc)) {
      query["PolicyDesc"] = request.policyDesc;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyPolicyResponse>(await this.callApi(params, req, runtime), new ModifyPolicyResponse({}));
    } else {
      return $dara.cast<ModifyPolicyResponse>(await this.execute(params, req, runtime), new ModifyPolicyResponse({}));
    }

  }

  /**
   * 修改策略
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to change the name of a tag policy to `test`.
   * 
   * @param request - ModifyPolicyRequest
   * @returns ModifyPolicyResponse
   */
  async modifyPolicy(request: ModifyPolicyRequest): Promise<ModifyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  /**
   * Enables createdby tags.
   * 
   * @remarks
   * createdby tags can help you analyze costs and bills and manage the costs of cloud resources in an efficient manner. You can identify the creators of resources based on the createdby tags added to the resources. createdby tags are system tags that are provided by Alibaba Cloud and automatically added to resources. The key of createdby tags is `acs:tag:createdby`.
   * 
   * @param request - OpenCreatedByRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenCreatedByResponse
   */
  async openCreatedByWithOptions(request: OpenCreatedByRequest, runtime: $dara.RuntimeOptions): Promise<OpenCreatedByResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenCreatedBy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenCreatedByResponse>(await this.callApi(params, req, runtime), new OpenCreatedByResponse({}));
    } else {
      return $dara.cast<OpenCreatedByResponse>(await this.execute(params, req, runtime), new OpenCreatedByResponse({}));
    }

  }

  /**
   * Enables createdby tags.
   * 
   * @remarks
   * createdby tags can help you analyze costs and bills and manage the costs of cloud resources in an efficient manner. You can identify the creators of resources based on the createdby tags added to the resources. createdby tags are system tags that are provided by Alibaba Cloud and automatically added to resources. The key of createdby tags is `acs:tag:createdby`.
   * 
   * @param request - OpenCreatedByRequest
   * @returns OpenCreatedByResponse
   */
  async openCreatedBy(request: OpenCreatedByRequest): Promise<OpenCreatedByResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openCreatedByWithOptions(request, runtime);
  }

  /**
   * Adds tags to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](https://help.aliyun.com/document_detail/156983.html).
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Adds tags to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](https://help.aliyun.com/document_detail/156983.html).
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * After you remove a tag, the tag is automatically deleted within 24 hours if it is not added to other resources.
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * After you remove a tag, the tag is automatically deleted within 24 hours if it is not added to other resources.
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
