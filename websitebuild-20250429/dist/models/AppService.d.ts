import * as $dara from '@darabonba/typescript';
import { TreeNode } from "./TreeNode";
import { AppServiceProfile } from "./AppServiceProfile";
export declare class AppService extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WS20251211153330000001
     */
    bizId?: string;
    /**
     * @remarks
     * The creation time in ISO 8601 format, in the UTC time zone (Z).
     *
     * @example
     * 2025-07-30T02:08:40Z
     */
    createTime?: string;
    /**
     * @remarks
     * The deletion flag.
     *
     * @example
     * 0
     */
    deleted?: number;
    /**
     * @remarks
     * The end time in ISO 8601 format, in the UTC time zone (Z).
     *
     * @example
     * 2025-07-18T02:23:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * esp bizId
     *
     * @example
     * p20202933455
     */
    espBizId?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * Tue Sep 09 10:27:49 CST 2025
     */
    gmtModified?: string;
    /**
     * @remarks
     * The associated business ID.
     *
     * @example
     * WS20250915163734000001
     */
    instanceBizId?: string;
    /**
     * @remarks
     * The service name.
     *
     * @example
     * Website design service
     */
    name?: string;
    /**
     * @remarks
     * The list of flow nodes.
     */
    nodeList?: TreeNode[];
    /**
     * @remarks
     * The application service configuration information.
     */
    profile?: AppServiceProfile;
    /**
     * @remarks
     * The service type.
     *
     * @example
     * WEBSITE_DESIGN
     */
    serviceType?: string;
    /**
     * @remarks
     * The service type description.
     */
    serviceTypeText?: string;
    /**
     * @remarks
     * The application identifier.
     *
     * @example
     * inst-001
     */
    slug?: string;
    /**
     * @remarks
     * The start time, specified as a UNIX timestamp in milliseconds.
     *
     * @example
     * 1754447102000
     */
    startTime?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * success
     */
    status?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 123241414
     */
    userId?: string;
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
