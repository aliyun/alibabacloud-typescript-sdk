// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseSyncConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization method. Valid values: app, pasted-url, static-secret, and none.
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  authKind?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * sync-connection-20260923-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * R&D team DingTalk data source
   */
  displayName?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dingtalk
   */
  pluginId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      authKind: 'AuthKind',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      pluginId: 'PluginId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKind: 'string',
      clientToken: 'string',
      displayName: 'string',
      pluginId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

