// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplateValidGroupsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

