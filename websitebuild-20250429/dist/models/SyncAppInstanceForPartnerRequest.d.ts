import * as $dara from '@darabonba/typescript';
export declare class SyncAppInstanceForPartnerRequestAppInstanceProfile extends $dara.Model {
    /**
     * @remarks
     * The deployment region.
     *
     * @example
     * ChineseMainland
     */
    deployArea?: string;
    /**
     * @remarks
     * The Lingxiao instance ID.
     *
     * @example
     * 12313213
     */
    lxInstanceId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 222217928591
     */
    orderId?: string;
    /**
     * @remarks
     * The version.
     *
     * @example
     * Basic_Edition
     */
    siteVersion?: string;
    /**
     * @remarks
     * The template identifier.
     *
     * @example
     * DC4D30B7BADDAFE9928A6C36416A2A4C
     */
    templateEtag?: string;
    /**
     * @remarks
     * The model template ID.
     *
     * @example
     * ST20211231160247sYG4
     */
    templateId?: string;
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
export declare class SyncAppInstanceForPartnerRequestAppInstance extends $dara.Model {
    /**
     * @remarks
     * The application type. Set this parameter to WEBSITE.
     *
     * @example
     * WEBSITE
     */
    appType?: string;
    /**
     * @remarks
     * The website business ID.
     *
     * @example
     * WD20250711094503000001
     */
    bizId?: string;
    /**
     * @remarks
     * Indicates whether the instance is logically deleted.
     *
     * @example
     * fase
     */
    deleted?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * alliveout.xntv.tv
     */
    domain?: string;
    /**
     * @remarks
     * The end time of the event. The value is a UNIX timestamp.
     *
     * @example
     * 2024-08-23T02:14:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The deletion time.
     *
     * @example
     * 2025-01-01 00:00:00
     */
    gmtDelete?: string;
    /**
     * @remarks
     * The timestamp when the vulnerability was published. Unit: milliseconds.
     *
     * @example
     * 2025-01-01 00:00:00
     */
    gmtPublish?: string;
    /**
     * @remarks
     * The URL of the application icon.
     *
     * @example
     * icon/WS20250626112715000001/thumbnail.jpg
     */
    iconUrl?: string;
    /**
     * @remarks
     * The website name.
     *
     * @example
     * AI Website Builder
     */
    name?: string;
    /**
     * @remarks
     * The website configuration information.
     *
     * @example
     * Website configuration information
     */
    profile?: SyncAppInstanceForPartnerRequestAppInstanceProfile;
    /**
     * @remarks
     * siteId
     *
     * @example
     * xxxx.scd.wezhan.cn
     */
    siteHost?: string;
    /**
     * @remarks
     * The website SiteID.
     *
     * @example
     * 31104757
     */
    slug?: string;
    /**
     * @remarks
     * The start time of the query. If you do not specify the start time or end time, all historical deployment records of the instance are queried. Specify the time in the ISO 8601 standard in the UTC (Z) time zone.
     *
     * @example
     * 2025-07-15T16:00:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The running status of the instance. Valid values:
     *
     * - NotRun: Not running.
     * - Running: Running.
     * - WaitTime: Waiting for the trigger time.
     * - CheckingCondition: Checking branch conditions.
     * - WaitResource: Waiting for resources.
     * - Failure: Execution failed.
     * - Success: Execution succeeded.
     * - Checking: Submitted for data quality check.
     *
     * @example
     * {\\"Phase\\": \\"Running\\", \\"SlotNum\\": 1, \\"UsedCapacity\\": \\"500.0Gi\\"}
     */
    status?: string;
    /**
     * @remarks
     * The URL of the thumbnail.
     *
     * @example
     * thumbnails/WS20250626112715000001/thumbnail.jpg
     */
    thumbnailUrl?: string;
    /**
     * @remarks
     * 123123123131232
     *
     * @example
     * 12313213131
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
export declare class SyncAppInstanceForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The website instance object data.
     */
    appInstance?: SyncAppInstanceForPartnerRequestAppInstance;
    /**
     * @remarks
     * The type of the system event. Valid values: CREATE, UPDATE, and COMPLETE.
     *
     * @example
     * CREATE
     */
    eventType?: string;
    /**
     * @remarks
     * The employee ID of the operator.
     *
     * @example
     * system
     */
    operator?: string;
    /**
     * @remarks
     * The source business ID.
     *
     * @example
     * 31104757
     */
    sourceBizId?: string;
    /**
     * @remarks
     * The source. Set this parameter to MARKET_CLOUD_DREAM.
     *
     * @example
     * MARKET_CLOUD_DREAM
     */
    sourceType?: string;
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
