// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * A list of plugin IDs. If omitted, all plugins are returned.
   */
  pluginList?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      pluginList: 'PluginList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      pluginList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.pluginList)) {
      $dara.Model.validateArray(this.pluginList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

