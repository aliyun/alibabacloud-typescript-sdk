// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginsResponseBodyPluginsPluginAttributeTagsTagInfo extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testkey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * tetstvalue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsResponseBodyPluginsPluginAttributeTags extends $dara.Model {
  tagInfo?: DescribePluginsResponseBodyPluginsPluginAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribePluginsResponseBodyPluginsPluginAttributeTagsTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePluginsResponseBodyPlugins extends $dara.Model {
  pluginAttribute?: DescribePluginsResponseBodyPluginsPluginAttribute[];
  static names(): { [key: string]: string } {
    return {
      pluginAttribute: 'PluginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginAttribute: { 'type': 'array', 'itemType': DescribePluginsResponseBodyPluginsPluginAttribute },
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

export class DescribePluginsResponseBody extends $dara.Model {
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
   * The returned information about the plug-in. It is an array consisting of PluginAttribute data.
   */
  plugins?: DescribePluginsResponseBodyPlugins;
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
      plugins: DescribePluginsResponseBodyPlugins,
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

