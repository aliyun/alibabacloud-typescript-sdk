import * as $dara from '@darabonba/typescript';
export declare class ListSkillResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The currently active skill version information.
     */
    activeVersion?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The currently active version ID.
     *
     * @example
     * version-example
     */
    activeVersionId?: string;
    /**
     * @remarks
     * The skill category.
     *
     * @example
     * productivity
     */
    category?: string;
    /**
     * @remarks
     * The data content.
     *
     * @example
     * {"MySQL": "MySQL optimization guide...","PostgreSQL": "PostgreSQL optimization guide..."}
     */
    content?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2026-02-04T21:14:45Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The list of database types.
     */
    dbtypes?: string[];
    /**
     * @remarks
     * The description.
     *
     * @example
     * SQL Review Expert: Comprehensively reviews SQL for security, performance, and compliance, identifies risks, and provides optimization suggestions. Activated immediately when a user submits SQL or asks about "SQL review", "SQL Review", "any risks", or "how to optimize"
     */
    description?: string;
    /**
     * @remarks
     * The skill display name.
     *
     * @example
     * Example Skill
     */
    displayName?: string;
    /**
     * @remarks
     * The public HTTPS URL of the current icon. Empty if not configured.
     *
     * @example
     * https://example.com/skill-icon.png
     *
     * **if can be null:**
     * true
     */
    icon?: string;
    /**
     * @remarks
     * The unique identifier of the skill.
     *
     * @example
     * 9a2ba261-7bb2-41a7-9c6e-1799fb5b****
     */
    id?: string;
    /**
     * @remarks
     * Indicates whether the skill is deleted.
     */
    isDeleted?: boolean;
    /**
     * @remarks
     * The skill name.
     *
     * @example
     * sql-review
     */
    name?: string;
    /**
     * @remarks
     * The skill visibility scope.
     *
     * @example
     * PRIVATE
     */
    scope?: string;
    /**
     * @remarks
     * The skill type.
     *
     * @example
     * system
     */
    skillType?: string;
    /**
     * @remarks
     * The skill stable identifier.
     *
     * @example
     * example-skill
     */
    slug?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2026-02-04T21:14:45Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The skill visibility for the current user.
     *
     * @example
     * PRIVATE
     */
    visibility?: string;
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
export declare class ListSkillResponseBody extends $dara.Model {
    /**
     * @remarks
     * The skill list.
     */
    data?: ListSkillResponseBodyData[];
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
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 20
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
