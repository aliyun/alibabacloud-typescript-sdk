// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginsByGroupResponseBodyPluginsPluginAttribute extends $dara.Model {
  /**
   * @remarks
   * Creation time, in GMT
   * 
   * @example
   * 2024-12-20T02:05:57Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Plugin description
   * 
   * @example
   * traffic controll
   */
  description?: string;
  /**
   * @remarks
   * Last modified time, in GMT
   * 
   * @example
   * 2022-03-15T02:30:18Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Plugin definition statement
   * 
   * @example
   * {\\"unit\\":\\"MINUTE\\",\\"apiDefault\\":20}
   */
  pluginData?: string;
  /**
   * @remarks
   * Plugin ID
   * 
   * @example
   * 5e204eeb4aa94c919a49f471ad3fc716
   */
  pluginId?: string;
  /**
   * @remarks
   * Plugin name
   * 
   * @example
   * firstPlugin
   */
  pluginName?: string;
  /**
   * @remarks
   * Plugin type
   * 
   * @example
   * trafficControl
   */
  pluginType?: string;
  /**
   * @remarks
   * 插件所在Region
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      pluginData: 'PluginData',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      pluginData: 'string',
      pluginId: 'string',
      pluginName: 'string',
      pluginType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

