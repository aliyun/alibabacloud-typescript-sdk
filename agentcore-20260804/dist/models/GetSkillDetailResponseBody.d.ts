import * as $dara from '@darabonba/typescript';
export declare class GetSkillDetailResponseBodyDataVersions extends $dara.Model {
    /**
     * @remarks
     * The author of the version.
     *
     * @example
     * alice
     */
    author?: string;
    /**
     * @remarks
     * The commit message.
     *
     * @example
     * Update documentation
     */
    commitMsg?: string;
    /**
     * @remarks
     * The MD5 checksum of the skill content package for this version, which is used to verify content consistency.
     *
     * @example
     * 9e107d9d372bb6826bd81d3542a419d6
     */
    contentMd5?: string;
    /**
     * @remarks
     * The creation time. It is a UNIX timestamp in milliseconds.
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
     * The update time. It is a UNIX timestamp in milliseconds.
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
export declare class GetSkillDetailResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The JSON array string of business tags.
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
     * The total number of downloads.
     *
     * @example
     * 10
     */
    downloadCount?: number;
    /**
     * @remarks
     * The draft pattern. HEAD indicates that the skill has a persistent draft, and VERSIONED indicates that a draft with a version number is created for each edit. This pattern is determined by the server, and the invoker uses this value for routing What to do next.
     *
     * @example
     * HEAD
     */
    draftMode?: string;
    /**
     * @remarks
     * Specifies whether the root data is editable.
     */
    editable?: boolean;
    /**
     * @remarks
     * The version being edited.
     *
     * @example
     * 1.0.0
     */
    editingVersion?: string;
    /**
     * @remarks
     * Specifies whether the skill is enabled.
     */
    enable?: boolean;
    /**
     * @remarks
     * The source tag.
     *
     * @example
     * UPLOAD
     */
    from?: string;
    /**
     * @remarks
     * The label mapping.
     */
    labels?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The name.
     *
     * @example
     * skill-example
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
     * The resource owner.
     *
     * @example
     * alice
     */
    owner?: string;
    /**
     * @remarks
     * The version under review.
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
     * The update time. It is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1787671022000
     */
    updateTime?: number;
    /**
     * @remarks
     * The list of all version summaries.
     */
    versions?: GetSkillDetailResponseBodyDataVersions[];
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1234567890abcdef
     */
    workspaceId?: string;
    /**
     * @remarks
     * Specifies whether the current user has write permissions.
     */
    writeable?: boolean;
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
export declare class GetSkillDetailResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: GetSkillDetailResponseBodyData;
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
