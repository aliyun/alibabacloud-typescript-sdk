// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item to modify.
   * 
   * If **DefenseScene** is set to **apisec**, the valid value is:
   * 
   * - **autoEnabled**: indicates whether core API security detection is automatically enabled for new resources.
   * 
   * This parameter is required.
   * 
   * @example
   * autoEnableStatus
   */
  configKey?: string;
  /**
   * @remarks
   * The value to set for the configuration item.
   * 
   * > The value of this parameter depends on the value of **ConfigKey**. For more information, see **Description of mitigation setting parameters**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  configValue?: string;
  /**
   * @remarks
   * The protection scenario for which you want to modify the mitigation settings. Valid values:
   * 
   * - **apisec**: API security.
   * 
   * This parameter is required.
   * 
   * @example
   * apisec
   */
  defenseScene?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      defenseScene: 'DefenseScene',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
      defenseScene: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

