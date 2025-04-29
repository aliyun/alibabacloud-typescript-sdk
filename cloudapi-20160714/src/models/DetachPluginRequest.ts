// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachPluginRequest extends $dara.Model {
  /**
   * @example
   * 19a2846d8e8541c788c6be740035eb68
   */
  apiId?: string;
  /**
   * @example
   * 93b87279e54c4c0baeb7113cdf9c67f5
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05df2b52a3644a3a8b1935ab8ab59e9d
   */
  pluginId?: string;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      pluginId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

