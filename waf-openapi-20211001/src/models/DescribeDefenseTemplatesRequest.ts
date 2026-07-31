// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scenario. For more information, see the **DefenseScene** parameter in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * @example
   * region_block
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario of the protection template. Valid values:
   * - **web**: BOT management web protection scenario template.
   * - **app**: BOT management app protection scenario template.
   * - **basic**: BOT management basic protection template.
   * - **bot_custom_acl**: BOT management advanced custom rule protection template.
   * 
   * @example
   * basic
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-pe33b****03
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return in a paging query request. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object, protection group, or the ID of the protected asset.
   * 
   * > This parameter is used together with the ResourceType parameter. Both parameters must have values for filtering to take effect.
   * 
   * @example
   * ruiqiu.cc-ecs
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
   * The type of the protected resource.
   * > This parameter is used together with the Resource parameter. Both parameters must have values for filtering to take effect.
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
   * 39395
   */
  templateId?: number;
  /**
   * @remarks
   * The IDs of the protection templates to query. You can specify this parameter to query the protected resources associated with multiple protection templates. Separate multiple template IDs with commas (,).
   * 
   * @example
   * 189731,189539,189538,189531,189540,189542,189541
   */
  templateIds?: string;
  /**
   * @remarks
   * The name of the protection template to query.
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype of the protection template. Valid values:
   * - **user_default**: user default protection.
   * - **user_custom**: user custom protection.
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

