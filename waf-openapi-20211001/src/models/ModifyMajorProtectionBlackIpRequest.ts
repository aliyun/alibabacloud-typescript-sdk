// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMajorProtectionBlackIpRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Protection for major events
   */
  description?: string;
  /**
   * @remarks
   * The expiration timestamp, in seconds.
   * > If the value is **0**, the rule takes effect permanently.
   * 
   * This parameter is required.
   * 
   * @example
   * 1662603328
   */
  expiredTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP blacklist to add. You can specify custom IP addresses or CIDR blocks. Both IPv4 and IPv6 are supported. Separate multiple IP addresses with commas (,).
   * For more information, see [Critical event protection](https://help.aliyun.com/document_detail/425591.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 12.XX.XX.2,3.XX.XX.3/24
   */
  ipList?: string;
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the IP blacklist rule for critical event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 20012033
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the critical event protection scenario template.
   * 
   * > This parameter requires the ID of a protection template of the critical event protection type. You can create this type of template only after you purchase the critical event protection upgrade.
   * >
   * > For more information about how to enable critical event protection and create a critical event protection rule template, see [Critical event protection](https://help.aliyun.com/document_detail/425591.html).
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

