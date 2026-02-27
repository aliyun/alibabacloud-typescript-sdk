// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillResponseBody extends $dara.Model {
  content?: { [key: string]: any };
  /**
   * @example
   * 2026-02-04T21:14:45Z
   */
  createdAt?: string;
  dbtypes?: string[];
  description?: string;
  /**
   * @example
   * 82cf3d62-0add-47bd-869f-877131f7****
   */
  id?: string;
  /**
   * @example
   * query-optimization
   */
  name?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * user
   */
  skillType?: string;
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

