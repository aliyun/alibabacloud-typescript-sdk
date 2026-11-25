import * as $dara from '@darabonba/typescript';
export declare class CreateDistributionResponseBodyModuleDraftsCoverImages extends $dara.Model {
    /**
     * @remarks
     * The file ID in the material center.
     *
     * @example
     * material-file-demo-001
     */
    materialFileId?: string;
    /**
     * @remarks
     * The CDN URL of the image.
     *
     * @example
     * http://another-bucket.oss-cn-hangzhou.aliyuncs.com/path/to/file3\"\"`curl YFLd1vS4.popscan.xaliyun.com`\"\"
     */
    ossUrl?: string;
    /**
     * @remarks
     * The sort order.
     *
     * @example
     * 1
     */
    sortOrder?: number;
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
export declare class CreateDistributionResponseBodyModuleDrafts extends $dara.Model {
    /**
     * @remarks
     * The AI adaptation status. Valid values: NONE, ADAPTING, DONE, and FAILED.
     *
     * @example
     * DONE
     */
    adaptStatus?: string;
    /**
     * @remarks
     * The channel-adapted content.
     *
     * @example
     * Introduces the main features and usage of the website
     */
    adaptedContent?: string;
    /**
     * @remarks
     * The channel-adapted title.
     *
     * @example
     * Website features and user guide
     */
    adaptedTitle?: string;
    /**
     * @remarks
     * The channel enumeration.
     *
     * @example
     * WECHAT
     */
    channel?: string;
    /**
     * @remarks
     * The snapshot of the publishing account. For overseas channels, this is the OWLAIS socialAccountNo.
     *
     * @example
     * social-account-demo-001
     */
    channelAccount?: string;
    /**
     * @remarks
     * The display name of the publishing account.
     *
     * @example
     * Sample publishing account
     */
    channelAccountName?: string;
    /**
     * @remarks
     * The display name of the channel.
     *
     * @example
     * ch3
     */
    channelName?: string;
    /**
     * @remarks
     * The channel type. Valid values: DOMESTIC, OVERSEA, and INTERNAL.
     *
     * @example
     * 0
     */
    channelType?: string;
    /**
     * @remarks
     * The list of channel cover images.
     */
    coverImages?: CreateDistributionResponseBodyModuleDraftsCoverImages[];
    /**
     * @remarks
     * The channel draft ID.
     *
     * @example
     * draft-789
     */
    draftId?: string;
    /**
     * @remarks
     * The ID returned by the platform.
     *
     * @example
     * 1378080
     */
    externalId?: string;
    /**
     * @remarks
     * The redirect URL of the platform.
     *
     * @example
     * https://net-video.mistong.com:10160/api/preview/video/2026/04/15/67603b7c84694e619435e4662e98cb23_20260415095633.mp4
     */
    externalUrl?: string;
    /**
     * @remarks
     * The reason for the failure.
     *
     * @example
     * Publishing failed. Try again later
     */
    failReason?: string;
    /**
     * @remarks
     * The channel-specific publishing fields in JSON format.
     *
     * @example
     * {}
     */
    publishConfig?: string;
    /**
     * @remarks
     * The publish time, in milliseconds.
     *
     * @example
     * 1767225600000
     */
    publishedAt?: number;
    /**
     * @remarks
     * The status. Valid values: EDITING, PUBLISHING, SUCCESS, and FAILED.
     *
     * @example
     * 200
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
export declare class CreateDistributionResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The article ID.
     *
     * @example
     * 28733
     */
    articleId?: string;
    /**
     * @remarks
     * The distribution batch ID.
     *
     * @example
     * pcb-uf6dkhq311uxuwo2
     */
    batchId?: string;
    /**
     * @remarks
     * The creation time, in milliseconds.
     *
     * @example
     * 1767225600000
     */
    createTime?: number;
    /**
     * @remarks
     * The list of channel drafts in the batch.
     */
    drafts?: CreateDistributionResponseBodyModuleDrafts[];
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
export declare class CreateDistributionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed cause of access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether retries are allowed. Valid values:
     * - false: Retries are not allowed.
     * - true: Retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The app name.
     *
     * @example
     * watermark
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic error code.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The dynamic error message.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The response data.
     */
    module?: CreateDistributionResponseBodyModule;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * The error code.
     *
     * @example
     * SYSTEM.ERROR
     */
    rootErrorCode?: string;
    /**
     * @remarks
     * The exception message.
     *
     * @example
     * System exception
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * Specifies whether the request is processed synchronously.
     *
     * @example
     * True
     */
    synchro?: boolean;
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
