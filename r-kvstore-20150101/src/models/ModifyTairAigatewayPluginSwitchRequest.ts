// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTairAIGatewayPluginSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The Tair AI gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tg-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The plug-in switch parameters for the Tair AI gateway instance. Format: {"PluginName1":"true/false","PluginName2":"true/false",...}. The specified values overwrite the existing values.
   * 
   * @example
   * {\\"lang_cache\\":\\"false\\"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      parameters: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

