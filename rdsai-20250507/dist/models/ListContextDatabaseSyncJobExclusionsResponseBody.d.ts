import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncJobExclusionsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of document IDs.
     *
     * @example
     * ["doc-as1llqmkol****"]
     */
    documentIds?: string[];
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
export declare class ListContextDatabaseSyncJobExclusionsResponseBody extends $dara.Model {
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
    data?: ListContextDatabaseSyncJobExclusionsResponseBodyData;
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
