// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginsByApiResponseBodyPluginsPluginAttribute extends $dara.Model {
  /**
   * @remarks
   * The time when the plug-in was created. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-11T09:29:58Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * Traffic throttling
   */
  description?: string;
  /**
   * @remarks
   * The time when the plug-in was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-11T09:29:58Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The definition statement of the plug-in.
   * 
   * @example
   * {\\"unit\\":\\"MINUTE\\",\\"apiDefault\\":20}
   */
  pluginData?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * 9a3f1a5279434f2ba74ccd91c295af9f
   */
  pluginId?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * firstPlugin
   */
  pluginName?: string;
  /**
   * @remarks
   * The plug-in type.
   * 
   * @example
   * trafficControl
   */
  pluginType?: string;
  /**
   * @remarks
   * The region where the plug-in resides.
   * 
   * @example
   * cn-qingdao
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

