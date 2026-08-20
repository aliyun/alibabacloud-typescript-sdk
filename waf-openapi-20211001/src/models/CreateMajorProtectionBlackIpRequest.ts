// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMajorProtectionBlackIpRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the IP blacklist.
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
   * 1716528465
   */
  expiredTime?: number;
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-2r42s6y****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP addresses to add to the IP blacklist. Custom IP addresses and CIDR blocks are supported. Both IPv4 and IPv6 are supported. Separate multiple IP addresses with commas (,).
   * For more information, see [Critical event protection](https://help.aliyun.com/document_detail/425591.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX,192.0.XX.XX/24
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
   * The ID of the critical event protection IP blacklist rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 232324
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the critical event protection rule template.
   * 
   * > This parameter requires the ID of a protection template of the critical event protection type. You can create this type of template only after you purchase the critical event protection upgrade.
   * >
   * > For more information about how to enable critical event protection and create a critical event protection rule template, see [Critical event protection](https://help.aliyun.com/document_detail/425591.html).
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

