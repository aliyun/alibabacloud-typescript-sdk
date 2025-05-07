// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMajorProtectionBlackIpRequest extends $dara.Model {
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
   * The timestamp after which the IP address blacklist becomes invalid. Unit: seconds.
   * 
   * >  If you set the parameter to **0**, the IP address blacklist is always valid.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716528465
   */
  expiredTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
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
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

