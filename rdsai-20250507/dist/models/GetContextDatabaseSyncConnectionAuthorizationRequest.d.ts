import * as $dara from '@darabonba/typescript';
export declare class GetContextDatabaseSyncConnectionAuthorizationRequest extends $dara.Model {
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
