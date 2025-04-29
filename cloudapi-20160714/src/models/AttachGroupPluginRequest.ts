// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachGroupPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 08ae4aa0f95e4321849ee57f4e0b3077
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the plug-in to be bound.
   * 
   * This parameter is required.
   * 
   * @example
   * 05df2b52a3644a3a8b1935ab8ab59e9d
   */
  pluginId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The environment in which the API is requested. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the pre-release environment
   * *   **TEST**: the test environment
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

