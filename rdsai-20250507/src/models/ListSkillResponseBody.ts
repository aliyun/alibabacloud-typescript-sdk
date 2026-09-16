// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillResponseBodyData extends $dara.Model {
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
   * The description.
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
      scope: 'Scope',
      skillType: 'SkillType',
      slug: 'Slug',
      updatedAt: 'UpdatedAt',
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
      scope: 'string',
      skillType: 'string',
      slug: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(Array.isArray(this.dbtypes)) {
      $dara.Model.validateArray(this.dbtypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillResponseBody extends $dara.Model {
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
   * The unique request identifier.
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSkillResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

