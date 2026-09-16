// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The activation time of the Skill version.
   * 
   * @example
   * 2026-09-15T10:00:00Z
   */
  activatedAt?: string;
  /**
   * @remarks
   * The creation time of the Skill version.
   * 
   * @example
   * 2026-09-15T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether the Skill requires a credential.
   */
  credentialRequired?: boolean;
  /**
   * @remarks
   * The Skill version ID.
   * 
   * @example
   * version-example
   */
  id?: string;
  /**
   * @remarks
   * The Skill package size, in bytes.
   * 
   * @example
   * 1024
   */
  packageSize?: number;
  /**
   * @remarks
   * The reason for revoking the Skill version.
   * 
   * @example
   * Replaced by a newer version
   */
  revokeReason?: string;
  /**
   * @remarks
   * The revocation time of the Skill version.
   * 
   * @example
   * 2026-09-15T11:00:00Z
   */
  revokedAt?: string;
  /**
   * @remarks
   * The SHA-256 digest of the Skill package.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  sha256?: string;
  /**
   * @remarks
   * The ID of the Skill to which this version belongs.
   * 
   * @example
   * skill-example
   */
  skillId?: string;
  /**
   * @remarks
   * The Markdown content of the Skill.
   * 
   * @example
   * # Example Skill
   */
  skillMarkdown?: string;
  /**
   * @remarks
   * The status of the Skill version.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The version number of the Skill.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      activatedAt: 'ActivatedAt',
      createdAt: 'CreatedAt',
      credentialRequired: 'CredentialRequired',
      id: 'Id',
      packageSize: 'PackageSize',
      revokeReason: 'RevokeReason',
      revokedAt: 'RevokedAt',
      sha256: 'Sha256',
      skillId: 'SkillId',
      skillMarkdown: 'SkillMarkdown',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedAt: 'string',
      createdAt: 'string',
      credentialRequired: 'boolean',
      id: 'string',
      packageSize: 'number',
      revokeReason: 'string',
      revokedAt: 'string',
      sha256: 'string',
      skillId: 'string',
      skillMarkdown: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillResponseBody extends $dara.Model {
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
   * The Skill category.
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
  content?: { [key: string]: any };
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
   * The Skill description, up to 1000 characters.
   * 
   * @example
   * SQL Review Expert: Comprehensively reviews SQL for security, performance, and compliance, identifies risks, and provides optimization suggestions. Activated immediately when a user submits SQL or asks about "SQL review", "SQL Review", "any risks", or "how to optimize"
   */
  description?: string;
  /**
   * @remarks
   * The Skill display name.
   * 
   * @example
   * Example Skill
   */
  displayName?: string;
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
   * The unique identifier of the Skill.
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the Skill is deleted.
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The Skill name. The name can contain only lowercase letters, digits, and hyphens.
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
   * The visibility scope of the Skill.
   * 
   * @example
   * PRIVATE
   */
  scope?: string;
  /**
   * @remarks
   * The Skill type.
   * 
   * @example
   * user
   */
  skillType?: string;
  /**
   * @remarks
   * The stable identifier of a private Skill.
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
   * The list of versions visible to the current principal.
   */
  versions?: GetSkillResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      activeVersionId: 'ActiveVersionId',
      category: 'Category',
      content: 'Content',
      createdAt: 'CreatedAt',
      dbtypes: 'Dbtypes',
      description: 'Description',
      displayName: 'DisplayName',
      icon: 'Icon',
      id: 'Id',
      isDeleted: 'IsDeleted',
      name: 'Name',
      requestId: 'RequestId',
      scope: 'Scope',
      skillType: 'SkillType',
      slug: 'Slug',
      updatedAt: 'UpdatedAt',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeVersionId: 'string',
      category: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
      icon: 'string',
      id: 'string',
      isDeleted: 'boolean',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      skillType: 'string',
      slug: 'string',
      updatedAt: 'string',
      versions: { 'type': 'array', 'itemType': GetSkillResponseBodyVersions },
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(Array.isArray(this.dbtypes)) {
      $dara.Model.validateArray(this.dbtypes);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

