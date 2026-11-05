import * as $dara from '@darabonba/typescript';
export declare class ListAgentSpecsResponseBodyDataPageItemsMcpServers extends $dara.Model {
    /**
     * @remarks
     * The name.
     *
     * @example
     * agentspec-example
     */
    name?: string;
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
export declare class ListAgentSpecsResponseBodyDataPageItemsSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The version selector type. Valid values:
     *
     * - LABEL: selects by label.
     * - VERSION: selects by specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. If the type is LABEL, this value is a label name such as latest. If the type is VERSION, this value is a specific version number.
     *
     * @example
     * latest
     */
    value?: string;
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
export declare class ListAgentSpecsResponseBodyDataPageItemsSkills extends $dara.Model {
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
     * The Skill source type. Valid values:
     *
     * - REFERENCE: references the AI Registry.
     * - STATIC: statically bundled with the package.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The referenced version selector. If omitted, the default value is LABEL/latest.
     */
    versionSelector?: ListAgentSpecsResponseBodyDataPageItemsSkillsVersionSelector;
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
export declare class ListAgentSpecsResponseBodyDataPageItems extends $dara.Model {
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
     * A sample description that explains the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The download count.
     *
     * @example
     * 10
     */
    downloadCount?: number;
    /**
     * @remarks
     * The version that is currently being edited.
     *
     * @example
     * 1.0.0
     */
    editingVersion?: string;
    /**
     * @remarks
     * Indicates whether the AgentSpec is enabled.
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
     * The list of MCP server references.
     */
    mcpServers?: ListAgentSpecsResponseBodyDataPageItemsMcpServers[];
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
     * The version that is currently under review.
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
     * The list of Skill references.
     */
    skills?: ListAgentSpecsResponseBodyDataPageItemsSkills[];
    /**
     * @remarks
     * The update time. This value is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1787671022000
     */
    updateTime?: number;
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
export declare class ListAgentSpecsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The data on the current page.
     */
    pageItems?: ListAgentSpecsResponseBodyDataPageItems[];
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
export declare class ListAgentSpecsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: ListAgentSpecsResponseBodyData;
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
