import * as $dara from '@darabonba/typescript';
export declare class ListSkillReferencesResponseBodyDataPageItems extends $dara.Model {
    /**
     * @remarks
     * The ID of the referencing entity, which identifies the agent or AgentSpec.
     *
     * @example
     * agent-1234567890abcdef
     */
    ownerId?: string;
    /**
     * @remarks
     * The type of the referencing entity. Valid values: AGENT and AGENTSPEC.
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
     * The reference selector type. Valid values: LABEL and VERSION.
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
     * The ID of the workspace to which the reference belongs.
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
     * The total number of pages.
     *
     * @example
     * 5
     */
    pagesAvailable?: number;
    /**
     * @remarks
     * The total number of reference relationships that meet the filter conditions.
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
     * The skill reference relationships returned in the paging query.
     */
    data?: ListSkillReferencesResponseBodyData;
    /**
     * @remarks
     * The request ID, which is used for troubleshooting.
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
