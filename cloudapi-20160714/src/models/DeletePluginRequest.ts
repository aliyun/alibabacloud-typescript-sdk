// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeletePluginRequestTag } from "./DeletePluginRequestTag";


export class DeletePluginRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the plug-in to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a3f1a5279434f2ba74ccd91c295af9f
   */
  pluginId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   */
  tag?: DeletePluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DeletePluginRequestTag },
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

