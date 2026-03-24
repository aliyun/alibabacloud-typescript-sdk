// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRuleStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The quaternary condition by which to group the rule statistics. This value cannot be the same as the primary, secondary, or tertiary condition.
   * 
   * @example
   * riskLevel
   */
  fourthKey?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The primary condition by which to group the rule statistics.
   * 
   * This parameter is required.
   * 
   * @example
   * scene
   */
  primaryKey?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The secondary condition by which to group the rule statistics. This value cannot be the same as the primary condition.
   * 
   * @example
   * action
   */
  secondaryKey?: string;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * This parameter is required.
   * 
   * @example
   * 239136
   */
  templateId?: number;
  /**
   * @remarks
   * The tertiary condition by which to group the rule statistics. This value cannot be the same as the primary or secondary condition.
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

