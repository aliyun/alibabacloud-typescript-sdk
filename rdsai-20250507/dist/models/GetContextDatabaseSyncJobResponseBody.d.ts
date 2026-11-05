import * as $dara from '@darabonba/typescript';
export declare class GetContextDatabaseSyncJobResponseBodyDataFilters extends $dara.Model {
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
export declare class GetContextDatabaseSyncJobResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The reason for the automatic pause.
     *
     * @example
     * 3 consecutive execution failures
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
    filters?: GetContextDatabaseSyncJobResponseBodyDataFilters;
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
     * The target knowledge base ID.
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
     * The next execution time.
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
export declare class GetContextDatabaseSyncJobResponseBody extends $dara.Model {
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
    data?: GetContextDatabaseSyncJobResponseBodyData;
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
