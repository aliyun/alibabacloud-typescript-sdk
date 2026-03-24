// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item that you want to query. For more information, see the **ConfigKey** parameter in [ModifyDefenseSceneConfig](https://help.aliyun.com/document_detail/2968435.html).
   * 
   * This parameter is required.
   * 
   * @example
   * autoEnableStatus
   */
  configKey?: string;
  /**
   * @remarks
   * The defense scenario whose configuration you want to query. For more information, see the **DefenseScene** parameter in [ModifyDefenseSceneConfig](https://help.aliyun.com/document_detail/2968435.html).
   * 
   * This parameter is required.
   * 
   * @example
   * apisec
   */
  defenseScene?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of your WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqtm005
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      defenseScene: 'DefenseScene',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
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

