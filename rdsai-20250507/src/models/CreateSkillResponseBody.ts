// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillResponseBodySkill extends $dara.Model {
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
   * The Skill category.
   * 
   * @example
   * productivity
   */
  category?: string;
  /**
   * @remarks
   * The Skill creation time.
   * 
   * @example
   * 2026-09-15T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The Skill description.
   * 
   * @example
   * An example ContextDB Skill
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
   * Skill ID
   * 
   * @example
   * skill-example
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the Skill is deleted.
   */
  isDeleted?: boolean;
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
   * The stable identifier of the Skill.
   * 
   * @example
   * example-skill
   */
  slug?: string;
  /**
   * @remarks
   * The Skill update time.
   * 
   * @example
   * 2026-09-15T10:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      activeVersionId: 'ActiveVersionId',
      category: 'Category',
      createdAt: 'CreatedAt',
      description: 'Description',
      displayName: 'DisplayName',
      icon: 'Icon',
      id: 'Id',
      isDeleted: 'IsDeleted',
      scope: 'Scope',
      slug: 'Slug',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeVersionId: 'string',
      category: 'string',
      createdAt: 'string',
      description: 'string',
      displayName: 'string',
      icon: 'string',
      id: 'string',
      isDeleted: 'boolean',
      scope: 'string',
      slug: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillResponseBodyVersion extends $dara.Model {
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
   * The revocation reason of the Skill version.
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
   * The ID of the parent Skill.
   * 
   * @example
   * skill-example
   */
  skillId?: string;
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
   * The Skill version number.
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

export class CreateSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Skill catalog revision number.
   * 
   * @example
   * 1
   */
  catalogRevision?: number;
  /**
   * @remarks
   * The content grouped by database type.
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
   * The Skill description.
   * 
   * @example
   * SQL query optimization skill
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the Skill.
   * 
   * @example
   * 82cf3d62-0add-47bd-869f-877131f7****
   */
  id?: string;
  /**
   * @remarks
   * The Skill name.
   * 
   * @example
   * query-optimization
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
   * The created Skill.
   */
  skill?: CreateSkillResponseBodySkill;
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
   * The created Skill version.
   */
  version?: CreateSkillResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      catalogRevision: 'CatalogRevision',
      content: 'Content',
      createdAt: 'CreatedAt',
      dbtypes: 'Dbtypes',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      skill: 'Skill',
      skillType: 'SkillType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogRevision: 'number',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      name: 'string',
      requestId: 'string',
      skill: CreateSkillResponseBodySkill,
      skillType: 'string',
      version: CreateSkillResponseBodyVersion,
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(Array.isArray(this.dbtypes)) {
      $dara.Model.validateArray(this.dbtypes);
    }
    if(this.skill && typeof (this.skill as any).validate === 'function') {
      (this.skill as any).validate();
    }
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

