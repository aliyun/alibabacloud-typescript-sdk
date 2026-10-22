// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway plugin.
   * 
   * @example
   * aliplayer-react
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

