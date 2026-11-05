import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncRunItemsResponseBodyDataItems extends $dara.Model {
    /**
     * @remarks
     * The document shard index.
     *
     * @example
     * 0
     */
    artifactIndex?: number;
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
     * The fine-grained execution status of the current synchronization item, which indicates the processing result of a single document in the current run. Common valid values include uploaded, uploaded-pending-review, upload-accepted, upload-busy, metadata-updating, metadata-updated, migrated, failed, source-failed, replace, warning, deferred, resume, skip, skipped, unsupported, and cancelled.
     *
     * @example
     * uploaded
     */
    decision?: string;
    /**
     * @remarks
     * The aggregated display status of the current synchronization item. Known mappings include success, failure, processing, and skipped. Unknown Decision values are passed through as-is.
     *
     * @example
     * success
     */
    decisionCategory?: string;
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
     * The processing reason or failure reason.
     *
     * @example
     * The data source authorization has expired
     */
    reason?: string;
    /**
     * @remarks
     * The size in bytes.
     *
     * @example
     * 1048576
     */
    sizeBytes?: number;
    /**
     * @remarks
     * The source path.
     *
     * @example
     * /Development Documents/Project Plan
     */
    sourcePath?: string;
    /**
     * @remarks
     * The source record ID.
     *
     * @example
     * sr-as1llqmkol****
     */
    sourceRecordId?: string;
    /**
     * @remarks
     * The title.
     *
     * @example
     * Project Plan
     */
    title?: string;
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
export declare class ListContextDatabaseSyncRunItemsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The data list.
     *
     * @example
     * [{"SourceRecordId":"sr-as1llqmkol****", "ArtifactIndex":0, "ProviderDocumentId":"doc-1234567890", "Title":"Project Plan"}]
     */
    items?: ListContextDatabaseSyncRunItemsResponseBodyDataItems[];
    /**
     * @remarks
     * The page number. Pages start from 1.
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
export declare class ListContextDatabaseSyncRunItemsResponseBody extends $dara.Model {
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
    data?: ListContextDatabaseSyncRunItemsResponseBodyData;
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
     * Indicates whether the request succeeded.
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
