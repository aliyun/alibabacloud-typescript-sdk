import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncJobsResponseBodyDataJobsFilters extends $dara.Model {
    /**
     * @remarks
     * The list of exclusion rules.
     *
     * @example
     * ["/Archived Documents"]
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
     * ["/R&D Documents"]
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
     * The reason for automatic pause.
     *
     * @example
     * Failed 3 consecutive times
     */
    autoPauseReason?: string;
    /**
     * @remarks
     * Indicates whether the task is automatically paused.
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
     * Indicates whether the task is enabled.
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
     * {"include":["/研发文档/**"],"exclude":["/归档文档/**"],"excludedDocumentIds":[],"sizeLimit":2147483648,"typeAllowlist":["docx","pdf"]}
     */
    filters?: ListContextDatabaseSyncJobsResponseBodyDataJobsFilters;
    /**
     * @remarks
     * The task ID, which is a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    id?: string;
    /**
     * @remarks
     * The ID of the target knowledge base.
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
     * R&D Team Document Import
     */
    name?: string;
    /**
     * @remarks
     * The time of the next run.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    nextRunAt?: string;
    /**
     * @remarks
     * The scheduling type. Valid values: interval, daily-times.
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
     * The target ID, which is a system-generated UUID.
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
     * The list of import tasks.
     *
     * @example
     * [{"Id":"job-as1llqmkol****", "SourceId":"src-as1llqmkol****", "TargetId":"tg-as1llqmkol****", "KnowledgeBaseId":"kb-as1llqmkol****"}]
     */
    jobs?: ListContextDatabaseSyncJobsResponseBodyDataJobs[];
    /**
     * @remarks
     * The page number. The value starts from 1.
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
     * The response message.
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
