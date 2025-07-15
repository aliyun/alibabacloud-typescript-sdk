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

export class DescribePluginsByApiResponseBodyPlugins extends $dara.Model {
  pluginAttribute?: DescribePluginsByApiResponseBodyPluginsPluginAttribute[];
  static names(): { [key: string]: string } {
    return {
      pluginAttribute: 'PluginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginAttribute: { 'type': 'array', 'itemType': DescribePluginsByApiResponseBodyPluginsPluginAttribute },
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

export class DescribePluginsByApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The plug-in information. The information is an array that consists of PluginAttribute data.
   */
  plugins?: DescribePluginsByApiResponseBodyPlugins;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46373DC4-19F1-4DC8-8C31-1107289BB5E0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
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
      plugins: DescribePluginsByApiResponseBodyPlugins,
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

