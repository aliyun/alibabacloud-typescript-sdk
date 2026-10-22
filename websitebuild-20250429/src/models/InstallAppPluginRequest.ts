// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAppPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway plugin.
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  /**
   * @remarks
   * The locked version. If left empty, the latest version is used.
   * 
   * @example
   * 1.0.7
   */
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      pluginVersion: 'PluginVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      pluginVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

