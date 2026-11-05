import * as $dara from '@darabonba/typescript';
export declare class GetContextDatabaseSyncDiscoveryTaskResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The time when the cancellation was requested.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    cancelRequestedAt?: string;
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
     * The number of containers.
     *
     * @example
     * 1000000000000000
     */
    containers?: number;
    /**
     * @remarks
     * The time when the task was created.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    createdAt?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * File size exceeds the limit
     */
    error?: string;
    /**
     * @remarks
     * The plug-in reference.
     *
     * @example
     * dingtalk@1.0.0
     */
    pluginRef?: string;
    /**
     * @remarks
     * The number of scanned items.
     *
     * @example
     * 1000000000000000
     */
    scanned?: number;
    /**
     * @remarks
     * The datasource config. The structure varies depending on the plug-in.
     *
     * @example
     * {"folderIds":["https://alidocs.dingtalk.com/i/p/p2N9kLmQxYz****"],"pageSize":50,"maxDepth":5}
     */
    sourceConfig?: string;
    /**
     * @remarks
     * The data source ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    sourceId?: string;
    /**
     * @remarks
     * The discovery task status. Valid values: queued, running, succeeded, cancelled, and failed.
     *
     * @example
     * running
     */
    state?: string;
    /**
     * @remarks
     * The discovery task ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    taskId?: string;
    /**
     * @remarks
     * The time when the task was last updated.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    updatedAt?: string;
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
export declare class GetContextDatabaseSyncDiscoveryTaskResponseBody extends $dara.Model {
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
    data?: GetContextDatabaseSyncDiscoveryTaskResponseBodyData;
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
     * The response message.
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
