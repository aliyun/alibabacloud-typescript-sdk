import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncRunsResponseBodyDataRunsSummary extends $dara.Model {
    /**
     * @remarks
     * The number of canceled items.
     *
     * @example
     * 0
     */
    cancelled?: number;
    /**
     * @remarks
     * The number of deferred items.
     *
     * @example
     * 0
     */
    deferred?: number;
    /**
     * @remarks
     * The number of failed items.
     *
     * @example
     * 0
     */
    failed?: number;
    /**
     * @remarks
     * The number of items with updated metadata.
     *
     * @example
     * 2
     */
    metadataUpdated?: number;
    /**
     * @remarks
     * The number of items being processed.
     *
     * @example
     * 1
     */
    processing?: number;
    /**
     * @remarks
     * The number of skipped items.
     *
     * @example
     * 1
     */
    skipped?: number;
    /**
     * @remarks
     * The number of unchanged items.
     *
     * @example
     * 3
     */
    unchanged?: number;
    /**
     * @remarks
     * The number of accepted uploads.
     *
     * @example
     * 12
     */
    uploadAccepted?: number;
    /**
     * @remarks
     * The number of uploaded items.
     *
     * @example
     * 12
     */
    uploaded?: number;
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
export declare class ListContextDatabaseSyncRunsResponseBodyDataRuns extends $dara.Model {
    /**
     * @remarks
     * The number of attempts.
     *
     * @example
     * 1
     */
    attempt?: number;
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
     * Specifies whether the run is a dry run.
     *
     * @example
     * true
     */
    dryRun?: boolean;
    /**
     * @remarks
     * The end time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    finishedAt?: string;
    /**
     * @remarks
     * The configuration version number of the import job.
     *
     * @example
     * 3
     */
    jobConfigVersion?: number;
    /**
     * @remarks
     * The job ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    jobId?: string;
    /**
     * @remarks
     * The name of the import job.
     *
     * @example
     * R&D team document import
     */
    jobName?: string;
    /**
     * @remarks
     * The ID of the destination knowledge base.
     *
     * @example
     * kb-as1llqmkol****
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The latest error message.
     *
     * @example
     * Data source authorization has expired
     */
    lastError?: string;
    /**
     * @remarks
     * The plugin reference.
     *
     * @example
     * dingtalk@1.0.0
     */
    pluginRef?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1B2C3D4E-5F6A-4B7C-8D9E-0F1A2B3C4D5E
     */
    requestId?: string;
    /**
     * @remarks
     * The run ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    runId?: string;
    /**
     * @remarks
     * The scheduled run time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    scheduledAt?: string;
    /**
     * @remarks
     * The start time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    startedAt?: string;
    /**
     * @remarks
     * The run status. Valid values: queued, running, cancelling, succeeded, partial, failed, cancelled, skipped, and dead.
     *
     * @example
     * running
     */
    status?: string;
    /**
     * @remarks
     * The summary of the run results.
     *
     * @example
     * {"uploaded":12,"unchanged":3,"skipped":1,"deferred":0,"failed":0,"processing":0}
     */
    summary?: ListContextDatabaseSyncRunsResponseBodyDataRunsSummary;
    /**
     * @remarks
     * The trigger method of the run. Valid values: manual, schedule, and retry.
     *
     * @example
     * manual
     */
    trigger?: string;
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
export declare class ListContextDatabaseSyncRunsResponseBodyData extends $dara.Model {
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
     * The list of runs.
     *
     * @example
     * [{"RunId":"run-as1llqmkol****", "JobId":"job-as1llqmkol****", "JobName":"R&D team document import", "KnowledgeBaseId":"kb-as1llqmkol****"}]
     */
    runs?: ListContextDatabaseSyncRunsResponseBodyDataRuns[];
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
export declare class ListContextDatabaseSyncRunsResponseBody extends $dara.Model {
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
    data?: ListContextDatabaseSyncRunsResponseBodyData;
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
