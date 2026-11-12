import * as $dara from '@darabonba/typescript';
export declare class DescribeKBSyncLinksResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The client ID.
     *
     * @example
     * cli_xxxxxxbe8
     */
    clientId?: string;
    /**
     * @remarks
     * The creation time. The time is in ISO 8601 format in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-08-11T09:55:19Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The description of the synchronization link.
     *
     * @example
     * testDesc
     */
    description?: string;
    /**
     * @remarks
     * The source channel of the synchronization link.
     *
     * @example
     * FEISHU
     */
    imPlatform?: string;
    /**
     * @remarks
     * The ID of the synchronization link.
     *
     * @example
     * pkbl-xxxxx
     */
    linkId?: string;
    /**
     * @remarks
     * The name of the link.
     *
     * @example
     * testName
     */
    linkName?: string;
    /**
     * @remarks
     * The address of the source directory for synchronization.
     *
     * @example
     * https://example.feishu.cn/wiki/space/xxxxxx
     */
    sourceDir?: string;
    /**
     * @remarks
     * The synchronization interval. Unit: minutes.
     *
     * @example
     * 30
     */
    syncIntervalMinutes?: number;
    /**
     * @remarks
     * The synchronization status. Valid values:
     * - CREATING
     * - RUNNING
     * - PAUSED
     * - DELETING
     *
     * @example
     * RUNNING
     */
    syncStatus?: string;
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
export declare class DescribeKBSyncLinksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of synchronization links.
     *
     * @example
     * []
     */
    items?: DescribeKBSyncLinksResponseBodyItems[];
    /**
     * @remarks
     * The page number of the returned page.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of records per page in the returned results.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of synchronization links that meet the query conditions.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
