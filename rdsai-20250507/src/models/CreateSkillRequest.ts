// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the skill.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The list of database engines.
   * 
   * This parameter is required.
   */
  dbtypes?: string[];
  /**
   * @remarks
   * The description of the skill. It can be up to 1000 characters in length.
   * 
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * The name of the skill, which can contain only lowercase letters, numbers, and hyphens.
   * 
   * This parameter is required.
   * 
   * @example
   * query-optimization
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dbtypes: 'Dbtypes',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      name: 'string',
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

