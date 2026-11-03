// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextDatabaseSyncSourceSelectionShrinkRequest extends $dara.Model {
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
   * The list of selected node identifiers.
   * 
   * This parameter is required.
   * 
   * @example
   * ["doc:1234567890"]
   */
  selectedNodeKeysShrink?: string;
  /**
   * @remarks
   * The selection policy.
   * 
   * @example
   * subtree
   */
  selectionPolicy?: string;
  /**
   * @remarks
   * The data source ID, which is a system-generated UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  sourceId?: string;
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
      selectedNodeKeysShrink: 'SelectedNodeKeys',
      selectionPolicy: 'SelectionPolicy',
      sourceId: 'SourceId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      selectedNodeKeysShrink: 'string',
      selectionPolicy: 'string',
      sourceId: 'string',
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

