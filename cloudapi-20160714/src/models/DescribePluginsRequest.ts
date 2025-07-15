// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * N can be an integer from 1 to 20.``
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * N can be an integer from 1 to 20.``
   * 
   * @example
   * \\" \\"
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

export class DescribePluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the plug-in.
   * 
   * @example
   * a96926e82f994915a8da40a119374537
   */
  pluginId?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * testPlugin
   */
  pluginName?: string;
  /**
   * @remarks
   * The business type of the plug-in.
   * 
   * @example
   * cors
   */
  pluginType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the lifecycle rule. You can specify multiple tags.
   * 
   * @example
   * Key， Value
   */
  tag?: DescribePluginsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pluginId: 'string',
      pluginName: 'string',
      pluginType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribePluginsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

