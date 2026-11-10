import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncJobsResponseBodyDataJobsFilters extends $dara.Model {
    /**
     * @remarks
     * The list of exclusion rules.
     *
     * @example
     * ["/Archived documents"]
     */
    exclude?: string[];
    /**
     * @remarks
     * The list of excluded document IDs.
     *
     * @example
     * ["doc-as1llqmkol****"]
     */
    excludedDocumentIds?: string[];
    /**
     * @remarks
     * The list of inclusion rules.
     *
     * @example
     * ["/R&D documents"]
     */
    include?: string[];
    /**
     * @remarks
     * The size limit in bytes.
     *
     * @example
     * 2147483648
     */
    sizeLimit?: number;
    /**
     * @remarks
     * The list of allowed document types.
     *
     * @example
     * ["docx", "pdf"]
     */
    typeAllowlist?: string[];
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
export declare class ListContextDatabaseSyncJobsResponseBodyDataJobs extends $dara.Model {
    /**
     * @remarks
     * The auto-pause reason.
     *
     * @example
     * Three consecutive run failures
     */
    autoPauseReason?: string;
    /**
     * @remarks
     * Indicates whether the job is automatically paused.
     *
     * @example
     * true
     */
    autoPaused?: boolean;
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
     * Indicates whether the job is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The filter conditions.
     *
     * @example
     * {"include":["/R&D documents/**"],"exclude":["/Archived documents/**"],"excludedDocumentIds":[],"sizeLimit":2147483648,"typeAllowlist":["docx","pdf"]}
     */
    filters?: ListContextDatabaseSyncJobsResponseBodyDataJobsFilters;
    /**
     * @remarks
     * The job ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    id?: string;
    /**
     * @remarks
     * The destination knowledge base ID.
     *
     * @example
     * kb-as1llqmkol****
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * R&D team document import
     */
    name?: string;
    /**
     * @remarks
     * The next run time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    nextRunAt?: string;
    /**
     * @remarks
     * The schedule type. Valid values: interval and daily-times.
     *
     * @example
     * daily-times
     */
    scheduleType?: string;
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
     * The destination ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    targetId?: string;
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
export declare class ListContextDatabaseSyncJobsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of import jobs.
     *
     * @example
     * [{"Id":"job-as1llqmkol****", "SourceId":"src-as1llqmkol****", "TargetId":"tg-as1llqmkol****", "KnowledgeBaseId":"kb-as1llqmkol****"}]
     */
    jobs?: ListContextDatabaseSyncJobsResponseBodyDataJobs[];
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
export declare class ListContextDatabaseSyncJobsResponseBody extends $dara.Model {
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
    data?: ListContextDatabaseSyncJobsResponseBodyData;
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
