// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRuleStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The quaternary query condition. The value cannot be the same as the primary, secondary, or tertiary query condition.
   * 
   * @example
   * riskLevel
   */
  fourthKey?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The primary query condition.
   * 
   * This parameter is required.
   * 
   * @example
   * scene
   */
  primaryKey?: string;
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
   * The secondary query condition. The value cannot be the same as the primary query condition.
   * 
   * @example
   * action
   */
  secondaryKey?: string;
  /**
   * @remarks
   * The ID of the protection template to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 239136
   */
  templateId?: number;
  /**
   * @remarks
   * The tertiary query condition. The value cannot be the same as the primary or secondary query condition.
   * 
   * @example
   * status
   */
  thirdKey?: string;
  static names(): { [key: string]: string } {
    return {
      fourthKey: 'FourthKey',
      instanceId: 'InstanceId',
      primaryKey: 'PrimaryKey',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      secondaryKey: 'SecondaryKey',
      templateId: 'TemplateId',
      thirdKey: 'ThirdKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fourthKey: 'string',
      instanceId: 'string',
      primaryKey: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      secondaryKey: 'string',
      templateId: 'number',
      thirdKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

