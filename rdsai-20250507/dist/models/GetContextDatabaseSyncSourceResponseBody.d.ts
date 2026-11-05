import * as $dara from '@darabonba/typescript';
export declare class GetContextDatabaseSyncSourceResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The confirmation time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    confirmedAt?: string;
    /**
     * @remarks
     * The connection ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    connectionId?: string;
    /**
     * @remarks
     * The data source ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    id?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * R&D team document scope
     */
    name?: string;
    /**
     * @remarks
     * The list of selected node keys.
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
     * The datasource config, which varies by plug-in.
     *
     * @example
     * {"folderIds":["https://alidocs.dingtalk.com/i/p/p2N9kLmQxYz****"],"pageSize":50,"maxDepth":5}
     */
    sourceConfig?: string;
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
export declare class GetContextDatabaseSyncSourceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * Example value
     */
    code?: string;
    /**
     * @remarks
     * The returned data.
     */
    data?: GetContextDatabaseSyncSourceResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 1
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message.
     *
     * @example
     * Example value
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * id-001
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     */
    success?: boolean;
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
