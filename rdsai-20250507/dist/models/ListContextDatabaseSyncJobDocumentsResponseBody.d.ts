import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncJobDocumentsResponseBodyDataDocuments extends $dara.Model {
    /**
     * @remarks
     * The content hash.
     *
     * @example
     * sha256:4b3b7b2e5f6a1c9d8e0f1234567890abcdef1234567890abcdef1234567890ab
     */
    contentHash?: string;
    /**
     * @remarks
     * The ContextDB document ID.
     *
     * @example
     * cd-as1llqmkol****
     */
    ctxdbDocumentId?: string;
    /**
     * @remarks
     * The source document ID.
     *
     * @example
     * doc-1234567890
     */
    providerDocumentId?: string;
    /**
     * @remarks
     * The retirement time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    retiredAt?: string;
    /**
     * @remarks
     * The source update time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    sourceUpdateTime?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * completed
     */
    status?: string;
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
export declare class ListContextDatabaseSyncJobDocumentsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of documents.
     *
     * @example
     * [{"ProviderDocumentId":"doc-1234567890", "Status":"completed", "ContentHash":"sha256:4b3b7b2e5f6a1c9d8e0f1234567890abcdef1234567890abcdef1234567890ab", "SourceUpdateTime":"2026-09-23T10:00:00+08:00"}]
     */
    documents?: ListContextDatabaseSyncJobDocumentsResponseBodyDataDocuments[];
    /**
     * @remarks
     * The page number, starting from 1.
     *
     * @example
     * 1
     */
    page?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 100
     */
    total?: number;
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
export declare class ListContextDatabaseSyncJobDocumentsResponseBody extends $dara.Model {
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
    data?: ListContextDatabaseSyncJobDocumentsResponseBodyData;
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
