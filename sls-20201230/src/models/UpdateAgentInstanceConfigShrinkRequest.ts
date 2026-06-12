// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentInstanceConfigGrayConfigs } from "./AgentInstanceConfigGrayConfigs";


export class UpdateAgentInstanceConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The attributes that specify the scope of the process-level configuration.
   */
  attributesShrink?: string;
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
      attributesShrink: 'attributes',
      config: 'config',
      grayConfigs: 'grayConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributesShrink: 'string',
      config: 'string',
      grayConfigs: { 'type': 'array', 'itemType': AgentInstanceConfigGrayConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.grayConfigs)) {
      $dara.Model.validateArray(this.grayConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

