// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginsResponseBodyPluginsPluginAttributeTags } from "./DescribePluginsResponseBodyPluginsPluginAttributeTags";


export class DescribePluginsResponseBodyPluginsPluginAttribute extends $dara.Model {
  /**
   * @remarks
   * The creation time (UTC) of the plug-in.
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
   * Throttling
   */
  description?: string;
  /**
   * @remarks
   * The last modification time (UTC) of the plug-in.
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
   * {"unit":"MINUTE","apiDefault":20}
   */
  pluginData?: string;
  /**
   * @remarks
   * The ID of the plug-in.
   * 
   * @example
   * 9a3f1a5279434f2ba74ccd91c295af9f
   */
  pluginId?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * firstPlugin
   */
  pluginName?: string;
  /**
   * @remarks
   * The type of the plug-in.
   * 
   * @example
   * trafficControl
   */
  pluginType?: string;
  /**
   * @remarks
   * The region where the plug-in is located.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribePluginsResponseBodyPluginsPluginAttributeTags;
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
      tags: 'Tags',
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
      tags: DescribePluginsResponseBodyPluginsPluginAttributeTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

