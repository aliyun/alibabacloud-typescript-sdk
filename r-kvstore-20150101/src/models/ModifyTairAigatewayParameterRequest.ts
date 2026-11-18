// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTairAIGatewayParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tg-2zeb1ce76fee****
   */
  instanceId?: string;
  /**
   * @remarks
   * The JSON-formatted text of parameters and their corresponding values. Format: {"Parameter1":"Value1","Parameter2":"Value2",...}. The specified values overwrite the existing values.
   * > The parameters available for different versions are subject to the console.
   * 
   * This parameter is required.
   * 
   * @example
   * {"access-db-id":"1","cu-limit":"10"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
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

