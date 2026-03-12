// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the skill.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The creation time of the skill.
   * 
   * @example
   * 2025-06-04T02:25:43Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The list of database engines.
   */
  dbtypes?: string[];
  /**
   * @remarks
   * The description of the skill. It can be up to 1000 characters in length.
   */
  description?: string;
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
   * The name of the skill, which can contain only lowercase letters, numbers, and hyphens.
   * 
   * @example
   * sql-optimization
   */
  name?: string;
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
   * The type of the skill.
   * 
   * @example
   * user
   */
  skillType?: string;
  /**
   * @remarks
   * The update time of the skill.
   * 
   * @example
   * 2026-02-04T21:14:45Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      dbtypes: 'Dbtypes',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      skillType: 'SkillType',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      name: 'string',
      requestId: 'string',
      skillType: 'string',
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

