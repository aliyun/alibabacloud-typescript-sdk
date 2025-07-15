// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPluginRequestTag extends $dara.Model {
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

export class ModifyPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the plug-in. The description can contain a maximum of 200 characters in length.
   * 
   * @example
   * modify plugin first
   */
  description?: string;
  /**
   * @remarks
   * The statement that is used to modify the plug-in definition.
   * 
   * @example
   * Plugin definition
   */
  pluginData?: string;
  /**
   * @remarks
   * The ID of the plug-in whose information you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * a96926e82f994915a8da40a119374537
   */
  pluginId?: string;
  /**
   * @remarks
   * The name of the plug-in. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (_). However, it cannot start with an underscore.
   * 
   * @example
   * modifyCors
   */
  pluginName?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   * 
   * @example
   * Key， Value
   */
  tag?: ModifyPluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      pluginData: 'PluginData',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      pluginData: 'string',
      pluginId: 'string',
      pluginName: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': ModifyPluginRequestTag },
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

