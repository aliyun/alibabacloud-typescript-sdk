// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentInstanceConfigGrayConfigs } from "./AgentInstanceConfigGrayConfigs";


export class UpdateAgentInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The attributes that specify the scope of the process-level configuration.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The default configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The configurations for the canary release environment.
   */
  grayConfigs?: AgentInstanceConfigGrayConfigs[];
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      config: 'config',
      grayConfigs: 'grayConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      config: 'string',
      grayConfigs: { 'type': 'array', 'itemType': AgentInstanceConfigGrayConfigs },
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.grayConfigs)) {
      $dara.Model.validateArray(this.grayConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

