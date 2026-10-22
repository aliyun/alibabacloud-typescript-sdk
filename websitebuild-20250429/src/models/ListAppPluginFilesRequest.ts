// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway plugin.
   * 
   * @example
   * aliplayer-react
   */
  pluginId?: string;
  /**
   * @remarks
   * The version number. If you do not specify this parameter, the currently active version is used.
   * 
   * @example
   * 1.1.3
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

