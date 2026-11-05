import * as $dara from '@darabonba/typescript';
export declare class CreateKBSyncLinkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The client identifier.
     *
     * @example
     * cli_xxxxxxbe8
     */
    clientId?: string;
    /**
     * @remarks
     * The creation time.
     *
     * The time follows the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-08-14T05:58:42Z
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
     * The source channel of the synchronization link. Valid values:
     * - FEISHU
     * - SHAREPOINT
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
     * pkbl-xxxxxx
     */
    linkId?: string;
    /**
     * @remarks
     * The name of the synchronization link.
     *
     * @example
     * testName
     */
    linkName?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 24A1990B-4F6E-482B-B8CB-75C612******
     */
    requestId?: string;
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
     * The synchronization interval, in minutes.
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
     * CREATING
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
