// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentInstanceConfigRequest extends $dara.Model {
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
  grayConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      config: 'config',
      grayConfigs: 'grayConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      config: 'string',
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

