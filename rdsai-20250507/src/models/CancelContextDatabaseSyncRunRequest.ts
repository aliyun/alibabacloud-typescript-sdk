// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelContextDatabaseSyncRunRequest extends $dara.Model {
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
   * The run ID, a system-generated UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  runId?: string;
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
      runId: 'RunId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      runId: 'string',
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

