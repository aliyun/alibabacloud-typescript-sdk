// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentInstanceConfigGrayConfigs } from "./AgentInstanceConfigGrayConfigs";


export class CreateAgentInstanceConfigRequest extends $dara.Model {
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configType?: string;
  grayConfigs?: AgentInstanceConfigGrayConfigs[];
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      config: 'config',
      configType: 'configType',
      grayConfigs: 'grayConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      config: 'string',
      configType: 'string',
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

