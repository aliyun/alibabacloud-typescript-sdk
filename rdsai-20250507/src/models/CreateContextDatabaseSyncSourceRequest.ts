// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseSyncSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token.
   * 
   * @example
   * sync-connection-20260923-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The connection ID, a system-generated UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  connectionId?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * R&D team document scope
   */
  name?: string;
  /**
   * @remarks
   * The datasource config. The structure varies depending on the plug-in.
   * 
   * This parameter is required.
   * 
   * @example
   * {"folderIds":["https://alidocs.dingtalk.com/i/p/p2N9kLmQxYz****"],"pageSize":50,"maxDepth":5}
   */
  sourceConfig?: { [key: string]: any };
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
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      name: 'Name',
      sourceConfig: 'SourceConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionId: 'string',
      name: 'string',
      sourceConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.sourceConfig) {
      $dara.Model.validateMap(this.sourceConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

