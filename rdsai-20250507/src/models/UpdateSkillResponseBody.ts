// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The update action performed.
   * 
   * @example
   * ADD_VERSION
   */
  action?: string;
  /**
   * @remarks
   * The content digest of the Skill package.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  bundleHash?: string;
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
   * The list of database types.
   */
  dbtypes?: string[];
  /**
   * @remarks
   * The description of the Skill. The description can be up to 1000 characters in length.
   * 
   * @example
   * SQL Review Expert: Comprehensively reviews SQL for security, performance, and compliance, identifies risks, and provides optimization suggestions. Activated immediately when a user submits SQL or asks "SQL review", "SQL Review", "any risks?", or "how to optimize"
   */
  description?: string;
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
   * The name of the Skill. The name can contain only lowercase letters, digits, and hyphens.
   * 
   * @example
   * sql-review
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
   * The ID of the updated Skill.
   * 
   * @example
   * skill-example
   */
  skillId?: string;
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
   * The time when the Skill was updated.
   * 
   * @example
   * 2026-02-04T21:14:45Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The ID of the Skill version created in this update.
   * 
   * @example
   * version-example
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      bundleHash: 'BundleHash',
      content: 'Content',
      dbtypes: 'Dbtypes',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      skillId: 'SkillId',
      skillType: 'SkillType',
      updatedAt: 'UpdatedAt',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      bundleHash: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      name: 'string',
      requestId: 'string',
      skillId: 'string',
      skillType: 'string',
      updatedAt: 'string',
      versionId: 'string',
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

