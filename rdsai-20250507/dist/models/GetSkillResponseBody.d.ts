import * as $dara from '@darabonba/typescript';
export declare class GetSkillResponseBodyCapabilities extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the skill can be deleted.
     */
    delete?: boolean;
    /**
     * @remarks
     * Indicates whether the skill bundle can be downloaded.
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
     * The activation time of the skill version.
     *
     * @example
     * 2026-09-15T10:00:00Z
     */
    activatedAt?: string;
    /**
     * @remarks
     * The creation time of the skill version.
     *
     * @example
     * 2026-09-15T10:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * Indicates whether the skill requires a credential.
     */
    credentialRequired?: boolean;
    /**
     * @remarks
     * The number of files in the skill bundle.
     *
     * @example
     * 1
     */
    fileCount?: number;
    /**
     * @remarks
     * The skill version ID.
     *
     * @example
     * version-example
     */
    id?: string;
    /**
     * @remarks
     * The size of the skill bundle, in bytes.
     *
     * @example
     * 1024
     */
    packageSize?: number;
    /**
     * @remarks
     * The reason for revoking the skill version.
     *
     * @example
     * Replaced by a newer version
     */
    revokeReason?: string;
    /**
     * @remarks
     * The revocation time of the skill version.
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
     * The ID of the skill to which the version belongs.
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
     * The update note for the version.
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
     * The current active version ID.
     *
     * @example
     * version-example
     */
    activeVersionId?: string;
    /**
     * @remarks
     * The content digest of the current skill bundle.
     *
     * @example
     * 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
     */
    bundleHash?: string;
    /**
     * @remarks
     * The size of the current skill bundle, in bytes.
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
     * The skill category.
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
     * The skill description. The description can be up to 1000 characters in length.
     *
     * @example
     * SQL Review Expert: Comprehensively reviews SQL for security, performance, and compliance, identifies risks, and provides optimization suggestions. Activated immediately when a user submits SQL or asks about "SQL review", "SQL Review", "any risks", or "how to optimize"
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
     * The temporary download URL of the skill bundle.
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
     * The file in the bundle that is read based on the specified path.
     */
    file?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The list of files in the current skill bundle.
     */
    files?: {
        [key: string]: any;
    }[];
    /**
     * @remarks
     * The metadata fields of SKILL.md.
     */
    frontmatter?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The public HTTPS URL of the current icon. This value is empty if no icon is configured.
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
     * The skill name. The name can contain only lowercase letters, digits, and hyphens.
     *
     * @example
     * sql-optimization
     */
    name?: string;
    /**
     * @remarks
     * The unique request identifier.
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
     * The full Markdown content of SKILL.md.
     *
     * @example
     * # Example Skill
     */
    skillMarkdown?: string;
    /**
     * @remarks
     * The skill type.
     *
     * @example
     * user
     */
    skillType?: string;
    /**
     * @remarks
     * The stable identifier of the private skill.
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
     * The current skill version number.
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
