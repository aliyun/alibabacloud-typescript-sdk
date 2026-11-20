import * as $dara from '@darabonba/typescript';
export declare class ListSkillResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The information about the currently active skill version.
     *
     * @example
     * {"id":"12345678-1234-4234-8234-123456789012","skill_id":"23456789-1234-4234-8234-123456789012","version":"1.0.0","status":"ACTIVE","package_size":1024,"credential_required":false}
     */
    activeVersion?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The ID of the currently active version.
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
     * SQL Review Expert: Comprehensively reviews SQL statements for security, performance, and compliance, identifies risks, and provides optimization recommendations. Activated immediately when a user submits SQL or asks questions such as "SQL review", "SQL Review", "Are there any risks?", or "How to optimize?".
     */
    description?: string;
    /**
     * @remarks
     * The display name of the skill.
     *
     * @example
     * Example Skill
     */
    displayName?: string;
    /**
     * @remarks
     * The public HTTPS URL of the current icon. This parameter is empty if no icon is configured.
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
     * The visibility scope of the skill.
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
     * The stable identifier of the skill.
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
     * The visibility of the skill to the current user.
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
     * The unique identifier of the request.
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
