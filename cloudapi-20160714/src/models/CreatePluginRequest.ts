// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * N can be an integer from 1 to 20.``
   * 
   * This parameter is required.
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
   * This parameter is required.
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

export class CreatePluginRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the plug-in. The description can contain a maximum of 200 characters in length.
   * 
   * @example
   * createPlugin
   */
  description?: string;
  /**
   * @remarks
   * The plug-in definition. Supported formats: JSON and YAML.
   * 
   * This parameter is required.
   * 
   * @example
   * Plugin definition
   */
  pluginData?: string;
  /**
   * @remarks
   * The name of the plug-in. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (_). However, it cannot start with an underscore.
   * 
   * This parameter is required.
   * 
   * @example
   * NewCors
   */
  pluginName?: string;
  /**
   * @remarks
   * The type of the plug-in. Valid values:
   * 
   * *   **ipControl: IP address-based access control**
   * *   **trafficControl: throttling**
   * *   **backendSignature: backend signature**
   * *   **jwtAuth** :JWT (OpenId Connect) authentication
   * *   **cors** :cross-origin resource sharing (CORS)
   * *   **caching**
   * 
   * This parameter is required.
   * 
   * @example
   * cors
   */
  pluginType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   * 
   * @example
   * Key， Value
   */
  tag?: CreatePluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      pluginData: 'PluginData',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      pluginData: 'string',
      pluginName: 'string',
      pluginType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreatePluginRequestTag },
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

