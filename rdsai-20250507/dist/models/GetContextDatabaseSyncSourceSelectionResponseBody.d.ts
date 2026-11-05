import * as $dara from '@darabonba/typescript';
export declare class GetContextDatabaseSyncSourceSelectionResponseBodyData extends $dara.Model {
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
     * The list of selected node identifiers.
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
     * The update time.
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
export declare class GetContextDatabaseSyncSourceSelectionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * Sample value
     */
    code?: string;
    /**
     * @remarks
     * The returned data.
     */
    data?: GetContextDatabaseSyncSourceSelectionResponseBodyData;
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
     * Sample value
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
     * Indicates whether the request is successful.
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
