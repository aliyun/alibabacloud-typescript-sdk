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
   * The IP address to query. You can set this parameter to perform a fuzzy query on the added IP address blacklist.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipLike?: string;
  /**
   * @remarks
   * The property by which to sort the results in **descending order**. Valid values:
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
   * The page number. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: regions outside the Chinese mainland.
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
   * The ID of the IP address blacklist rule for critical event protection.
   * 
   * @example
   * 20013199
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the critical event protection template.
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

