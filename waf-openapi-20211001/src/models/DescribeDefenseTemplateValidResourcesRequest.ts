// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplateValidResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scene to query. For more information, see the valid values of the **DefenseScene** parameter in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html) when the protection rule type **DefenseType** is set to **template**.
   * 
   * This parameter is required.
   * 
   * @example
   * whitelist
   */
  defenseScene?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-27a3jyw0v04
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current paging in a paged query. Default value: **1**.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of protected objects to return on each page of the paging in a paged query. Default value: **20**.
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
   * The protected object to query.
   * 
   * @example
   * mgw.realperson.antdigital.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm2thcppfv6ay
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * 
   * > If you do not specify this parameter, you can query the list of protected objects to be associated when you create a template for the protection scene (**DefenseScene**).
   * 
   * @example
   * 21202
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

