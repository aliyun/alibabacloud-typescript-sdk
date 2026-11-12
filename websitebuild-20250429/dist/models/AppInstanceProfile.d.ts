import * as $dara from '@darabonba/typescript';
export declare class AppInstanceProfileIndependentDeployment extends $dara.Model {
    /**
     * @remarks
     * Specifies whether retries are allowed after the independent server fails to start.
     */
    canRetry?: boolean;
    /**
     * @remarks
     * The code of the deployment area for the independent server.
     *
     * @example
     * HongKong
     */
    deployArea?: string;
    /**
     * @remarks
     * The DNS record type used when binding a domain name to an independent IP address.
     *
     * @example
     * A
     */
    dnsRecordType?: string;
    /**
     * @remarks
     * The eligibility status of the independent server. Valid values: UPGRADE_REQUIRED (an upgrade is required), AVAILABLE (the feature can be enabled), and UNAVAILABLE (the feature is currently unavailable).
     *
     * @example
     * AVAILABLE
     */
    eligibility?: string;
    /**
     * @remarks
     * The status of the independent server. Valid values: NOT_ENABLED (not enabled), ENABLING (enabling), ACTIVE (enabled), and FAILED (failed to enable).
     *
     * @example
     * ACTIVE
     */
    enableStatus?: string;
    /**
     * @remarks
     * The independent IP address assigned after the independent server is enabled.
     *
     * @example
     * 203.0.113.10
     */
    independentIp?: string;
    /**
     * @remarks
     * The unified display specification of the independent server, which does not represent the real-time resource usage of the container.
     *
     * @example
     * 2 vCPUs and 2 GB
     */
    serverSpec?: string;
    /**
     * @remarks
     * The ID of the task to enable the independent server.
     *
     * @example
     * 17
     */
    taskId?: number;
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
export declare class AppInstanceProfile extends $dara.Model {
    /**
     * @remarks
     * The application type code. For example, PC_WebSite indicates a PC website.
     *
     * @example
     * PC_WebSite
     */
    applicationType?: string;
    /**
     * @remarks
     * The display name of the application type.
     *
     * @example
     * PC website
     */
    applicationTypeText?: string;
    /**
     * @remarks
     * The business identifier of the application instance.
     *
     * @example
     * WS_SITE_1
     */
    bizId?: string;
    /**
     * @remarks
     * The audit status.
     *
     * @example
     * 1
     */
    caseAuditStatus?: string;
    /**
     * @remarks
     * The listing status.
     *
     * @example
     * online
     */
    caseShelfStatus?: string;
    /**
     * @remarks
     * The ID of the ChatBI BuildSchemaIndex asynchronous task.
     *
     * @example
     * task-1
     */
    chatbiTaskId?: string;
    /**
     * @remarks
     * The status of the ChatBI BuildSchemaIndex task. Valid values: running, finish, and failed.
     *
     * @example
     * finish
     */
    chatbiTaskStatus?: string;
    /**
     * @remarks
     * The commodity code of the order.
     *
     * @example
     * domain_website_public_cn
     */
    commodityCode?: string;
    /**
     * @remarks
     * The contact information or instructions for customer service.
     *
     * @example
     * support@example.com
     */
    customerService?: string;
    /**
     * @remarks
     * The code of the application deployment area.
     *
     * @example
     * HongKong
     */
    deployArea?: string;
    /**
     * @remarks
     * The ICP filing number of the bound custom domain name. Separate multiple ICP filing numbers with commas (,).
     *
     * @example
     * 京ICP备12345678号-1
     */
    icpbaNo?: string;
    /**
     * @remarks
     * The independent server information. This information is computed in real time by DescribeAppInstance and is not populated in list operations.
     */
    independentDeployment?: AppInstanceProfileIndependentDeployment;
    /**
     * @remarks
     * The associated Lingxiao instance ID.
     *
     * @example
     * lx-1
     */
    instanceId?: string;
    /**
     * @remarks
     * Specifies whether the current user is included in the canary release whitelist for the ChatBI feature.
     */
    openChatBi?: boolean;
    /**
     * @remarks
     * The time when the order was placed. The format is yyyy-MM-dd HH:mm:ss.
     *
     * @example
     * 2026-09-17 10:30:00
     */
    ordTime?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * order-1
     */
    orderId?: string;
    /**
     * @remarks
     * The time when the payment was made. The format is yyyy-MM-dd HH:mm:ss.
     *
     * @example
     * 2026-09-17 10:35:00
     */
    payTime?: string;
    /**
     * @remarks
     * The URL used to access the application preview page.
     *
     * @example
     * https://example.com/preview
     */
    previewUrl?: string;
    /**
     * @remarks
     * The configuration identifier of the SEO site.
     *
     * @example
     * seo-site-1
     */
    seoSite?: string;
    /**
     * @remarks
     * Specifies whether to enable the share rendering watermark. Valid values: 1 (enabled) and 0 (disabled). If not configured, this parameter is empty.
     *
     * @example
     * 1
     */
    shareRenderWatermark?: string;
    /**
     * @remarks
     * The site version code.
     *
     * @example
     * Max_Edition
     */
    siteVersion?: string;
    /**
     * @remarks
     * The display name of the site version, which includes the deployment area.
     *
     * @example
     * Ultimate Edition [Hong Kong]
     */
    siteVersionText?: string;
    /**
     * @remarks
     * The identifier of the creation or synchronization source.
     *
     * @example
     * MARKET_CLOUD_DREAM
     */
    source?: string;
    /**
     * @remarks
     * The ETag identifier of the current application template.
     *
     * @example
     * etag-1
     */
    templateEtag?: string;
    /**
     * @remarks
     * The ID of the template used by the current application.
     *
     * @example
     * tpl-1
     */
    templateId?: string;
    /**
     * @remarks
     * The upgrade status of the instance. Valid values: DOING (upgrading), SUCC (upgraded successfully), and FAIL (upgrade failed).
     *
     * @example
     * SUCC
     */
    upgradeStatus?: string;
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
