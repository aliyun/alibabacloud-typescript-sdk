import * as $dara from '@darabonba/typescript';
export declare class UpdateContextDatabaseSyncSourceSelectionRequest extends $dara.Model {
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
    selectedNodeKeys?: string[];
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
