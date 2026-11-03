// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyContextDatabaseSyncConnectionRequest extends $dara.Model {
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
   * The connection ID, which is a system-generated UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  connectionId?: string;
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
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionId: 'string',
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

