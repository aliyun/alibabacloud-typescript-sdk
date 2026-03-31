// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRuleStatisticsRequest extends $dara.Model {
  /**
   * @example
   * riskLevel
   */
  fourthKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scene
   */
  primaryKey?: string;
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
   * @example
   * action
   */
  secondaryKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 239136
   */
  templateId?: number;
  /**
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

