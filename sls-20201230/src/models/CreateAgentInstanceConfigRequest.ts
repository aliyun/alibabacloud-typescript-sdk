// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: string;
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
  grayConfigs?: string;
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
      attributes: 'string',
      config: 'string',
      configType: 'string',
      grayConfigs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

