// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @example
   * rg-aek2mcq***
   */
  newResourceGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * demo.aliyun.com-waf
   */
  resourceId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * defenseresource
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 0A916D48-D206-5654-8D37-***
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearMajorProtectionBlackIpRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the IP address blacklist rule for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 20012033
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the IP address blacklist rule template for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 5132
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearMajorProtectionBlackIpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearMajorProtectionBlackIpResponseBody;
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
      body: ClearMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDefenseTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-lbj****x10g
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection template that you want to copy.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDefenseTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the new protection template.
   * 
   * @example
   * 12346
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyDefenseTemplateResponseBody;
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
      body: CopyDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listen?: CreateCloudResourceRequestListen;
  /**
   * @example
   * 123
   */
  ownerUserId?: string;
  redirect?: CreateCloudResourceRequestRedirect;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      listen: 'Listen',
      ownerUserId: 'OwnerUserId',
      redirect: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      listen: CreateCloudResourceRequestListen,
      ownerUserId: 'string',
      redirect: CreateCloudResourceRequestRedirect,
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listenShrink?: string;
  /**
   * @example
   * 123
   */
  ownerUserId?: string;
  redirectShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      ownerUserId: 'OwnerUserId',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      listenShrink: 'string',
      ownerUserId: 'string',
      redirectShrink: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceResponseBody extends $tea.Model {
  /**
   * @example
   * lb-***
   */
  cloudResourceId?: string;
  /**
   * @example
   * 66A98669-ER12-WE34-23PO-301469*****E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCloudResourceResponseBody;
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
      body: CreateCloudResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The protected objects that you want to add to the protected object group. You can add multiple protected objects to a protected object group at the same time. You can specify multiple protected objects. Separate them with commas (,).
   * 
   * @example
   * test1.aliyundoc.com,test2.aliyundoc.com
   */
  addList?: string;
  /**
   * @remarks
   * The description of the protected object group.
   * 
   * @example
   * test_domain
   */
  description?: string;
  /**
   * @remarks
   * The name of the protected object group that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * group221
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addList: 'AddList',
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addList: 'string',
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D69B341-4F97-58E7-9E16-1B17FE7A9E98
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDefenseResourceGroupResponseBody;
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
      body: CreateDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The module to which the protection rule that you want to create belongs.
   * 
   * *   **waf_group:** the basic protection rule module.
   * *   **antiscan:** the scan protection module.
   * *   **ip_blacklist:** the IP address blacklist module.
   * *   **custom_acl:** the custom rule module.
   * *   **whitelist:** the whitelist module.
   * *   **region_block:** the region blacklist module.
   * *   **custom_response:** the custom response module.
   * *   **cc:** the HTTP flood protection module.
   * *   **tamperproof:** the website tamper-proofing module.
   * *   **dlp:** the data leakage prevention module.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The configurations of the protection rule. Specify a string that contains multiple parameters in the JSON format.
   * 
   * >  The parameters vary based on the value of the **DefenseScene** parameter.**** For more information, see the "**Protection rule parameters**" section in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * For more information, see the following section
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the rule template for which you want to create a protection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1122
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      rules: 'Rules',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      rules: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 26E46541-7AAB-5565-801D-F14DBDC5F186
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDefenseRuleResponseBody;
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
      body: CreateDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The scenario in which you want to use the protection rule template. For more information, see the description of the **DefenseScene** parameter in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The description of the protection rule template.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the protection rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * test221
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection rule template that you want to create. Set the value to **custom**. The value specifies that the protection rule template is a custom template.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection rule template. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection rule template. Valid values:
   * 
   * *   **user_default:** default template.
   * *   **user_custom:** custom template.
   * 
   * This parameter is required.
   * 
   * @example
   * user_default
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      description: 'Description',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      description: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F48ABDF7-D777-5F26-892A-57349765D7A9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * @example
   * 2212
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDefenseTemplateResponseBody;
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
      body: CreateDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The mode in which you want to add the domain name to WAF. Valid values:
   * 
   * *   **share:** adds the domain name to WAF in CNAME record mode. This is the default value.
   * *   **hybrid_cloud_cname:** adds the domain name to WAF in hybrid cloud reverse proxy mode.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name that you want to add to WAF.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   * 
   * This parameter is required.
   */
  listen?: CreateDomainRequestListen;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   * 
   * This parameter is required.
   */
  redirect?: CreateDomainRequestRedirect;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listen: CreateDomainRequestListen,
      redirect: CreateDomainRequestRedirect,
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The mode in which you want to add the domain name to WAF. Valid values:
   * 
   * *   **share:** adds the domain name to WAF in CNAME record mode. This is the default value.
   * *   **hybrid_cloud_cname:** adds the domain name to WAF in hybrid cloud reverse proxy mode.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name that you want to add to WAF.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   * 
   * This parameter is required.
   */
  listenShrink?: string;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   * 
   * This parameter is required.
   */
  redirectShrink?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listenShrink: 'string',
      redirectShrink: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the domain name.
   */
  domainInfo?: CreateDomainResponseBodyDomainInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: CreateDomainResponseBodyDomainInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
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
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridCloudGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the node resides. Specify the parameter in the Carrier code-Continent code-City code format.
   * 
   * @example
   * aliyun-asiapacific-beijing
   */
  backSourceMark?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clusterId?: number;
  /**
   * @remarks
   * The name of the node group.
   * 
   * This parameter is required.
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * *   **protect**
   * *   **control**
   * *   **storage**
   * *   **controlStorage**
   * 
   * This parameter is required.
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the server used for load balancing.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.3.3.3
   */
  loadBalanceIp?: string;
  /**
   * @remarks
   * The region in which the node resides. Specify the parameter in the Carrier code-Continent code-City code format.
   * 
   * @example
   * 0-410-0
   */
  locationCode?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backSourceMark: 'BackSourceMark',
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      loadBalanceIp: 'LoadBalanceIp',
      locationCode: 'LocationCode',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backSourceMark: 'string',
      clusterId: 'number',
      groupName: 'string',
      groupType: 'string',
      instanceId: 'string',
      loadBalanceIp: 'string',
      locationCode: 'string',
      regionId: 'string',
      remark: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridCloudGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48F7C7BA-0932-50EA-89AD-5B0E1***274
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridCloudGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHybridCloudGroupResponseBody;
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
      body: CreateHybridCloudGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMajorProtectionBlackIpRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the IP address blacklist.
   * 
   * @example
   * Protection for major events
   */
  description?: string;
  /**
   * @remarks
   * The time after which the IP address blacklist becomes invalid. Unit: seconds.
   * 
   * >  If you set the value to **0**, the blacklist is permanently valid.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716528465
   */
  expiredTime?: number;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-2r42s6y****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP addresses that you want to add to the IP address blacklist. CIDR blocks and IP addresses are supported. IPv4 and IPv6 addresses are supported. Separate the CIDR blocks or IP addresses with commas (,). For more information, see [Protection for major events](https://help.aliyun.com/document_detail/425591.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX,192.0.XX.XX/24
   */
  ipList?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the IP address blacklist rule for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 232324
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the IP address blacklist rule template for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 2221
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expiredTime: 'number',
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMajorProtectionBlackIpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D****
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMajorProtectionBlackIpResponseBody;
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
      body: CreateMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account IDs of the members that you want to add. You can add up to 10 members at the same time.
   * 
   * This parameter is required.
   */
  memberAccountIds?: string[];
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source IP address of the request. The system automatically obtains the value of this parameter.
   * 
   * @example
   * 1.1.X.X
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberAccountIds: 'MemberAccountIds',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberAccountIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66A98669-ER12-WE34-23PO-301469*****E
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMemberAccountsResponseBody;
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
      body: CreateMemberAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostpaidInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm4gh****wela
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostpaidInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-x0r****gr1i
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73A4E786-8235-50C0-9631-87C8****4A36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostpaidInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePostpaidInstanceResponseBody;
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
      body: CreatePostpaidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSM2CertRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the SM certificate.
   * 
   * @example
   * test-sm2
   */
  certName?: string;
  /**
   * @remarks
   * The content of the SM certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * ***
   * -----END CERTIFICATE-----
   */
  encryptCertificate?: string;
  /**
   * @remarks
   * The private key of the SM certificate.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   * ***
   * -----END PRIVATE KEY-----
   */
  encryptPrivateKey?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The content of the signing certificate for the SM certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * ***
   * -----END CERTIFICATE-----
   */
  signCertificate?: string;
  /**
   * @remarks
   * The private key of the signing certificate for the SM certificate.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   * ***
   * -----END PRIVATE KEY-----
   */
  signPrivateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      encryptCertificate: 'EncryptCertificate',
      encryptPrivateKey: 'EncryptPrivateKey',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      signCertificate: 'SignCertificate',
      signPrivateKey: 'SignPrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      encryptCertificate: 'string',
      encryptPrivateKey: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      signCertificate: 'string',
      signPrivateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSM2CertResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * ***-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSM2CertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSM2CertResponseBody;
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
      body: CreateSM2CertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecAbnormalRequest extends $tea.Model {
  /**
   * @example
   * c0a96***4b9cd303467402a63dcc
   */
  abnormalId?: string;
  /**
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
   */
  instanceId?: string;
  /**
   * @example
   * cn
   */
  region?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm2th****v6ay
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalId: 'AbnormalId',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalId: 'string',
      clusterId: 'string',
      instanceId: 'string',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecAbnormalResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-7B***11AE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecAbnormalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApisecAbnormalResponseBody;
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
      body: DeleteApisecAbnormalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecEventRequest extends $tea.Model {
  /**
   * @example
   * 433
   */
  clusterId?: string;
  /**
   * @example
   * 0b7ab137a065aab7656986***11db
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11sr5****
   */
  instanceId?: string;
  /**
   * @example
   * cn
   */
  region?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      eventId: 'EventId',
      instanceId: 'InstanceId',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      eventId: 'string',
      instanceId: 'string',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApisecEventResponseBody;
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
      body: DeleteApisecEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lb-bp1*****jqnnqk5uj2p
   */
  resourceInstanceId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      port: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceProduct: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudResourceResponseBody extends $tea.Model {
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-***
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCloudResourceResponseBody;
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
      body: DeleteCloudResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the protected object group that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * group221
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25BE1169-9AE4-5D7D-8293-C33242ABB549
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDefenseResourceGroupResponseBody;
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
      body: DeleteDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the protection rules that you want to delete. Separate the IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 2223455,23354,465565
   */
  ruleIds?: string;
  /**
   * @remarks
   * The ID of the protection rule template to which the protection rule that you want to delete belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2221
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleIds: 'RuleIds',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleIds: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2EC856FE-6D31-5861-8275-E5DEDB539089
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDefenseRuleResponseBody;
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
      body: DeleteDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule template that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 3155
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E2DE6F11-6FED-5909-95F2-2520B58C5BC7
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDefenseTemplateResponseBody;
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
      body: DeleteDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The mode in which the domain name is added to WAF. Valid values:
   * 
   * *   **share:** CNAME record mode. This is the default value.
   * *   **hybrid_cloud_cname:** hybrid cloud reverse proxy mode.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      domainId: 'DomainId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      domainId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
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
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMajorProtectionBlackIpRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address blacklist for major event protection that you want to delete. You can specify multiple CIDR blocks or IP addresses. IPv4 and IPv6 addresses are supported. Separate the CIDR blocks or IP addresses with commas (,). For more information, see [Protection for major events](https://help.aliyun.com/document_detail/425591.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX,192.0.XX.XX/24
   */
  ipList?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the IP address blacklist rule for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 20013135
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the IP address blacklist rule template for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 5332
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMajorProtectionBlackIpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMajorProtectionBlackIpResponseBody;
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
      body: DeleteMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_esasdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the managed member.
   * 
   * This parameter is required.
   * 
   * @example
   * 131***********39
   */
  memberAccountId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source IP address of the request. The system automatically obtains the value of this parameter.
   * 
   * @example
   * 0.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberAccountId: 'MemberAccountId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberAccountId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5ABE714C-8890-5D7E-A08B-45CB****5473
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMemberAccountResponseBody;
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
      body: DeleteMemberAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDelegatedStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDelegatedStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 10***********34
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account. This parameter is returned only if the account is the delegated administrator account.
   * 
   * @example
   * account_test
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud account is the delegated administrator account of the WAF instance.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  delegatedStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8161375D-5958-5627-BFDE-DF14****3E87
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      delegatedStatus: 'DelegatedStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      delegatedStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDelegatedStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountDelegatedStatusResponseBody;
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
      body: DescribeAccountDelegatedStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticRequest extends $tea.Model {
  /**
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @example
   * 1687313820
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf-cn-45919n***
   */
  instanceId?: string;
  /**
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn
   */
  region?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * 1682571600
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticResponseBody extends $tea.Model {
  data?: DescribeApisecAbnormalDomainStatisticResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014***B11AE
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecAbnormalDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecAbnormalDomainStatisticResponseBody;
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
      body: DescribeApisecAbnormalDomainStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendRequest extends $tea.Model {
  /**
   * @example
   * 590
   */
  clusterId?: string;
  /**
   * @example
   * 1683183599
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-ww**b06
   */
  instanceId?: string;
  /**
   * @example
   * cn
   */
  region?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek**7uq
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * 1668496310
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendResponseBody extends $tea.Model {
  data?: DescribeApisecAssetTrendResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecAssetTrendResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecAssetTrendResponseBody;
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
      body: DescribeApisecAssetTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticRequest extends $tea.Model {
  /**
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @example
   * 1686895256
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn
   */
  region?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvyknl****fa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * 1668496310
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticResponseBody extends $tea.Model {
  data?: DescribeApisecEventDomainStatisticResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 66A98669-*******-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecEventDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecEventDomainStatisticResponseBody;
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
      body: DescribeApisecEventDomainStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The configurations of API security log subscription.
   */
  deliveryConfigs?: DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryConfigs: 'DeliveryConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryConfigs: { 'type': 'array', 'itemType': DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecLogDeliveriesResponseBody;
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
      body: DescribeApisecLogDeliveriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticRequest extends $tea.Model {
  /**
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @example
   * 1686895256
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn
   */
  region?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * 1668496310
   */
  startTime?: number;
  /**
   * @example
   * request
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticResponseBody extends $tea.Model {
  data?: DescribeApisecSensitiveDomainStatisticResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 56B40D30-4960-4F19-B7D5-2B1F***6CB70
   */
  requestId?: string;
  /**
   * @example
   * 27
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecSensitiveDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecSensitiveDomainStatisticResponseBody;
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
      body: DescribeApisecSensitiveDomainStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsLogStoresRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where logs are stored.
   * 
   * >  You can call the [DescribeUserSlsLogRegions](https://help.aliyun.com/document_detail/2712598.html) operation to query available log storage regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
   * 
   * This parameter is required.
   * 
   * @example
   * apisec-project-14316572********
   */
  projectName?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logRegionId: 'string',
      projectName: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsLogStoresResponseBody extends $tea.Model {
  /**
   * @remarks
   * The names of the Logstores in Simple Log Service.
   */
  logStores?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStores: 'LogStores',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStores: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsLogStoresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecSlsLogStoresResponseBody;
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
      body: DescribeApisecSlsLogStoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsProjectsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where logs are stored.
   * 
   * >  You can call the [DescribeUserSlsLogRegions](https://help.aliyun.com/document_detail/2712598.html) operation to query available log storage regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logRegionId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsProjectsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The names of the projects in Simple Log Service.
   */
  projects?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projects: 'Projects',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projects: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecSlsProjectsResponseBody;
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
      body: DescribeApisecSlsProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-uax****3k0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the certificate.
   */
  certDetail?: DescribeCertDetailResponseBodyCertDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C115DBE-8E53-5A12-9CAF-FD3F****CDF6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certDetail: 'CertDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDetail: DescribeCertDetailResponseBodyCertDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertDetailResponseBody;
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
      body: DescribeCertDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the encryption algorithm. Valid values:
   * 
   * *   **NotSM2**: The encryption algorithm is not the SM2 algorithm. This is the default value.
   * *   **SM2**: The encryption algorithm is the SM2 algorithm.
   * 
   * @example
   * SM2
   */
  algorithm?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5yd****tb02
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmoiy****p2oq
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      domain: 'Domain',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      domain: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The certificates.
   */
  certs?: DescribeCertsResponseBodyCerts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 19511B0D-5AE0-5600-BB8A-DC2C8345****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeCertsResponseBodyCerts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertsResponseBody;
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
      body: DescribeCertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 443
   */
  port?: string;
  /**
   * @example
   * https
   */
  protocol?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lb-2zeugkfj81jvo****4tqm
   */
  resourceInstanceId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * clb7
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      port: 'Port',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      port: 'string',
      protocol: 'string',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceProduct: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBody extends $tea.Model {
  accessPortDetails?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails[];
  /**
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPortDetails: 'AccessPortDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPortDetails: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudResourceAccessPortDetailsResponseBody;
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
      body: DescribeCloudResourceAccessPortDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessedPortsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lb-bp1*****jqnnqk5uj2p
   */
  resourceInstanceId?: string;
  /**
   * @example
   * rg-aekzwwkpn****5i
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessedPortsResponseBody extends $tea.Model {
  http?: number[];
  https?: number[];
  /**
   * @example
   * C1823E96-EF4B-5BD2-9E02-1D18****3ED8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': 'number' },
      https: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessedPortsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudResourceAccessedPortsResponseBody;
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
      body: DescribeCloudResourceAccessedPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-lbj****cn0c
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 11769793******
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The domain name. You can use this parameter if you set ResourceProduct to fc or sae.
   * 
   * @example
   * fc-domain-test
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The function name. You can use this parameter if you set ResourceProduct to fc.
   * 
   * @example
   * fc-test
   */
  resourceFunction?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * alb-43glijk0fr****gths
   */
  resourceInstanceId?: string;
  /**
   * @example
   * test-name
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm4gh****wela
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * alb-name
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. Valid values:
   * 
   * *   **alb**: Application Load Balancer (ALB).
   * *   **mse**: Microservices Engine (MSE).
   * *   **fc**: Function Compute.
   * *   **sae**: Serverless App Engine (SAE).
   * 
   * >  Different cloud services are available in different regions. The specified cloud service must be available in the specified region.
   * 
   * @example
   * alb
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the resource. For information about region IDs, see the following table.
   * 
   * >  Different cloud services are available in different regions. The specified cloud service must be available in the specified region.
   * 
   * @example
   * cn-beijing
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The route name. You can use this parameter if you set ResourceProduct to mse.
   * 
   * @example
   * mse-default-traffic
   */
  resourceRouteName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceDomain: 'ResourceDomain',
      resourceFunction: 'ResourceFunction',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
      resourceRouteName: 'ResourceRouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceDomain: 'string',
      resourceFunction: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
      resourceRouteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cloud service resources that are added to WAF.
   */
  cloudResources?: DescribeCloudResourcesResponseBodyCloudResources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C327F81A-CCE2-5B21-817C-F93E29C5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud service resources returned.
   * 
   * @example
   * 121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudResources: 'CloudResources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResources: { 'type': 'array', 'itemType': DescribeCloudResourcesResponseBodyCloudResources },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudResourcesResponseBody;
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
      body: DescribeCloudResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameCountRequest extends $tea.Model {
  /**
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameCountResponseBody extends $tea.Model {
  cnameCount?: DescribeCnameCountResponseBodyCnameCount;
  /**
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameCount: 'CnameCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameCount: DescribeCnameCountResponseBodyCnameCount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCnameCountResponseBody;
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
      body: DescribeCnameCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance that you want to query.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether DDoS attacks occur on specific domain names.
   */
  DDoSStatus?: DescribeDDoSStatusResponseBodyDDoSStatus[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSStatus: 'DDoSStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSStatus: { 'type': 'array', 'itemType': DescribeDDoSStatusResponseBodyDDoSStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDoSStatusResponseBody;
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
      body: DescribeDDoSStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultHttpsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf-cn-7pp26f1****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultHttpsResponseBody extends $tea.Model {
  defaultHttps?: DescribeDefaultHttpsResponseBodyDefaultHttps;
  /**
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultHttps: 'DefaultHttps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultHttps: DescribeDefaultHttpsResponseBodyDefaultHttps,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultHttpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefaultHttpsResponseBody;
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
      body: DescribeDefaultHttpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-4xl****i60i
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object that you want to query. Only exact queries are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com-waf
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 439AADF2-368C-5E98-B14E-3086****0573
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the protected object.
   */
  resource?: DescribeDefenseResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: DescribeDefenseResourceResponseBodyResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceResponseBody;
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
      body: DescribeDefenseResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the protected object group whose information you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * group221
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the protected object group.
   */
  group?: DescribeDefenseResourceGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E67D21C6-5376-5F94-B745-70E08D03E3CB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: DescribeDefenseResourceGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceGroupResponseBody;
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
      body: DescribeDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupNamesRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the protected object group. Fuzzy queries are supported.
   * 
   * @example
   * example-group
   */
  groupNameLike?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-lbj****cc03
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekzwwk****cv5i
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupNameLike: 'GroupNameLike',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNameLike: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupNamesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The names of the protected object groups.
   */
  groupNames?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59DA4258-2F32-5095-B283-57AC****70B3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupNames: 'GroupNames',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceGroupNamesResponseBody;
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
      body: DescribeDefenseResourceGroupNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the protected object group that you want to query. Fuzzy queries are supported.
   * 
   * @example
   * demoGroupName
   */
  groupNameLike?: string;
  /**
   * @remarks
   * The names of the protected object groups that you want to query. Separate multiple names with commas (,).
   * 
   * @example
   * groupName1,groupName2
   */
  groupNames?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-wwo36****0i
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmxc7lf****eq
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupNameLike: 'GroupNameLike',
      groupNames: 'GroupNames',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNameLike: 'string',
      groupNames: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of protected object groups.
   */
  groups?: DescribeDefenseResourceGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFEC5C77-049B-5E88-A5B6-CB0C****B66E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeDefenseResourceGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceGroupsResponseBody;
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
      body: DescribeDefenseResourceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceNamesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-9lb****5s03
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object that you want to query.
   * 
   * @example
   * example.xxxxaliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekzd4c****pdwy
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceNamesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1823E96-EF4B-5BD2-9E02-1D18****3ED8
   */
  requestId?: string;
  /**
   * @remarks
   * The names of the protected objects.
   */
  resources?: string[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 75
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceNamesResponseBody;
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
      body: DescribeDefenseResourceNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-9lb36****0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object or protected object group that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxhemicals.cn-waf
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2ax2y5****pi
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the protected resource. Valid values:
   * 
   * *   **single**: protected object. This is the default value.
   * *   **group**: protected object group.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * @example
   * 20111098
   */
  ruleId?: number;
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * *   **defense**: defense rule. This is the default value.
   * *   **whitelist**: whitelist rule.
   * 
   * @example
   * whitelist
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      ruleId: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2305CEB0-BA5A-5543-A1D3-3F1D0891****
   */
  requestId?: string;
  /**
   * @remarks
   * The protection templates.
   */
  templates?: DescribeDefenseResourceTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeDefenseResourceTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceTemplatesResponseBody;
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
      body: DescribeDefenseResourceTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query conditions. Specify the value of this parameter as a string in the JSON format.
   * 
   * >  The results vary based on the query condition. For more information, see the "**Query parameters**" section in this topic.
   * 
   * @example
   * {\\"product\\":\\"waf\\"}
   */
  query?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The tags of the resources that you want to query. You can specify up to 20 tags.
   */
  tag?: DescribeDefenseResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDefenseResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 618F2626-DB27-5187-8C6C-4E61A491DF29
   */
  requestId?: string;
  /**
   * @remarks
   * The protected objects.
   */
  resources?: DescribeDefenseResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 73
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeDefenseResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourcesResponseBody;
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
      body: DescribeDefenseResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20026192
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the protection rule template to which the protection rule that you want to query belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10318
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the protection rule. The value is a JSON string that contains multiple parameters.
   */
  rule?: DescribeDefenseRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: DescribeDefenseRuleResponseBodyRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseRuleResponseBody;
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
      body: DescribeDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query conditions. Specify a string that contains multiple parameters in the JSON format.
   * 
   * >  The results vary based on the query conditions. For more information, see the "**Query parameters**" section in this topic.
   * 
   * @example
   * {\\\\"name\\\\":\\\\"IP address blocking_20220822_10\\\\",\\\\"scene\\\\":\\\\"custom_acl\\\\",\\\\"templateId\\\\":5327}
   */
  query?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of protection rule that you want to query. Valid values:
   * 
   * *   **whitelist:** whitelist rule.
   * *   **defense:** defense rule. This is the default value.
   * 
   * @example
   * whitelist
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 80736FA5-FA87-55F6-AA69-C5477C6FE6D0
   */
  requestId?: string;
  /**
   * @remarks
   * An array of protection rules.
   */
  rules?: DescribeDefenseRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeDefenseRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseRulesResponseBody;
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
      body: DescribeDefenseRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1333
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the template.
   */
  template?: DescribeDefenseTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: DescribeDefenseTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseTemplateResponseBody;
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
      body: DescribeDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateValidGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The scenario in which the protection template is used.
   * 
   * *   **waf_group**: basic protection.
   * *   **antiscan**: scan protection.
   * *   **ip_blacklist**: IP address blacklist.
   * *   **custom_acl**: custom rule.
   * *   **whitelist**: whitelist.
   * *   **region_block**: region blacklist.
   * *   **custom_response**: custom response.
   * *   **cc**: HTTP flood protection.
   * *   **tamperproof**: website tamper-proofing.
   * *   **dlp**: data leakage prevention.
   * 
   * This parameter is required.
   * 
   * @example
   * region_block
   */
  defenseScene?: string;
  /**
   * @remarks
   * The name of the protected object group that you want to query.
   * 
   * @example
   * group221
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-nwy****pf0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm2th****v6ay
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      groupName: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateValidGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The names of the protected object groups.
   */
  groups?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EA4B39A-9C0C-5E57-993E-30B6****3AD0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 27
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateValidGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseTemplateValidGroupsResponseBody;
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
      body: DescribeDefenseTemplateValidGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * The scenario in which the protection template is used.
   * 
   * *   **waf_group**: basic protection.
   * *   **antiscan**: scan protection.
   * *   **ip_blacklist**: IP address blacklist.
   * *   **custom_acl**: custom rule.
   * *   **whitelist**: whitelist.
   * *   **region_block**: region blacklist.
   * *   **custom_response**: custom response.
   * *   **cc**: HTTP flood protection.
   * *   **tamperproof**: website tamper-proofing.
   * *   **dlp**: data leakage prevention.
   * 
   * @example
   * region_block
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario in which the protection template is used. Valid values:
   * 
   * *   **web**: bot management for website protection.
   * *   **app**: bot management for app protection.
   * *   **basic**: bot management for basic protection.
   * 
   * @example
   * basic
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-pe33b****03
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object or protected object group.
   * 
   * >  If you specify ResourceType, you must specify this parameter.
   * 
   * @example
   * xxxqiu.cc-ecs
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmvyknl****fa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the protected resource. Valid values:
   * 
   * *   **single**: protected object. This is the default value.
   * *   **group**: protected object group.
   * 
   * >  If you specify Resource, you must specify this parameter.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the protection template. Valid values:
   * 
   * *   **user_default**: default template.
   * *   **user_custom**: custom template.
   * 
   * @example
   * user_default
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      templateId: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F26D2F1-E288-5104-8518-05E240E3****
   */
  requestId?: string;
  /**
   * @remarks
   * The protection templates.
   */
  templates?: DescribeDefenseTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeDefenseTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseTemplatesResponseBody;
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
      body: DescribeDefenseTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDNSRecordRequest extends $tea.Model {
  /**
   * @remarks
   * The domain name whose DNS settings you want to check.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-nwy****is02
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDNSRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status of the DNS settings. Valid values:
   * 
   * *   **cnameMatched**: The DNS settings are properly configured.
   * *   **vipMatched**: An A record maps the domain name to the WAF virtual IP address (VIP).
   * *   **wafVip**: An A record maps the domain name to another WAF VIP.
   * *   **unRecord**: The domain name does not have a DNS record.
   * *   **unUsed**: The domain name is not pointed to WAF.
   * *   **checkTimeout**: The check times out.
   * 
   * @example
   * cnameMatched
   */
  DNSStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DNSStatus: 'DNSStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNSStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDNSRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainDNSRecordResponseBody;
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
      body: DescribeDomainDNSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The domain name that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the SSL certificate.
   */
  certDetail?: DescribeDomainDetailResponseBodyCertDetail;
  /**
   * @remarks
   * The CNAME that is assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxcvdaf.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   */
  listen?: DescribeDomainDetailResponseBodyListen;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   */
  redirect?: DescribeDomainDetailResponseBodyRedirect;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BAEF9CA9-66A0-533E-BD09-5D5D7AA8****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The information about the SM certificate.
   */
  SM2CertDetail?: DescribeDomainDetailResponseBodySM2CertDetail;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1:** The domain name is in a normal state.
   * *   **2:** The domain name is being created.
   * *   **3:** The domain name is being modified.
   * *   **4:** The domain name is being released.
   * *   **5:** WAF no longer forwards traffic of the domain name.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      certDetail: 'CertDetail',
      cname: 'Cname',
      domain: 'Domain',
      listen: 'Listen',
      redirect: 'Redirect',
      requestId: 'RequestId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      SM2CertDetail: 'SM2CertDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDetail: DescribeDomainDetailResponseBodyCertDetail,
      cname: 'string',
      domain: 'string',
      listen: DescribeDomainDetailResponseBodyListen,
      redirect: DescribeDomainDetailResponseBodyRedirect,
      requestId: 'string',
      resourceManagerResourceGroupId: 'string',
      SM2CertDetail: DescribeDomainDetailResponseBodySM2CertDetail,
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainDetailResponseBody;
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
      body: DescribeDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  /**
   * @remarks
   * An array of HTTPS listener ports.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The tag of the resource. You can specify up to 20 tags.
   */
  tag?: DescribeDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
      domain: 'Domain',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
      domain: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The domain names that are added to WAF in CNAME record mode.
   */
  domains?: DescribeDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABF68BB3-2C48-5FA4-9750-D5FE55700E36
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 146
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainsResponseBody;
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
      body: DescribeDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowChartRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time interval. Unit: seconds. The value must be an integral multiple of 60.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      interval: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowChartResponseBody extends $tea.Model {
  /**
   * @remarks
   * The traffic statistics.
   */
  flowChart?: DescribeFlowChartResponseBodyFlowChart[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFA71416-670E-585D-AAE6-E7BBEE248FAB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowChart: 'FlowChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowChart: { 'type': 'array', 'itemType': DescribeFlowChartResponseBodyFlowChart },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowChartResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowChartResponseBody;
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
      body: DescribeFlowChartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386340
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F0E0B9A-B518-5C6D-BEFC-A373DDE4F652
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 protected objects that receive requests.
   */
  ruleHitsTopResource?: DescribeFlowTopResourceResponseBodyRuleHitsTopResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopResource: 'RuleHitsTopResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopResource: { 'type': 'array', 'itemType': DescribeFlowTopResourceResponseBodyRuleHitsTopResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowTopResourceResponseBody;
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
      body: DescribeFlowTopResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386340
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 520D4E4C-B8EC-5602-ACB6-4D378ACBA28D
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 URLs that are used to initiate requests.
   */
  ruleHitsTopUrl?: DescribeFlowTopUrlResponseBodyRuleHitsTopUrl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUrl: 'RuleHitsTopUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUrl: { 'type': 'array', 'itemType': DescribeFlowTopUrlResponseBodyRuleHitsTopUrl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowTopUrlResponseBody;
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
      body: DescribeFlowTopUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClusterRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clusterId?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-uqm33n***02
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **pullin**: The traffic redirection rule of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pullin
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClusterRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  clusterRule?: DescribeHybridCloudClusterRuleResponseBodyClusterRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F29A6D2-9EB6-526D-A997-36888**99CB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterRule: 'ClusterRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterRule: DescribeHybridCloudClusterRuleResponseBodyClusterRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClusterRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudClusterRuleResponseBody;
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
      body: DescribeHybridCloudClusterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClustersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-uqm35****02
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClustersResponseBody extends $tea.Model {
  clusterInfos?: DescribeHybridCloudClustersResponseBodyClusterInfos[];
  /**
   * @example
   * 66A98669-ER12-WE34-23PO-301469*****E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfos: 'ClusterInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfos: { 'type': 'array', 'itemType': DescribeHybridCloudClustersResponseBodyClusterInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudClustersResponseBody;
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
      body: DescribeHybridCloudClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * @example
   * 428
   */
  clusterId?: number;
  /**
   * @remarks
   * The type of proxy cluster that is used. Valid values:
   * 
   * *   **service**: service-based traffic mirroring.
   * *   **cname**: reverse proxy.
   * 
   * @example
   * cname
   */
  clusterProxyType?: string;
  /**
   * @remarks
   * The name of the node group that you want to query.
   * 
   * @example
   * groupName1
   */
  groupName?: number;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * *   **protect**
   * *   **control**
   * *   **storage**
   * *   **controlStorage**
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-********w0b
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterProxyType: 'ClusterProxyType',
      groupName: 'GroupName',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      clusterProxyType: 'string',
      groupName: 'number',
      groupType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The node groups.
   */
  groups?: DescribeHybridCloudGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 045660E7-C4C6-5CD7-8182-7B337D95****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 146
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeHybridCloudGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudGroupsResponseBody;
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
      body: DescribeHybridCloudGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The back-to-origin IP address or domain name.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  /**
   * @remarks
   * Specifies whether the public cloud disaster recovery feature is enabled for the domain name. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The domain name that you want to query.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvtc5z52****
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
      cnameEnabled: 'CnameEnabled',
      domain: 'Domain',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
      cnameEnabled: 'boolean',
      domain: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The domain names.
   */
  domains?: DescribeHybridCloudResourcesResponseBodyDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98D2AA9A-5959-5CCD-83E3-B6606232A2BE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudResourcesResponseBody;
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
      body: DescribeHybridCloudResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudServerRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5yd****7009
   */
  instanceId?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * >  This parameter is required if you set RegionType to region. The value is the code of the city.
   * 
   * @example
   * 410
   */
  regionCode?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the region. Valid values:
   * 
   * *   **operator**: the ISP.
   * *   **continents**: the continent.
   * *   **region**: the city.
   * 
   * This parameter is required.
   * 
   * @example
   * region
   */
  regionType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      regionType: 'RegionType',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionCode: 'string',
      regionId: 'string',
      regionType: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudServerRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the regions.
   */
  regions?: DescribeHybridCloudServerRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FBBDE11-C35F-531B-96BA-64CA****C875
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
      regions: { 'type': 'array', 'itemType': DescribeHybridCloudServerRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudServerRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudServerRegionsResponseBody;
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
      body: DescribeHybridCloudServerRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUnassignedMachinesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  clusterId?: number;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * online-xagent1
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5yd****7009
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 1.X.X.1
   */
  ip?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      hostName: 'string',
      instanceId: 'string',
      ip: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUnassignedMachinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3EBCFCE9-4A3C-5E01-915D-691B****510A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 28
   */
  totalCount?: number;
  /**
   * @remarks
   * The servers that are not assigned to the hybrid cloud cluster.
   */
  unassignedMachines?: DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      unassignedMachines: 'UnassignedMachines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      unassignedMachines: { 'type': 'array', 'itemType': DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUnassignedMachinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudUnassignedMachinesResponseBody;
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
      body: DescribeHybridCloudUnassignedMachinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9178CB86-285F-5679-A30A-3B3F007E4206
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the ports that can be used by a hybrid cloud cluster.
   */
  userInfo?: DescribeHybridCloudUserResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: DescribeHybridCloudUserResponseBodyUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudUserResponseBody;
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
      body: DescribeHybridCloudUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the WAF instance.
   */
  details?: DescribeInstanceResponseBodyDetails;
  /**
   * @remarks
   * The edition of the WAF instance.
   * 
   * @example
   * default_version
   */
  edition?: string;
  /**
   * @remarks
   * The expiration time of the WAF instance.
   * 
   * @example
   * 4809859200000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the WAF instance has overdue payments. Valid values:
   * 
   * *   **0**: The WAF instance does not have overdue payments.
   * *   **1**: The WAF instance has overdue payments.
   * 
   * @example
   * 1
   */
  inDebt?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the WAF instance. Valid values:
   * 
   * *   **POSTPAY:** The WAF instance uses the pay-as-you-go billing method.
   * *   **PREPAY:** The WAF instance uses the subscription billing method.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The purchase time of the WAF instance. The time is in the UNIX timestamp format. The time is displayed in UTC. Unit: milliseconds.
   * 
   * @example
   * 1668496310000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the WAF instance. Valid values:
   * 
   * *   **1:** The WAF instance is in a normal state.
   * *   **2:** The WAF instance has expired.
   * *   **3:** The WAF instance has been released.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      edition: 'Edition',
      endTime: 'EndTime',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: DescribeInstanceResponseBodyDetails,
      edition: 'string',
      endTime: 'number',
      inDebt: 'string',
      instanceId: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      startTime: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
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
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address that you want to query. You can specify this parameter to query an IP address in the IP address blacklist for major event protection by using fuzzy matching.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipLike?: string;
  /**
   * @remarks
   * The method that you want to use to sort the IP addresses **in descending order**. Valid values:
   * 
   * *   **gmtModified:** sorts the IP addresses by most recent modification time.
   * *   **ip:** sorts the IP addresses by IP address.
   * *   **templateId:** sorts the IP addresses by template ID.
   * *   **id:** sorts the IP addresses by primary key.
   * 
   * @example
   * gmtModified
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the IP address blacklist rule for major event protection.
   * 
   * @example
   * 20013199
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the rule template for major event protection.
   * 
   * @example
   * 5673
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipLike: 'IpLike',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipLike: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array of IP addresses in the IP address blacklist.
   */
  ipList?: DescribeMajorProtectionBlackIpsResponseBodyIpList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 41631674-EEB0-5B02-BEB4-40A758E9B841
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of IP addresses in the blacklist.
   * 
   * @example
   * 63
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeMajorProtectionBlackIpsResponseBodyIpList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMajorProtectionBlackIpsResponseBody;
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
      body: DescribeMajorProtectionBlackIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The status of the member that you want to query.
   * 
   * *   **enabled**: managed.
   * *   **disabled**: not managed.
   * *   **disabling**: being deleted.
   * 
   * @example
   * enabled
   */
  accountStatus?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source IP address of the request. The system specifies this parameter.
   * 
   * @example
   * 0.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the member.
   */
  accountInfos?: DescribeMemberAccountsResponseBodyAccountInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50C4A80D-D46C-57E0-9A7D-03C0****4852
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfos: 'AccountInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfos: { 'type': 'array', 'itemType': DescribeMemberAccountsResponseBodyAccountInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMemberAccountsResponseBody;
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
      body: DescribeMemberAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePauseProtectionStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePauseProtectionStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether WAF protection is paused.
   * 
   * *   **0**: indicates that WAF protection is not paused. This is the default value.
   * *   **1**: indicates that WAF protection is paused.
   * 
   * @example
   * 0
   */
  pauseStatus?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-****-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pauseStatus: 'PauseStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pauseStatus: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePauseProtectionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePauseProtectionStatusResponseBody;
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
      body: DescribePauseProtectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386340
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time interval. Unit: seconds. The value must be an integral multiple of 60.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      interval: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array of the QPS statistics of the WAF instance.
   */
  flowChart?: DescribePeakTrendResponseBodyFlowChart[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9D11AC3A-A10C-56E7-A342-E87EC892BAE2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowChart: 'FlowChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowChart: { 'type': 'array', 'itemType': DescribePeakTrendResponseBodyFlowChart },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePeakTrendResponseBody;
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
      body: DescribePeakTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zxu****9d02
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * lb-2zeugkfj81jvo****4tqm
   */
  resourceInstanceId?: string;
  resourceInstanceIp?: string;
  resourceInstanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.X.X.1
   * 
   * @deprecated
   */
  resourceIp?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekz6ql****5uzi
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * exampleResourceName
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The cloud service to which the instance belongs. Valid values:
   * 
   * *   **clb4**: Layer 4 Classic Load Balancer (CLB).
   * *   **clb7**: Layer 7 CLB.
   * *   **ecs**: Elastic Compute Service (ECS).
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the instance. Valid values:
   * 
   * *   **cn-chengdu**: China (Chengdu).
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-zhangjiakou**: China (Zhangjiakou).
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **cn-shanghai**: China (Shanghai).
   * *   **cn-shenzhen**: China (Shenzhen).
   * *   **cn-qingdao**: China (Qingdao).
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * *   **ap-southeast-5**: Indonesia (Jakarta).
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceIp: 'ResourceIp',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceIp: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  productInstances?: DescribeProductInstancesResponseBodyProductInstances[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FDCBAE1E-2B3F-5C13-AD20-844B9473****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      productInstances: 'ProductInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInstances: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductInstancesResponseBody;
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
      body: DescribeProductInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePunishedDomainsRequest extends $tea.Model {
  /**
   * @remarks
   * The domain names.
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-uqm****qa07
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekz7nc****aata
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePunishedDomainsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The domain names that are penalized for failing to obtain an ICP filing.
   */
  punishedDomains?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1F4D802-55A1-5D53-A247-7E79****85E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      punishedDomains: 'PunishedDomains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      punishedDomains: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePunishedDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePunishedDomainsResponseBody;
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
      body: DescribePunishedDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-*
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * lb-bp1*****jqnnqk5uj2p
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The certificates.
   */
  certs?: DescribeResourceInstanceCertsResponseBodyCerts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-***-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeResourceInstanceCertsResponseBodyCerts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceInstanceCertsResponseBody;
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
      body: DescribeResourceInstanceCertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11zcl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The protected object that you want to query. You can specify multiple protected objects. Separate the protected objects with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * alb-wewbb23dfsetetcic1242-0****,alb-wewbb23dfsetetcic1242-1****
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0DABF8AB-2321-5F8D-A8D7-922D757FBFFE
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeResourceLogStatusResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeResourceLogStatusResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceLogStatusResponseBody;
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
      body: DescribeResourceLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePortRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 8vb40vj87znu3ai7l5lv4-80****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePortResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * An array of HTTP and HTTPS listener ports that are added to the WAF instance.
   */
  resourcePorts?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePorts: 'ResourcePorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePorts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePortResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourcePortResponseBody;
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
      body: DescribeResourcePortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceRegionIdRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2lrm****6pnq
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceRegionIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5905D3F-F674-5177-9E48-466DD3B8****
   */
  requestId?: string;
  /**
   * @remarks
   * The region IDs.
   */
  resourceRegionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRegionIds: 'ResourceRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRegionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceRegionIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceRegionIdResponseBody;
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
      body: DescribeResourceRegionIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceSupportRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekzpks****kdjq
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceSupportRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 58FDF266-3D56-5DE8-91E0-96A26B****DD
   */
  requestId?: string;
  /**
   * @remarks
   * The region IDs.
   */
  supportRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportRegions: 'SupportRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceSupportRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceSupportRegionsResponseBody;
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
      body: DescribeResourceSupportRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time interval. Unit: seconds. The value must be an integral multiple of 60.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The ID of the region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  /**
   * @remarks
   * The type of the error codes. Valid values:
   * 
   * *   **waf:** error codes that are returned to clients from WAF.
   * *   **upstream:** error codes that are returned to WAF from the origin server.
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      interval: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D46493E-84DD-58CE-80A7-8643****9ECC
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the statistics of the error codes.
   */
  responseCodes?: DescribeResponseCodeTrendGraphResponseBodyResponseCodes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCodes: 'ResponseCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCodes: { 'type': 'array', 'itemType': DescribeResponseCodeTrendGraphResponseBodyResponseCodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResponseCodeTrendGraphResponseBody;
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
      body: DescribeResponseCodeTrendGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **id:** queries regular expression rule groups by ID.
   * *   **name:** queries regular expression rule groups by name.
   * 
   * @example
   * name
   */
  searchType?: string;
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * test
   */
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      searchType: 'SearchType',
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      searchType: 'string',
      searchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 02E9A4B8-90FB-5F41-A049-C82277EB82FB
   */
  requestId?: string;
  /**
   * @remarks
   * An array of regular expression rule groups.
   */
  ruleGroups?: DescribeRuleGroupsResponseBodyRuleGroups[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleGroups: 'RuleGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleGroups: { 'type': 'array', 'itemType': DescribeRuleGroupsResponseBodyRuleGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleGroupsResponseBody;
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
      body: DescribeRuleGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of rules that are triggered by the protected object. By default, this parameter is not specified and all types of rules are queried.
   * 
   * *   **blacklist:** IP address blacklist rules.
   * *   **custom:** custom rules.
   * *   **antiscan:** scan protection rules.
   * *   **cc_system:** HTTP flood protection rules.
   * *   **region_block:** region blacklist rules.
   * 
   * @example
   * blacklist
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F0F9AD6-62E2-50BB-A3E5-30FFB9410262
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 IP addresses from which attacks are initiated.
   */
  ruleHitsTopClientIp?: DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopClientIp: 'RuleHitsTopClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopClientIp: { 'type': 'array', 'itemType': DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopClientIpResponseBody;
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
      body: DescribeRuleHitsTopClientIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386340
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of rules that are triggered by the protected object. By default, this parameter is not specified and all types of rules are queried.
   * 
   * *   **blacklist:** IP address blacklist rules.
   * *   **custom:** custom rules.
   * *   **antiscan:** scan protection rules.
   * *   **cc_system:** HTTP flood protection rules.
   * *   **region_block:** region blacklist rules.
   * 
   * @example
   * blacklist
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADA11BC7-AA95-5C31-9095-5802C02ED1DC
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 protected objects that trigger protection rules.
   */
  ruleHitsTopResource?: DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopResource: 'RuleHitsTopResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopResource: { 'type': 'array', 'itemType': DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopResourceResponseBody;
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
      body: DescribeRuleHitsTopResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether protected objects that trigger protection rules are returned in the response. Valid values
   * 
   * - **true**: returns only the number of times each protection rule is triggered. If you set IsGroupResource to true, Resource is left empty.
   * - **false**: returns the number of times each protection rule is triggered by each protected object.
   * 
   * @example
   * true
   */
  isGroupResource?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of rules that are triggered by the protected object. By default, this parameter is not specified and all types of rules are queried.
   * 
   * *   **blacklist:** IP address blacklist rules.
   * *   **custom:** custom rules.
   * *   **antiscan:** scan protection rules.
   * *   **cc_system:** HTTP flood protection rules.
   * *   **region_block:** region blacklist rules.
   * 
   * @example
   * blacklist
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      isGroupResource: 'IsGroupResource',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      isGroupResource: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6334274-8870-5D2F-A1AD-D6EF885AC1ED
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the IDs of the top 10 rules that are matched by requests.
   */
  ruleHitsTopRuleId?: DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopRuleId: 'RuleHitsTopRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopRuleId: { 'type': 'array', 'itemType': DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopRuleIdResponseBody;
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
      body: DescribeRuleHitsTopRuleIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The end point of the time period for which to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The start point of the time period for which to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45E377CE-0B04-578E-B653-EEA63CFE****
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 protection modules that are matched.
   */
  ruleHitsTopTuleType?: DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopTuleType: 'RuleHitsTopTuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopTuleType: { 'type': 'array', 'itemType': DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopTuleTypeResponseBody;
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
      body: DescribeRuleHitsTopTuleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8E5C7ED7-503A-5986-A005-36F2511EB89F
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 user agents that are used to initiate attacks.
   */
  ruleHitsTopUa?: DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUa: 'RuleHitsTopUa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUa: { 'type': 'array', 'itemType': DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopUaResponseBody;
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
      body: DescribeRuleHitsTopUaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of rules that are triggered by the protected object. By default, this parameter is not specified and all types of rules are queried.
   * 
   * *   **blacklist:** IP address blacklist rules.
   * *   **custom:** custom rules.
   * *   **antiscan:** scan protection rules.
   * *   **cc_system:** HTTP flood protection rules.
   * *   **region_block:** region blacklist rules.
   * 
   * @example
   * blacklist
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D8AF43B-08EB-51CE-B33A-93AA****9B0C
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 URLs that match protection rules.
   */
  ruleHitsTopUrl?: DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUrl: 'RuleHitsTopUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUrl: { 'type': 'array', 'itemType': DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopUrlResponseBody;
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
      body: DescribeRuleHitsTopUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-g4t3g****04
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2okfav****iq
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3589D3A3-4A04-51CB-AA89-353ED20A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether WAF is authorized to access Logstores. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsAuthStatusResponseBody;
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
      body: DescribeSlsAuthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zpr3d****0o
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2wf3mn****vq
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * wafng-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * wafng-project-14316572********-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * The capacity of the Logstore. Unit: bytes.
   * 
   * @example
   * 3298534883328
   */
  quota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CAC0A24B-486A-5E12-9894-BE860E5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The storage duration of the Logstore. Unit: days.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The used capacity of the Logstore. Unit: bytes.
   * 
   * @example
   * 35471136
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      projectName: 'string',
      quota: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsLogStoreResponseBody;
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
      body: DescribeSlsLogStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-uqm35****02
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmzedqv****ma
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether a Logstore is created for WAF. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  existStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 184F538F-C115-5C89-A4EF-C79CD2E29AC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      existStatus: 'ExistStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsLogStoreStatusResponseBody;
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
      body: DescribeSlsLogStoreStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-lbj****gx08
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekzwwkpn****5i
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the protection templates that you want to query. Separate multiple template IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 12345,12346
   */
  templateIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8064433-9781-5E86-806E-C1DD****1D95
   */
  requestId?: string;
  /**
   * @remarks
   * The number of protected objects or protected object groups for which the protection template takes effect.
   */
  resourceCount?: DescribeTemplateResourceCountResponseBodyResourceCount[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceCount: { 'type': 'array', 'itemType': DescribeTemplateResourceCountResponseBodyResourceCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateResourceCountResponseBody;
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
      body: DescribeTemplateResourceCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the protected resource. Valid values:
   * 
   * *   **single:** protected object.
   * *   **group:** protected object group.
   * 
   * This parameter is required.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1020
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7BC9373-3960-53B0-8968-2B13454AE18F
   */
  requestId?: string;
  /**
   * @remarks
   * An array of protected objects or protected object groups that are associated to the protection rule template.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateResourcesResponseBody;
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
      body: DescribeTemplateResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSlsLogRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou:** Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSlsLogRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The region IDs.
   */
  logRegions?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D11AC3A-A10C-56E7-A342-E87EC892****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logRegions: 'LogRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRegions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSlsLogRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserSlsLogRegionsResponseBody;
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
      body: DescribeUserSlsLogRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWafLogStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-nwy34****0j
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWafLogStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the region where WAF logs are stored. Valid values:
   * 
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-1**: Singapore.
   * *   **ap-southeast-2**: Australia (Sydney).
   * *   **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * *   **ap-southeast-5**: Indonesia (Jakarta).
   * *   **ap-southeast-6**: Philippines (Manila).
   * *   **ap-southeast-7**: Thailand (Bangkok).
   * *   **me-east-1**: UAE (Dubai).
   * *   **eu-central-1**: Germany (Frankfurt).
   * *   **us-east-1**: US (Virginia).
   * *   **us-west-1**: US (Silicon Valley).
   * *   **ap-northeast-1**: Japan (Tokyo).
   * *   **ap-northeast-2**: South Korea (Seoul).
   * *   **ap-south-1**: India (Mumbai) Closing Down.
   * *   **eu-west-1**: UK (London).
   * *   **cn-hangzhou-finance**: China East 1 Finance.
   * *   **cn-shanghai-finance-1**: China East 2 Finance.
   * *   **cn-shenzhen-finance**: China South 1 Finance.
   * 
   * >  The China East 1 Finance, China East 2 Finance, and China South 1 Finance regions are available only for Alibaba Finance Cloud users. Alibaba Finance Cloud users are also limited to storing logs within these specific regions.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The status of WAF logs.
   * 
   * *   **initializing**
   * *   **initialize_failed**
   * *   **normal**
   * *   **releasing**
   * *   **release_failed**
   * 
   * @example
   * normal
   */
  logStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D****
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the log status was modified. Unit: milliseconds.
   * 
   * @example
   * 1706771796859
   */
  statusUpdateTime?: number;
  static names(): { [key: string]: string } {
    return {
      logRegionId: 'LogRegionId',
      logStatus: 'LogStatus',
      requestId: 'RequestId',
      statusUpdateTime: 'StatusUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRegionId: 'string',
      logStatus: 'string',
      requestId: 'string',
      statusUpdateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWafLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserWafLogStatusResponseBody;
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
      body: DescribeUserWafLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D2B8DAE-A761-58CB-A68D-74989E4831DA
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 IP addresses from which requests are sent.
   */
  topIp?: DescribeVisitTopIpResponseBodyTopIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topIp: 'TopIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topIp: { 'type': 'array', 'itemType': DescribeVisitTopIpResponseBodyTopIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVisitTopIpResponseBody;
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
      body: DescribeVisitTopIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2847CE98-AFAE-5A64-B80E-60461717F9DE
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 user agents that are used to initiate requests.
   */
  uas?: DescribeVisitUasResponseBodyUas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uas: 'Uas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uas: { 'type': 'array', 'itemType': DescribeVisitUasResponseBodyUas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVisitUasResponseBody;
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
      body: DescribeVisitUasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9087ADDC-9047-4D02-82A7-33021B58083C
   */
  requestId?: string;
  /**
   * @remarks
   * The back-to-origin CIDR blocks that are used by the protection cluster.
   */
  wafSourceIp?: DescribeWafSourceIpSegmentResponseBodyWafSourceIp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      wafSourceIp: 'WafSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      wafSourceIp: DescribeWafSourceIpSegmentResponseBodyWafSourceIp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWafSourceIpSegmentResponseBody;
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
      body: DescribeWafSourceIpSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * @example
   * waf_v3prepaid_public_cn-wwo****iw02
   */
  instanceId?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to ALIYUN::WAF::DEFENSERESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * The keys and types of the tags.
   */
  keys?: ListTagKeysResponseBodyKeys[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CB8BB88-24C7-5608-BF5E-4DCA****CF1C
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
      keys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeys },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to ALIYUN::WAF::DEFENSERESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that are added to the resource.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 716E64DA-044F-51C7-B528-2FBF****AE4F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * demoKey
   */
  key?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to ALIYUN::WAF::DEFENSERESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 705114BB-EAEF-5CC4-8837-F1D4****BB5B
   */
  requestId?: string;
  /**
   * @remarks
   * The tag values.
   */
  values?: string[];
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
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the log subscription. Valid values:
   * 
   * *   **risk**: risk information.
   * *   **event**: attack event information.
   * *   **asset**: asset information.
   * 
   * This parameter is required.
   * 
   * @example
   * risk
   */
  assertKey?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where logs are stored.
   * 
   * >  You can call the [DescribeUserSlsLogRegions](https://help.aliyun.com/document_detail/2712598.html) operation to query available log storage regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * >  API security logs can be delivered only to Logstores whose names start with apisec-.
   * 
   * This parameter is required.
   * 
   * @example
   * apisec-logstore***
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
   * 
   * >  API security logs can be delivered only to projects whose names start with apisec-.
   * 
   * This parameter is required.
   * 
   * @example
   * apisec-project-14316572********
   */
  projectName?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      instanceId: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      projectName: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyApisecLogDeliveryResponseBody;
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
      body: ModifyApisecLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the log subscription. Valid values:
   * 
   * *   **risk**: risk information.
   * *   **event**: attack event information.
   * *   **asset**: asset information.
   * 
   * This parameter is required.
   * 
   * @example
   * risk
   */
  assertKey?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The status of API security log subscription. Valid values:
   * 
   * *   **true**: enabled.
   * *   **false**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyApisecLogDeliveryStatusResponseBody;
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
      body: ModifyApisecLogDeliveryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listen?: ModifyCloudResourceRequestListen;
  redirect?: ModifyCloudResourceRequestRedirect;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      listen: ModifyCloudResourceRequestListen,
      redirect: ModifyCloudResourceRequestRedirect,
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listenShrink?: string;
  redirectShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      listenShrink: 'string',
      redirectShrink: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceResponseBody extends $tea.Model {
  /**
   * @example
   * lb-xxx-80-clb7
   */
  cloudResource?: string;
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResource: 'CloudResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResource: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCloudResourceResponseBody;
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
      body: ModifyCloudResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultHttpsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @example
   * 0
   */
  cipherSuite?: number;
  customCiphers?: string[];
  /**
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      TLSVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultHttpsResponseBody extends $tea.Model {
  /**
   * @example
   * 276D7566-31C9-4192-9DD1-***
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultHttpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefaultHttpsResponseBody;
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
      body: ModifyDefaultHttpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The protected objects that you want to add to the protected object group. Separate the protected objects with commas (,). If you leave this parameter empty, no protected objects are added to the protected object group.
   * 
   * @example
   * test1.aliyundoc.com,test2.aliyundoc.com
   */
  addList?: string;
  /**
   * @remarks
   * The protected objects that you want to remove from the protected object group. Separate the protected objects with commas (,). If you leave this parameter empty, no protected objects are removed from the protected object group.
   * 
   * @example
   * test14.waf.com,test24.waf.com
   */
  deleteList?: string;
  /**
   * @remarks
   * The description of the protected object group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the protected object group whose configurations you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addList: 'AddList',
      deleteList: 'DeleteList',
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addList: 'string',
      deleteList: 'string',
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CC1AFDE-BB31-5A2F-906E-92FCBDDE6B75
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseResourceGroupResponseBody;
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
      body: ModifyDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceXffRequest extends $tea.Model {
  /**
   * @remarks
   * The status of the tracking cookie.
   * 
   * *   **0**: disabled
   * *   **1**: enabled. This is the default value.
   * 
   * @example
   * 0
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the tracking cookie.
   * 
   * *   **0**: disabled. This is the default value.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the slider CAPTCHA cookie.
   * 
   * *   **0**: disabled. This is the default value.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The custom header fields.
   * 
   * >  The first IP address in the specified custom header field is used as the originating IP address of the client to prevent X-Forwarded-For forgery. If you specify multiple header fields, WAF reads the values of the header fields in sequence until the originating IP address is obtained. If the originating IP address cannot be obtained, the first IP address in the X-Forwarded-For header is used as the originating IP address of the client.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-wwo3c****07
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-4pxu81fgagx3****mz-alb
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm2kie2****wq
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether a Layer 7 proxy is deployed in front of WAF. Layer 7 proxies include Anti-DDoS Proxy and Alibaba Cloud CDN. Valid values:
   * 
   * *   **0**: No Layer 7 proxies are deployed. This is the default value.
   * *   **1**: A Layer 7 proxy is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      customHeaders: 'CustomHeaders',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      xffStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceXffResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6C094583-9B3F-5BD8-8748-DC638E****BF
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceXffResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseResourceXffResponseBody;
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
      body: ModifyDefenseResourceXffResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The scenario in which you want to use the protection rule. For more information, see the description of the **DefenseScene** parameter in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The details of the protection rule. Specify a string that contains multiple parameters in the JSON format. You must specify the ID and the new configurations of the protection rule.
   * 
   * *   **id:** The ID of the protection rule. Data type: long. You must specify this parameter.
   * *   The protection rule configurations: The role of this parameter is the same as that of the **Rules** parameter in the **CreateDefenseRule** topic. For more information, see the "**Protection rule parameters**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"id":2344,"policyId":1012,"action":"block"}]
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the protection rule template to which the protection rule whose configurations you want to modify belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 5325
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      rules: 'Rules',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      rules: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1EEA9C98-F166-54FE-ADE3-08D8****BDFA
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseRuleResponseBody;
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
      body: ModifyDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleCacheRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zvp****xm2r
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleCacheResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0F2B994-8645-5270-A05D-9DAD8C****B6
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseRuleCacheResponseBody;
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
      body: ModifyDefenseRuleCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule whose status you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * 20002615
   */
  ruleId?: number;
  /**
   * @remarks
   * The new status of the protection rule. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleStatus?: number;
  /**
   * @remarks
   * The ID of the protection rule template to which the protection rule whose status you want to change belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 7239
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      ruleStatus: 'RuleStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      ruleStatus: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BB305BF3-3C71-57A9-9704-E22F567689B0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseRuleStatusResponseBody;
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
      body: ModifyDefenseRuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the protection rule template whose configurations you want to modify.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule template whose configurations you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 7392
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection rule template whose configurations you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A68C85D-7467-5BB1-9A7E-2E8A5D96D88A
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseTemplateResponseBody;
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
      body: ModifyDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule template whose status you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * 2249
   */
  templateId?: number;
  /**
   * @remarks
   * The new status of the protection rule template. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      templateStatus: 'TemplateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      templateStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 58007AE3-65D9-57BA-ABB4-1A544015FB50
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseTemplateStatusResponseBody;
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
      body: ModifyDefenseTemplateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The mode in which you want to add the domain name to WAF. Set the value to share.
   * 
   * *   **share:** adds the domain name to WAF in CNAME record mode. This is the default value.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name whose access configurations you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   * 
   * This parameter is required.
   */
  listen?: ModifyDomainRequestListen;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   * 
   * This parameter is required.
   */
  redirect?: ModifyDomainRequestRedirect;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listen: ModifyDomainRequestListen,
      redirect: ModifyDomainRequestRedirect,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The mode in which you want to add the domain name to WAF. Set the value to share.
   * 
   * *   **share:** adds the domain name to WAF in CNAME record mode. This is the default value.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name whose access configurations you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   * 
   * This parameter is required.
   */
  listenShrink?: string;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   * 
   * This parameter is required.
   */
  redirectShrink?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listenShrink: 'string',
      redirectShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the domain name.
   */
  domainInfo?: ModifyDomainResponseBodyDomainInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: ModifyDomainResponseBodyDomainInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDomainResponseBody;
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
      body: ModifyDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainPunishStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The domain name that is penalized for failing to obtain an ICP filing.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.xxxxaliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-zxu****0g02
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainPunishStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 70E65A35-22B8-567C-B0A0-A2E9****20AE
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainPunishStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDomainPunishStatusResponseBody;
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
      body: ModifyDomainPunishStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterBypassStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * hdbc_cluster_****
   */
  clusterResourceId?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * **
   * 
   * **You can call the **DescribeInstanceInfo[ operation to obtain the ID of the WAF instance.](https://help.aliyun.com/document_detail/140857.html)
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of manual bypass. Valid values:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clusterResourceId: 'ClusterResourceId',
      instanceId: 'InstanceId',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterResourceId: 'string',
      instanceId: 'string',
      ruleStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterBypassStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterBypassStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudClusterBypassStatusResponseBody;
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
      body: ModifyHybridCloudClusterBypassStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1018
   */
  clusterId?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.[](~~140857~~)
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The configuration of the rule.
   * 
   * @example
   * {\\"check_mode\\":\\"part\\",\\"include\\":{\\"exact\\":[],\\"regex\\":[]}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **on**: enables the rule.
   * *   **off**: disables the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **pullin**: The traffic redirection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * pullin
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleConfig: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03D73D88-57D8-5BA2-96A4-6357CE***19
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudClusterRuleResponseBody;
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
      body: ModifyHybridCloudClusterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clusterId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  remark?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      groupId: 'number',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupResponseBody extends $tea.Model {
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D***0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudGroupResponseBody;
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
      body: ModifyHybridCloudGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupExpansionServerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clusterId?: number;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 612929b133e7ff**0d0
   */
  mids?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      mids: 'Mids',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      groupId: 'number',
      instanceId: 'string',
      mids: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupExpansionServerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BD7F9A1-0E72-5BC1-8248-C629B4***B6
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupExpansionServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudGroupExpansionServerResponseBody;
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
      body: ModifyHybridCloudGroupExpansionServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupShrinkServerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clusterId?: number;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldb****05
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * b1bf3f544f30c1de0b72d91290***bbbb
   */
  mids?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm2th****v6ay
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      mids: 'Mids',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      groupId: 'number',
      instanceId: 'string',
      mids: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupShrinkServerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudGroupShrinkServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudGroupShrinkServerResponseBody;
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
      body: ModifyHybridCloudGroupShrinkServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudSdkPullinStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-7pp2le***01
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the SDK.
   * 
   * This parameter is required.
   * 
   * @example
   * b3dbc5153317c79d8ca9f9***ea
   */
  mid?: string;
  /**
   * @remarks
   * The status of traffic redirection. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  pullinStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mid: 'Mid',
      pullinStatus: 'PullinStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mid: 'string',
      pullinStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudSdkPullinStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B191**EB0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudSdkPullinStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudSdkPullinStatusResponseBody;
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
      body: ModifyHybridCloudSdkPullinStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudServerRequest extends $tea.Model {
  /**
   * @remarks
   * The continent.
   * 
   * This parameter is required.
   * 
   * @example
   * asiapacific
   */
  continents?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * This parameter is required.
   */
  customName?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * b1bf3f544f30c1de0b72d91290**ccb
   */
  mid?: string;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  operator?: string;
  /**
   * @remarks
   * The city.
   * 
   * This parameter is required.
   * 
   * @example
   * beijing
   */
  regionCode?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      continents: 'Continents',
      customName: 'CustomName',
      instanceId: 'InstanceId',
      mid: 'Mid',
      operator: 'Operator',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continents: 'string',
      customName: 'string',
      instanceId: 'string',
      mid: 'string',
      operator: 'string',
      regionCode: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudServerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 26DCD663-5EB8-5103-B270-E24A32***5F0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudServerResponseBody;
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
      body: ModifyHybridCloudServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMajorProtectionBlackIpRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the IP address blacklist.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time after which the IP address blacklist becomes invalid. Unit: seconds.
   * 
   * >  If you set this parameter to **0**, the blacklist is permanently valid.
   * 
   * This parameter is required.
   * 
   * @example
   * 1662603328
   */
  expiredTime?: number;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP addresses that you want to add to the IP address blacklist. You can specify multiple CIDR blocks or IP addresses. IPv4 and IPv6 addresses are supported. Separate the CIDR blocks or IP addresses with commas (,). For more information, see [Protection for major events](https://help.aliyun.com/document_detail/425591.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 12.XX.XX.2,3.XX.XX.3/24
   */
  ipList?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the IP address blacklist rule for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 20012033
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the IP address blacklist rule template for major event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 5132
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expiredTime: 'number',
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMajorProtectionBlackIpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMajorProtectionBlackIpResponseBody;
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
      body: ModifyMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the member. The description must be 1 to 256 characters in length, and can contain letters, digits, periods (.), underscores (_), hyphens (-), and asterisks (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity**-*******021
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the managed member.
   * 
   * This parameter is required.
   * 
   * @example
   * 131**********39
   */
  memberAccountId?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source IP address of the request. The system automatically obtains the value of this parameter.
   * 
   * @example
   * 0.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      memberAccountId: 'MemberAccountId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      memberAccountId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMemberAccountResponseBody;
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
      body: ModifyMemberAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPauseProtectionStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to pause WAF protection.
   * 
   * *   **0**: does not pause WAF protection. This is the default value.
   * *   **1**: pauses WAF protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  pauseStatus?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pauseStatus: 'PauseStatus',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pauseStatus: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPauseProtectionStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-*****-******-D5EB0
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPauseProtectionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPauseProtectionStatusResponseBody;
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
      body: ModifyPauseProtectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceLogStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11zcl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object on which you want to manage the log collection feature.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-wewbb23dfsetetcic1242-0****
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the log collection feature for the protected object. Valid values:
   * 
   * *   **true:** enables the log collection feature.
   * *   **false:** disables the log collection feature.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceLogStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C55A3E5-638A-5D6E-9A2F-C3CE5A677EC5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the log collection feature is enabled for the protected object. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyResourceLogStatusResponseBody;
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
      body: ModifyResourceLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The protected object groups that you want to associate with the protection rule template. Specify the value of this parameter in the ["group1","group2",...] format.
   */
  bindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects that you want to associate with the protection rule template. Specify the value of this parameter in the ["XX1","XX2",...] format.
   */
  bindResources?: string[];
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * 2291
   */
  templateId?: number;
  /**
   * @remarks
   * The protected object groups that you want to disassociate from the protection rule template. Specify the value of this parameter in the ["group1","group2",...] format.
   */
  unbindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects that you want to disassociate from the protection rule template. Specify the value of this parameter in the ["XX1","XX2",...] format.
   */
  unbindResources?: string[];
  static names(): { [key: string]: string } {
    return {
      bindResourceGroups: 'BindResourceGroups',
      bindResources: 'BindResources',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      unbindResourceGroups: 'UnbindResourceGroups',
      unbindResources: 'UnbindResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindResourceGroups: { 'type': 'array', 'itemType': 'string' },
      bindResources: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      unbindResourceGroups: { 'type': 'array', 'itemType': 'string' },
      unbindResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF708F2F-FFB0-54D4-B1E0-B84A7CEBFB60
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTemplateResourcesResponseBody;
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
      body: ModifyTemplateResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 65626467-8002-5022-9F5F-***
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstanceResponseBody;
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
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncProductInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zsk****fb09
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm4co****f5qa
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncProductInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45BA2382-7C3F-5B29-9A83-C3BCE586****
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncProductInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncProductInstanceResponseBody;
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
      body: SyncProductInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to ALIYUN::WAF::DEFENSERESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 57F8460F-8A62-5D79-8ED5-653C****0C6B
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resource groups or members. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to ALIYUN::WAF::DEFENSERESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. You can specify up to 20 tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A4B8DB1-A8B0-5362-A65D-6A55****07C5
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceRequestListenCertificates extends $tea.Model {
  appliedType?: string;
  /**
   * @example
   * 123-cn-hangzhou
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceRequestListen extends $tea.Model {
  certificates?: CreateCloudResourceRequestListenCertificates[];
  /**
   * @example
   * 1
   */
  cipherSuite?: number;
  customCiphers?: string[];
  /**
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lb-bp1*****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  /**
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      http2Enabled: 'Http2Enabled',
      port: 'Port',
      protocol: 'Protocol',
      resourceInstanceId: 'ResourceInstanceId',
      resourceProduct: 'ResourceProduct',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': CreateCloudResourceRequestListenCertificates },
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      http2Enabled: 'boolean',
      port: 'number',
      protocol: 'string',
      resourceInstanceId: 'string',
      resourceProduct: 'string',
      TLSVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceRequestRedirectRequestHeaders extends $tea.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudResourceRequestRedirect extends $tea.Model {
  /**
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @example
   * 1
   */
  readTimeout?: number;
  requestHeaders?: CreateCloudResourceRequestRedirectRequestHeaders[];
  /**
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @example
   * 1
   */
  xffHeaderMode?: number;
  xffHeaders?: string[];
  /**
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      writeTimeout: 'WriteTimeout',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': CreateCloudResourceRequestRedirectRequestHeaders },
      writeTimeout: 'number',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestListen extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate that you want to add. This parameter is available only if you specify **HttpsPorts**.
   * 
   * @example
   * 123
   * 
   * **if can be null:**
   * true
   */
  certId?: string;
  /**
   * @remarks
   * The type of cipher suite that you want to add. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **1:** all cipher suites.
   * *   **2:** strong cipher suites. You can select this value only if you set **TLSVersion** to **tlsv1.2**.
   * *   **99:** custom cipher suites.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suite that you want to add.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Specifies whether to enable an exclusive IP address. This parameter is available only if you set **IPv6Enabled** to **false** and **ProtectionResource** to **share**. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP to HTTPS redirection. This parameter is available only if you specify HttpsPorts and leave HttpPorts empty. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The HTTP listener port.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The HTTPS listener port.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of the protection resource. Valid values:
   * 
   * *   **share:** a shared cluster. This is the default value.
   * *   **gslb:** shared cluster-based intelligent load balancing.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Specifies whether to allow access only from SM certificate-based clients. This parameter is available only if you set SM2Enabled to true.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate that you want to add. This parameter is available only if you set SM2Enabled to true.
   * 
   * @example
   * 123-cn-hangzhou
   * 
   * **if can be null:**
   * true
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Specifies whether to enable the ShangMi (SM) certificate.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that you want WAF to use to obtain the actual IP address of a client. Valid values:
   * 
   * *   **0:** No Layer 7 proxies are deployed in front of WAF. This is the default value.
   * *   **1:** WAF reads the first value of the X-Forwarded-For (XFF) header field as the IP address of the client.
   * *   **2:** WAF reads the value of a custom header field as the IP address of the client.
   * 
   * @example
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header field that you want WAF to use to obtain the actual IP address of a client.
   */
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      SM2AccessOnly: 'SM2AccessOnly',
      SM2CertId: 'SM2CertId',
      SM2Enabled: 'SM2Enabled',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      SM2AccessOnly: 'boolean',
      SM2CertId: 'string',
      SM2Enabled: 'boolean',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestRedirectRequestHeaders extends $tea.Model {
  /**
   * @remarks
   * The custom header field.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom header field.
   * 
   * @example
   * bbb
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestRedirect extends $tea.Model {
  /**
   * @remarks
   * The IP addresses or domain names of the origin server.
   */
  backends?: string[];
  /**
   * @remarks
   * Specifies whether to enable the public cloud disaster recovery feature. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable HTTPS to HTTP redirection for back-to-origin requests. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the persistent connection feature. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter specifies the number of reused persistent connections after you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for idle persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * >  This parameter specifies the time for which a reused persistent connection can remain in the Idle state before the persistent connection is closed.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that you want to use to forward requests to the origin server. Valid values:
   * 
   * *   **iphash**
   * *   **roundRobin**
   * *   **leastTime** You can set the parameter to this value only if you set **ProtectionResource** to **gslb**.
   * 
   * This parameter is required.
   * 
   * @example
   * roundRobin
   */
  loadbalance?: string;
  /**
   * @remarks
   * The timeout period for read connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header field that you want to use to label requests that are processed by WAF.
   * 
   * When a request passes through WAF, the custom header field is automatically used to label the request. This way, the backend service can identify requests that are processed by WAF.
   */
  requestHeaders?: CreateDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether WAF retries forwarding requests to the origin server when the requests fail to be forwarded to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules that you want to configure for the domain name that you want to add to WAF in hybrid cloud mode. This parameter is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **rs**: the back-to-origin IP addresses or CNAMEs. The value must be of the ARRAY type.
   * *   **location**: the name of the protection node. The value must be of the STRING type.
   * *   **locationId**: the ID of the protection node. The value must be of the LONG type.
   * 
   * @example
   * [
   *       {
   *             "rs": [
   *                   "1.1.XX.XX"
   *             ],
   *             "locationId": 535,
   *             "location": "test1111"
   *       }
   * ]
   */
  routingRules?: string;
  /**
   * @remarks
   * Specifies whether to enable origin Server Name Indication (SNI). This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the SNI field. If you do not specify this parameter, the value of the **Host** field is automatically used. This parameter is optional. If you want WAF to use an SNI field value that is different from the Host field value in back-to-origin requests, you can specify a custom value for the SNI field.
   * 
   * >  This parameter is required only if you set **SniEnabled** to **true**.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The timeout period for write connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use X-Forward-For-Proto to pass the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': CreateDomainRequestRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBodyDomainInfo extends $tea.Model {
  /**
   * @remarks
   * The CNAME that is assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxwww.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name that you added to WAF.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticResponseBodyData extends $tea.Model {
  /**
   * @example
   * 10
   */
  apiCount?: number;
  /**
   * @example
   * ba.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * 12
   */
  high?: number;
  /**
   * @example
   * 4
   */
  low?: number;
  /**
   * @example
   * 9
   */
  medium?: number;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domain: 'Domain',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domain: 'string',
      high: 'number',
      low: 'number',
      medium: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendResponseBodyData extends $tea.Model {
  /**
   * @example
   * 60
   */
  assetActive?: number;
  /**
   * @example
   * 80
   */
  assetCount?: number;
  /**
   * @example
   * 20
   */
  assetOffline?: number;
  /**
   * @example
   * 1683600042
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      assetActive: 'AssetActive',
      assetCount: 'AssetCount',
      assetOffline: 'AssetOffline',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetActive: 'number',
      assetCount: 'number',
      assetOffline: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticResponseBodyData extends $tea.Model {
  /**
   * @example
   * 10
   */
  apiCount?: number;
  /**
   * @example
   * a.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * 10
   */
  high?: number;
  /**
   * @example
   * 2
   */
  low?: number;
  /**
   * @example
   * 6
   */
  medium?: number;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domain: 'Domain',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domain: 'string',
      high: 'number',
      low: 'number',
      medium: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs extends $tea.Model {
  /**
   * @remarks
   * The type of the log subscription. Valid values:
   * 
   * *   **risk**: risk information.
   * *   **event**: attack event information.
   * *   **asset**: asset information.
   * 
   * @example
   * risk
   */
  assertKey?: string;
  /**
   * @remarks
   * The ID of the region where logs are stored.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * @example
   * apisec-logstore***
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
   * 
   * @example
   * apisec-project-14316572********
   */
  projectName?: string;
  /**
   * @remarks
   * The status of API security log subscription. Valid values:
   * 
   * *   **true**: enabled.
   * *   **false**: disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      projectName: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticResponseBodyData extends $tea.Model {
  /**
   * @example
   * 10
   */
  apiCount?: number;
  /**
   * @example
   * 10
   */
  domainCount?: number;
  /**
   * @example
   * 10
   */
  sensitiveCode?: string;
  /**
   * @example
   * L3
   */
  sensitiveLevel?: string;
  sensitiveName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domainCount: 'DomainCount',
      sensitiveCode: 'SensitiveCode',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveName: 'SensitiveName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domainCount: 'number',
      sensitiveCode: 'string',
      sensitiveLevel: 'string',
      sensitiveName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailResponseBodyCertDetail extends $tea.Model {
  /**
   * @remarks
   * The time when the certificate expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1976256736582
   */
  afterDate?: number;
  /**
   * @remarks
   * The time when the certificate was issued. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1976256736582
   */
  beforeDate?: number;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * testCertName
   */
  certName?: string;
  /**
   * @remarks
   * The primary domain name, which is a common name.
   * 
   * @example
   * *.xxxaliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name that is associated with the certificate.
   * 
   * @example
   * demo.xxxaliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The other domain names that are associated with the certificate.
   */
  sans?: string[];
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBodyCerts extends $tea.Model {
  /**
   * @remarks
   * The time when the certificate becomes valid.
   * 
   * @example
   * 1976256736582
   */
  afterDate?: number;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 1976256836582
   */
  beforeDate?: number;
  /**
   * @remarks
   * The globally unique ID of the certificate. The value is in the "Certificate ID-cn-hangzhou" format. For example, if the ID of the certificate is 123, the value of CertIdentifier is 123-cn-hangzhou.
   * 
   * @example
   * 1234567-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * waf1234
   */
  certName?: string;
  /**
   * @remarks
   * The common name.
   * 
   * @example
   * *.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name that is added to WAF.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the certificate chain is complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isChainCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      isChainCompleted: 'IsChainCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      isChainCompleted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates extends $tea.Model {
  /**
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @example
   * 123-cn-hangzhou
   */
  certificateId?: string;
  /**
   * @example
   * cert-name1
   */
  certificateName?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
      certificateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders extends $tea.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails extends $tea.Model {
  certificates?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates[];
  /**
   * @example
   * 1
   */
  cipherSuite?: number;
  customCiphers?: string[];
  /**
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @example
   * True
   */
  http2Enabled?: boolean;
  /**
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @example
   * 10
   */
  keepaliveTimeout?: number;
  logHeaders?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders[];
  /**
   * @example
   * 123
   */
  ownerUserId?: string;
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * https
   */
  protocol?: string;
  /**
   * @example
   * 5
   */
  readTimeout?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @example
   * 0
   */
  xffHeaderMode?: number;
  xffHeaders?: string[];
  /**
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      http2Enabled: 'Http2Enabled',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      logHeaders: 'LogHeaders',
      ownerUserId: 'OwnerUserId',
      port: 'Port',
      protocol: 'Protocol',
      readTimeout: 'ReadTimeout',
      status: 'Status',
      TLSVersion: 'TLSVersion',
      writeTimeout: 'WriteTimeout',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsCertificates },
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      http2Enabled: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      logHeaders: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsLogHeaders },
      ownerUserId: 'string',
      port: 'number',
      protocol: 'string',
      readTimeout: 'number',
      status: 'number',
      TLSVersion: 'string',
      writeTimeout: 'number',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesResponseBodyCloudResources extends $tea.Model {
  /**
   * @example
   * 1
   */
  httpPortCount?: number;
  /**
   * @example
   * 1
   */
  httpsPortCount?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 11769793******
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The domain name. This parameter has a value only if the value of ResourceProduct is fc or sae.
   * 
   * @example
   * test-resource-domain
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The function name. This parameter has a value only if the value of ResourceProduct is fc.
   * 
   * @example
   * test-resource-function
   */
  resourceFunction?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * alb-ffff****
   * 
   * @deprecated
   */
  resourceInstance?: string;
  /**
   * @example
   * lb-uf60ub45fr9b***
   */
  resourceInstanceId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  resourceInstanceIp?: string;
  /**
   * @example
   * test-name
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * test-resource-name
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. Valid values:
   * 
   * *   **alb**: ALB.
   * *   **mse**: MSE.
   * *   **fc**: Function Compute.
   * *   **sae**: SAE.
   * 
   * @example
   * alb
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The route name. This parameter has a value only if the value of ResourceProduct is mse.
   * 
   * @example
   * test-route-name
   */
  resourceRouteName?: string;
  /**
   * @remarks
   * The service name. This parameter has a value only if the value of ResourceProduct is fc.
   * 
   * @example
   * test-resource-service
   */
  resourceService?: string;
  static names(): { [key: string]: string } {
    return {
      httpPortCount: 'HttpPortCount',
      httpsPortCount: 'HttpsPortCount',
      ownerUserId: 'OwnerUserId',
      resourceDomain: 'ResourceDomain',
      resourceFunction: 'ResourceFunction',
      resourceInstance: 'ResourceInstance',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
      resourceRouteName: 'ResourceRouteName',
      resourceService: 'ResourceService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpPortCount: 'number',
      httpsPortCount: 'number',
      ownerUserId: 'string',
      resourceDomain: 'string',
      resourceFunction: 'string',
      resourceInstance: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
      resourceRouteName: 'string',
      resourceService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameCountResponseBodyCnameCount extends $tea.Model {
  /**
   * @example
   * 1
   */
  cname?: number;
  /**
   * @example
   * 1
   */
  hybridCloudCname?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      hybridCloudCname: 'HybridCloudCname',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'number',
      hybridCloudCname: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusResponseBodyDDoSStatus extends $tea.Model {
  /**
   * @remarks
   * The type of events that are triggered by DDoS attacks. Valid values:
   * 
   * *   defense: traffic scrubbing events.
   * *   blackhole: blackhole filtering events.
   * 
   * @example
   * blackhole
   */
  eventType?: string;
  /**
   * @remarks
   * Indicates whether DDoS attacks occur on specific domain names. Valid value:
   * 
   * *   **doing**: DDoS attacks occur on specific domain names.
   * 
   * @example
   * doing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultHttpsResponseBodyDefaultHttps extends $tea.Model {
  /**
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @example
   * 1
   */
  cipherSuite?: string;
  /**
   * @example
   * ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384
   */
  customCiphers?: string;
  /**
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'string',
      customCiphers: 'string',
      enableTLSv3: 'boolean',
      TLSVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceResponseBodyResource extends $tea.Model {
  /**
   * @remarks
   * The status of the tracking cookie.
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the tracking cookie.
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the slider CAPTCHA cookie.
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The custom header fields.
   * 
   * >  If the value of XffStatus is 1, the first IP address in the specified header field is used as the originating IP address of the client to prevent X-Forwarded-For (XFF) forgery. If you specify multiple header fields, WAF reads the values of the header fields in sequence until the originating IP address is obtained. If the originating IP address cannot be obtained, the first IP address in the XFF header field is used as the originating IP address of the client.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The description of the protected object.
   * 
   * @example
   * This is Description
   */
  description?: string;
  /**
   * @remarks
   * The details of the protected object. Different key-value pairs indicate different attributes of the protected object.
   * 
   * @example
   * {
   * "product": "waf",
   *  "domain": "demo.aliyundoc****.com"
   * }
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The time when the protected object was created. Unit: milliseconds.
   * 
   * @example
   * 1607493144000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the protected object was modified. Unit: milliseconds.
   * 
   * @example
   * 1691720010000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The user ID (UID) of the Alibaba Cloud account to which the protected object belongs.
   * 
   * @example
   * 170457******9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The pattern used for the protected object.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * alb
   */
  product?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * @example
   * alb-rencs***
   */
  resource?: string;
  /**
   * @remarks
   * The name of the protected object group to which the protected object belongs.
   * 
   * @example
   * example_resource_group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmoiy****p2oq
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The origin of the protected object. Valid values:
   * 
   * *   **custom**
   * *   **access**
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * Indicates whether a Layer 7 proxy is deployed in front of WAF, such as Anti-DDoS Proxy and Alibaba Cloud CDN. Valid values:
   * 
   * *   **0**: No Layer 7 proxy is deployed.
   * *   **1**: A Layer 7 proxy is deployed.
   * 
   * @example
   * 0
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      customHeaders: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'number',
      gmtModified: 'number',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      xffStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupResponseBodyGroup extends $tea.Model {
  /**
   * @remarks
   * The description of the protected object group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the protected object group was created.
   * 
   * @example
   * 23242312312
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The most recent time when the protected object group was modified.
   * 
   * @example
   * 23242312312
   */
  gmtModified?: number;
  /**
   * @remarks
   * The name of the protected object group.
   * 
   * @example
   * group1
   */
  groupName?: string;
  /**
   * @remarks
   * The protected objects in the protected object group. The protected objects are separated with commas (,).
   * 
   * @example
   * test1.aliyundoc.com,test2.aliyundoc.com
   */
  resourceList?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      resourceList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsResponseBodyGroups extends $tea.Model {
  /**
   * @remarks
   * The description of the protected object group.
   * 
   * @example
   * This is test description
   */
  description?: string;
  /**
   * @remarks
   * The time when the protected object group was created. Unit: milliseconds.
   * 
   * @example
   * 1624343180000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The most recent time when the protected object group was modified. Unit: milliseconds.
   * 
   * @example
   * 1701656305000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The name of the protected object group.
   * 
   * @example
   * apptest
   */
  groupName?: string;
  /**
   * @remarks
   * The names of the protected objects that are added to the protected object group. Separate multiple protected objects with commas (,).
   * 
   * @example
   * example02.aliyun-waf,example01.aliyun-waf
   */
  resourceList?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      resourceList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesResponseBodyTemplates extends $tea.Model {
  /**
   * @remarks
   * The scenario in which the protection template is used.
   * 
   * *   **waf_group**: basic protection.
   * *   **antiscan**: scan protection.
   * *   **ip_blacklist**: IP address blacklist.
   * *   **custom_acl**: custom rule.
   * *   **whitelist**: whitelist.
   * *   **region_block**: region blacklist.
   * *   **custom_response**: custom response.
   * *   **cc**: HTTP flood protection.
   * *   **tamperproof**: website tamper-proofing.
   * *   **dlp**: data leakage prevention.
   * 
   * @example
   * whitelist
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario in which the template is used. Valid values:
   * 
   * *   **web**: bot management for website protection.
   * *   **app**: bot management for app protection.
   * *   **basic**: bot management for basic protection.
   * 
   * @example
   * basic
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the protection template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the protection template was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1692930539000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection template.
   * 
   * @example
   * TestTemplateName
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection template. The value custom indicates that the template is a custom template created by the user.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection template. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection template. Valid values:
   * 
   * *   **user_default**: default template.
   * *   **user_custom**: custom template.
   * 
   * @example
   * user_custom
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Tagkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TagValue1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponseBodyResources extends $tea.Model {
  /**
   * @remarks
   * The status of the tracking cookie.
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * @example
   * 1
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute in the tracking cookie.
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute in the slider CAPTCHA cookie.
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The custom XFF headers that are used to identify the originating IP addresses of clients. If the value of XffStatus is 1 and CustomHeaders is left empty, the first IP addresses in the XFF headers are used as the originating IP addresses of clients.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The description of the protected object.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The details of the protected object. Different key-value pairs indicate different attributes of the protected object.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The time when the protected object was created. Unit: milliseconds.
   * 
   * @example
   * 1652149203187
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the protected object was modified. Unit: milliseconds.
   * 
   * @example
   * 1665633032000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 135*********46
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The pattern in which the protected object is protected.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * alb
   */
  product?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * @example
   * alb-rencs***
   */
  resource?: string;
  /**
   * @remarks
   * The name of the protected object group to which the protected object belongs.
   * 
   * @example
   * test
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The origin of the protected object.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * Indicates whether the X-Forwarded-For (XFF) proxy is enabled.
   * 
   * @example
   * 1
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      customHeaders: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'number',
      gmtModified: 'number',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      xffStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleResponseBodyRule extends $tea.Model {
  /**
   * @remarks
   * The details of the protection rule. The value is a JSON string that contains multiple parameters. For more information, see the "**Protection rule parameters**" section of the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * {\\"status\\":1,\\"policyId\\":1012,\\"action\\":\\"block\\"}
   */
  config?: string;
  /**
   * @remarks
   * The origin of the protection rule. Valid values:
   * 
   * *   **custom:** The protection rule is created by the user.
   * *   **system:** The protection rule is automatically generated by the system.
   * 
   * @example
   * custom
   */
  defenseOrigin?: string;
  /**
   * @remarks
   * The scenario in which the protection rule is used. For more information, see the description of **DefenseScene** in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The most recent time when the protection rule was modified.
   * 
   * @example
   * 1665196746000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * @example
   * 2732975
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the protection rule.
   * 
   * @example
   * test1
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the protection rule. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * @example
   * 9114
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      defenseOrigin: 'DefenseOrigin',
      defenseScene: 'DefenseScene',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      defenseOrigin: 'string',
      defenseScene: 'string',
      gmtModified: 'number',
      ruleId: 'number',
      ruleName: 'string',
      status: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesResponseBodyRules extends $tea.Model {
  /**
   * @remarks
   * The details of the protection rule. The value is a string that contains multiple parameters in the JSON format. For more information, see the "**Rule parameters**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * {\\"policyId\\":1012,\\"action\\":\\"block\\"}
   */
  config?: string;
  /**
   * @remarks
   * The origin of the protection rule. Valid values:
   * 
   * *   **custom:** The protection rule is created by the user.
   * *   **system:** The protection rule is automatically generated by the system.
   * 
   * @example
   * custom
   */
  defenseOrigin?: string;
  /**
   * @remarks
   * The scenario in which the protection rule is used. For more information, see the description of the **DefenseScene** parameter in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The most recent time when the protection rule was modified.
   * 
   * @example
   * 1665460629000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * @example
   * 42755
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the protection rule.
   * 
   * @example
   * rules_41
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the protection rule. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * @example
   * 5673
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      defenseOrigin: 'DefenseOrigin',
      defenseScene: 'DefenseScene',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      defenseOrigin: 'string',
      defenseScene: 'string',
      gmtModified: 'number',
      ruleId: 'number',
      ruleName: 'string',
      status: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateResponseBodyTemplate extends $tea.Model {
  /**
   * @remarks
   * The scenario in which the template is used. For more information, see the description of the **DefenseScene** parameter in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario in which the template is used. Valid values:
   * 
   * *   **web**: The template is a bot management template that is used for website protection.
   * *   **app**: The template is a bot management template that is used for app protection.
   * *   **basic**: The template is a bot management template that is used for basic protection.
   * 
   * @example
   * app
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the protection rule template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The most recent time when the protection rule template was modified.
   * 
   * @example
   * 1665283642000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * @example
   * 10097
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection rule template.
   * 
   * @example
   * test0621
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection rule template. If the value of this parameter is custom, the protection rule template is created by the user.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection rule template. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection rule template. Valid values:
   * 
   * *   **user_default:** default template.
   * *   **user_custom:** custom template.
   * 
   * @example
   * user_default
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesResponseBodyTemplates extends $tea.Model {
  /**
   * @remarks
   * The scenario in which the protection template is used.
   * 
   * *   **waf_group**: basic protection.
   * *   **antiscan**: scan protection.
   * *   **ip_blacklist**: IP address blacklist.
   * *   **custom_acl**: custom rule.
   * *   **whitelist**: whitelist.
   * *   **region_block**: region blacklist.
   * *   **custom_response**: custom response.
   * *   **cc**: HTTP flood protection.
   * *   **tamperproof**: website tamper-proofing.
   * *   **dlp**: data leakage prevention.
   * 
   * @example
   * whitelist
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario in which the protection template is used. Valid values:
   * 
   * *   **web**: bot management for website protection.
   * *   **app**: bot management for app protection.
   * *   **basic**: bot management for basic protection.
   * 
   * @example
   * basic
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the protection template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the protection template was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1683776070000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection template.
   * 
   * @example
   * testTemplateName
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection template. The value custom indicates that the protection template is a custom template created by the user.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection template. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection template. Valid values:
   * 
   * *   **user_default**: default template.
   * *   **user_custom**: custom template.
   * 
   * @example
   * user_custom
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyCertDetail extends $tea.Model {
  /**
   * @remarks
   * The domain name of your website.
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The end of the validity period of the SSL certificate. The value is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1685590400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The name of the SSL certificate.
   * 
   * @example
   * test-cert-name
   */
  name?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The beginning of the validity period of the SSL certificate. The value is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1677772800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      sans: 'Sans',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      endTime: 'number',
      id: 'string',
      name: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyListen extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 123
   */
  certId?: number;
  /**
   * @remarks
   * The type of the cipher suites. Valid values:
   * 
   * *   **1:** all cipher suites.
   * *   **2:** strong cipher suites.
   * *   **99:** custom cipher suites.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * An array of custom cipher suites.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * *   **true:** TLS 1.3 is supported.
   * *   **false:** TLS 1.3 is not supported.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether an exclusive IP address is enabled. Valid values:
   * 
   * *   **true:** An exclusive IP address is enabled for the domain name.
   * *   **false:** No exclusive IP addresses are enabled for the domain name.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP to HTTPS redirection is enabled for the domain name. Valid values:
   * 
   * *   **true:** HTTP to HTTPS redirection is enabled.
   * *   **false:** HTTP to HTTPS redirection is disabled.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * *   **true:** HTTP/2 is enabled.
   * *   **false:** HTTP/2 is disabled.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * An array of HTTP listener ports.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * An array of HTTPS listener ports.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **true:** IPv6 is enabled.
   * *   **false:** IPv6 is disabled.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of protection resource that is used. Valid values:
   * 
   * *   **share:** shared cluster.
   * *   **gslb:** shared cluster-based intelligent load balancing.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Indicates whether only SM certificate-based clients can access the domain name. This parameter is returned only if the value of SM2Enabled is true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate that is added. This parameter is returned only if the value of SM2Enabled is true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Indicates whether SM certificate-based verification is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the actual IP address of a client. Valid values:
   * 
   * *   **0:** No Layer 7 proxies are deployed in front of WAF.
   * *   **1:** WAF reads the first value of the X-Forwarded-For (XFF) header field as the actual IP address of the client.
   * *   **2:** WAF reads the value of a custom header field as the actual IP address of the client.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * An array of custom header fields that are used to obtain the actual IP address of a client.
   */
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      SM2AccessOnly: 'SM2AccessOnly',
      SM2CertId: 'SM2CertId',
      SM2Enabled: 'SM2Enabled',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      SM2AccessOnly: 'boolean',
      SM2CertId: 'string',
      SM2Enabled: 'boolean',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyRedirectBackends extends $tea.Model {
  /**
   * @remarks
   * The IP address or domain name of the origin server.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyRedirectRequestHeaders extends $tea.Model {
  /**
   * @remarks
   * The custom header field.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom header field.
   * 
   * @example
   * bbb
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyRedirect extends $tea.Model {
  /**
   * @remarks
   * An array of addresses of origin servers.
   */
  backends?: DescribeDomainDetailResponseBodyRedirectBackends[];
  /**
   * @remarks
   * The timeout period of the connection. Unit: seconds. Valid values: 5 to 120.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTPS to HTTP redirection is enabled for back-to-origin requests of the domain name. Valid values:
   * 
   * *   **true:** HTTPS to HTTP redirection for back-to-origin requests of the domain name is enabled.
   * *   **false:** HTTPS to HTTP redirection for back-to-origin requests of the domain name is disabled.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether the persistent connection feature is enabled. Valid values:
   * 
   * *   **true:** The persistent connection feature is enabled. This is the default value.
   * *   **false:** The persistent connection feature is disabled.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter specifies the number of reused persistent connections when you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of persistent connections that are in the Idle state. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * >  This parameter specifies the period of time during which a reused persistent connection is allowed to remain in the Idle state before the persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that is used when WAF forwards requests to the origin server. Valid values:
   * 
   * *   **ip_hash:** the IP hash algorithm.
   * *   **roundRobin:** the round-robin algorithm.
   * *   **leastTime:** the least response time algorithm.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The read timeout period. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * An array of key-value pairs that are used to mark the requests that pass through the WAF instance.
   */
  requestHeaders?: DescribeDomainDetailResponseBodyRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries when requests fail to be forwarded to the origin server. Valid values:
   * 
   * *   **true:** WAF retries. This is the default value.
   * *   **false:** WAF does not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * Indicates whether origin Server Name Indication (SNI) is enabled. Valid values:
   * 
   * *   **true:** Origin SNI is enabled.
   * *   **false:** Origin SNI is disabled. This is the default value.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI field.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The write timeout period. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Indicates whether the X-Forward-For-Proto header is used to identify the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectBackends },
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectRequestHeaders },
      retry: 'boolean',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodySM2CertDetail extends $tea.Model {
  /**
   * @remarks
   * The domain name of your website.
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The end of the validity period of the SSL certificate. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1665590400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The name of the SSL certificate.
   * 
   * @example
   * test-sm2-cert-name
   */
  name?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The beginning of the validity period of the SSL certificate. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1657551525000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      sans: 'Sans',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      endTime: 'number',
      id: 'string',
      name: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TagKey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsBackedsHttp extends $tea.Model {
  /**
   * @remarks
   * The HTTP address of the origin server.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsBackedsHttps extends $tea.Model {
  /**
   * @remarks
   * The HTTPS address of the origin server.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsBackeds extends $tea.Model {
  /**
   * @remarks
   * The HTTP addresses of the origin server.
   */
  http?: DescribeDomainsResponseBodyDomainsBackedsHttp[];
  /**
   * @remarks
   * The HTTPS addresses of the origin server.
   */
  https?: DescribeDomainsResponseBodyDomainsBackedsHttps[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttp },
      https: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsListenPorts extends $tea.Model {
  /**
   * @remarks
   * The HTTP listener ports.
   */
  http?: number[];
  /**
   * @remarks
   * The HTTPS listener ports.
   */
  https?: number[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': 'number' },
      https: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $tea.Model {
  /**
   * @remarks
   * The back-to-origin settings.
   */
  backeds?: DescribeDomainsResponseBodyDomainsBackeds;
  /**
   * @remarks
   * The CNAME assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxcvdaf.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name that is added to WAF in CNAME record mode.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   */
  listenPorts?: DescribeDomainsResponseBodyDomainsListenPorts;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvtc5z52****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1:** The domain name is in a normal state.
   * *   **2:** The domain name is being created.
   * *   **3:** The domain name is being modified.
   * *   **4:** The domain name is being released.
   * *   **5:** WAF no longer forwards traffic that is sent to the domain name.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backeds: 'Backeds',
      cname: 'Cname',
      domain: 'Domain',
      listenPorts: 'ListenPorts',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backeds: DescribeDomainsResponseBodyDomainsBackeds,
      cname: 'string',
      domain: 'string',
      listenPorts: DescribeDomainsResponseBodyDomainsListenPorts,
      resourceManagerResourceGroupId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowChartResponseBodyFlowChart extends $tea.Model {
  /**
   * @remarks
   * The number of requests that are blocked by custom access control list (ACL) rules.
   * 
   * @example
   * 0
   */
  aclCustomBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by custom ACL rules.
   * 
   * @example
   * 0
   */
  aclCustomReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by scan protection rules.
   * 
   * @example
   * 0
   */
  antiScanBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by bot management rules.
   * 
   * @example
   * 0
   */
  antibotBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by bot management rules.
   * 
   * @example
   * 0
   */
  antibotReportSum?: string;
  /**
   * @remarks
   * The number of requests that are monitored by scan protection rules.
   * 
   * @example
   * 0
   */
  antiscanReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by the IP address blacklist.
   * 
   * @example
   * 0
   */
  blacklistBlockSum?: string;
  /**
   * @remarks
   * The number of requests that are monitored by the IP address blacklist.
   * 
   * @example
   * 0
   */
  blacklistReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by custom HTTP flood protection rules.
   * 
   * @example
   * 0
   */
  ccCustomBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by custom HTTP flood protection rules.
   * 
   * @example
   * 0
   */
  ccCustomReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by HTTP flood protection rules created by the system.
   * 
   * @example
   * 0
   */
  ccSystemBlocksSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by HTTP flood protection rules created by the system.
   * 
   * @example
   * 0
   */
  ccSystemReportsSum?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 2932
   */
  count?: number;
  /**
   * @remarks
   * The total number of requests that are redirected to the WAF instance.
   * 
   * @example
   * 121645464
   */
  inBytes?: number;
  /**
   * @remarks
   * The serial number of the time interval. The serial numbers are arranged in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The peak traffic.
   * 
   * @example
   * 2932
   */
  maxPv?: number;
  /**
   * @remarks
   * The total number of requests that are forwarded by the WAF instance.
   * 
   * @example
   * 1200540464
   */
  outBytes?: number;
  /**
   * @remarks
   * The number of requests that are blocked by rate limiting rules.
   * 
   * @example
   * 0
   */
  ratelimitBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by rate limiting rules.
   * 
   * @example
   * 0
   */
  ratelimitReportSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by region blacklist rules.
   * 
   * @example
   * 0
   */
  regionBlockBlocksSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by region blacklist rules.
   * 
   * @example
   * 0
   */
  regionBlockReportsSum?: number;
  /**
   * @remarks
   * The total number of bot requests.
   * 
   * @example
   * 1110
   */
  robotCount?: number;
  /**
   * @remarks
   * The number of requests that are blocked by basic protection rules.
   * 
   * @example
   * 0
   */
  wafBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by basic protection rules.
   * 
   * @example
   * 0
   */
  wafReportSum?: string;
  static names(): { [key: string]: string } {
    return {
      aclCustomBlockSum: 'AclCustomBlockSum',
      aclCustomReportsSum: 'AclCustomReportsSum',
      antiScanBlockSum: 'AntiScanBlockSum',
      antibotBlockSum: 'AntibotBlockSum',
      antibotReportSum: 'AntibotReportSum',
      antiscanReportsSum: 'AntiscanReportsSum',
      blacklistBlockSum: 'BlacklistBlockSum',
      blacklistReportsSum: 'BlacklistReportsSum',
      ccCustomBlockSum: 'CcCustomBlockSum',
      ccCustomReportsSum: 'CcCustomReportsSum',
      ccSystemBlocksSum: 'CcSystemBlocksSum',
      ccSystemReportsSum: 'CcSystemReportsSum',
      count: 'Count',
      inBytes: 'InBytes',
      index: 'Index',
      maxPv: 'MaxPv',
      outBytes: 'OutBytes',
      ratelimitBlockSum: 'RatelimitBlockSum',
      ratelimitReportSum: 'RatelimitReportSum',
      regionBlockBlocksSum: 'RegionBlockBlocksSum',
      regionBlockReportsSum: 'RegionBlockReportsSum',
      robotCount: 'RobotCount',
      wafBlockSum: 'WafBlockSum',
      wafReportSum: 'WafReportSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCustomBlockSum: 'number',
      aclCustomReportsSum: 'number',
      antiScanBlockSum: 'number',
      antibotBlockSum: 'number',
      antibotReportSum: 'string',
      antiscanReportsSum: 'number',
      blacklistBlockSum: 'string',
      blacklistReportsSum: 'number',
      ccCustomBlockSum: 'number',
      ccCustomReportsSum: 'number',
      ccSystemBlocksSum: 'number',
      ccSystemReportsSum: 'number',
      count: 'number',
      inBytes: 'number',
      index: 'number',
      maxPv: 'number',
      outBytes: 'number',
      ratelimitBlockSum: 'number',
      ratelimitReportSum: 'number',
      regionBlockBlocksSum: 'number',
      regionBlockReportsSum: 'number',
      robotCount: 'number',
      wafBlockSum: 'number',
      wafReportSum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceResponseBodyRuleHitsTopResource extends $tea.Model {
  /**
   * @remarks
   * The total number of requests received by the protected object in a specified time range.
   * 
   * @example
   * 181174784
   */
  count?: number;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlResponseBodyRuleHitsTopUrl extends $tea.Model {
  /**
   * @remarks
   * The total number of requests that are initiated by using the URL.
   * 
   * @example
   * 181174784
   */
  count?: number;
  /**
   * @remarks
   * The URL that is used to initiate requests.
   * 
   * @example
   * www.aliyundoc.com/path1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClusterRuleResponseBodyClusterRule extends $tea.Model {
  /**
   * @remarks
   * The configuration of the rule.
   * 
   * @example
   * {\\"check_mode\\":\\"all\\",\\"exclude\\":{\\"exact\\":[],\\"regex\\":[]}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **pullin**: The traffic redirection rule of the hybrid cloud cluster.
   * 
   * @example
   * pullin
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleConfig: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClustersResponseBodyClusterInfos extends $tea.Model {
  /**
   * @example
   * internet
   */
  accessMode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  accessRegion?: string;
  clusterName?: string;
  /**
   * @example
   * hdbc-cluster-t1****a
   */
  clusterResourceId?: string;
  /**
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @example
   * 524**8
   */
  id?: number;
  /**
   * @example
   * 1
   */
  protectionServerCount?: number;
  /**
   * @example
   * off
   */
  proxyStatus?: string;
  /**
   * @example
   * cname
   */
  proxyType?: string;
  remark?: string;
  /**
   * @example
   * {"enable":true,"param":{"breaker":{"duration":1,"failed":1,"recent_failed":1},"disable_protect":false,"max_request_body_len":1,"timeout":1}}
   */
  ruleConfig?: string;
  /**
   * @example
   * off
   */
  ruleStatus?: string;
  /**
   * @example
   * bypass
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessRegion: 'AccessRegion',
      clusterName: 'ClusterName',
      clusterResourceId: 'ClusterResourceId',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      id: 'Id',
      protectionServerCount: 'ProtectionServerCount',
      proxyStatus: 'ProxyStatus',
      proxyType: 'ProxyType',
      remark: 'Remark',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessRegion: 'string',
      clusterName: 'string',
      clusterResourceId: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      id: 'number',
      protectionServerCount: 'number',
      proxyStatus: 'string',
      proxyType: 'string',
      remark: 'string',
      ruleConfig: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsResponseBodyGroups extends $tea.Model {
  /**
   * @remarks
   * The back-to-origin mark of the protected cluster. The value is in the {ISP name}-{Continent name}-{City name}-{Back-to-origin identifier} format. The back-to-origin identifier is optional.
   * 
   * >  For more information about ISP names, continent names, city names, and back-to-origin identifiers, see the following sections.
   * 
   * @example
   * aliyun-asiapacific-beijing-12345678
   */
  backSourceMark?: string;
  /**
   * @remarks
   * The continent code of the protected cluster.
   * 
   * >  For more information about continent codes, see Continent codes in this topic.
   * 
   * @example
   * 410
   */
  continentsValue?: number;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * 123
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * StorageGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * *   **protect**
   * *   **control**
   * *   **storage**
   * *   **controlStorage**
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The IP address of the server used for load balancing.
   * 
   * @example
   * 1.1.XX.XX
   */
  loadBalanceIp?: string;
  /**
   * @remarks
   * The ID of the protection node.
   * 
   * @example
   * 1312
   */
  locationId?: number;
  /**
   * @remarks
   * The ISP code of the protected cluster.
   * 
   * >  For more information about ISP codes, see ISP codes in this topic.
   * 
   * @example
   * 0
   */
  operatorValue?: number;
  /**
   * @remarks
   * The port that is used by the hybrid cloud cluster. The value of this parameter is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 80,9200,20018
   */
  ports?: string;
  /**
   * @remarks
   * The city code of the protected cluster.
   * 
   * >  For more information about city codes, see City codes in this topic.
   * 
   * @example
   * 0
   */
  regionCodeValue?: number;
  /**
   * @remarks
   * The description of the node group.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backSourceMark: 'BackSourceMark',
      continentsValue: 'ContinentsValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      loadBalanceIp: 'LoadBalanceIp',
      locationId: 'LocationId',
      operatorValue: 'OperatorValue',
      ports: 'Ports',
      regionCodeValue: 'RegionCodeValue',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backSourceMark: 'string',
      continentsValue: 'number',
      groupId: 'number',
      groupName: 'string',
      groupType: 'string',
      loadBalanceIp: 'string',
      locationId: 'number',
      operatorValue: 'number',
      ports: 'string',
      regionCodeValue: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBodyDomainsListen extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 72***76-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The types of cipher suites that are added. Valid values:
   * 
   * *   **1:** all cipher suites.
   * *   **2:** strong cipher suites.
   * *   **99:** custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites.
   * 
   * >  This parameter is returned only if the value of **CipherSuite** is **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether exclusive IP addresses are supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether the HTTP to HTTPS redirection feature is enabled for the domain name. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The HTTP listener ports.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The HTTPS listener ports.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of the protection resource. Valid values:
   * 
   * *   **share:** shared cluster.
   * *   **gslb:** shared cluster-based intelligent load balancing.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that is used to obtain the actual IP address of a client. Valid values:
   * 
   * *   **0**: No Layer 7 proxies are deployed in front of WAF.
   * *   **1**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the actual IP address of the client.
   * *   **2**: WAF reads the value of a custom header field as the actual IP address of the client.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the actual IP addresses of clients. The value is in the ["header1","header2",...] format.
   * 
   * >  This parameter is returned only if the value of **XffHeaderMode** is 2.
   */
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders extends $tea.Model {
  /**
   * @remarks
   * The key of the custom header field.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom header field.
   * 
   * @example
   * bbb
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBodyDomainsRedirect extends $tea.Model {
  /**
   * @remarks
   * The IP addresses or domain names of the origin server.
   */
  backends?: string[];
  /**
   * @remarks
   * Indicates whether the public cloud disaster recovery feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connections. Unit: seconds. Valid values: 5 to 120.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether the HTTPS to HTTP redirection feature is enabled for back-to-origin requests. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether the persistent connection feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter indicates the number of reused persistent connections after the persistent connection feature is enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for persistent connections that are in the Idle state. Unit: seconds. Valid values: 1 to 60. Default value: 15.
   * 
   * >  This parameter indicates the period of time during which a reused persistent connection can remain in the Idle state before the persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that is used to forward requests to the origin server. Valid values:
   * 
   * *   **iphash**
   * *   **roundRobin**
   * *   **leastTime**
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The timeout period for read connections. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The key-value pair that is used to label requests that pass through WAF.
   */
  requestHeaders?: DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries forwarding requests if requests fail to be forwarded to the origin server. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules that are configured for the domain name. This parameter is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **rs**: the back-to-origin IP addresses or CNAMEs. The value is of the ARRAY type.
   * *   **location**: the name of the protection node. The value is of the STRING type.
   * *   **locationId**: the ID of the protection node. The value is of the LONG type.
   * 
   * @example
   * [
   *       {
   *             "rs": [
   *                   "1.1.XX.XX"
   *             ],
   *             "locationId": 535,
   *             "location": "test1111"
   *       }
   * ]
   */
  routingRules?: string;
  /**
   * @remarks
   * Indicates whether the origin Server Name Indication (SNI) feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI field. If the parameter is left empty, the value of the **Host** field in the request header is automatically used as the value of the SNI field.
   * 
   * >  This parameter is returned only if the value of **SniEnabled** is **true**.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The timeout period for write connections. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBodyDomains extends $tea.Model {
  /**
   * @remarks
   * The CNAME assigned by WAF.
   * 
   * >  This parameter is returned only if the value of **CnameEnabled** is true.
   * 
   * @example
   * 50fqmu1ci7g0xtiyxnrhgx6qdhmn****.yundunwaf5.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The access ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The listeners.
   */
  listen?: DescribeHybridCloudResourcesResponseBodyDomainsListen;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   */
  redirect?: DescribeHybridCloudResourcesResponseBodyDomainsRedirect;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmvtc5z52****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1:** The domain name is in a normal state.
   * *   **2:** The domain name is being created.
   * *   **3:** The domain name is being modified.
   * *   **4:** The domain name is being released.
   * *   **5:** WAF no longer forwards the traffic of the domain name.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 130715431409****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      id: 'Id',
      listen: 'Listen',
      redirect: 'Redirect',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      id: 'number',
      listen: DescribeHybridCloudResourcesResponseBodyDomainsListen,
      redirect: DescribeHybridCloudResourcesResponseBodyDomainsRedirect,
      resourceManagerResourceGroupId: 'string',
      status: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudServerRegionsResponseBodyRegions extends $tea.Model {
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * aliyun
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines extends $tea.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 16
   */
  cpu?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * exampleName
   */
  customName?: string;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * online-xagent1
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 1.X.X.1
   */
  ip?: string;
  /**
   * @remarks
   * The media access control (MAC) address of the device.
   * 
   * @example
   * 00163e2686ac
   */
  mac?: string;
  /**
   * @remarks
   * The memory size. Unit: KB. A conversion factor of 1,000 is used.
   * 
   * @example
   * 31580872
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 78db009ab6cf055a9085f9f4****ae3a
   */
  mid?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      customName: 'CustomName',
      hostName: 'HostName',
      ip: 'Ip',
      mac: 'Mac',
      memory: 'Memory',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      customName: 'string',
      hostName: 'string',
      ip: 'string',
      mac: 'string',
      memory: 'number',
      mid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserResponseBodyUserInfo extends $tea.Model {
  /**
   * @remarks
   * The HTTP ports. The value is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS ports. The value is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 8443,443
   */
  httpsPorts?: string;
  static names(): { [key: string]: string } {
    return {
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpPorts: 'string',
      httpsPorts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyDetails extends $tea.Model {
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to the match content of a match condition. For more information, see [Match conditions](https://help.aliyun.com/document_detail/374354.html).
   * 
   * @example
   * 100
   */
  aclRuleMaxIpCount?: number;
  /**
   * @remarks
   * Indicates whether the scan protection module is supported. Valid values:
   * 
   * *   **true:** The scan protection module is supported.
   * *   **false:** The scan protection module is not supported.
   * 
   * @example
   * true
   */
  antiScan?: boolean;
  /**
   * @remarks
   * The maximum number of scan protection rule templates that can be configured.
   * 
   * @example
   * 20
   */
  antiScanTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of back-to-origin IP addresses that can be configured.
   * 
   * @example
   * 20
   */
  backendMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the basic protection rule module is supported. Valid values:
   * 
   * *   **true:** The basic protection rule module is supported.
   * *   **false:** The basic protection rule module is not supported.
   * 
   * @example
   * true
   */
  baseWafGroup?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that can be included in a basic protection rule template.
   * 
   * @example
   * 100
   */
  baseWafGroupRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of basic protection rule templates that can be configured.
   * 
   * @example
   * 20
   */
  baseWafGroupRuleTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the bot management module is supported. Valid values:
   * 
   * *   **true:** The bot management module is supported.
   * *   **false:** The bot management module is not supported.
   * 
   * @example
   * true
   */
  bot?: boolean;
  /**
   * @remarks
   * Indicates whether bot management for app protection is supported. Valid values:
   * 
   * *   **true:** Bot management for app protection is supported.
   * *   **false:** Bot management for app protection is not supported.
   * 
   * @example
   * true
   */
  botApp?: string;
  /**
   * @remarks
   * The maximum number of bot management rule templates that can be configured.
   * 
   * @example
   * 50
   */
  botTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether bot management for website protection is supported. Valid values:
   * 
   * *   **true:** Bot management for website protection is supported.
   * *   **false:** Bot management for website protection is not supported.
   * 
   * @example
   * true
   */
  botWeb?: string;
  /**
   * @remarks
   * The maximum number of CNAMEs that can be added.
   * 
   * @example
   * 1000
   */
  cnameResourceMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the custom response module is supported. Valid values:
   * 
   * *   **true:** The custom response module is supported.
   * *   **false:** The custom response module is not supported.
   * 
   * @example
   * true
   */
  customResponse?: boolean;
  /**
   * @remarks
   * The maximum number of rules that can be included in a custom response rule template.
   * 
   * @example
   * 100
   */
  customResponseRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of custom response rule templates that can be configured.
   * 
   * @example
   * 20
   */
  customResponseTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the custom rule module is supported. Valid values:
   * 
   * *   **true:** The custom rule module is supported.
   * *   **false:** The custom rule module is not supported.
   * 
   * @example
   * true
   */
  customRule?: boolean;
  /**
   * @remarks
   * The action that can be included in a custom rule.
   * 
   * @example
   * block
   */
  customRuleAction?: string;
  /**
   * @remarks
   * The match conditions that can be used in a custom rule. For more information, see **Match condition parameters** in the "**Parameters of custom rules (custom_acl)**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * URL
   */
  customRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of rules that can be included in a custom rule template.
   * 
   * @example
   * 100
   */
  customRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The statistical object for rate limiting in a custom rule.
   * 
   * @example
   * header
   */
  customRuleRatelimitor?: string;
  /**
   * @remarks
   * The maximum number of custom rule templates that can be configured.
   * 
   * @example
   * 20
   */
  customRuleTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected object groups that can be configured.
   * 
   * @example
   * 100
   */
  defenseGroupMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected objects that can be included in a protected object group.
   * 
   * @example
   * 100
   */
  defenseObjectInGroupMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected objects to which a protection rule template can be applied.
   * 
   * @example
   * 100
   */
  defenseObjectInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected objects that can be configured.
   * 
   * @example
   * 20,000
   */
  defenseObjectMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the data leakage prevention module is supported. Valid values:
   * 
   * *   **true:** The data leakage prevention module is supported.
   * *   **false:** The data leakage prevention module is not supported.
   * 
   * @example
   * true
   */
  dlp?: boolean;
  /**
   * @remarks
   * The maximum number of rules that can be included in a data leakage prevention rule template.
   * 
   * @example
   * 50
   */
  dlpRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of data leakage prevention rule templates that can be configured.
   * 
   * @example
   * 50
   */
  dlpTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether exclusive IP addresses are supported. Valid values:
   * 
   * *   **true:** Exclusive IP addresses are supported.
   * *   **false:** Exclusive IP addresses are not supported.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether global server load balancing (GSLB) is supported. Valid values:
   * 
   * *   **true:** GSLB is supported.
   * *   **false:** GSLB is not supported.
   * 
   * @example
   * true
   */
  gslb?: boolean;
  /**
   * @remarks
   * The HTTP port range that is supported. For more information, see [View supported ports](https://help.aliyun.com/document_detail/385578.html).
   * 
   * @example
   * 80
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port range that is supported. For more information, see [View supported ports](https://help.aliyun.com/document_detail/385578.html).
   * 
   * @example
   * 443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether the IP address blacklist module is supported. Valid values:
   * 
   * *   **true:** The IP address blacklist module is supported.
   * *   **false:** The IP address blacklist module is not supported.
   * 
   * @example
   * true
   */
  ipBlacklist?: boolean;
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to an IP address blacklist rule.
   * 
   * @example
   * 200
   */
  ipBlacklistIpInRuleMaxCount?: number;
  /**
   * @remarks
   * The maximum number of rules that can be included in an IP address blacklist rule template.
   * 
   * @example
   * 100
   */
  ipBlacklistRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP address blacklist rule templates that can be configured.
   * 
   * @example
   * 20
   */
  ipBlacklistTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether IPv6 is supported. Valid values:
   * 
   * *   **true:** IPv6 is supported.
   * *   **false:** IPv6 is not supported.
   * 
   * @example
   * true
   */
  ipv6?: boolean;
  /**
   * @remarks
   * Indicates whether the log collection feature is supported. Valid values:
   * 
   * *   **true:** The log collection feature is supported.
   * *   **false:** The log collection feature is not supported.
   * 
   * @example
   * true
   */
  logService?: boolean;
  /**
   * @remarks
   * Indicates whether major event protection is supported. Valid values:
   * 
   * *   **true:** Major event protection is supported.
   * *   **false:** Major event protection is not supported.
   * 
   * @example
   * true
   */
  majorProtection?: boolean;
  /**
   * @remarks
   * The maximum number of major event protection rule templates that can be configured.
   * 
   * @example
   * 20
   */
  majorProtectionTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the website tamper-proofing module is supported. Valid values:
   * 
   * *   **true:** The website tamper-proofing module is supported.
   * *   **false:** The website tamper-proofing module is not supported.
   * 
   * @example
   * true
   */
  tamperproof?: boolean;
  /**
   * @remarks
   * The maximum number of rules that can be included in a website tamper-proofing rule template.
   * 
   * @example
   * 50
   */
  tamperproofRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of website tamper-proofing rule templates that can be configured.
   * 
   * @example
   * 50
   */
  tamperproofTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses or CIDR blocks that can be added to an IP address blacklist in a batch.
   * 
   * @example
   * 2,000
   */
  vastIpBlacklistInFileMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses or CIDR blocks that can be added to an IP address blacklist on a page.
   * 
   * @example
   * 500
   */
  vastIpBlacklistInOperationMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses or CIDR blocks that can be added to an IP address blacklist per Alibaba Cloud account.
   * 
   * @example
   * 50,000
   */
  vastIpBlacklistMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the whitelist module is supported. Valid values:
   * 
   * *   **true:** The whitelist module is supported.
   * *   **false:** The whitelist module is not supported.
   * 
   * @example
   * true
   */
  whitelist?: boolean;
  /**
   * @remarks
   * The logical operators that can be used in a whitelist rule. For more information, see **Match condition parameters** in the "**Parameters of whitelist rules (whitelist)**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * contain
   */
  whitelistLogical?: string;
  /**
   * @remarks
   * The match fields that can be used in a whitelist rule. For more information, see **Match condition parameters** in the "**Parameters of whitelist rules (whitelist)**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * URL
   */
  whitelistRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of rules that can be included in a whitelist rule template.
   * 
   * @example
   * 100
   */
  whitelistRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of whitelist rule templates that can be configured.
   * 
   * @example
   * 20
   */
  whitelistTemplateMaxCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclRuleMaxIpCount: 'AclRuleMaxIpCount',
      antiScan: 'AntiScan',
      antiScanTemplateMaxCount: 'AntiScanTemplateMaxCount',
      backendMaxCount: 'BackendMaxCount',
      baseWafGroup: 'BaseWafGroup',
      baseWafGroupRuleInTemplateMaxCount: 'BaseWafGroupRuleInTemplateMaxCount',
      baseWafGroupRuleTemplateMaxCount: 'BaseWafGroupRuleTemplateMaxCount',
      bot: 'Bot',
      botApp: 'BotApp',
      botTemplateMaxCount: 'BotTemplateMaxCount',
      botWeb: 'BotWeb',
      cnameResourceMaxCount: 'CnameResourceMaxCount',
      customResponse: 'CustomResponse',
      customResponseRuleInTemplateMaxCount: 'CustomResponseRuleInTemplateMaxCount',
      customResponseTemplateMaxCount: 'CustomResponseTemplateMaxCount',
      customRule: 'CustomRule',
      customRuleAction: 'CustomRuleAction',
      customRuleCondition: 'CustomRuleCondition',
      customRuleInTemplateMaxCount: 'CustomRuleInTemplateMaxCount',
      customRuleRatelimitor: 'CustomRuleRatelimitor',
      customRuleTemplateMaxCount: 'CustomRuleTemplateMaxCount',
      defenseGroupMaxCount: 'DefenseGroupMaxCount',
      defenseObjectInGroupMaxCount: 'DefenseObjectInGroupMaxCount',
      defenseObjectInTemplateMaxCount: 'DefenseObjectInTemplateMaxCount',
      defenseObjectMaxCount: 'DefenseObjectMaxCount',
      dlp: 'Dlp',
      dlpRuleInTemplateMaxCount: 'DlpRuleInTemplateMaxCount',
      dlpTemplateMaxCount: 'DlpTemplateMaxCount',
      exclusiveIp: 'ExclusiveIp',
      gslb: 'Gslb',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      ipBlacklist: 'IpBlacklist',
      ipBlacklistIpInRuleMaxCount: 'IpBlacklistIpInRuleMaxCount',
      ipBlacklistRuleInTemplateMaxCount: 'IpBlacklistRuleInTemplateMaxCount',
      ipBlacklistTemplateMaxCount: 'IpBlacklistTemplateMaxCount',
      ipv6: 'Ipv6',
      logService: 'LogService',
      majorProtection: 'MajorProtection',
      majorProtectionTemplateMaxCount: 'MajorProtectionTemplateMaxCount',
      tamperproof: 'Tamperproof',
      tamperproofRuleInTemplateMaxCount: 'TamperproofRuleInTemplateMaxCount',
      tamperproofTemplateMaxCount: 'TamperproofTemplateMaxCount',
      vastIpBlacklistInFileMaxCount: 'VastIpBlacklistInFileMaxCount',
      vastIpBlacklistInOperationMaxCount: 'VastIpBlacklistInOperationMaxCount',
      vastIpBlacklistMaxCount: 'VastIpBlacklistMaxCount',
      whitelist: 'Whitelist',
      whitelistLogical: 'WhitelistLogical',
      whitelistRuleCondition: 'WhitelistRuleCondition',
      whitelistRuleInTemplateMaxCount: 'WhitelistRuleInTemplateMaxCount',
      whitelistTemplateMaxCount: 'WhitelistTemplateMaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRuleMaxIpCount: 'number',
      antiScan: 'boolean',
      antiScanTemplateMaxCount: 'number',
      backendMaxCount: 'number',
      baseWafGroup: 'boolean',
      baseWafGroupRuleInTemplateMaxCount: 'number',
      baseWafGroupRuleTemplateMaxCount: 'number',
      bot: 'boolean',
      botApp: 'string',
      botTemplateMaxCount: 'number',
      botWeb: 'string',
      cnameResourceMaxCount: 'number',
      customResponse: 'boolean',
      customResponseRuleInTemplateMaxCount: 'number',
      customResponseTemplateMaxCount: 'number',
      customRule: 'boolean',
      customRuleAction: 'string',
      customRuleCondition: 'string',
      customRuleInTemplateMaxCount: 'number',
      customRuleRatelimitor: 'string',
      customRuleTemplateMaxCount: 'number',
      defenseGroupMaxCount: 'number',
      defenseObjectInGroupMaxCount: 'number',
      defenseObjectInTemplateMaxCount: 'number',
      defenseObjectMaxCount: 'number',
      dlp: 'boolean',
      dlpRuleInTemplateMaxCount: 'number',
      dlpTemplateMaxCount: 'number',
      exclusiveIp: 'boolean',
      gslb: 'boolean',
      httpPorts: 'string',
      httpsPorts: 'string',
      ipBlacklist: 'boolean',
      ipBlacklistIpInRuleMaxCount: 'number',
      ipBlacklistRuleInTemplateMaxCount: 'number',
      ipBlacklistTemplateMaxCount: 'number',
      ipv6: 'boolean',
      logService: 'boolean',
      majorProtection: 'boolean',
      majorProtectionTemplateMaxCount: 'number',
      tamperproof: 'boolean',
      tamperproofRuleInTemplateMaxCount: 'number',
      tamperproofTemplateMaxCount: 'number',
      vastIpBlacklistInFileMaxCount: 'number',
      vastIpBlacklistInOperationMaxCount: 'number',
      vastIpBlacklistMaxCount: 'number',
      whitelist: 'boolean',
      whitelistLogical: 'string',
      whitelistRuleCondition: 'string',
      whitelistRuleInTemplateMaxCount: 'number',
      whitelistTemplateMaxCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsResponseBodyIpList extends $tea.Model {
  /**
   * @remarks
   * The description of the IP address in the blacklist.
   * 
   * @example
   * test0003asdffas
   */
  description?: string;
  /**
   * @remarks
   * The time after which the IP address blacklist becomes invalid. Unit: seconds.
   * 
   * >  If the value of this parameter is **0**, the blacklist is permanently valid.
   * 
   * @example
   * 1662603328
   */
  expiredTime?: number;
  /**
   * @remarks
   * The most recent time when the IP address blacklist was modified.
   * 
   * @example
   * 1665456202000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The IP address in the IP address blacklist.
   * 
   * @example
   * 192.0.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the IP address blacklist rule for major event protection.
   * 
   * @example
   * 8508970
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the rule template for major event protection.
   * 
   * @example
   * 9684
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expiredTime: 'ExpiredTime',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expiredTime: 'number',
      gmtModified: 'number',
      ip: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsResponseBodyAccountInfos extends $tea.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 169************21
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * ipflgmqqnbjg
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the member.
   * 
   * *   **enabled**: managed.
   * *   **disabled**: not managed.
   * *   **disabling**: being deleted.
   * 
   * @example
   * enabled
   */
  accountStatus?: string;
  /**
   * @remarks
   * The description of the member.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the member was added.
   * 
   * @example
   * 1683367751000
   */
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      description: 'Description',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountStatus: 'string',
      description: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendResponseBodyFlowChart extends $tea.Model {
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the custom rule (access control) module.
   * 
   * @example
   * 0
   */
  aclSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the scan protection module.
   * 
   * @example
   * 0
   */
  antiScanSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the HTTP flood protection module.
   * 
   * @example
   * 0
   */
  ccSum?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 2622
   */
  count?: number;
  /**
   * @remarks
   * The serial number of the time interval. The serial numbers are arranged in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the regular expression protection engine.
   * 
   * @example
   * 0
   */
  wafSum?: number;
  static names(): { [key: string]: string } {
    return {
      aclSum: 'AclSum',
      antiScanSum: 'AntiScanSum',
      ccSum: 'CcSum',
      count: 'Count',
      index: 'Index',
      wafSum: 'WafSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclSum: 'number',
      antiScanSum: 'number',
      ccSum: 'number',
      count: 'number',
      index: 'number',
      wafSum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 10106183
   */
  certificateId?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * trafficxxxx.cn
   */
  certificateName?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstancesResourcePorts extends $tea.Model {
  /**
   * @remarks
   * The information about the certificates.
   */
  certificates?: DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates[];
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **http**
   * *   **https**
   * 
   * @example
   * https
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates },
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstances extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2ze1tm4pvghp****cluv
   */
  resourceInstanceId?: string;
  resourceInstanceIp?: string;
  resourceInstanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.X.X.1
   * 
   * @deprecated
   */
  resourceIp?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs-test
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The information about the ports.
   */
  resourcePorts?: DescribeProductInstancesResponseBodyProductInstancesResourcePorts[];
  /**
   * @remarks
   * The cloud service to which the instance belongs. Valid values:
   * 
   * *   **clb4**: Layer 4 CLB.
   * *   **clb7**: Layer 7 CLB.
   * *   **ecs**: ECS.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the instance. Valid values:
   * 
   * *   **cn-chengdu**: China (Chengdu).
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-zhangjiakou**: China (Zhangjiakou).
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **cn-shanghai**: China (Shanghai).
   * *   **cn-shenzhen**: China (Shenzhen).
   * *   **cn-qingdao**: China (Qingdao).
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * *   **ap-southeast-5**: Indonesia (Jakarta).
   * 
   * @example
   * cn-beijing
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUserId: 'OwnerUserId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceIp: 'ResourceIp',
      resourceName: 'ResourceName',
      resourcePorts: 'ResourcePorts',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUserId: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceIp: 'string',
      resourceName: 'string',
      resourcePorts: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePorts },
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsResponseBodyCerts extends $tea.Model {
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 1708415521211
   */
  afterDate?: number;
  /**
   * @remarks
   * The time when the certificate was issued.
   * 
   * @example
   * 1708415521211
   */
  beforeDate?: number;
  /**
   * @remarks
   * The globally unique ID of the certificate. The value is in the "Certificate ID-cn-hangzhou" format. For example, if the ID of the certificate is 123, the value of CertIdentifier is 123-cn-hangzhou.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * demoCertName
   */
  certName?: string;
  /**
   * @remarks
   * The common name.
   * 
   * @example
   * *.aliyundemo.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name for which the certificate is issued.
   * 
   * @example
   * waf.aliyundemo.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the certificate chain is complete.
   * 
   * @example
   * true
   */
  isChainCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      isChainCompleted: 'IsChainCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      isChainCompleted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * alb-wewbb23dfsetetcic****
   */
  resource?: string;
  /**
   * @remarks
   * Indicates whether the log collection feature is enabled for the protected object. Valid values:
   * 
   * *   **true:** The log collection feature is enabled.
   * *   **false:** The log collection feature is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphResponseBodyResponseCodes extends $tea.Model {
  /**
   * @remarks
   * The number of 302 error codes that are returned.
   * 
   * @example
   * 0
   */
  code302Pv?: number;
  /**
   * @remarks
   * The number of 405 error codes that are returned.
   * 
   * @example
   * 121645464
   */
  code405Pv?: number;
  /**
   * @remarks
   * The number of 444 error codes that are returned.
   * 
   * @example
   * 0
   */
  code444Pv?: number;
  /**
   * @remarks
   * The number of 499 error codes that are returned.
   * 
   * @example
   * 0
   */
  code499Pv?: number;
  /**
   * @remarks
   * The number of 5xx error codes that are returned.
   * 
   * @example
   * 2932
   */
  code5xxPv?: number;
  /**
   * @remarks
   * The serial number of the time interval. The serial numbers are arranged in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      code302Pv: '302Pv',
      code405Pv: '405Pv',
      code444Pv: '444Pv',
      code499Pv: '499Pv',
      code5xxPv: '5xxPv',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code302Pv: 'number',
      code405Pv: 'number',
      code444Pv: 'number',
      code499Pv: 'number',
      code5xxPv: 'number',
      index: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsResponseBodyRuleGroups extends $tea.Model {
  /**
   * @remarks
   * The most recent time when the rule group was modified.
   * 
   * @example
   * 1664336364000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates whether the automatic update feature is enabled for the rule group.
   * 
   * *   1: The automatic update feature is enabled for the rule group.
   * *   2: The automatic update feature is disabled for the rule group.
   * 
   * @example
   * 1
   */
  isSubscribe?: number;
  /**
   * @remarks
   * The ID of the rule group.
   * 
   * *   0: The rule group is created from scratch.
   * *   1011: The rule group is a strict rule group.
   * *   1012: The rule group is a medium rule group.
   * *   1013: The rue group is a loose rule group.
   * 
   * @example
   * 1012
   */
  parentRuleGroupId?: number;
  /**
   * @remarks
   * The ID of the regular expression rule group.
   * 
   * @example
   * 115361
   */
  ruleGroupId?: number;
  /**
   * @remarks
   * The name of the rule group.
   * 
   * @example
   * ssssss
   */
  ruleGroupName?: string;
  /**
   * @remarks
   * The number of built-in rules in the rule group.
   * 
   * @example
   * 4444
   */
  ruleTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      isSubscribe: 'IsSubscribe',
      parentRuleGroupId: 'ParentRuleGroupId',
      ruleGroupId: 'RuleGroupId',
      ruleGroupName: 'RuleGroupName',
      ruleTotalCount: 'RuleTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      isSubscribe: 'number',
      parentRuleGroupId: 'number',
      ruleGroupId: 'number',
      ruleGroupName: 'string',
      ruleTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp extends $tea.Model {
  /**
   * @remarks
   * The IP address of the service client.
   * 
   * @example
   * 3.3.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The number of attacks that are initiated from the IP address.
   * 
   * @example
   * 531
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource extends $tea.Model {
  /**
   * @remarks
   * The number of requests that match protection rules.
   * 
   * @example
   * 14219
   */
  count?: number;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId extends $tea.Model {
  /**
   * @remarks
   * The number of requests that match the rule.
   * 
   * @example
   * 181174784
   */
  count?: number;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 5465465
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resource: 'Resource',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resource: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType extends $tea.Model {
  /**
   * @remarks
   * The number of requests that match protection rules.
   * 
   * @example
   * 698455
   */
  count?: number;
  /**
   * @remarks
   * The type of rule that is matched. By default, this parameter is not returned. This indicates that all types of rules that are matched are returned.
   * 
   * *   **waf:** basic protection rules.
   * *   **blacklist:** IP address blacklist rules.
   * *   **custom:** custom rules.
   * *   **antiscan:** scan protection rules.
   * *   **cc_system:** HTTP flood protection rules.
   * *   **region_block:** region blacklist rules.
   * *   **scene:** bot management rules.
   * *   **dlp:** data leakage prevention rules.
   * 
   * @example
   * cc_system
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa extends $tea.Model {
  /**
   * @remarks
   * The number of attacks that are initiated from the IP address.
   * 
   * @example
   * 531
   */
  count?: number;
  /**
   * @remarks
   * The user agent.
   * 
   * @example
   * android
   */
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl extends $tea.Model {
  /**
   * @remarks
   * The number of requests that match protection rules.
   * 
   * @example
   * 21862
   */
  count?: number;
  /**
   * @remarks
   * The request URL.
   * 
   * >  The value is Base64-encoded.
   * 
   * @example
   * d3d3LmFsaXl1bmRvYy5jb20vcGF0aDM=
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountResponseBodyResourceCount extends $tea.Model {
  /**
   * @remarks
   * The number of protected object groups.
   * 
   * @example
   * 30
   */
  groupCount?: number;
  /**
   * @remarks
   * The number of protected objects.
   * 
   * @example
   * 30
   */
  singleCount?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      groupCount: 'GroupCount',
      singleCount: 'SingleCount',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCount: 'number',
      singleCount: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpResponseBodyTopIp extends $tea.Model {
  /**
   * @remarks
   * The ordinal number of the area to which the IP address belongs.
   * 
   * @example
   * 310000
   */
  area?: string;
  /**
   * @remarks
   * The total number of requests that are sent from the IP address.
   * 
   * @example
   * 2622
   */
  count?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.1.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ISP.
   * 
   * @example
   * AAA
   */
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      count: 'Count',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      count: 'number',
      ip: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasResponseBodyUas extends $tea.Model {
  /**
   * @remarks
   * The number of requests that use the user agent.
   * 
   * @example
   * 698455
   */
  count?: number;
  /**
   * @remarks
   * The user agent.
   * 
   * @example
   * chrome
   */
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponseBodyWafSourceIp extends $tea.Model {
  /**
   * @remarks
   * An array of back-to-origin IPv4 CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * An array of back-to-origin IPv6 CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeys extends $tea.Model {
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
   * The key of the tag.
   * 
   * @example
   * demoTagKey
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N that is added to the resource. Valid values of N: 1 to 20.
   * 
   * @example
   * Tagkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the resource. Valid values of N: 1 to 20.
   * 
   * @example
   * TagValue1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. ALIYUN::WAF::DEFENSERESOURCE is returned.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N that is added to the resource.
   * 
   * @example
   * TagKey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N that is added to the resource.
   * 
   * @example
   * TayValue1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceRequestListenCertificates extends $tea.Model {
  /**
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @example
   * 123-cn-hangzhou
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceRequestListen extends $tea.Model {
  certificates?: ModifyCloudResourceRequestListenCertificates[];
  /**
   * @example
   * 1
   */
  cipherSuite?: number;
  customCiphers?: string[];
  /**
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lb-***
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  /**
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      http2Enabled: 'Http2Enabled',
      port: 'Port',
      protocol: 'Protocol',
      resourceInstanceId: 'ResourceInstanceId',
      resourceProduct: 'ResourceProduct',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ModifyCloudResourceRequestListenCertificates },
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      http2Enabled: 'boolean',
      port: 'number',
      protocol: 'string',
      resourceInstanceId: 'string',
      resourceProduct: 'string',
      TLSVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceRequestRedirectRequestHeaders extends $tea.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceRequestRedirect extends $tea.Model {
  /**
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @example
   * 1
   */
  readTimeout?: number;
  requestHeaders?: ModifyCloudResourceRequestRedirectRequestHeaders[];
  /**
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @example
   * 0
   */
  xffHeaderMode?: number;
  xffHeaders?: string[];
  /**
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      writeTimeout: 'WriteTimeout',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': ModifyCloudResourceRequestRedirectRequestHeaders },
      writeTimeout: 'number',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequestListen extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate that you want to add.
   * 
   * @example
   * 123
   */
  certId?: string;
  /**
   * @remarks
   * The type of cipher suite that you want to add. This parameter is available only when you specify the **HttpsPorts** parameter. Valid values:
   * 
   * *   **1:** all cipher suites.
   * *   **2:** strong cipher suites. You can select this value only when you set the **TLSVersion** parameter to **tlsv1.2**.
   * *   **99:** custom cipher suites.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites that you want to add. This parameter is available only when you set the **CipherSuite** parameter to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. This parameter is available only when you specify the **HttpsPorts** parameter. Valid values:
   * 
   * *   **true:** supports TLS 1.3.
   * *   **false:** does not support TLS 1.3.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Specifies whether to enable an exclusive IP address for the domain name. This parameter is available only when you set the **IPv6Enabled** parameter to false and the **ProtectionResource** parameter to **share**. Valid values:
   * 
   * *   **true:** enables an exclusive IP address for the domain name.
   * *   **false:** does not enable an exclusive IP address for the domain name. This is the default value.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP to HTTPS redirection for the domain name. This parameter is available only when you specify the **HttpsPorts** parameter and leave the **HttpPorts** parameter empty. Valid values:
   * 
   * *   **true:** enables HTTP to HTTPS redirection.
   * *   **false:** disables HTTP to HTTPS redirection.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. This parameter is available only when you specify the **HttpsPorts** parameter. Valid values:
   * 
   * *   **true:** enables HTTP/2.
   * *   **false:** disables HTTP/2. This is the default value.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * An array of HTTP listener ports. Specify the value of this parameter in the [port1,port2,...] format.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * An array of HTTPS listener ports. Specify the value of this parameter in the [port1,port2,...] format.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **true:** enables IPv6.
   * *   **false:** disables IPv6. This is the default value.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of the protection resource that you want to use. Valid values:
   * 
   * *   **share:** shared cluster. This is the default value.
   * *   **gslb:** shared cluster-based intelligent load balancing.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Specifies whether to allow access only from SM certificate-based clients. This parameter is available only if you set SM2Enabled to true.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate that you want to add. This parameter is available only if you set SM2Enabled to true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Indicates whether SM certificate-based verification is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. This parameter is available only when you specify the **HttpsPorts** parameter. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that you want WAF to use to obtain the actual IP address of a client. Valid values:
   * 
   * *   **0:** No Layer 7 proxies are deployed in front of WAF. This is the default value.
   * *   **1:** WAF reads the first value of the X-Forwarded-For (XFF) header field as the actual IP address of the client.
   * *   **2:** WAF reads the value of a custom header field as the actual IP address of the client.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that you want to use to obtain the actual IP address of a client. Specify the value of this parameter in the ["header1","header2",...] format.
   * 
   * >  If you set the **XffHeaderMode** parameter to 2, this parameter is required.
   */
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      SM2AccessOnly: 'SM2AccessOnly',
      SM2CertId: 'SM2CertId',
      SM2Enabled: 'SM2Enabled',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      SM2AccessOnly: 'boolean',
      SM2CertId: 'string',
      SM2Enabled: 'boolean',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequestRedirectRequestHeaders extends $tea.Model {
  /**
   * @remarks
   * The key of the custom header field.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom header field.
   * 
   * @example
   * bbb
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequestRedirect extends $tea.Model {
  /**
   * @remarks
   * The IP addresses or domain names of the origin server. You can use only one of the address types. If you use the domain name type, the domain name can be resolved only to an IPv4 address.
   * 
   * *   If you use the IP address type, specify the value in the ["ip1","ip2",...] format. You can enter up to 20 IP addresses.
   * *   If you use the domain name type, specify the value in the ["domain"] format. You can enter up to 20 domain names.
   */
  backends?: string[];
  /**
   * @remarks
   * Specifies whether to enable the public cloud disaster recovery feature. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable HTTPS to HTTP redirection for back-to-origin requests. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the persistent connection feature. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter specifies the number of reused persistent connections after you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for idle persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * >  This parameter specifies the time for which a reused persistent connection can remain in the Idle state before the persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that you want to use to forward requests to the origin server. Valid values:
   * 
   * *   **ip_hash**
   * *   **roundRobin**
   * *   **leastTime** You can set the parameter to this value only if you set **ProtectionResource** to **gslb**.
   * 
   * This parameter is required.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The timeout period for read connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header field that you want to use to label requests that are processed by WAF.
   * 
   * When a request passes through WAF, the custom header field is automatically used to label the request. This way, the backend service can identify requests that are processed by WAF.
   */
  requestHeaders?: ModifyDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether WAF retries forwarding requests to the origin server when the requests fail to be forwarded to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules that you want to configure for the domain name that you want to add to WAF in hybrid cloud mode. This parameter is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **rs**: the back-to-origin IP addresses or CNAMEs. The value must be of the ARRAY type.
   * *   **location**: the name of the protection node. The value must be of the STRING type.
   * *   **locationId**: the ID of the protection node. The value must be of the LONG type.
   * 
   * @example
   * [
   *       {
   *             "rs": [
   *                   "1.1.XX.XX"
   *             ],
   *             "locationId": 535,
   *             "location": "test1111"
   *       }
   * ]
   */
  routingRules?: string;
  /**
   * @remarks
   * Specifies whether to enable origin Server Name Indication (SNI). This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the SNI field. If you do not specify this parameter, the value of the **Host** field is automatically used. This parameter is optional. If you want WAF to use an SNI field value that is different from the Host field value in back-to-origin requests, you can specify a custom value for the SNI field.
   * 
   * >  This parameter is required only if you set **SniEnalbed** to xxx.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The timeout period for write connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use the X-Forward-For-Proto header to identify the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': ModifyDomainRequestRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResponseBodyDomainInfo extends $tea.Model {
  /**
   * @remarks
   * The CNAME that is assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxcvdaf.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name whose access configurations you modified.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      domainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. Valid values of N: 1 to 20.
   * 
   * @example
   * demoTagKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. Valid values of N: 1 to 20.
   * 
   * @example
   * demoTagValue
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-heyuan': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-wulanchabu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'me-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'cn-shanghai-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-north-2-gov-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("waf-openapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * ChangeResourceGroup
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * ChangeResourceGroup
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Clears an IP address blacklist for major event protection.
   * 
   * @param request - ClearMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearMajorProtectionBlackIpResponse
   */
  async clearMajorProtectionBlackIpWithOptions(request: ClearMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<ClearMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new ClearMajorProtectionBlackIpResponse({}));
  }

  /**
   * Clears an IP address blacklist for major event protection.
   * 
   * @param request - ClearMajorProtectionBlackIpRequest
   * @returns ClearMajorProtectionBlackIpResponse
   */
  async clearMajorProtectionBlackIp(request: ClearMajorProtectionBlackIpRequest): Promise<ClearMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Creates a new protection template from the copy.
   * 
   * @param request - CopyDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyDefenseTemplateResponse
   */
  async copyDefenseTemplateWithOptions(request: CopyDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CopyDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyDefenseTemplateResponse>(await this.callApi(params, req, runtime), new CopyDefenseTemplateResponse({}));
  }

  /**
   * Creates a new protection template from the copy.
   * 
   * @param request - CopyDefenseTemplateRequest
   * @returns CopyDefenseTemplateResponse
   */
  async copyDefenseTemplate(request: CopyDefenseTemplateRequest): Promise<CopyDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * 接入云产品资源
   * 
   * @param tmpReq - CreateCloudResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudResourceResponse
   */
  async createCloudResourceWithOptions(tmpReq: CreateCloudResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCloudResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!Util.isUnset(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!Util.isUnset(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!Util.isUnset(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCloudResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCloudResourceResponse>(await this.callApi(params, req, runtime), new CreateCloudResourceResponse({}));
  }

  /**
   * 接入云产品资源
   * 
   * @param request - CreateCloudResourceRequest
   * @returns CreateCloudResourceResponse
   */
  async createCloudResource(request: CreateCloudResourceRequest): Promise<CreateCloudResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudResourceWithOptions(request, runtime);
  }

  /**
   * Creates a protected object group.
   * 
   * @param request - CreateDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefenseResourceGroupResponse
   */
  async createDefenseResourceGroupWithOptions(request: CreateDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addList)) {
      query["AddList"] = request.addList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateDefenseResourceGroupResponse({}));
  }

  /**
   * Creates a protected object group.
   * 
   * @param request - CreateDefenseResourceGroupRequest
   * @returns CreateDefenseResourceGroupResponse
   */
  async createDefenseResourceGroup(request: CreateDefenseResourceGroupRequest): Promise<CreateDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a protection rule.
   * 
   * @param request - CreateDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefenseRuleResponse
   */
  async createDefenseRuleWithOptions(request: CreateDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDefenseRuleResponse>(await this.callApi(params, req, runtime), new CreateDefenseRuleResponse({}));
  }

  /**
   * Creates a protection rule.
   * 
   * @param request - CreateDefenseRuleRequest
   * @returns CreateDefenseRuleResponse
   */
  async createDefenseRule(request: CreateDefenseRuleRequest): Promise<CreateDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Creates a protection rule template.
   * 
   * @param request - CreateDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefenseTemplateResponse
   */
  async createDefenseTemplateWithOptions(request: CreateDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateOrigin)) {
      query["TemplateOrigin"] = request.templateOrigin;
    }

    if (!Util.isUnset(request.templateStatus)) {
      query["TemplateStatus"] = request.templateStatus;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDefenseTemplateResponse>(await this.callApi(params, req, runtime), new CreateDefenseTemplateResponse({}));
  }

  /**
   * Creates a protection rule template.
   * 
   * @param request - CreateDefenseTemplateRequest
   * @returns CreateDefenseTemplateResponse
   */
  async createDefenseTemplate(request: CreateDefenseTemplateRequest): Promise<CreateDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Adds a domain name to Web Application Firewall (WAF).
   * 
   * @param tmpReq - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(tmpReq: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!Util.isUnset(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!Util.isUnset(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * Adds a domain name to Web Application Firewall (WAF).
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * Creates a node group for a hybrid cloud cluster.
   * 
   * @param request - CreateHybridCloudGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridCloudGroupResponse
   */
  async createHybridCloudGroupWithOptions(request: CreateHybridCloudGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateHybridCloudGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backSourceMark)) {
      query["BackSourceMark"] = request.backSourceMark;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.loadBalanceIp)) {
      query["LoadBalanceIp"] = request.loadBalanceIp;
    }

    if (!Util.isUnset(request.locationCode)) {
      query["LocationCode"] = request.locationCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHybridCloudGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHybridCloudGroupResponse>(await this.callApi(params, req, runtime), new CreateHybridCloudGroupResponse({}));
  }

  /**
   * Creates a node group for a hybrid cloud cluster.
   * 
   * @param request - CreateHybridCloudGroupRequest
   * @returns CreateHybridCloudGroupResponse
   */
  async createHybridCloudGroup(request: CreateHybridCloudGroupRequest): Promise<CreateHybridCloudGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHybridCloudGroupWithOptions(request, runtime);
  }

  /**
   * Creates an IP address blacklist for major event protection.
   * 
   * @remarks
   * This operation is available only on the China site (aliyun.com).
   * 
   * @param request - CreateMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMajorProtectionBlackIpResponse
   */
  async createMajorProtectionBlackIpWithOptions(request: CreateMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<CreateMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new CreateMajorProtectionBlackIpResponse({}));
  }

  /**
   * Creates an IP address blacklist for major event protection.
   * 
   * @remarks
   * This operation is available only on the China site (aliyun.com).
   * 
   * @param request - CreateMajorProtectionBlackIpRequest
   * @returns CreateMajorProtectionBlackIpResponse
   */
  async createMajorProtectionBlackIp(request: CreateMajorProtectionBlackIpRequest): Promise<CreateMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Adds members to use the multi-account management feature of Web Application Firewall (WAF).
   * 
   * @param request - CreateMemberAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemberAccountsResponse
   */
  async createMemberAccountsWithOptions(request: CreateMemberAccountsRequest, runtime: $Util.RuntimeOptions): Promise<CreateMemberAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberAccountIds)) {
      query["MemberAccountIds"] = request.memberAccountIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMemberAccounts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMemberAccountsResponse>(await this.callApi(params, req, runtime), new CreateMemberAccountsResponse({}));
  }

  /**
   * Adds members to use the multi-account management feature of Web Application Firewall (WAF).
   * 
   * @param request - CreateMemberAccountsRequest
   * @returns CreateMemberAccountsResponse
   */
  async createMemberAccounts(request: CreateMemberAccountsRequest): Promise<CreateMemberAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMemberAccountsWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - CreatePostpaidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePostpaidInstanceResponse
   */
  async createPostpaidInstanceWithOptions(request: CreatePostpaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreatePostpaidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePostpaidInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePostpaidInstanceResponse>(await this.callApi(params, req, runtime), new CreatePostpaidInstanceResponse({}));
  }

  /**
   * Creates a pay-as-you-go Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - CreatePostpaidInstanceRequest
   * @returns CreatePostpaidInstanceResponse
   */
  async createPostpaidInstance(request: CreatePostpaidInstanceRequest): Promise<CreatePostpaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPostpaidInstanceWithOptions(request, runtime);
  }

  /**
   * Uploads a ShangMi (SM) certificate for a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param request - CreateSM2CertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSM2CertResponse
   */
  async createSM2CertWithOptions(request: CreateSM2CertRequest, runtime: $Util.RuntimeOptions): Promise<CreateSM2CertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.encryptCertificate)) {
      query["EncryptCertificate"] = request.encryptCertificate;
    }

    if (!Util.isUnset(request.encryptPrivateKey)) {
      query["EncryptPrivateKey"] = request.encryptPrivateKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.signCertificate)) {
      query["SignCertificate"] = request.signCertificate;
    }

    if (!Util.isUnset(request.signPrivateKey)) {
      query["SignPrivateKey"] = request.signPrivateKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSM2Cert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSM2CertResponse>(await this.callApi(params, req, runtime), new CreateSM2CertResponse({}));
  }

  /**
   * Uploads a ShangMi (SM) certificate for a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param request - CreateSM2CertRequest
   * @returns CreateSM2CertResponse
   */
  async createSM2Cert(request: CreateSM2CertRequest): Promise<CreateSM2CertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSM2CertWithOptions(request, runtime);
  }

  /**
   * 删除API安全风险
   * 
   * @param request - DeleteApisecAbnormalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApisecAbnormalResponse
   */
  async deleteApisecAbnormalWithOptions(request: DeleteApisecAbnormalRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApisecAbnormalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.abnormalId)) {
      query["AbnormalId"] = request.abnormalId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApisecAbnormal",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApisecAbnormalResponse>(await this.callApi(params, req, runtime), new DeleteApisecAbnormalResponse({}));
  }

  /**
   * 删除API安全风险
   * 
   * @param request - DeleteApisecAbnormalRequest
   * @returns DeleteApisecAbnormalResponse
   */
  async deleteApisecAbnormal(request: DeleteApisecAbnormalRequest): Promise<DeleteApisecAbnormalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApisecAbnormalWithOptions(request, runtime);
  }

  /**
   * 删除API安全事件
   * 
   * @param request - DeleteApisecEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApisecEventResponse
   */
  async deleteApisecEventWithOptions(request: DeleteApisecEventRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApisecEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApisecEvent",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApisecEventResponse>(await this.callApi(params, req, runtime), new DeleteApisecEventResponse({}));
  }

  /**
   * 删除API安全事件
   * 
   * @param request - DeleteApisecEventRequest
   * @returns DeleteApisecEventResponse
   */
  async deleteApisecEvent(request: DeleteApisecEventRequest): Promise<DeleteApisecEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApisecEventWithOptions(request, runtime);
  }

  /**
   * 删除云产品资源
   * 
   * @param request - DeleteCloudResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudResourceResponse
   */
  async deleteCloudResourceWithOptions(request: DeleteCloudResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCloudResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCloudResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCloudResourceResponse>(await this.callApi(params, req, runtime), new DeleteCloudResourceResponse({}));
  }

  /**
   * 删除云产品资源
   * 
   * @param request - DeleteCloudResourceRequest
   * @returns DeleteCloudResourceResponse
   */
  async deleteCloudResource(request: DeleteCloudResourceRequest): Promise<DeleteCloudResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCloudResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a protected object group.
   * 
   * @param request - DeleteDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseResourceGroupResponse
   */
  async deleteDefenseResourceGroupWithOptions(request: DeleteDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteDefenseResourceGroupResponse({}));
  }

  /**
   * Deletes a protected object group.
   * 
   * @param request - DeleteDefenseResourceGroupRequest
   * @returns DeleteDefenseResourceGroupResponse
   */
  async deleteDefenseResourceGroup(request: DeleteDefenseResourceGroupRequest): Promise<DeleteDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a protection rule.
   * 
   * @param request - DeleteDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseRuleResponse
   */
  async deleteDefenseRuleWithOptions(request: DeleteDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDefenseRuleResponse>(await this.callApi(params, req, runtime), new DeleteDefenseRuleResponse({}));
  }

  /**
   * Deletes a protection rule.
   * 
   * @param request - DeleteDefenseRuleRequest
   * @returns DeleteDefenseRuleResponse
   */
  async deleteDefenseRule(request: DeleteDefenseRuleRequest): Promise<DeleteDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a protection rule template.
   * 
   * @param request - DeleteDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseTemplateResponse
   */
  async deleteDefenseTemplateWithOptions(request: DeleteDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDefenseTemplateResponse>(await this.callApi(params, req, runtime), new DeleteDefenseTemplateResponse({}));
  }

  /**
   * Deletes a protection rule template.
   * 
   * @param request - DeleteDefenseTemplateRequest
   * @returns DeleteDefenseTemplateResponse
   */
  async deleteDefenseTemplate(request: DeleteDefenseTemplateRequest): Promise<DeleteDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a domain name that is added to Web Application Firewall (WAF).
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * Deletes a domain name that is added to Web Application Firewall (WAF).
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Deletes an IP address blacklist for major event protection.
   * 
   * @param request - DeleteMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMajorProtectionBlackIpResponse
   */
  async deleteMajorProtectionBlackIpWithOptions(request: DeleteMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new DeleteMajorProtectionBlackIpResponse({}));
  }

  /**
   * Deletes an IP address blacklist for major event protection.
   * 
   * @param request - DeleteMajorProtectionBlackIpRequest
   * @returns DeleteMajorProtectionBlackIpResponse
   */
  async deleteMajorProtectionBlackIp(request: DeleteMajorProtectionBlackIpRequest): Promise<DeleteMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Removes the members that are added for multi-account management in Web Application Firewall (WAF).
   * 
   * @param request - DeleteMemberAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemberAccountResponse
   */
  async deleteMemberAccountWithOptions(request: DeleteMemberAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMemberAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMemberAccount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMemberAccountResponse>(await this.callApi(params, req, runtime), new DeleteMemberAccountResponse({}));
  }

  /**
   * Removes the members that are added for multi-account management in Web Application Firewall (WAF).
   * 
   * @param request - DeleteMemberAccountRequest
   * @returns DeleteMemberAccountResponse
   */
  async deleteMemberAccount(request: DeleteMemberAccountRequest): Promise<DeleteMemberAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMemberAccountWithOptions(request, runtime);
  }

  /**
   * Queries whether an Alibaba Cloud account is the delegated administrator account of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeAccountDelegatedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountDelegatedStatusResponse
   */
  async describeAccountDelegatedStatusWithOptions(request: DescribeAccountDelegatedStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountDelegatedStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountDelegatedStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountDelegatedStatusResponse>(await this.callApi(params, req, runtime), new DescribeAccountDelegatedStatusResponse({}));
  }

  /**
   * Queries whether an Alibaba Cloud account is the delegated administrator account of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeAccountDelegatedStatusRequest
   * @returns DescribeAccountDelegatedStatusResponse
   */
  async describeAccountDelegatedStatus(request: DescribeAccountDelegatedStatusRequest): Promise<DescribeAccountDelegatedStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountDelegatedStatusWithOptions(request, runtime);
  }

  /**
   * 查询API安全风险站点统计
   * 
   * @param request - DescribeApisecAbnormalDomainStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecAbnormalDomainStatisticResponse
   */
  async describeApisecAbnormalDomainStatisticWithOptions(request: DescribeApisecAbnormalDomainStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecAbnormalDomainStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecAbnormalDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecAbnormalDomainStatisticResponse>(await this.callApi(params, req, runtime), new DescribeApisecAbnormalDomainStatisticResponse({}));
  }

  /**
   * 查询API安全风险站点统计
   * 
   * @param request - DescribeApisecAbnormalDomainStatisticRequest
   * @returns DescribeApisecAbnormalDomainStatisticResponse
   */
  async describeApisecAbnormalDomainStatistic(request: DescribeApisecAbnormalDomainStatisticRequest): Promise<DescribeApisecAbnormalDomainStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecAbnormalDomainStatisticWithOptions(request, runtime);
  }

  /**
   * 查询API安全资产趋势图
   * 
   * @param request - DescribeApisecAssetTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecAssetTrendResponse
   */
  async describeApisecAssetTrendWithOptions(request: DescribeApisecAssetTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecAssetTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecAssetTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecAssetTrendResponse>(await this.callApi(params, req, runtime), new DescribeApisecAssetTrendResponse({}));
  }

  /**
   * 查询API安全资产趋势图
   * 
   * @param request - DescribeApisecAssetTrendRequest
   * @returns DescribeApisecAssetTrendResponse
   */
  async describeApisecAssetTrend(request: DescribeApisecAssetTrendRequest): Promise<DescribeApisecAssetTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecAssetTrendWithOptions(request, runtime);
  }

  /**
   * 查询API安全事件站点统计
   * 
   * @param request - DescribeApisecEventDomainStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecEventDomainStatisticResponse
   */
  async describeApisecEventDomainStatisticWithOptions(request: DescribeApisecEventDomainStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecEventDomainStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecEventDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecEventDomainStatisticResponse>(await this.callApi(params, req, runtime), new DescribeApisecEventDomainStatisticResponse({}));
  }

  /**
   * 查询API安全事件站点统计
   * 
   * @param request - DescribeApisecEventDomainStatisticRequest
   * @returns DescribeApisecEventDomainStatisticResponse
   */
  async describeApisecEventDomainStatistic(request: DescribeApisecEventDomainStatisticRequest): Promise<DescribeApisecEventDomainStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecEventDomainStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of API security log subscription.
   * 
   * @param request - DescribeApisecLogDeliveriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecLogDeliveriesResponse
   */
  async describeApisecLogDeliveriesWithOptions(request: DescribeApisecLogDeliveriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecLogDeliveriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecLogDeliveries",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecLogDeliveriesResponse>(await this.callApi(params, req, runtime), new DescribeApisecLogDeliveriesResponse({}));
  }

  /**
   * Queries the configurations of API security log subscription.
   * 
   * @param request - DescribeApisecLogDeliveriesRequest
   * @returns DescribeApisecLogDeliveriesResponse
   */
  async describeApisecLogDeliveries(request: DescribeApisecLogDeliveriesRequest): Promise<DescribeApisecLogDeliveriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecLogDeliveriesWithOptions(request, runtime);
  }

  /**
   * 查询API安全敏感数据类型统计
   * 
   * @param request - DescribeApisecSensitiveDomainStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecSensitiveDomainStatisticResponse
   */
  async describeApisecSensitiveDomainStatisticWithOptions(request: DescribeApisecSensitiveDomainStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecSensitiveDomainStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecSensitiveDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecSensitiveDomainStatisticResponse>(await this.callApi(params, req, runtime), new DescribeApisecSensitiveDomainStatisticResponse({}));
  }

  /**
   * 查询API安全敏感数据类型统计
   * 
   * @param request - DescribeApisecSensitiveDomainStatisticRequest
   * @returns DescribeApisecSensitiveDomainStatisticResponse
   */
  async describeApisecSensitiveDomainStatistic(request: DescribeApisecSensitiveDomainStatisticRequest): Promise<DescribeApisecSensitiveDomainStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecSensitiveDomainStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the Logstores whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsLogStoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecSlsLogStoresResponse
   */
  async describeApisecSlsLogStoresWithOptions(request: DescribeApisecSlsLogStoresRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecSlsLogStoresResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecSlsLogStores",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecSlsLogStoresResponse>(await this.callApi(params, req, runtime), new DescribeApisecSlsLogStoresResponse({}));
  }

  /**
   * Queries the Logstores whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsLogStoresRequest
   * @returns DescribeApisecSlsLogStoresResponse
   */
  async describeApisecSlsLogStores(request: DescribeApisecSlsLogStoresRequest): Promise<DescribeApisecSlsLogStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecSlsLogStoresWithOptions(request, runtime);
  }

  /**
   * Queries the projects whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecSlsProjectsResponse
   */
  async describeApisecSlsProjectsWithOptions(request: DescribeApisecSlsProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecSlsProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecSlsProjects",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecSlsProjectsResponse>(await this.callApi(params, req, runtime), new DescribeApisecSlsProjectsResponse({}));
  }

  /**
   * Queries the projects whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsProjectsRequest
   * @returns DescribeApisecSlsProjectsResponse
   */
  async describeApisecSlsProjects(request: DescribeApisecSlsProjectsRequest): Promise<DescribeApisecSlsProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecSlsProjectsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a certificate, such as the certificate name, expiration time, issuance time, and associated domain name.
   * 
   * @param request - DescribeCertDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertDetailResponse
   */
  async describeCertDetailWithOptions(request: DescribeCertDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertDetailResponse>(await this.callApi(params, req, runtime), new DescribeCertDetailResponse({}));
  }

  /**
   * Queries the details of a certificate, such as the certificate name, expiration time, issuance time, and associated domain name.
   * 
   * @param request - DescribeCertDetailRequest
   * @returns DescribeCertDetailResponse
   */
  async describeCertDetail(request: DescribeCertDetailRequest): Promise<DescribeCertDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertDetailWithOptions(request, runtime);
  }

  /**
   * Queries the certificates issued for your domain names that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertsResponse
   */
  async describeCertsWithOptions(request: DescribeCertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCerts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertsResponse>(await this.callApi(params, req, runtime), new DescribeCertsResponse({}));
  }

  /**
   * Queries the certificates issued for your domain names that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCertsRequest
   * @returns DescribeCertsResponse
   */
  async describeCerts(request: DescribeCertsRequest): Promise<DescribeCertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertsWithOptions(request, runtime);
  }

  /**
   * 查询云产品的端口详情
   * 
   * @param request - DescribeCloudResourceAccessPortDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourceAccessPortDetailsResponse
   */
  async describeCloudResourceAccessPortDetailsWithOptions(request: DescribeCloudResourceAccessPortDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudResourceAccessPortDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudResourceAccessPortDetails",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudResourceAccessPortDetailsResponse>(await this.callApi(params, req, runtime), new DescribeCloudResourceAccessPortDetailsResponse({}));
  }

  /**
   * 查询云产品的端口详情
   * 
   * @param request - DescribeCloudResourceAccessPortDetailsRequest
   * @returns DescribeCloudResourceAccessPortDetailsResponse
   */
  async describeCloudResourceAccessPortDetails(request: DescribeCloudResourceAccessPortDetailsRequest): Promise<DescribeCloudResourceAccessPortDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudResourceAccessPortDetailsWithOptions(request, runtime);
  }

  /**
   * 查询已接入云产品的端口列表
   * 
   * @param request - DescribeCloudResourceAccessedPortsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourceAccessedPortsResponse
   */
  async describeCloudResourceAccessedPortsWithOptions(request: DescribeCloudResourceAccessedPortsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudResourceAccessedPortsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudResourceAccessedPorts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudResourceAccessedPortsResponse>(await this.callApi(params, req, runtime), new DescribeCloudResourceAccessedPortsResponse({}));
  }

  /**
   * 查询已接入云产品的端口列表
   * 
   * @param request - DescribeCloudResourceAccessedPortsRequest
   * @returns DescribeCloudResourceAccessedPortsResponse
   */
  async describeCloudResourceAccessedPorts(request: DescribeCloudResourceAccessedPortsRequest): Promise<DescribeCloudResourceAccessedPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudResourceAccessedPortsWithOptions(request, runtime);
  }

  /**
   * Queries cloud service resources that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourcesResponse
   */
  async describeCloudResourcesWithOptions(request: DescribeCloudResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceDomain)) {
      query["ResourceDomain"] = request.resourceDomain;
    }

    if (!Util.isUnset(request.resourceFunction)) {
      query["ResourceFunction"] = request.resourceFunction;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceInstanceName)) {
      query["ResourceInstanceName"] = request.resourceInstanceName;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceRouteName)) {
      query["ResourceRouteName"] = request.resourceRouteName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudResourcesResponse>(await this.callApi(params, req, runtime), new DescribeCloudResourcesResponse({}));
  }

  /**
   * Queries cloud service resources that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCloudResourcesRequest
   * @returns DescribeCloudResourcesResponse
   */
  async describeCloudResources(request: DescribeCloudResourcesRequest): Promise<DescribeCloudResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudResourcesWithOptions(request, runtime);
  }

  /**
   * 查询Cname接入的数量
   * 
   * @param request - DescribeCnameCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCnameCountResponse
   */
  async describeCnameCountWithOptions(request: DescribeCnameCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCnameCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCnameCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCnameCountResponse>(await this.callApi(params, req, runtime), new DescribeCnameCountResponse({}));
  }

  /**
   * 查询Cname接入的数量
   * 
   * @param request - DescribeCnameCountRequest
   * @returns DescribeCnameCountResponse
   */
  async describeCnameCount(request: DescribeCnameCountRequest): Promise<DescribeCnameCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCnameCountWithOptions(request, runtime);
  }

  /**
   * Checks whether DDoS attacks occur on specific domain names protected by a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeDDoSStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSStatusResponse
   */
  async describeDDoSStatusWithOptions(request: DescribeDDoSStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDoSStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDoSStatusResponse>(await this.callApi(params, req, runtime), new DescribeDDoSStatusResponse({}));
  }

  /**
   * Checks whether DDoS attacks occur on specific domain names protected by a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeDDoSStatusRequest
   * @returns DescribeDDoSStatusResponse
   */
  async describeDDoSStatus(request: DescribeDDoSStatusRequest): Promise<DescribeDDoSStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSStatusWithOptions(request, runtime);
  }

  /**
   * 查询默认HTTPS配置
   * 
   * @param request - DescribeDefaultHttpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefaultHttpsResponse
   */
  async describeDefaultHttpsWithOptions(request: DescribeDefaultHttpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefaultHttpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefaultHttps",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefaultHttpsResponse>(await this.callApi(params, req, runtime), new DescribeDefaultHttpsResponse({}));
  }

  /**
   * 查询默认HTTPS配置
   * 
   * @param request - DescribeDefaultHttpsRequest
   * @returns DescribeDefaultHttpsResponse
   */
  async describeDefaultHttps(request: DescribeDefaultHttpsRequest): Promise<DescribeDefaultHttpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefaultHttpsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a protected object.
   * 
   * @param request - DescribeDefenseResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceResponse
   */
  async describeDefenseResourceWithOptions(request: DescribeDefenseResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceResponse({}));
  }

  /**
   * Queries the information about a protected object.
   * 
   * @param request - DescribeDefenseResourceRequest
   * @returns DescribeDefenseResourceResponse
   */
  async describeDefenseResource(request: DescribeDefenseResourceRequest): Promise<DescribeDefenseResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a protected object group.
   * 
   * @param request - DescribeDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceGroupResponse
   */
  async describeDefenseResourceGroupWithOptions(request: DescribeDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceGroupResponse({}));
  }

  /**
   * Queries the information about a protected object group.
   * 
   * @param request - DescribeDefenseResourceGroupRequest
   * @returns DescribeDefenseResourceGroupResponse
   */
  async describeDefenseResourceGroup(request: DescribeDefenseResourceGroupRequest): Promise<DescribeDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the names of protected object groups.
   * 
   * @param request - DescribeDefenseResourceGroupNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceGroupNamesResponse
   */
  async describeDefenseResourceGroupNamesWithOptions(request: DescribeDefenseResourceGroupNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceGroupNamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupNameLike)) {
      query["GroupNameLike"] = request.groupNameLike;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceGroupNames",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceGroupNamesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceGroupNamesResponse({}));
  }

  /**
   * Queries the names of protected object groups.
   * 
   * @param request - DescribeDefenseResourceGroupNamesRequest
   * @returns DescribeDefenseResourceGroupNamesResponse
   */
  async describeDefenseResourceGroupNames(request: DescribeDefenseResourceGroupNamesRequest): Promise<DescribeDefenseResourceGroupNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupNamesWithOptions(request, runtime);
  }

  /**
   * Performs a pagination query to retrieve the information about protected object groups.
   * 
   * @param request - DescribeDefenseResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceGroupsResponse
   */
  async describeDefenseResourceGroupsWithOptions(request: DescribeDefenseResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupNameLike)) {
      query["GroupNameLike"] = request.groupNameLike;
    }

    if (!Util.isUnset(request.groupNames)) {
      query["GroupNames"] = request.groupNames;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceGroupsResponse({}));
  }

  /**
   * Performs a pagination query to retrieve the information about protected object groups.
   * 
   * @param request - DescribeDefenseResourceGroupsRequest
   * @returns DescribeDefenseResourceGroupsResponse
   */
  async describeDefenseResourceGroups(request: DescribeDefenseResourceGroupsRequest): Promise<DescribeDefenseResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Performs a pagination query to retrieve the names of protected objects.
   * 
   * @param request - DescribeDefenseResourceNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceNamesResponse
   */
  async describeDefenseResourceNamesWithOptions(request: DescribeDefenseResourceNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceNamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceNames",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceNamesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceNamesResponse({}));
  }

  /**
   * Performs a pagination query to retrieve the names of protected objects.
   * 
   * @param request - DescribeDefenseResourceNamesRequest
   * @returns DescribeDefenseResourceNamesResponse
   */
  async describeDefenseResourceNames(request: DescribeDefenseResourceNamesRequest): Promise<DescribeDefenseResourceNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceNamesWithOptions(request, runtime);
  }

  /**
   * Queries the protection templates that are associated with a protected object or protected object group.
   * 
   * @param request - DescribeDefenseResourceTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceTemplatesResponse
   */
  async describeDefenseResourceTemplatesWithOptions(request: DescribeDefenseResourceTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceTemplates",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceTemplatesResponse({}));
  }

  /**
   * Queries the protection templates that are associated with a protected object or protected object group.
   * 
   * @param request - DescribeDefenseResourceTemplatesRequest
   * @returns DescribeDefenseResourceTemplatesResponse
   */
  async describeDefenseResourceTemplates(request: DescribeDefenseResourceTemplatesRequest): Promise<DescribeDefenseResourceTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries protected objects by page.
   * 
   * @param request - DescribeDefenseResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourcesResponse
   */
  async describeDefenseResourcesWithOptions(request: DescribeDefenseResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourcesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourcesResponse({}));
  }

  /**
   * Queries protected objects by page.
   * 
   * @param request - DescribeDefenseResourcesRequest
   * @returns DescribeDefenseResourcesResponse
   */
  async describeDefenseResources(request: DescribeDefenseResourcesRequest): Promise<DescribeDefenseResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a protection rule.
   * 
   * @param request - DescribeDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseRuleResponse
   */
  async describeDefenseRuleWithOptions(request: DescribeDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseRuleResponse>(await this.callApi(params, req, runtime), new DescribeDefenseRuleResponse({}));
  }

  /**
   * Queries a protection rule.
   * 
   * @param request - DescribeDefenseRuleRequest
   * @returns DescribeDefenseRuleResponse
   */
  async describeDefenseRule(request: DescribeDefenseRuleRequest): Promise<DescribeDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Queries protection rules by page.
   * 
   * @param request - DescribeDefenseRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseRulesResponse
   */
  async describeDefenseRulesWithOptions(request: DescribeDefenseRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseRules",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseRulesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseRulesResponse({}));
  }

  /**
   * Queries protection rules by page.
   * 
   * @param request - DescribeDefenseRulesRequest
   * @returns DescribeDefenseRulesResponse
   */
  async describeDefenseRules(request: DescribeDefenseRulesRequest): Promise<DescribeDefenseRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseRulesWithOptions(request, runtime);
  }

  /**
   * Queries a protection rule template.
   * 
   * @param request - DescribeDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseTemplateResponse
   */
  async describeDefenseTemplateWithOptions(request: DescribeDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseTemplateResponse>(await this.callApi(params, req, runtime), new DescribeDefenseTemplateResponse({}));
  }

  /**
   * Queries a protection rule template.
   * 
   * @param request - DescribeDefenseTemplateRequest
   * @returns DescribeDefenseTemplateResponse
   */
  async describeDefenseTemplate(request: DescribeDefenseTemplateRequest): Promise<DescribeDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the names of protected object groups for which a protection template can take effect.
   * 
   * @param request - DescribeDefenseTemplateValidGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseTemplateValidGroupsResponse
   */
  async describeDefenseTemplateValidGroupsWithOptions(request: DescribeDefenseTemplateValidGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseTemplateValidGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseTemplateValidGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseTemplateValidGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDefenseTemplateValidGroupsResponse({}));
  }

  /**
   * Queries the names of protected object groups for which a protection template can take effect.
   * 
   * @param request - DescribeDefenseTemplateValidGroupsRequest
   * @returns DescribeDefenseTemplateValidGroupsResponse
   */
  async describeDefenseTemplateValidGroups(request: DescribeDefenseTemplateValidGroupsRequest): Promise<DescribeDefenseTemplateValidGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseTemplateValidGroupsWithOptions(request, runtime);
  }

  /**
   * Performs a paging query to retrieve protection templates.
   * 
   * @param request - DescribeDefenseTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseTemplatesResponse
   */
  async describeDefenseTemplatesWithOptions(request: DescribeDefenseTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.defenseSubScene)) {
      query["DefenseSubScene"] = request.defenseSubScene;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseTemplates",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseTemplatesResponse({}));
  }

  /**
   * Performs a paging query to retrieve protection templates.
   * 
   * @param request - DescribeDefenseTemplatesRequest
   * @returns DescribeDefenseTemplatesResponse
   */
  async describeDefenseTemplates(request: DescribeDefenseTemplatesRequest): Promise<DescribeDefenseTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseTemplatesWithOptions(request, runtime);
  }

  /**
   * Checks whether the Domain Name System (DNS) settings of a domain name are properly configured.
   * 
   * @param request - DescribeDomainDNSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainDNSRecordResponse
   */
  async describeDomainDNSRecordWithOptions(request: DescribeDomainDNSRecordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDNSRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainDNSRecord",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainDNSRecordResponse>(await this.callApi(params, req, runtime), new DescribeDomainDNSRecordResponse({}));
  }

  /**
   * Checks whether the Domain Name System (DNS) settings of a domain name are properly configured.
   * 
   * @param request - DescribeDomainDNSRecordRequest
   * @returns DescribeDomainDNSRecordResponse
   */
  async describeDomainDNSRecord(request: DescribeDomainDNSRecordRequest): Promise<DescribeDomainDNSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDNSRecordWithOptions(request, runtime);
  }

  /**
   * Queries the details of a domain name that is added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainDetailResponse
   */
  async describeDomainDetailWithOptions(request: DescribeDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeDomainDetailResponse({}));
  }

  /**
   * Queries the details of a domain name that is added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainDetailRequest
   * @returns DescribeDomainDetailResponse
   */
  async describeDomainDetail(request: DescribeDomainDetailRequest): Promise<DescribeDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the domain names that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backend)) {
      query["Backend"] = request.backend;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomains",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDomainsResponse({}));
  }

  /**
   * Queries the domain names that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the traffic statistics of requests that are forwarded to Web Application Firewall (WAF).
   * 
   * @param request - DescribeFlowChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowChartResponse
   */
  async describeFlowChartWithOptions(request: DescribeFlowChartRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowChartResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowChart",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowChartResponse>(await this.callApi(params, req, runtime), new DescribeFlowChartResponse({}));
  }

  /**
   * Queries the traffic statistics of requests that are forwarded to Web Application Firewall (WAF).
   * 
   * @param request - DescribeFlowChartRequest
   * @returns DescribeFlowChartResponse
   */
  async describeFlowChart(request: DescribeFlowChartRequest): Promise<DescribeFlowChartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowChartWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 protected objects that receive requests.
   * 
   * @param request - DescribeFlowTopResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowTopResourceResponse
   */
  async describeFlowTopResourceWithOptions(request: DescribeFlowTopResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowTopResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowTopResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowTopResourceResponse>(await this.callApi(params, req, runtime), new DescribeFlowTopResourceResponse({}));
  }

  /**
   * Queries the top 10 protected objects that receive requests.
   * 
   * @param request - DescribeFlowTopResourceRequest
   * @returns DescribeFlowTopResourceResponse
   */
  async describeFlowTopResource(request: DescribeFlowTopResourceRequest): Promise<DescribeFlowTopResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowTopResourceWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 URLs that are used to initiate requests.
   * 
   * @param request - DescribeFlowTopUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowTopUrlResponse
   */
  async describeFlowTopUrlWithOptions(request: DescribeFlowTopUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowTopUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowTopUrl",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowTopUrlResponse>(await this.callApi(params, req, runtime), new DescribeFlowTopUrlResponse({}));
  }

  /**
   * Queries the top 10 URLs that are used to initiate requests.
   * 
   * @param request - DescribeFlowTopUrlRequest
   * @returns DescribeFlowTopUrlResponse
   */
  async describeFlowTopUrl(request: DescribeFlowTopUrlRequest): Promise<DescribeFlowTopUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowTopUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the rule information about a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudClusterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudClusterRuleResponse
   */
  async describeHybridCloudClusterRuleWithOptions(request: DescribeHybridCloudClusterRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudClusterRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudClusterRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudClusterRuleResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudClusterRuleResponse({}));
  }

  /**
   * Obtains the rule information about a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudClusterRuleRequest
   * @returns DescribeHybridCloudClusterRuleResponse
   */
  async describeHybridCloudClusterRule(request: DescribeHybridCloudClusterRuleRequest): Promise<DescribeHybridCloudClusterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudClusterRuleWithOptions(request, runtime);
  }

  /**
   * 查询混合云集群列表
   * 
   * @param request - DescribeHybridCloudClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudClustersResponse
   */
  async describeHybridCloudClustersWithOptions(request: DescribeHybridCloudClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudClusters",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudClustersResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudClustersResponse({}));
  }

  /**
   * 查询混合云集群列表
   * 
   * @param request - DescribeHybridCloudClustersRequest
   * @returns DescribeHybridCloudClustersResponse
   */
  async describeHybridCloudClusters(request: DescribeHybridCloudClustersRequest): Promise<DescribeHybridCloudClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudClustersWithOptions(request, runtime);
  }

  /**
   * Queries the hybrid cloud node groups that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeHybridCloudGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudGroupsResponse
   */
  async describeHybridCloudGroupsWithOptions(request: DescribeHybridCloudGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterProxyType)) {
      query["ClusterProxyType"] = request.clusterProxyType;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudGroupsResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudGroupsResponse({}));
  }

  /**
   * Queries the hybrid cloud node groups that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeHybridCloudGroupsRequest
   * @returns DescribeHybridCloudGroupsResponse
   */
  async describeHybridCloudGroups(request: DescribeHybridCloudGroupsRequest): Promise<DescribeHybridCloudGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the domain names that are added to a Web Application Firewall (WAF) instance in hybrid cloud mode.
   * 
   * @param request - DescribeHybridCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudResourcesResponse
   */
  async describeHybridCloudResourcesWithOptions(request: DescribeHybridCloudResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backend)) {
      query["Backend"] = request.backend;
    }

    if (!Util.isUnset(request.cnameEnabled)) {
      query["CnameEnabled"] = request.cnameEnabled;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudResourcesResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudResourcesResponse({}));
  }

  /**
   * Queries the domain names that are added to a Web Application Firewall (WAF) instance in hybrid cloud mode.
   * 
   * @param request - DescribeHybridCloudResourcesRequest
   * @returns DescribeHybridCloudResourcesResponse
   */
  async describeHybridCloudResources(request: DescribeHybridCloudResourcesRequest): Promise<DescribeHybridCloudResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries information about the regions that the hybrid cloud mode supports, such as the Internet service providers (ISPs), continents, and cities.
   * 
   * @param request - DescribeHybridCloudServerRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudServerRegionsResponse
   */
  async describeHybridCloudServerRegionsWithOptions(request: DescribeHybridCloudServerRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudServerRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionType)) {
      query["RegionType"] = request.regionType;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudServerRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudServerRegionsResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudServerRegionsResponse({}));
  }

  /**
   * Queries information about the regions that the hybrid cloud mode supports, such as the Internet service providers (ISPs), continents, and cities.
   * 
   * @param request - DescribeHybridCloudServerRegionsRequest
   * @returns DescribeHybridCloudServerRegionsResponse
   */
  async describeHybridCloudServerRegions(request: DescribeHybridCloudServerRegionsRequest): Promise<DescribeHybridCloudServerRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudServerRegionsWithOptions(request, runtime);
  }

  /**
   * Queries servers that are not assigned to a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudUnassignedMachinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudUnassignedMachinesResponse
   */
  async describeHybridCloudUnassignedMachinesWithOptions(request: DescribeHybridCloudUnassignedMachinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudUnassignedMachinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudUnassignedMachines",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudUnassignedMachinesResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudUnassignedMachinesResponse({}));
  }

  /**
   * Queries servers that are not assigned to a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudUnassignedMachinesRequest
   * @returns DescribeHybridCloudUnassignedMachinesResponse
   */
  async describeHybridCloudUnassignedMachines(request: DescribeHybridCloudUnassignedMachinesRequest): Promise<DescribeHybridCloudUnassignedMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudUnassignedMachinesWithOptions(request, runtime);
  }

  /**
   * Queries the HTTP and HTTPS ports that you can use when you add a domain name to Web Application Firewall (WAF) in hybrid cloud mode.
   * 
   * @param request - DescribeHybridCloudUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudUserResponse
   */
  async describeHybridCloudUserWithOptions(request: DescribeHybridCloudUserRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudUser",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudUserResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudUserResponse({}));
  }

  /**
   * Queries the HTTP and HTTPS ports that you can use when you add a domain name to Web Application Firewall (WAF) in hybrid cloud mode.
   * 
   * @param request - DescribeHybridCloudUserRequest
   * @returns DescribeHybridCloudUserResponse
   */
  async describeHybridCloudUser(request: DescribeHybridCloudUserRequest): Promise<DescribeHybridCloudUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudUserWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Web Application Firewall (WAF) instance within the current Alibaba Cloud account.
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  /**
   * Queries the details of a Web Application Firewall (WAF) instance within the current Alibaba Cloud account.
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * Queries IP addresses in an IP address blacklist for major event protection by page.
   * 
   * @param request - DescribeMajorProtectionBlackIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMajorProtectionBlackIpsResponse
   */
  async describeMajorProtectionBlackIpsWithOptions(request: DescribeMajorProtectionBlackIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMajorProtectionBlackIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipLike)) {
      query["IpLike"] = request.ipLike;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMajorProtectionBlackIps",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMajorProtectionBlackIpsResponse>(await this.callApi(params, req, runtime), new DescribeMajorProtectionBlackIpsResponse({}));
  }

  /**
   * Queries IP addresses in an IP address blacklist for major event protection by page.
   * 
   * @param request - DescribeMajorProtectionBlackIpsRequest
   * @returns DescribeMajorProtectionBlackIpsResponse
   */
  async describeMajorProtectionBlackIps(request: DescribeMajorProtectionBlackIpsRequest): Promise<DescribeMajorProtectionBlackIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMajorProtectionBlackIpsWithOptions(request, runtime);
  }

  /**
   * Queries information about members.
   * 
   * @param request - DescribeMemberAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMemberAccountsResponse
   */
  async describeMemberAccountsWithOptions(request: DescribeMemberAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMemberAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountStatus)) {
      query["AccountStatus"] = request.accountStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMemberAccounts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMemberAccountsResponse>(await this.callApi(params, req, runtime), new DescribeMemberAccountsResponse({}));
  }

  /**
   * Queries information about members.
   * 
   * @param request - DescribeMemberAccountsRequest
   * @returns DescribeMemberAccountsResponse
   */
  async describeMemberAccounts(request: DescribeMemberAccountsRequest): Promise<DescribeMemberAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMemberAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the protection status of Web Application Firewall (WAF).
   * 
   * @param request - DescribePauseProtectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePauseProtectionStatusResponse
   */
  async describePauseProtectionStatusWithOptions(request: DescribePauseProtectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePauseProtectionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePauseProtectionStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePauseProtectionStatusResponse>(await this.callApi(params, req, runtime), new DescribePauseProtectionStatusResponse({}));
  }

  /**
   * Queries the protection status of Web Application Firewall (WAF).
   * 
   * @param request - DescribePauseProtectionStatusRequest
   * @returns DescribePauseProtectionStatusResponse
   */
  async describePauseProtectionStatus(request: DescribePauseProtectionStatusRequest): Promise<DescribePauseProtectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePauseProtectionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the queries per second (QPS) statistics of a WAF instance.
   * 
   * @param request - DescribePeakTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePeakTrendResponse
   */
  async describePeakTrendWithOptions(request: DescribePeakTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribePeakTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePeakTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePeakTrendResponse>(await this.callApi(params, req, runtime), new DescribePeakTrendResponse({}));
  }

  /**
   * Queries the queries per second (QPS) statistics of a WAF instance.
   * 
   * @param request - DescribePeakTrendRequest
   * @returns DescribePeakTrendResponse
   */
  async describePeakTrend(request: DescribePeakTrendRequest): Promise<DescribePeakTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePeakTrendWithOptions(request, runtime);
  }

  /**
   * Queries the cloud service instances to be added to Web Application Firewall (WAF) in transparent proxy mode.
   * 
   * @param request - DescribeProductInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductInstancesResponse
   */
  async describeProductInstancesWithOptions(request: DescribeProductInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceInstanceIp)) {
      query["ResourceInstanceIp"] = request.resourceInstanceIp;
    }

    if (!Util.isUnset(request.resourceInstanceName)) {
      query["ResourceInstanceName"] = request.resourceInstanceName;
    }

    if (!Util.isUnset(request.resourceIp)) {
      query["ResourceIp"] = request.resourceIp;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductInstances",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductInstancesResponse>(await this.callApi(params, req, runtime), new DescribeProductInstancesResponse({}));
  }

  /**
   * Queries the cloud service instances to be added to Web Application Firewall (WAF) in transparent proxy mode.
   * 
   * @param request - DescribeProductInstancesRequest
   * @returns DescribeProductInstancesResponse
   */
  async describeProductInstances(request: DescribeProductInstancesRequest): Promise<DescribeProductInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of domain names that are added to Web Application Firewall (WAF) and penalized for failing to obtain an Internet Content Provider (ICP) filing.
   * 
   * @param request - DescribePunishedDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePunishedDomainsResponse
   */
  async describePunishedDomainsWithOptions(request: DescribePunishedDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePunishedDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePunishedDomains",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePunishedDomainsResponse>(await this.callApi(params, req, runtime), new DescribePunishedDomainsResponse({}));
  }

  /**
   * Queries a list of domain names that are added to Web Application Firewall (WAF) and penalized for failing to obtain an Internet Content Provider (ICP) filing.
   * 
   * @param request - DescribePunishedDomainsRequest
   * @returns DescribePunishedDomainsResponse
   */
  async describePunishedDomains(request: DescribePunishedDomainsRequest): Promise<DescribePunishedDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePunishedDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the certificates that are used in cloud service instances. The certificates returned include the certificates within the delegated administrator account and the certificates within members to which specific instances belong. For example, the delegated administrator account has certificate 1, instance lb-xx-1 belongs to member B, and member B has certificate 2. If you specify instance lb-xx-1 in the request, certificate 1 and certificate 2 are returned.
   * 
   * @param request - DescribeResourceInstanceCertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceInstanceCertsResponse
   */
  async describeResourceInstanceCertsWithOptions(request: DescribeResourceInstanceCertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceInstanceCertsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceInstanceCerts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceInstanceCertsResponse>(await this.callApi(params, req, runtime), new DescribeResourceInstanceCertsResponse({}));
  }

  /**
   * Queries the certificates that are used in cloud service instances. The certificates returned include the certificates within the delegated administrator account and the certificates within members to which specific instances belong. For example, the delegated administrator account has certificate 1, instance lb-xx-1 belongs to member B, and member B has certificate 2. If you specify instance lb-xx-1 in the request, certificate 1 and certificate 2 are returned.
   * 
   * @param request - DescribeResourceInstanceCertsRequest
   * @returns DescribeResourceInstanceCertsResponse
   */
  async describeResourceInstanceCerts(request: DescribeResourceInstanceCertsRequest): Promise<DescribeResourceInstanceCertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceInstanceCertsWithOptions(request, runtime);
  }

  /**
   * Queries whether the log collection feature is enabled for a protected object.
   * 
   * @param request - DescribeResourceLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLogStatusResponse
   */
  async describeResourceLogStatusWithOptions(request: DescribeResourceLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceLogStatusResponse>(await this.callApi(params, req, runtime), new DescribeResourceLogStatusResponse({}));
  }

  /**
   * Queries whether the log collection feature is enabled for a protected object.
   * 
   * @param request - DescribeResourceLogStatusRequest
   * @returns DescribeResourceLogStatusResponse
   */
  async describeResourceLogStatus(request: DescribeResourceLogStatusRequest): Promise<DescribeResourceLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceLogStatusWithOptions(request, runtime);
  }

  /**
   * Queries the ports of a cloud service instance that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeResourcePortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcePortResponse
   */
  async describeResourcePortWithOptions(request: DescribeResourcePortRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourcePort",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourcePortResponse>(await this.callApi(params, req, runtime), new DescribeResourcePortResponse({}));
  }

  /**
   * Queries the ports of a cloud service instance that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeResourcePortRequest
   * @returns DescribeResourcePortResponse
   */
  async describeResourcePort(request: DescribeResourcePortRequest): Promise<DescribeResourcePortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePortWithOptions(request, runtime);
  }

  /**
   * Queries the region IDs of the resources that are added to Web Application Firewall (WAF) in cloud native mode. The resources include Application Load Balancer (ALB) instances, Microservices Engine (MSE) instances, and custom domain names bound to web applications in Function Compute.
   * 
   * @param request - DescribeResourceRegionIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceRegionIdResponse
   */
  async describeResourceRegionIdWithOptions(request: DescribeResourceRegionIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceRegionIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceRegionId",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceRegionIdResponse>(await this.callApi(params, req, runtime), new DescribeResourceRegionIdResponse({}));
  }

  /**
   * Queries the region IDs of the resources that are added to Web Application Firewall (WAF) in cloud native mode. The resources include Application Load Balancer (ALB) instances, Microservices Engine (MSE) instances, and custom domain names bound to web applications in Function Compute.
   * 
   * @param request - DescribeResourceRegionIdRequest
   * @returns DescribeResourceRegionIdResponse
   */
  async describeResourceRegionId(request: DescribeResourceRegionIdRequest): Promise<DescribeResourceRegionIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceRegionIdWithOptions(request, runtime);
  }

  /**
   * Queries the region IDs of Classic Load Balancer (CLB) and Elastic Compute Service (ECS) instances that can be added to Web Application Firewall (WAF) in transparent proxy mode.
   * 
   * @param request - DescribeResourceSupportRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceSupportRegionsResponse
   */
  async describeResourceSupportRegionsWithOptions(request: DescribeResourceSupportRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceSupportRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceSupportRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceSupportRegionsResponse>(await this.callApi(params, req, runtime), new DescribeResourceSupportRegionsResponse({}));
  }

  /**
   * Queries the region IDs of Classic Load Balancer (CLB) and Elastic Compute Service (ECS) instances that can be added to Web Application Firewall (WAF) in transparent proxy mode.
   * 
   * @param request - DescribeResourceSupportRegionsRequest
   * @returns DescribeResourceSupportRegionsResponse
   */
  async describeResourceSupportRegions(request: DescribeResourceSupportRegionsRequest): Promise<DescribeResourceSupportRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceSupportRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the trend of the number of error codes that are returned to clients or Web Application Firewall (WAF). The error codes include 302, 405, 444, 499, and 5XX.
   * 
   * @param request - DescribeResponseCodeTrendGraphRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResponseCodeTrendGraphResponse
   */
  async describeResponseCodeTrendGraphWithOptions(request: DescribeResponseCodeTrendGraphRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResponseCodeTrendGraphResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResponseCodeTrendGraph",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResponseCodeTrendGraphResponse>(await this.callApi(params, req, runtime), new DescribeResponseCodeTrendGraphResponse({}));
  }

  /**
   * Queries the trend of the number of error codes that are returned to clients or Web Application Firewall (WAF). The error codes include 302, 405, 444, 499, and 5XX.
   * 
   * @param request - DescribeResponseCodeTrendGraphRequest
   * @returns DescribeResponseCodeTrendGraphResponse
   */
  async describeResponseCodeTrendGraph(request: DescribeResponseCodeTrendGraphRequest): Promise<DescribeResponseCodeTrendGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResponseCodeTrendGraphWithOptions(request, runtime);
  }

  /**
   * Queries regular expression rule groups by page.
   * 
   * @param request - DescribeRuleGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleGroupsResponse
   */
  async describeRuleGroupsWithOptions(request: DescribeRuleGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleGroupsResponse>(await this.callApi(params, req, runtime), new DescribeRuleGroupsResponse({}));
  }

  /**
   * Queries regular expression rule groups by page.
   * 
   * @param request - DescribeRuleGroupsRequest
   * @returns DescribeRuleGroupsResponse
   */
  async describeRuleGroups(request: DescribeRuleGroupsRequest): Promise<DescribeRuleGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 IP addresses from which attacks are initiated.
   * 
   * @param request - DescribeRuleHitsTopClientIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopClientIpResponse
   */
  async describeRuleHitsTopClientIpWithOptions(request: DescribeRuleHitsTopClientIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopClientIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopClientIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopClientIpResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopClientIpResponse({}));
  }

  /**
   * Queries the top 10 IP addresses from which attacks are initiated.
   * 
   * @param request - DescribeRuleHitsTopClientIpRequest
   * @returns DescribeRuleHitsTopClientIpResponse
   */
  async describeRuleHitsTopClientIp(request: DescribeRuleHitsTopClientIpRequest): Promise<DescribeRuleHitsTopClientIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopClientIpWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 protected objects that trigger protection rules.
   * 
   * @param request - DescribeRuleHitsTopResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopResourceResponse
   */
  async describeRuleHitsTopResourceWithOptions(request: DescribeRuleHitsTopResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopResourceResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopResourceResponse({}));
  }

  /**
   * Queries the top 10 protected objects that trigger protection rules.
   * 
   * @param request - DescribeRuleHitsTopResourceRequest
   * @returns DescribeRuleHitsTopResourceResponse
   */
  async describeRuleHitsTopResource(request: DescribeRuleHitsTopResourceRequest): Promise<DescribeRuleHitsTopResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopResourceWithOptions(request, runtime);
  }

  /**
   * Queries the IDs of the top 10 protection rules that are matched by requests.
   * 
   * @param request - DescribeRuleHitsTopRuleIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopRuleIdResponse
   */
  async describeRuleHitsTopRuleIdWithOptions(request: DescribeRuleHitsTopRuleIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopRuleIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isGroupResource)) {
      query["IsGroupResource"] = request.isGroupResource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopRuleId",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopRuleIdResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopRuleIdResponse({}));
  }

  /**
   * Queries the IDs of the top 10 protection rules that are matched by requests.
   * 
   * @param request - DescribeRuleHitsTopRuleIdRequest
   * @returns DescribeRuleHitsTopRuleIdResponse
   */
  async describeRuleHitsTopRuleId(request: DescribeRuleHitsTopRuleIdRequest): Promise<DescribeRuleHitsTopRuleIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopRuleIdWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 protection modules that are matched.
   * 
   * @param request - DescribeRuleHitsTopTuleTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopTuleTypeResponse
   */
  async describeRuleHitsTopTuleTypeWithOptions(request: DescribeRuleHitsTopTuleTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopTuleTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopTuleType",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopTuleTypeResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopTuleTypeResponse({}));
  }

  /**
   * Queries the top 10 protection modules that are matched.
   * 
   * @param request - DescribeRuleHitsTopTuleTypeRequest
   * @returns DescribeRuleHitsTopTuleTypeResponse
   */
  async describeRuleHitsTopTuleType(request: DescribeRuleHitsTopTuleTypeRequest): Promise<DescribeRuleHitsTopTuleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopTuleTypeWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 user agents that are used to initiate attacks.
   * 
   * @param request - DescribeRuleHitsTopUaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopUaResponse
   */
  async describeRuleHitsTopUaWithOptions(request: DescribeRuleHitsTopUaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopUaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopUa",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopUaResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopUaResponse({}));
  }

  /**
   * Queries the top 10 user agents that are used to initiate attacks.
   * 
   * @param request - DescribeRuleHitsTopUaRequest
   * @returns DescribeRuleHitsTopUaResponse
   */
  async describeRuleHitsTopUa(request: DescribeRuleHitsTopUaRequest): Promise<DescribeRuleHitsTopUaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopUaWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 URLs that trigger protection rules.
   * 
   * @param request - DescribeRuleHitsTopUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopUrlResponse
   */
  async describeRuleHitsTopUrlWithOptions(request: DescribeRuleHitsTopUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopUrl",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopUrlResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopUrlResponse({}));
  }

  /**
   * Queries the top 10 URLs that trigger protection rules.
   * 
   * @param request - DescribeRuleHitsTopUrlRequest
   * @returns DescribeRuleHitsTopUrlResponse
   */
  async describeRuleHitsTopUrl(request: DescribeRuleHitsTopUrlRequest): Promise<DescribeRuleHitsTopUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopUrlWithOptions(request, runtime);
  }

  /**
   * Queries whether Web Application Firewall (WAF) is authorized to access Logstores.
   * 
   * @param request - DescribeSlsAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatusWithOptions(request: DescribeSlsAuthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsAuthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsAuthStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsAuthStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlsAuthStatusResponse({}));
  }

  /**
   * Queries whether Web Application Firewall (WAF) is authorized to access Logstores.
   * 
   * @param request - DescribeSlsAuthStatusRequest
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatus(request: DescribeSlsAuthStatusRequest): Promise<DescribeSlsAuthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  /**
   * Queries information about a Logstore, such as the total capacity, storage duration, and used capacity.
   * 
   * @param request - DescribeSlsLogStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsLogStoreResponse
   */
  async describeSlsLogStoreWithOptions(request: DescribeSlsLogStoreRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogStoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsLogStore",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsLogStoreResponse>(await this.callApi(params, req, runtime), new DescribeSlsLogStoreResponse({}));
  }

  /**
   * Queries information about a Logstore, such as the total capacity, storage duration, and used capacity.
   * 
   * @param request - DescribeSlsLogStoreRequest
   * @returns DescribeSlsLogStoreResponse
   */
  async describeSlsLogStore(request: DescribeSlsLogStoreRequest): Promise<DescribeSlsLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsLogStoreWithOptions(request, runtime);
  }

  /**
   * Queries the status of a Simple Log Service Logstore.
   * 
   * @param request - DescribeSlsLogStoreStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsLogStoreStatusResponse
   */
  async describeSlsLogStoreStatusWithOptions(request: DescribeSlsLogStoreStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogStoreStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsLogStoreStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsLogStoreStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlsLogStoreStatusResponse({}));
  }

  /**
   * Queries the status of a Simple Log Service Logstore.
   * 
   * @param request - DescribeSlsLogStoreStatusRequest
   * @returns DescribeSlsLogStoreStatusResponse
   */
  async describeSlsLogStoreStatus(request: DescribeSlsLogStoreStatusRequest): Promise<DescribeSlsLogStoreStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsLogStoreStatusWithOptions(request, runtime);
  }

  /**
   * Queries the number of protected resources for which a protection template takes effect.
   * 
   * @param request - DescribeTemplateResourceCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateResourceCountResponse
   */
  async describeTemplateResourceCountWithOptions(request: DescribeTemplateResourceCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateResourceCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplateResourceCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTemplateResourceCountResponse>(await this.callApi(params, req, runtime), new DescribeTemplateResourceCountResponse({}));
  }

  /**
   * Queries the number of protected resources for which a protection template takes effect.
   * 
   * @param request - DescribeTemplateResourceCountRequest
   * @returns DescribeTemplateResourceCountResponse
   */
  async describeTemplateResourceCount(request: DescribeTemplateResourceCountRequest): Promise<DescribeTemplateResourceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateResourceCountWithOptions(request, runtime);
  }

  /**
   * Queries the resources that are associated to a protection rule template.
   * 
   * @param request - DescribeTemplateResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateResourcesResponse
   */
  async describeTemplateResourcesWithOptions(request: DescribeTemplateResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplateResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTemplateResourcesResponse>(await this.callApi(params, req, runtime), new DescribeTemplateResourcesResponse({}));
  }

  /**
   * Queries the resources that are associated to a protection rule template.
   * 
   * @param request - DescribeTemplateResourcesRequest
   * @returns DescribeTemplateResourcesResponse
   */
  async describeTemplateResources(request: DescribeTemplateResourcesRequest): Promise<DescribeTemplateResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateResourcesWithOptions(request, runtime);
  }

  /**
   * Queries available regions for log storage.
   * 
   * @param request - DescribeUserSlsLogRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserSlsLogRegionsResponse
   */
  async describeUserSlsLogRegionsWithOptions(request: DescribeUserSlsLogRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserSlsLogRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserSlsLogRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserSlsLogRegionsResponse>(await this.callApi(params, req, runtime), new DescribeUserSlsLogRegionsResponse({}));
  }

  /**
   * Queries available regions for log storage.
   * 
   * @param request - DescribeUserSlsLogRegionsRequest
   * @returns DescribeUserSlsLogRegionsResponse
   */
  async describeUserSlsLogRegions(request: DescribeUserSlsLogRegionsRequest): Promise<DescribeUserSlsLogRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserSlsLogRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the status, region ID, and status modification time of Web Application Firewall (WAF) logs.
   * 
   * @param request - DescribeUserWafLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserWafLogStatusResponse
   */
  async describeUserWafLogStatusWithOptions(request: DescribeUserWafLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserWafLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserWafLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserWafLogStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserWafLogStatusResponse({}));
  }

  /**
   * Queries the status, region ID, and status modification time of Web Application Firewall (WAF) logs.
   * 
   * @param request - DescribeUserWafLogStatusRequest
   * @returns DescribeUserWafLogStatusResponse
   */
  async describeUserWafLogStatus(request: DescribeUserWafLogStatusRequest): Promise<DescribeUserWafLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserWafLogStatusWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 IP addresses from which requests are sent.
   * 
   * @param request - DescribeVisitTopIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVisitTopIpResponse
   */
  async describeVisitTopIpWithOptions(request: DescribeVisitTopIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVisitTopIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVisitTopIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVisitTopIpResponse>(await this.callApi(params, req, runtime), new DescribeVisitTopIpResponse({}));
  }

  /**
   * Queries the top 10 IP addresses from which requests are sent.
   * 
   * @param request - DescribeVisitTopIpRequest
   * @returns DescribeVisitTopIpResponse
   */
  async describeVisitTopIp(request: DescribeVisitTopIpRequest): Promise<DescribeVisitTopIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVisitTopIpWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 user agents that are used to initiate requests.
   * 
   * @param request - DescribeVisitUasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVisitUasResponse
   */
  async describeVisitUasWithOptions(request: DescribeVisitUasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVisitUasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVisitUas",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVisitUasResponse>(await this.callApi(params, req, runtime), new DescribeVisitUasResponse({}));
  }

  /**
   * Queries the top 10 user agents that are used to initiate requests.
   * 
   * @param request - DescribeVisitUasRequest
   * @returns DescribeVisitUasResponse
   */
  async describeVisitUas(request: DescribeVisitUasRequest): Promise<DescribeVisitUasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVisitUasWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin CIDR blocks of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeWafSourceIpSegmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWafSourceIpSegmentResponse
   */
  async describeWafSourceIpSegmentWithOptions(request: DescribeWafSourceIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWafSourceIpSegmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWafSourceIpSegment",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWafSourceIpSegmentResponse>(await this.callApi(params, req, runtime), new DescribeWafSourceIpSegmentResponse({}));
  }

  /**
   * Queries the back-to-origin CIDR blocks of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeWafSourceIpSegmentRequest
   * @returns DescribeWafSourceIpSegmentResponse
   */
  async describeWafSourceIpSegment(request: DescribeWafSourceIpSegmentRequest): Promise<DescribeWafSourceIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWafSourceIpSegmentWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of API security log subscription.
   * 
   * @param request - ModifyApisecLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecLogDeliveryResponse
   */
  async modifyApisecLogDeliveryWithOptions(request: ModifyApisecLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApisecLogDeliveryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assertKey)) {
      query["AssertKey"] = request.assertKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!Util.isUnset(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApisecLogDelivery",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApisecLogDeliveryResponse>(await this.callApi(params, req, runtime), new ModifyApisecLogDeliveryResponse({}));
  }

  /**
   * Modifies the configurations of API security log subscription.
   * 
   * @param request - ModifyApisecLogDeliveryRequest
   * @returns ModifyApisecLogDeliveryResponse
   */
  async modifyApisecLogDelivery(request: ModifyApisecLogDeliveryRequest): Promise<ModifyApisecLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApisecLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Modifies the status of API security log subscription.
   * 
   * @param request - ModifyApisecLogDeliveryStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecLogDeliveryStatusResponse
   */
  async modifyApisecLogDeliveryStatusWithOptions(request: ModifyApisecLogDeliveryStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApisecLogDeliveryStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assertKey)) {
      query["AssertKey"] = request.assertKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApisecLogDeliveryStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApisecLogDeliveryStatusResponse>(await this.callApi(params, req, runtime), new ModifyApisecLogDeliveryStatusResponse({}));
  }

  /**
   * Modifies the status of API security log subscription.
   * 
   * @param request - ModifyApisecLogDeliveryStatusRequest
   * @returns ModifyApisecLogDeliveryStatusResponse
   */
  async modifyApisecLogDeliveryStatus(request: ModifyApisecLogDeliveryStatusRequest): Promise<ModifyApisecLogDeliveryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApisecLogDeliveryStatusWithOptions(request, runtime);
  }

  /**
   * 修改云产品资源
   * 
   * @param tmpReq - ModifyCloudResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudResourceResponse
   */
  async modifyCloudResourceWithOptions(tmpReq: ModifyCloudResourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCloudResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyCloudResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!Util.isUnset(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!Util.isUnset(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCloudResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCloudResourceResponse>(await this.callApi(params, req, runtime), new ModifyCloudResourceResponse({}));
  }

  /**
   * 修改云产品资源
   * 
   * @param request - ModifyCloudResourceRequest
   * @returns ModifyCloudResourceResponse
   */
  async modifyCloudResource(request: ModifyCloudResourceRequest): Promise<ModifyCloudResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCloudResourceWithOptions(request, runtime);
  }

  /**
   * 修改默认HTTPS配置
   * 
   * @param request - ModifyDefaultHttpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefaultHttpsResponse
   */
  async modifyDefaultHttpsWithOptions(request: ModifyDefaultHttpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefaultHttpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.cipherSuite)) {
      query["CipherSuite"] = request.cipherSuite;
    }

    if (!Util.isUnset(request.customCiphers)) {
      query["CustomCiphers"] = request.customCiphers;
    }

    if (!Util.isUnset(request.enableTLSv3)) {
      query["EnableTLSv3"] = request.enableTLSv3;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.TLSVersion)) {
      query["TLSVersion"] = request.TLSVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefaultHttps",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefaultHttpsResponse>(await this.callApi(params, req, runtime), new ModifyDefaultHttpsResponse({}));
  }

  /**
   * 修改默认HTTPS配置
   * 
   * @param request - ModifyDefaultHttpsRequest
   * @returns ModifyDefaultHttpsResponse
   */
  async modifyDefaultHttps(request: ModifyDefaultHttpsRequest): Promise<ModifyDefaultHttpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefaultHttpsWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a protected object group.
   * 
   * @param request - ModifyDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseResourceGroupResponse
   */
  async modifyDefenseResourceGroupWithOptions(request: ModifyDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addList)) {
      query["AddList"] = request.addList;
    }

    if (!Util.isUnset(request.deleteList)) {
      query["DeleteList"] = request.deleteList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyDefenseResourceGroupResponse({}));
  }

  /**
   * Modifies the configurations of a protected object group.
   * 
   * @param request - ModifyDefenseResourceGroupRequest
   * @returns ModifyDefenseResourceGroupResponse
   */
  async modifyDefenseResourceGroup(request: ModifyDefenseResourceGroupRequest): Promise<ModifyDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the cookie settings of a protected object and the method to identify the originating IP addresses of clients.
   * 
   * @param request - ModifyDefenseResourceXffRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseResourceXffResponse
   */
  async modifyDefenseResourceXffWithOptions(request: ModifyDefenseResourceXffRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseResourceXffResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acwCookieStatus)) {
      query["AcwCookieStatus"] = request.acwCookieStatus;
    }

    if (!Util.isUnset(request.acwSecureStatus)) {
      query["AcwSecureStatus"] = request.acwSecureStatus;
    }

    if (!Util.isUnset(request.acwV3SecureStatus)) {
      query["AcwV3SecureStatus"] = request.acwV3SecureStatus;
    }

    if (!Util.isUnset(request.customHeaders)) {
      query["CustomHeaders"] = request.customHeaders;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.xffStatus)) {
      query["XffStatus"] = request.xffStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseResourceXff",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseResourceXffResponse>(await this.callApi(params, req, runtime), new ModifyDefenseResourceXffResponse({}));
  }

  /**
   * Modifies the cookie settings of a protected object and the method to identify the originating IP addresses of clients.
   * 
   * @param request - ModifyDefenseResourceXffRequest
   * @returns ModifyDefenseResourceXffResponse
   */
  async modifyDefenseResourceXff(request: ModifyDefenseResourceXffRequest): Promise<ModifyDefenseResourceXffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseResourceXffWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a protection rule.
   * 
   * @param request - ModifyDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseRuleResponse
   */
  async modifyDefenseRuleWithOptions(request: ModifyDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseRuleResponse>(await this.callApi(params, req, runtime), new ModifyDefenseRuleResponse({}));
  }

  /**
   * Modifies the configurations of a protection rule.
   * 
   * @param request - ModifyDefenseRuleRequest
   * @returns ModifyDefenseRuleResponse
   */
  async modifyDefenseRule(request: ModifyDefenseRuleRequest): Promise<ModifyDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Updates the cached page of a website that is protected based on a website tamper-proofing rule.
   * 
   * @param request - ModifyDefenseRuleCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseRuleCacheResponse
   */
  async modifyDefenseRuleCacheWithOptions(request: ModifyDefenseRuleCacheRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseRuleCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseRuleCache",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseRuleCacheResponse>(await this.callApi(params, req, runtime), new ModifyDefenseRuleCacheResponse({}));
  }

  /**
   * Updates the cached page of a website that is protected based on a website tamper-proofing rule.
   * 
   * @param request - ModifyDefenseRuleCacheRequest
   * @returns ModifyDefenseRuleCacheResponse
   */
  async modifyDefenseRuleCache(request: ModifyDefenseRuleCacheRequest): Promise<ModifyDefenseRuleCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseRuleCacheWithOptions(request, runtime);
  }

  /**
   * Changes the status of a protection rule.
   * 
   * @param request - ModifyDefenseRuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseRuleStatusResponse
   */
  async modifyDefenseRuleStatusWithOptions(request: ModifyDefenseRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseRuleStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseRuleStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseRuleStatusResponse>(await this.callApi(params, req, runtime), new ModifyDefenseRuleStatusResponse({}));
  }

  /**
   * Changes the status of a protection rule.
   * 
   * @param request - ModifyDefenseRuleStatusRequest
   * @returns ModifyDefenseRuleStatusResponse
   */
  async modifyDefenseRuleStatus(request: ModifyDefenseRuleStatusRequest): Promise<ModifyDefenseRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseRuleStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a protection rule template.
   * 
   * @param request - ModifyDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseTemplateResponse
   */
  async modifyDefenseTemplateWithOptions(request: ModifyDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseTemplateResponse>(await this.callApi(params, req, runtime), new ModifyDefenseTemplateResponse({}));
  }

  /**
   * Modifies the configurations of a protection rule template.
   * 
   * @param request - ModifyDefenseTemplateRequest
   * @returns ModifyDefenseTemplateResponse
   */
  async modifyDefenseTemplate(request: ModifyDefenseTemplateRequest): Promise<ModifyDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Changes the status of a protection rule template.
   * 
   * @param request - ModifyDefenseTemplateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseTemplateStatusResponse
   */
  async modifyDefenseTemplateStatusWithOptions(request: ModifyDefenseTemplateStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseTemplateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateStatus)) {
      query["TemplateStatus"] = request.templateStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseTemplateStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseTemplateStatusResponse>(await this.callApi(params, req, runtime), new ModifyDefenseTemplateStatusResponse({}));
  }

  /**
   * Changes the status of a protection rule template.
   * 
   * @param request - ModifyDefenseTemplateStatusRequest
   * @returns ModifyDefenseTemplateStatusResponse
   */
  async modifyDefenseTemplateStatus(request: ModifyDefenseTemplateStatusRequest): Promise<ModifyDefenseTemplateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseTemplateStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param tmpReq - ModifyDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDomainResponse
   */
  async modifyDomainWithOptions(tmpReq: ModifyDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!Util.isUnset(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!Util.isUnset(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDomain",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDomainResponse>(await this.callApi(params, req, runtime), new ModifyDomainResponse({}));
  }

  /**
   * Modifies the configurations of a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param request - ModifyDomainRequest
   * @returns ModifyDomainResponse
   */
  async modifyDomain(request: ModifyDomainRequest): Promise<ModifyDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainWithOptions(request, runtime);
  }

  /**
   * Re-adds a domain name that is penalized for failing to obtain an Internet Content Provider (ICP) filing to Web Application Firewall (WAF).
   * 
   * @param request - ModifyDomainPunishStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDomainPunishStatusResponse
   */
  async modifyDomainPunishStatusWithOptions(request: ModifyDomainPunishStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainPunishStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDomainPunishStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDomainPunishStatusResponse>(await this.callApi(params, req, runtime), new ModifyDomainPunishStatusResponse({}));
  }

  /**
   * Re-adds a domain name that is penalized for failing to obtain an Internet Content Provider (ICP) filing to Web Application Firewall (WAF).
   * 
   * @param request - ModifyDomainPunishStatusRequest
   * @returns ModifyDomainPunishStatusResponse
   */
  async modifyDomainPunishStatus(request: ModifyDomainPunishStatusRequest): Promise<ModifyDomainPunishStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainPunishStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables manual bypass for a hybrid cloud cluster of the SDK-based traffic mirroring mode.
   * 
   * @param request - ModifyHybridCloudClusterBypassStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudClusterBypassStatusResponse
   */
  async modifyHybridCloudClusterBypassStatusWithOptions(request: ModifyHybridCloudClusterBypassStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudClusterBypassStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterResourceId)) {
      query["ClusterResourceId"] = request.clusterResourceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudClusterBypassStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudClusterBypassStatusResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudClusterBypassStatusResponse({}));
  }

  /**
   * Enables or disables manual bypass for a hybrid cloud cluster of the SDK-based traffic mirroring mode.
   * 
   * @param request - ModifyHybridCloudClusterBypassStatusRequest
   * @returns ModifyHybridCloudClusterBypassStatusResponse
   */
  async modifyHybridCloudClusterBypassStatus(request: ModifyHybridCloudClusterBypassStatusRequest): Promise<ModifyHybridCloudClusterBypassStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudClusterBypassStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the rule of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudClusterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudClusterRuleResponse
   */
  async modifyHybridCloudClusterRuleWithOptions(request: ModifyHybridCloudClusterRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudClusterRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleConfig)) {
      query["RuleConfig"] = request.ruleConfig;
    }

    if (!Util.isUnset(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudClusterRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudClusterRuleResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudClusterRuleResponse({}));
  }

  /**
   * Modifies the rule of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudClusterRuleRequest
   * @returns ModifyHybridCloudClusterRuleResponse
   */
  async modifyHybridCloudClusterRule(request: ModifyHybridCloudClusterRuleRequest): Promise<ModifyHybridCloudClusterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudClusterRuleWithOptions(request, runtime);
  }

  /**
   * 修改组信息
   * 
   * @param request - ModifyHybridCloudGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudGroupResponse
   */
  async modifyHybridCloudGroupWithOptions(request: ModifyHybridCloudGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudGroupResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudGroupResponse({}));
  }

  /**
   * 修改组信息
   * 
   * @param request - ModifyHybridCloudGroupRequest
   * @returns ModifyHybridCloudGroupResponse
   */
  async modifyHybridCloudGroup(request: ModifyHybridCloudGroupRequest): Promise<ModifyHybridCloudGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudGroupWithOptions(request, runtime);
  }

  /**
   * Adds a node to a node group of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudGroupExpansionServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudGroupExpansionServerResponse
   */
  async modifyHybridCloudGroupExpansionServerWithOptions(request: ModifyHybridCloudGroupExpansionServerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudGroupExpansionServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mids)) {
      query["Mids"] = request.mids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudGroupExpansionServer",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudGroupExpansionServerResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudGroupExpansionServerResponse({}));
  }

  /**
   * Adds a node to a node group of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudGroupExpansionServerRequest
   * @returns ModifyHybridCloudGroupExpansionServerResponse
   */
  async modifyHybridCloudGroupExpansionServer(request: ModifyHybridCloudGroupExpansionServerRequest): Promise<ModifyHybridCloudGroupExpansionServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudGroupExpansionServerWithOptions(request, runtime);
  }

  /**
   * Deletes a node from a node group of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudGroupShrinkServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudGroupShrinkServerResponse
   */
  async modifyHybridCloudGroupShrinkServerWithOptions(request: ModifyHybridCloudGroupShrinkServerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudGroupShrinkServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mids)) {
      query["Mids"] = request.mids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudGroupShrinkServer",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudGroupShrinkServerResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudGroupShrinkServerResponse({}));
  }

  /**
   * Deletes a node from a node group of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudGroupShrinkServerRequest
   * @returns ModifyHybridCloudGroupShrinkServerResponse
   */
  async modifyHybridCloudGroupShrinkServer(request: ModifyHybridCloudGroupShrinkServerRequest): Promise<ModifyHybridCloudGroupShrinkServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudGroupShrinkServerWithOptions(request, runtime);
  }

  /**
   * Modifies the traffic redirection status of a hybrid cloud cluster by using an SDK.
   * 
   * @param request - ModifyHybridCloudSdkPullinStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudSdkPullinStatusResponse
   */
  async modifyHybridCloudSdkPullinStatusWithOptions(request: ModifyHybridCloudSdkPullinStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudSdkPullinStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mid)) {
      query["Mid"] = request.mid;
    }

    if (!Util.isUnset(request.pullinStatus)) {
      query["PullinStatus"] = request.pullinStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudSdkPullinStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudSdkPullinStatusResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudSdkPullinStatusResponse({}));
  }

  /**
   * Modifies the traffic redirection status of a hybrid cloud cluster by using an SDK.
   * 
   * @param request - ModifyHybridCloudSdkPullinStatusRequest
   * @returns ModifyHybridCloudSdkPullinStatusResponse
   */
  async modifyHybridCloudSdkPullinStatus(request: ModifyHybridCloudSdkPullinStatusRequest): Promise<ModifyHybridCloudSdkPullinStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudSdkPullinStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a hybrid cloud node.
   * 
   * @param request - ModifyHybridCloudServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudServerResponse
   */
  async modifyHybridCloudServerWithOptions(request: ModifyHybridCloudServerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.continents)) {
      query["Continents"] = request.continents;
    }

    if (!Util.isUnset(request.customName)) {
      query["CustomName"] = request.customName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mid)) {
      query["Mid"] = request.mid;
    }

    if (!Util.isUnset(request.operator)) {
      query["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudServer",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudServerResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudServerResponse({}));
  }

  /**
   * Modifies the information about a hybrid cloud node.
   * 
   * @param request - ModifyHybridCloudServerRequest
   * @returns ModifyHybridCloudServerResponse
   */
  async modifyHybridCloudServer(request: ModifyHybridCloudServerRequest): Promise<ModifyHybridCloudServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudServerWithOptions(request, runtime);
  }

  /**
   * Modifies an IP address blacklist for major event protection.
   * 
   * @param request - ModifyMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMajorProtectionBlackIpResponse
   */
  async modifyMajorProtectionBlackIpWithOptions(request: ModifyMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new ModifyMajorProtectionBlackIpResponse({}));
  }

  /**
   * Modifies an IP address blacklist for major event protection.
   * 
   * @param request - ModifyMajorProtectionBlackIpRequest
   * @returns ModifyMajorProtectionBlackIpResponse
   */
  async modifyMajorProtectionBlackIp(request: ModifyMajorProtectionBlackIpRequest): Promise<ModifyMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Modifies the information about members that are added for multi-account management.
   * 
   * @param request - ModifyMemberAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMemberAccountResponse
   */
  async modifyMemberAccountWithOptions(request: ModifyMemberAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMemberAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMemberAccount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMemberAccountResponse>(await this.callApi(params, req, runtime), new ModifyMemberAccountResponse({}));
  }

  /**
   * Modifies the information about members that are added for multi-account management.
   * 
   * @param request - ModifyMemberAccountRequest
   * @returns ModifyMemberAccountResponse
   */
  async modifyMemberAccount(request: ModifyMemberAccountRequest): Promise<ModifyMemberAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMemberAccountWithOptions(request, runtime);
  }

  /**
   * Modifies the protection status of Web Application Firewall (WAF).
   * 
   * @param request - ModifyPauseProtectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPauseProtectionStatusResponse
   */
  async modifyPauseProtectionStatusWithOptions(request: ModifyPauseProtectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPauseProtectionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pauseStatus)) {
      query["PauseStatus"] = request.pauseStatus;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPauseProtectionStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPauseProtectionStatusResponse>(await this.callApi(params, req, runtime), new ModifyPauseProtectionStatusResponse({}));
  }

  /**
   * Modifies the protection status of Web Application Firewall (WAF).
   * 
   * @param request - ModifyPauseProtectionStatusRequest
   * @returns ModifyPauseProtectionStatusResponse
   */
  async modifyPauseProtectionStatus(request: ModifyPauseProtectionStatusRequest): Promise<ModifyPauseProtectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPauseProtectionStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables the log collection feature for a protected object.
   * 
   * @param request - ModifyResourceLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceLogStatusResponse
   */
  async modifyResourceLogStatusWithOptions(request: ModifyResourceLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourceLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyResourceLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyResourceLogStatusResponse>(await this.callApi(params, req, runtime), new ModifyResourceLogStatusResponse({}));
  }

  /**
   * Enables or disables the log collection feature for a protected object.
   * 
   * @param request - ModifyResourceLogStatusRequest
   * @returns ModifyResourceLogStatusResponse
   */
  async modifyResourceLogStatus(request: ModifyResourceLogStatusRequest): Promise<ModifyResourceLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourceLogStatusWithOptions(request, runtime);
  }

  /**
   * Associates or disassociates a protected object or protected object group with or from a protection rule template.
   * 
   * @param request - ModifyTemplateResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateResourcesResponse
   */
  async modifyTemplateResourcesWithOptions(request: ModifyTemplateResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTemplateResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bindResourceGroups)) {
      query["BindResourceGroups"] = request.bindResourceGroups;
    }

    if (!Util.isUnset(request.bindResources)) {
      query["BindResources"] = request.bindResources;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.unbindResourceGroups)) {
      query["UnbindResourceGroups"] = request.unbindResourceGroups;
    }

    if (!Util.isUnset(request.unbindResources)) {
      query["UnbindResources"] = request.unbindResources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTemplateResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTemplateResourcesResponse>(await this.callApi(params, req, runtime), new ModifyTemplateResourcesResponse({}));
  }

  /**
   * Associates or disassociates a protected object or protected object group with or from a protection rule template.
   * 
   * @param request - ModifyTemplateResourcesRequest
   * @returns ModifyTemplateResourcesResponse
   */
  async modifyTemplateResources(request: ModifyTemplateResourcesRequest): Promise<ModifyTemplateResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateResourcesWithOptions(request, runtime);
  }

  /**
   * Releases a Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  /**
   * Releases a Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Synchronizes Elastic Compute Service (ECS) instances and Classic Load Balancer (CLB) instances to Web Application Firewall (WAF).
   * 
   * @remarks
   * SyncProductInstance is an asynchronous operation. You can call the [DescribeProductInstances](https://help.aliyun.com/document_detail/2743168.html) operation to query the status of the task.
   * 
   * @param request - SyncProductInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncProductInstanceResponse
   */
  async syncProductInstanceWithOptions(request: SyncProductInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SyncProductInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncProductInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncProductInstanceResponse>(await this.callApi(params, req, runtime), new SyncProductInstanceResponse({}));
  }

  /**
   * Synchronizes Elastic Compute Service (ECS) instances and Classic Load Balancer (CLB) instances to Web Application Firewall (WAF).
   * 
   * @remarks
   * SyncProductInstance is an asynchronous operation. You can call the [DescribeProductInstances](https://help.aliyun.com/document_detail/2743168.html) operation to query the status of the task.
   * 
   * @param request - SyncProductInstanceRequest
   * @returns SyncProductInstanceResponse
   */
  async syncProductInstance(request: SyncProductInstanceRequest): Promise<SyncProductInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncProductInstanceWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources and then deletes the tags.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources and then deletes the tags.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
