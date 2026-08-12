// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMajorProtectionBlackIpRequest extends $dara.Model {
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
   * The IP blacklist to delete. Custom IP addresses or CIDR blocks are supported, including both IPv4 and IPv6. Separate multiple IP addresses with commas (,).
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
   * The ID of the IP blacklist rule for critical event protection.
   * 
   * This parameter is required.
   * 
   * @example
   * 20013135
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the critical event protection scenario template.
   * 
   * > This parameter requires the ID of a protection template of the critical event protection type. You can create this type of template only after purchasing the critical event protection upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * 5332
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
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

