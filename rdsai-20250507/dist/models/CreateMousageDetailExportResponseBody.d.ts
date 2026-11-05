import * as $dara from '@darabonba/typescript';
export declare class CreateMOUsageDetailExportResponseBodyDataFilters extends $dara.Model {
    /**
     * @remarks
     * The API key to use.
     *
     * @example
     * sk-***
     */
    apiKey?: string;
    /**
     * @remarks
     * The inspection end time in the YYYY-MM-DDTHH:mm:ssZ format.
     *
     * @example
     * 2025-03-10T02:02:20Z
     */
    endTime?: string;
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rds_copilot**_public_cn-******
     */
    instanceId?: string;
    /**
     * @remarks
     * The model to call.
     *
     * @example
     * qwen-flash
     */
    model?: string;
    /**
     * @remarks
     * The inspection start time in the YYYY-MM-DDTHH:mm:ssZ format.
     *
     * @example
     * 2026-03-05T16:00:00Z
     */
    startTime?: string;
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
export declare class CreateMOUsageDetailExportResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The completion time.
     *
     * @example
     * 2026-03-15T21:18:45Z
     */
    completedAt?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2026-03-15T21:14:45Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The download URL.
     *
     * @example
     * http://***
     */
    downloadUrl?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * picture owner error
     */
    errorMessage?: string;
    /**
     * @remarks
     * The expiration time in ISO 8601 format.
     *
     * @example
     * 2026-02-07T21:14:45Z
     */
    expiresAt?: string;
    /**
     * @remarks
     * The file size in bytes.
     *
     * @example
     * 403
     */
    fileSize?: number;
    /**
     * @remarks
     * The query filter conditions.
     */
    filters?: CreateMOUsageDetailExportResponseBodyDataFilters;
    /**
     * @remarks
     * The target conversion format.
     *
     * @example
     * csv
     */
    format?: string;
    /**
     * @remarks
     * The OssKey passed when calling the operation. (This field is deprecated)
     *
     * @example
     * ddd6*****2a76
     */
    ossKey?: string;
    /**
     * @remarks
     * The total number of data rows.
     *
     * @example
     * 100
     */
    rowCount?: number;
    /**
     * @remarks
     * The module status.
     *
     * @example
     * pending / processing / completed / failed / expired
     */
    status?: string;
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
export declare class CreateMOUsageDetailExportResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: CreateMOUsageDetailExportResponseBodyData;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The request result.
     *
     * @example
     * true
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
