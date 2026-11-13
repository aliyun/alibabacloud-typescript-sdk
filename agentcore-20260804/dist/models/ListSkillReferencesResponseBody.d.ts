import * as $dara from '@darabonba/typescript';
export declare class ListSkillReferencesResponseBodyDataPageItems extends $dara.Model {
    /**
     * @remarks
     * The ID of the referencing entity, which is the identifier of the agent or agent spec.
     *
     * @example
     * agent-1234567890abcdef
     */
    ownerId?: string;
    /**
     * @remarks
     * The type of the referencing entity. Valid values: AGENT, AGENTSPEC.
     *
     * @example
     * AGENT
     */
    ownerType?: string;
    /**
     * @remarks
     * The version of the referencing entity.
     *
     * @example
     * 1.0.0
     */
    ownerVersion?: string;
    /**
     * @remarks
     * The reference strength. Valid values: STRONG, WEAK. For legacy data, STRONG is returned.
     *
     * @example
     * STRONG
     */
    refType?: string;
    /**
     * @remarks
     * The reference selector type. Valid values: LABEL, VERSION.
     *
     * @example
     * LABEL
     */
    selectorType?: string;
    /**
     * @remarks
     * The reference selector value. Valid values: latest, a named label, HEAD, or a specific version.
     *
     * @example
     * HEAD
     */
    selectorValue?: string;
    /**
     * @remarks
     * The name of the referenced skill.
     *
     * @example
     * web-search
     */
    skillName?: string;
    /**
     * @remarks
     * The reference source identifier. For legacy data, agentcore is returned.
     *
     * @example
     * agentcore
     */
    sourceId?: string;
    /**
     * @remarks
     * The display name of the reference source. If no name is registered, the source identifier is returned.
     *
     * @example
     * AgentCore
     */
    sourceName?: string;
    /**
     * @remarks
     * The workspace ID to which the reference belongs.
     *
     * @example
     * ws-1234567890abcdef
     */
    workspaceId?: string;
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
export declare class ListSkillReferencesResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of skill reference relationships on the current page.
     */
    pageItems?: ListSkillReferencesResponseBodyDataPageItems[];
    /**
     * @remarks
     * The current page number, starting from 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The total number of available pages.
     *
     * @example
     * 5
     */
    pagesAvailable?: number;
    /**
     * @remarks
     * The total number of reference relationships that meet the conditions.
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
export declare class ListSkillReferencesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The skill reference relationship data returned by the paged query.
     */
    data?: ListSkillReferencesResponseBodyData;
    /**
     * @remarks
     * The request ID, used for troubleshooting.
     *
     * @example
     * 5C6D9E10-1234-5678-9ABC-DEF012345678
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
