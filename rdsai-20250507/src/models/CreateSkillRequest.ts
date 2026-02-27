// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
  content?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  dbtypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
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

