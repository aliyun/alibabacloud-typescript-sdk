// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scenario. For more information, see the description of the **DefenseScene** parameter in the [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html) topic.
   * 
   * @example
   * region_block
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario of the protection template. Valid values:
   * 
   * - **web**: the web protection template for bot management.
   * 
   * - **app**: the app protection template for bot management.
   * 
   * - **basic**: the basic protection template for bot management.
   * 
   * - **bot_custom_acl**: the advanced custom protection rule template for bot management.
   * 
   * @example
   * basic
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
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
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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
   * The name of the protected object or protected object group, or the ID of the protected asset.
   * 
   * > You must specify the Resource and ResourceType parameters to filter query results.
   * 
   * @example
   * ruiqiu.cc-ecs
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvyknl****fa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the protected resource. Valid values:
   * 
   * - **single** (default): a protected object.
   * 
   * - **group**: a protected object group.
   * 
   * - **asset**: a protected asset.
   * 
   * > You must specify the Resource and ResourceType parameters to filter query results.
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
   * The IDs of the protection templates that you want to query. You can specify this parameter to query the protected objects for which multiple protection templates take effect. Separate multiple template IDs with commas (,).
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
   * The type of the protection template that you want to create. Valid values:
   * 
   * - **user_default**: default protection template.
   * 
   * - **user_custom**: custom protection template.
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

