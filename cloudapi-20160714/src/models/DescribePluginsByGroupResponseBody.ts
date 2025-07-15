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

export class DescribePluginsByGroupResponseBodyPlugins extends $dara.Model {
  pluginAttribute?: DescribePluginsByGroupResponseBodyPluginsPluginAttribute[];
  static names(): { [key: string]: string } {
    return {
      pluginAttribute: 'PluginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginAttribute: { 'type': 'array', 'itemType': DescribePluginsByGroupResponseBodyPluginsPluginAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.pluginAttribute)) {
      $dara.Model.validateArray(this.pluginAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination parameter: current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returns information about the plugins
   */
  plugins?: DescribePluginsByGroupResponseBodyPlugins;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5F5574BA-F22B-563D-841E-C817964F517F
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of results returned
   * 
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plugins: 'Plugins',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      plugins: DescribePluginsByGroupResponseBodyPlugins,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.plugins && typeof (this.plugins as any).validate === 'function') {
      (this.plugins as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

