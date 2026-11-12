import * as $dara from '@darabonba/typescript';
export declare class GetAgentSpecResponseBodyDataVersions extends $dara.Model {
    /**
     * @remarks
     * The version author.
     *
     * @example
     * alice
     */
    author?: string;
    /**
     * @remarks
     * The creation time, which is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1787671022000
     */
    createTime?: number;
    /**
     * @remarks
     * The description.
     *
     * @example
     * Sample description to illustrate the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The number of downloads.
     *
     * @example
     * 10
     */
    downloadCount?: number;
    /**
     * @remarks
     * The publish pipeline information.
     *
     * @example
     * {"status":"SUCCESS"}
     */
    publishPipelineInfo?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The update time, which is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1787671022000
     */
    updateTime?: number;
    /**
     * @remarks
     * The version number.
     *
     * @example
     * 1.0.0
     */
    version?: string;
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
export declare class GetAgentSpecResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The business tags.
     *
     * @example
     * Sample property value
     */
    bizTags?: string;
    /**
     * @remarks
     * The description.
     *
     * @example
     * Sample description to illustrate the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The number of downloads.
     *
     * @example
     * 10
     */
    downloadCount?: number;
    /**
     * @remarks
     * The version currently being edited.
     *
     * @example
     * 1.0.0
     */
    editingVersion?: string;
    /**
     * @remarks
     * Indicates whether it is enabled.
     */
    enable?: boolean;
    /**
     * @remarks
     * The source.
     *
     * @example
     * UPLOAD
     */
    from?: string;
    /**
     * @remarks
     * The version labels.
     */
    labels?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The name.
     *
     * @example
     * agentspec-example
     */
    name?: string;
    /**
     * @remarks
     * The number of online versions.
     *
     * @example
     * 1
     */
    onlineCnt?: number;
    /**
     * @remarks
     * The version currently under review.
     *
     * @example
     * 1.0.0
     */
    reviewingVersion?: string;
    /**
     * @remarks
     * The visibility scope.
     *
     * @example
     * PRIVATE
     */
    scope?: string;
    /**
     * @remarks
     * The update time, which is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1787671022000
     */
    updateTime?: number;
    /**
     * @remarks
     * The list of version summaries.
     */
    versions?: GetAgentSpecResponseBodyDataVersions[];
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
export declare class GetAgentSpecResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: GetAgentSpecResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
     */
    requestId?: string;
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
