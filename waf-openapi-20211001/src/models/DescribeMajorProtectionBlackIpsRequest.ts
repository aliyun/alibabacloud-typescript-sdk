// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMajorProtectionBlackIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address to query. You can set this parameter to perform a fuzzy match against the added IP blacklist.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipLike?: string;
  /**
   * @remarks
   * The sorting attribute. Results are sorted in **descending order** by the specified attribute. Valid values:
   * 
   * - **gmtModified**: sorts by modification time.
   * 
   * - **ip**: sorts by IP address.
   * 
   * - **templateId**: sorts by template ID.
   * 
   * - **id**: sorts by primary key.
   * 
   * @example
   * gmtModified
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number to return when paging is used. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page when paging is used. Default value: **10**, which indicates 10 entries per page.
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
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the critical event protection IP blacklist rule.
   * 
   * @example
   * 20013199
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the critical event protection template.
   * 
   * > This parameter requires the ID of a protection template of the critical event protection type. You can create this type of template only after purchasing the critical event protection upgrade separately.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

