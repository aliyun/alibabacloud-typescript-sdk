// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplatesRequest extends $dara.Model {
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
   * The IDs of the protection templates that you want to query. Separate multiple template IDs with commas (,).
   * 
   * @example
   * 189731,189539,189538,189531,189540,189542,189541
   */
  templateIds?: string;
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
      templateIds: 'TemplateIds',
      templateName: 'TemplateName',
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
      templateIds: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

