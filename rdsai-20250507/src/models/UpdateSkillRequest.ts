// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillRequest extends $dara.Model {
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
   * The skill description. The description can be up to 1000 characters in length.
   * 
   * @example
   * SQL Review Expert: Comprehensively reviews SQL for security, performance, and compliance, identifies risks, and provides optimization suggestions. Activated immediately when a user submits SQL or asks about "SQL review", "SQL audit", "any risks", or "how to optimize"
   */
  description?: string;
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
   * The unique identifier of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * 8f6a2111-3828-4a9f-a3ce-51ce73c6****
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dbtypes: 'Dbtypes',
      description: 'Description',
      name: 'Name',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      name: 'string',
      skillId: 'string',
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

