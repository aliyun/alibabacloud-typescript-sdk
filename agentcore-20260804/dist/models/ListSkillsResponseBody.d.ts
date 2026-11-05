import * as $dara from '@darabonba/typescript';
export declare class ListSkillsResponseBodyDataPageItems extends $dara.Model {
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
     * Sample description used to explain the purpose of the resource
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
     * The draft mode. A value of HEAD indicates that the skill has a persistent draft. A value of VERSIONED indicates that a versioned draft is created for each edit. This value is determined by the server, and the caller renders the status column based on this value.
     *
     * @example
     * HEAD
     */
    draftMode?: string;
    /**
     * @remarks
     * Indicates whether the page item is editable.
     */
    editable?: boolean;
    /**
     * @remarks
     * The version being edited. The value is HEAD in HEAD draft mode.
     *
     * @example
     * 1.0.0
     */
    editingVersion?: string;
    /**
     * @remarks
     * Indicates whether the skill is enabled.
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
     * The version under review. The value is HEAD in HEAD draft mode.
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
     * The update time. The value is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1787671022000
     */
    updateTime?: number;
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
     * Indicates whether the current user has write permissions.
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
export declare class ListSkillsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The data on the current page.
     */
    pageItems?: ListSkillsResponseBodyDataPageItems[];
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 5
     */
    pagesAvailable?: number;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 100
     */
    totalCount?: number;
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
export declare class ListSkillsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: ListSkillsResponseBodyData;
    /**
     * @remarks
     * The maximum number of entries to return per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next page.
     *
     * @example
     * next-page-token
     */
    nextToken?: string;
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
