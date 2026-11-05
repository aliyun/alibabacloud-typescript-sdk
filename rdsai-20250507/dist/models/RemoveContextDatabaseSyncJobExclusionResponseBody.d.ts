import * as $dara from '@darabonba/typescript';
export declare class RemoveContextDatabaseSyncJobExclusionResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the data has changed.
     *
     * @example
     * true
     */
    changed?: boolean;
    /**
     * @remarks
     * The configuration version number.
     *
     * @example
     * 3
     */
    configVersion?: number;
    /**
     * @remarks
     * The document ID.
     *
     * @example
     * doc-as1llqmkol****
     */
    documentId?: string;
    /**
     * @remarks
     * Indicates whether the item is excluded.
     *
     * @example
     * true
     */
    excluded?: boolean;
    /**
     * @remarks
     * The job ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    jobId?: string;
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
export declare class RemoveContextDatabaseSyncJobExclusionResponseBody extends $dara.Model {
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
    data?: RemoveContextDatabaseSyncJobExclusionResponseBodyData;
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
