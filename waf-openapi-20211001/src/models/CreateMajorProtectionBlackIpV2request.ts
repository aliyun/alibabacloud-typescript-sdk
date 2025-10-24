// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMajorProtectionBlackIpV2Request extends $dara.Model {
  /**
   * @example
   * Protection for major events
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1716528465
   */
  expiredTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-2r42s6y****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX,192.0.XX.XX/24
   */
  ipList?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12399
   */
  ruleId?: number;
  /**
   * @remarks
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

