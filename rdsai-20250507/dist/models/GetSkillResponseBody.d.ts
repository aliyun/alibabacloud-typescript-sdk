import * as $dara from '@darabonba/typescript';
export declare class GetSkillResponseBodyCapabilities extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the skill can be deleted.
     */
    delete?: boolean;
    /**
     * @remarks
     * Indicates whether the skill package can be downloaded.
     */
    download?: boolean;
    /**
     * @remarks
     * Indicates whether the skill can be edited.
     */
    edit?: boolean;
    /**
     * @remarks
     * Indicates whether the skill version can be rolled back.
     */
    rollback?: boolean;
    /**
     * @remarks
     * Indicates whether the skill can be shared.
     */
    share?: boolean;
    /**
     * @remarks
     * Indicates whether a new version can be uploaded.
     */
    upload?: boolean;
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
export declare class GetSkillResponseBodyVersions extends $dara.Model {
    /**
     * @remarks
     * The time when the skill version was activated.
     *
     * @example
     * 2026-09-15T10:00:00Z
     */
    activatedAt?: string;
    /**
     * @remarks
     * The time when the skill version was created.
     *
     * @example
     * 2026-09-15T10:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * Indicates whether the skill requires credentials.
     */
    credentialRequired?: boolean;
    /**
     * @remarks
     * The number of files in the skill package.
     *
     * @example
     * 1
     */
    fileCount?: number;
    /**
     * @remarks
     * The ID of the skill version.
     *
     * @example
     * version-example
     */
    id?: string;
    /**
     * @remarks
     * The size of the skill package, in bytes.
     *
     * @example
     * 1024
     */
    packageSize?: number;
    /**
     * @remarks
     * The reason why the skill version was revoked.
     *
     * @example
     * Replaced by a newer version
     */
    revokeReason?: string;
    /**
     * @remarks
     * The time when the skill version was revoked.
     *
     * @example
     * 2026-09-15T11:00:00Z
     */
    revokedAt?: string;
    /**
     * @remarks
     * The SHA-256 digest of the skill package.
     *
     * @example
     * 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
     */
    sha256?: string;
    /**
     * @remarks
     * The ID of the parent skill.
     *
     * @example
     * skill-example
     */
    skillId?: string;
    /**
     * @remarks
     * The Markdown content of the skill.
     *
     * @example
     * # Example Skill
     */
    skillMarkdown?: string;
    /**
     * @remarks
     * The creation source of the skill version.
     *
     * @example
     * UPLOAD
     */
    source?: string;
    /**
     * @remarks
     * The status of the skill version.
     *
     * @example
     * ACTIVE
     */
    status?: string;
    /**
     * @remarks
     * The update notes for the version.
     *
     * @example
     * Update Skill documentation
     */
    updateNote?: string;
    /**
     * @remarks
     * The version number of the skill.
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
export declare class GetSkillResponseBody extends $dara.Model {
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
     * The content digest of the current skill package.
     *
     * @example
     * 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
     */
    bundleHash?: string;
    /**
     * @remarks
     * The size of the current skill package, in bytes.
     *
     * @example
     * 1024
     */
    bundleSizeBytes?: number;
    /**
     * @remarks
     * The skill operations that the current user can perform.
     */
    capabilities?: GetSkillResponseBodyCapabilities;
    /**
     * @remarks
     * The category of the skill.
     *
     * @example
     * productivity
     */
    category?: string;
    /**
     * @remarks
     * The content.
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
     * 2025-06-04T02:25:43Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The list of database types.
     */
    dbtypes?: string[];
    /**
     * @remarks
     * The description of the skill. The description can be up to 1,000 characters in length.
     *
     * @example
     * SQL Review Expert: Comprehensively reviews the security, performance, and compliance of SQL statements, identifies risks, and provides optimization suggestions. This skill is immediately activated when a user submits SQL statements or asks questions such as "SQL review", "Are there any risks?", or "How to optimize?"
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
     * The temporary download URL for the skill package.
     *
     * @example
     * https://example.com/skill-package.zip
     */
    downloadUrl?: string;
    /**
     * @remarks
     * The expiration time of the temporary download URL.
     *
     * @example
     * 2026-09-15T11:00:00Z
     */
    expiresAt?: string;
    /**
     * @remarks
     * The file in the package specified by path.
     *
     * @example
     * {"path":"README.md","size_bytes":15,"text":"# Example Skill","reason":null}
     */
    file?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The list of files in the current skill package.
     */
    files?: {
        [key: string]: any;
    }[];
    /**
     * @remarks
     * The metadata fields of SKILL.md.
     *
     * @example
     * {"name":"example-skill","description":"Example skill","version":"1.0.0"}
     */
    frontmatter?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The public HTTPS URL of the current icon. This field is empty if no icon is configured.
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
     * d1b7d639-f34e-44c7-8231-987da14d****
     */
    id?: string;
    /**
     * @remarks
     * Indicates whether the skill is deleted.
     */
    isDeleted?: boolean;
    /**
     * @remarks
     * The name of the skill. The name can contain only lowercase letters, digits, and hyphens.
     *
     * @example
     * sql-optimization
     */
    name?: string;
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
     * The visibility scope of the skill.
     *
     * @example
     * PRIVATE
     */
    scope?: string;
    /**
     * @remarks
     * The current skill ID.
     *
     * @example
     * skill-example
     */
    skillId?: string;
    /**
     * @remarks
     * The full SKILL.md Markdown content.
     *
     * @example
     * # Example Skill
     */
    skillMarkdown?: string;
    /**
     * @remarks
     * The type of the skill.
     *
     * @example
     * user
     */
    skillType?: string;
    /**
     * @remarks
     * The stable identifier for the private skill.
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
     * The current version number of the skill.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The current skill version ID.
     *
     * @example
     * version-example
     */
    versionId?: string;
    /**
     * @remarks
     * The list of versions visible to the current principal.
     */
    versions?: GetSkillResponseBodyVersions[];
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
